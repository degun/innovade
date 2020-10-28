import gql from "graphql-tag";

export const createCustomer = gql`
    mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
        customer {
            id
        }
        customerUserErrors {
            code
            field
            message
        }
        }
    }
`

