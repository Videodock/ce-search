import gql from 'graphql-tag';
import CreativeWorkFragment from '../fragments/CreativeWorkFragment';

export default gql`
    query CreativeWork($details: Boolean = false) {
        CreativeWork {
            identifier
            ...CreativeWorkFragment @include(if: $details)
        }
    }
  
    ${CreativeWorkFragment}
`;
