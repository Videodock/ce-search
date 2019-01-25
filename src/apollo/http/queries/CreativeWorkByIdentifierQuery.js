import gql from 'graphql-tag';
import CreativeWorkFragment from '../fragments/CreativeWorkFragment';

export default gql`
    query CreativeWorkByIdentifier($identifier: ID, $details: Boolean = false) {
        CreativeWork(identifier: $identifier) {
            identifier
            ...CreativeWorkFragment @include(if: $details)
        }
    }
  
    ${CreativeWorkFragment}
`;
