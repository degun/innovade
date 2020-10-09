import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './store/reducer'

const httpLink = createHttpLink({
  uri: "https://innovade-shisha.myshopify.com/api/graphql",
});

const middlewareLink = setContext(() => ({
  headers: {
    "X-Shopify-Storefront-Access-Token": "9215d7debce9fe6b5032f291090b736e",
  },
}));

const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const store = createStore( reducer);
ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
