import gql from 'graphql-tag';

export default gql`
    fragment MetadataFragment on MetadataInterface {
        type
        identifier
        source
        creator
        title
    }
`;
