import gql from "graphql-tag";

export const getCollections = gql`
    query getCollections{
        collections(first: 100) {
            edges {
                node {
                    id
                    title
                    handle
                }
            }
        }
    }
`;

export const getProductsByCollection = gql`
    query getProductsByCollection($handle: String!){
        collectionByHandle(handle: $handle){
            products(first: 100) {
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
                    variants(first: 1){
                        edges{
                            node{
                                id
                            }
                        }
                    }                    
                    }
                }
                }
        }
    }
`;

export const getProducts = gql`
  query getProducts($first: Int $query: String) {
    products(first: $first query: $query) {
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