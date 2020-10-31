import gql from "graphql-tag";

export const getProducts = gql`
  query getProducts($first: Int) {
    products(first: $first) {
    edges {
        node {
        id
        title
        description
        priceRange{
            maxVariantPrice{amount} minVariantPrice{amount}
        }
        handle
        images(first: 10) {
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
`;

export const getProduct = gql`
  query getProduct($handle: String!){
    productByHandle(handle: $handle){
        id
        title
        description
        options {
            id
            name
            values
        }
        images(first: 10){
            edges{
                node{
                    transformedSrc
                }
            }
        }
        handle
        variants(first: 10) {
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
        
    }
  }
`