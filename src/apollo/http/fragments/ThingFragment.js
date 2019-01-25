import gql from 'graphql-tag';

export default gql`
    fragment ThingFragment on ThingInterface {
        name
        url
    }
`;
