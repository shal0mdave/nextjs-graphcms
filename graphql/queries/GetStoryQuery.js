import { gql } from '@apollo/client';

const GET_STORY_QUERY = gql`
    query Posts($slug: String!) {
        posts(where: {slug: $slug}) {
            id
            tags
            title
            excerpt
            slug
            coverImage {
                coverImagePost {
                    coverImage {
                        url
                    }
                }
            }
            content {
                html
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

export default GET_STORY_QUERY