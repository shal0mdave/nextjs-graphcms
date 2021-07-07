import { gql } from '@apollo/client';

const GET_STORIES_QUERY = gql`
    {
        posts(orderBy: createdAt_ASC) {
            id
            tags
            title
            excerpt
            slug
            featured
            coverImage {
                coverImagePost {
                    coverImage {
                        url
                    }
                }
            }
            createdAt
            author {
                name
                title
                picture {
                    url(transformation: {document: {output: {format: jpg}}})
                }
            }
        }
    }
`

export default GET_STORIES_QUERY;