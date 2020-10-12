import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ContactForm from "./components/ContactForm";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import gql from "graphql-tag";
import {
  createCheckout,
  checkoutLineItemsAdd,
  checkoutLineItemsUpdate,
  checkoutLineItemsRemove,
  checkoutCustomerAssociate,
  addVariantToCart,
  updateLineItemInCart,
  removeLineItemInCart,
  associateCustomerCheckout,
} from "./checkout";
import "./app.scss";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Experience from "./components/Experience";
import HistoryPhilosophy from "./components/HistoryPhilosophy";
import ShopAllProducts from "./components/ShopAllProducts/ShopAllProcucts";
import ShopNow from "./components/ShopNow/ShopNow";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      products: [],
      checkout: { lineItems: { edges: [] } },
      click: false,
      contact: false,
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.updateLineItemInCart = updateLineItemInCart.bind(this);
    this.removeLineItemInCart = removeLineItemInCart.bind(this);
    this.associateCustomerCheckout = associateCustomerCheckout.bind(this);
    this.addVariantToCart = addVariantToCart.bind(this);
  }

  componentWillMount() {
    this.props
      .createCheckout({
        variables: {
          input: {},
        },
      })
      .then((res) => {
        this.setState({
          checkout: res.data.checkoutCreate.checkout,
        });
      });
  }

  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      shop: PropTypes.object,
    }).isRequired,
    createCheckout: PropTypes.func.isRequired,
    checkoutLineItemsAdd: PropTypes.func.isRequired,
    checkoutLineItemsUpdate: PropTypes.func.isRequired,
  };

  handleCartOpen() {
    this.setState({
      isCartOpen: true,
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }
  handleClick = () => {
    this.setState({ click: !this.state.click });
  };

  closeMobileMenu = () => {
    this.setState({ click: false });
  };

  openContactForm = () => {
    this.setState({ contact: true, click: false });
  };

  render() {
    if (this.props.data.loading) {
      return <p>Loading ...</p>;
    }
    if (this.props.data.error) {
      return <p>{this.props.data.error.message}</p>;
    }

    const products = this.props.data?.shop?.products?.edges;
    console.log(products);

    const models = products.map(({ node }) => {
      const { id, description, title, images, variants } = node;
      const image = images.edges[0].node.src;
      return {
        id: variants.edges[0].node.id,
        description,
        name: title,
        image,
      };
    });

    return (
      <React.Fragment>
        <Navigation
          click={this.state.click}
          closeMobileMenu={this.closeMobileMenu}
          handleClick={this.handleClick}
          handleCartOpen={this.handleCartOpen}
          openContactForm={this.openContactForm}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                models={models}
                addVariantToCart={this.addVariantToCart}
                checkout={this.state.checkout}
              />
            )}
          />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/experience" render={() => <Experience />} />
          <Route exact path="/shop" render={() => <ShopAllProducts />} />
          <Route exact path="/single-product" render={() => <ShopNow />} />
          <Route
            exact
            path="/philosophy"
            render={() => <HistoryPhilosophy />}
          />
        </Switch>
        <Footer openContactForm={this.openContactForm} />
        <Cart
          removeLineItemInCart={this.removeLineItemInCart}
          updateLineItemInCart={this.updateLineItemInCart}
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          customerAccessToken={this.state.customerAccessToken}
        />
        <ContactForm
          isOpen={this.state.contact}
          closeModal={() => this.setState({ contact: false })}
        />
      </React.Fragment>
    );
  }
}

const query = gql`
  query query {
    shop {
      name
      description
      products(first: 20) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            description
            options {
              id
              name
              values
            }
            variants(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  title
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    src
                  }
                  price
                }
              }
            }
            images(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

const AppWithDataAndMutation = compose(
  graphql(query),
  graphql(createCheckout, { name: "createCheckout" }),
  graphql(checkoutLineItemsAdd, { name: "checkoutLineItemsAdd" }),
  graphql(checkoutLineItemsUpdate, { name: "checkoutLineItemsUpdate" }),
  graphql(checkoutLineItemsRemove, { name: "checkoutLineItemsRemove" }),
  graphql(checkoutCustomerAssociate, { name: "checkoutCustomerAssociate" })
)(App);

export default AppWithDataAndMutation;
