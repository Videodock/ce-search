import gql from 'graphql-tag';
import MetadataFragment from '../fragments/MetadataFragment';
import ThingFragment from '../fragments/ThingFragment';

// language=GraphQL
export default gql`
    query ($substring: String!) {
        results: searchMetadataText(
            substring: $substring
            onFields: [title, subject, description, creator]
            onTypes: [CreativeWork, Person, Event, MusicComposition]
            offset: 0
            first: 10
        ) {
            __typename
            ...MetadataFragment
            ...ThingFragment
            ... on Person {
                familyName
                image
                jobTitle
            }
            ... on MusicComposition {
                musicalKey
            }
            ... on CreativeWork {
                alternateName
            }
            ... on Event {
                isAccessibleForFree
            }
        }
    }

    ${MetadataFragment}
    ${ThingFragment}
`;
