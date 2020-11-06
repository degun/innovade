import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { getProducts } from './graphql/queries';
import {
  createCheckout,
  checkoutLineItemsAdd,
  checkoutLineItemsUpdate,
  checkoutLineItemsRemove,
  checkoutCustomerAssociate,
  updateLineItemInCart,
  removeLineItemInCart,
  associateCustomerCheckout,
  addVariantToCart,
} from "./graphql/checkout";
import Cart from "./components/Cart/Cart";
import ContactForm from "./components/_common/ContactForm";
import Home from "./components/Home/Home";
import Footer from "./components/_common/Footer";
import Navigation from "./components/Navigation";
import About from "./components/About/About";
import Experience from "./components/Experience";
import HistoryPhilosophy from "./components/HistoryPhilosophy";
import ShopAllProducts from "./components/ShopAllProducts/ShopAllProcucts";
import ShopNow from "./components/ShopNow/ShopNow";
import News from '././components/News/News';
import Article from './components/News/SingleArticle/Article';
import Loader from 'react-fullpage-custom-loader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./app.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      products: [],
      checkout: { lineItems: { edges: [] } },
      click: false,
      contact: false,
      collectionFilter: undefined,
      tag: undefined,
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

  setCollectionFilter = filter => {
    this.setState({ collectionFilter: filter });
  }

  setTag = tag => {
    this.setState({ tag });
  }

  render() {
    if (this.props.data.loading) {
      return <Loader color="#56bad9" fadeIn={true} wrapperBackgroundColor="#000" sentences={[]} loaderType="ball-grid-pulse" />
    }
    if (this.props.data.error) {
      return <p>{this.props.data.error.message}</p>;
    }

    const products = this.props.data?.products?.edges;

    const models = products.map(({ node }) => {
      const {handle, description, title, images, priceRange} = node;
      const image = images.edges[0].node.src;
      return {
        title,
        handle,
        description,
        name: title,
        image,
        price: priceRange?.minVariantPrice?.amount ?? 0
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
                checkout={this.state.checkout}
              />
            )}
          />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/experience" render={() => <Experience />} />
          <Route exact path="/news" render={() => <News />} />
          <Route exact path="/news/:id/" render={(props) => <Article {...props} />} />
          <Route exact path="/shop" render={() => <ShopAllProducts models={models} setCollectionFilter={this.setCollectionFilter} setTag={this.setTag}  />} />
          <Route exact path="/products/:handle" render={() => <ShopNow openCart={this.handleCartOpen} addItem={this.addVariantToCart} />} />
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
          addItem={this.addVariantToCart}
        />
        <ContactForm
          isOpen={this.state.contact}
          closeModal={() => this.setState({ contact: false })}
        />
      </React.Fragment>
    );
  }
}

const AppWithDataAndMutation = compose(
  graphql(getProducts, {options: {variables: {first: 100}}}),
  graphql(createCheckout, { name: "createCheckout" }),
  graphql(checkoutLineItemsAdd, { name: "checkoutLineItemsAdd" }),
  graphql(checkoutLineItemsUpdate, { name: "checkoutLineItemsUpdate" }),
  graphql(checkoutLineItemsRemove, { name: "checkoutLineItemsRemove" }),
  graphql(checkoutCustomerAssociate, { name: "checkoutCustomerAssociate" })
)(App);

export default AppWithDataAndMutation;
