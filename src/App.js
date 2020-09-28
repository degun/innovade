import React, {Component} from "react"
import Cart from "./components/Cart"
import Models from "././components/Models"
import Contact from "././components/Contact"
import Flavors from "././components/Flavors"
import FrontPage from "././components/FrontPage"
import History from "./components/History"
import { Link } from "react-scroll"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {BrowserRouter as Router} from "react-router-dom";
import PropTypes from "prop-types"
import {graphql} from "react-apollo"
import {flowRight as compose} from "lodash"
import gql from "graphql-tag"
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
} from "./checkout"
import "./app.scss";


class App extends Component {
  constructor() {
    super()

    this.state = {
      isCartOpen: false,
      products: [],
      checkout: {lineItems: {edges: []}},
      click: false,
    }

    this.handleCartClose = this.handleCartClose.bind(this)
    this.handleCartOpen = this.handleCartOpen.bind(this)
    this.updateLineItemInCart = updateLineItemInCart.bind(this)
    this.removeLineItemInCart = removeLineItemInCart.bind(this)
    this.associateCustomerCheckout = associateCustomerCheckout.bind(this)
    this.addVariantToCart = addVariantToCart.bind(this)
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
        })
      })
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
  }

  handleCartOpen() {
    this.setState({
      isCartOpen: true,
    })
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    })
  }
  handleClick = () => {
    this.setState({click: !this.state.click})
  }

  closeMobileMenu = () => {
    this.setState({click: false})
  }

  render() {
    console.log(this.props)
    if (this.props.data.loading) {
      return <p>Loading ...</p>
    }
    if (this.props.data.error) {
      return <p>{this.props.data.error.message}</p>
    }

    return (
      <React.Fragment>
        <nav className="FrontPage__wrapper">
          <div
            className={
              this.state.click
                ? "Header__wrapper Header_active"
                : "Header__wrapper"
            }
          >
            <div className="Logo__wrapper">
              <Link to="Story" onClick={this.closeMobileMenu}>
                <img
                  src="https://via.placeholder.com/130x30"
                  alt="INNOVADE LOGO"
                />
              </Link>
            </div>
            <div className="Ham__wrapper" onClick={this.handleClick}>
              <i
                className={this.state.click ? "fas fa-times" : "fas fa-bars"}
              />
            </div>

            <ul
              className={
                this.state.click ? "List__wrapper Nav_active" : "List__wrapper"
              }
            >
              <li className="List__item">
                <Link
                  className="click"
                  id="test"
                  onClick={this.closeMobileMenu}
                  offset={-100}
                  activeClass="active"
                  to="Story"
                  spy={true}
                  smooth={true}
                  duration={-50}
                >
                  Our Story<span className="yellow__dot">&nbsp;</span>
                </Link>
              </li>

              <li className="List__item">
                <Link
                  className="click"
                  onClick={this.closeMobileMenu}
                  activeClass="active"
                  offset={-60}
                  duration={-20}
                  to="Models"
                  spy={true}
                  smooth={true}
                >
                  Models<span className="yellow__dot">&nbsp;</span>
                </Link>
              </li>
              <li className="List__item">
                <Link
                  className="click"
                  onClick={this.closeMobileMenu}
                  activeClass="active"
                  offset={-80}
                  duration={-20}
                  to="Flavors"
                  spy={true}
                  smooth={true}
                >
                  Flavors<span className="yellow__dot">&nbsp;</span>
                </Link>
              </li>
              <li className="List__item">
                <Link
                  className="click"
                  onClick={this.closeMobileMenu}
                  activeClass="active"
                  duration={-20}
                  to="Contact"
                  spy={true}
                  smooth={true}
                >
                  Contact<span className="yellow__dot">&nbsp;</span>
                </Link>
              </li>

              <li className="List__item">
                {!this.state.isCartOpen && (
                  <div className="App__view-cart-wrapper click">
                    <button
                      className="App__view-cart"
                      onClick={this.handleCartOpen}
                    >
                      Cart
                    </button>
                  </div>
                )}
              </li>
              <li className="List__item_adj">
                <img
                  style={{verticalAlign: "middle"}}
                  src="https://via.placeholder.com/30x35"
                  alt="shisha_logo"
                />
              </li>
            </ul>
          </div>
        </nav>
        {/*<div className="Product-wrapper">
          { this.props.data.shop.products.edges.map(product =>
            <Product addVariantToCart={this.addVariantToCart}
             checkout={this.state.checkout}
              key={product.node.id.toString()} 
              product={product.node} />
          )}
          </div>*/}
        <Router>
          <FrontPage />
          <Models 
            addVariantToCart={this.addVariantToCart}
            checkout={this.state.checkout} 
          />
          <History />
          <Flavors 
            addVariantToCart={this.addVariantToCart}
            checkout={this.state.checkout} 
          />
          <Contact />
        </Router>
        <Cart
          removeLineItemInCart={this.removeLineItemInCart}
          updateLineItemInCart={this.updateLineItemInCart}
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          customerAccessToken={this.state.customerAccessToken}
        />
      </React.Fragment>
    )
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
`

const AppWithDataAndMutation = compose(
  graphql(query),
  graphql(createCheckout, {name: "createCheckout"}),
  graphql(checkoutLineItemsAdd, {name: "checkoutLineItemsAdd"}),
  graphql(checkoutLineItemsUpdate, {name: "checkoutLineItemsUpdate"}),
  graphql(checkoutLineItemsRemove, {name: "checkoutLineItemsRemove"}),
  graphql(checkoutCustomerAssociate, {name: "checkoutCustomerAssociate"})
)(App)

export default AppWithDataAndMutation
