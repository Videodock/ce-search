import gql from 'graphql-tag';

export default gql`
    fragment CreativeWorkFragment on CreativeWork {
        name
        subject
    }
`;
