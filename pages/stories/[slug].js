import Image from 'next/image'

import ApolloClientConfig from '../../graphql/config/ApolloClientConfig'
import GET_STORIES_QUERY from '../../graphql/queries/GetStoriesQuery'
import GET_STORY_QUERY from '../../graphql/queries/GetStoryQuery'

import Layout from '../../components/Layout/Layout'
import StoryShare from '../../components/Stories/StoryShare'
import StoryDate from '../../utils/DateFormatter'

export async function getStaticProps({ params }) {

    const { data } = await ApolloClientConfig.query({
        query: GET_STORY_QUERY,
        variables: {
            slug: params.slug
        }
    });

    return {
        props: {
            props: data.posts[0]
        }
    }
}

export async function getStaticPaths() {

    const { data } = await ApolloClientConfig.query({
        query: GET_STORIES_QUERY,
    });

    return {
        paths: data.posts.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: true,
    }
}

export default function Story({ props }) {

    return (
        <Layout
            title={props.title}
            description={props.excerpt}
            keywords={[props.tags]}
            image={props.coverImage ? props.coverImage.coverImagePost[0].coverImage.url : null}
            navAccent='light'
        >
            <section className="story-single">
                <div className="container">
                    <div className="story-details">
                        <h4>{StoryDate(props.createdAt)}</h4>
                        <h1>{props.title}</h1>
                        <p>{props.excerpt}</p>
                    </div>
                </div>
                <div className="story-cover">
                    {
                        props.coverImage ?
                            <Image src={`${props.coverImage.coverImagePost[0].coverImage.url}`} alt={props.title} layout="responsive" height="30%" width="100%" title={props.title} /> :
                            <Image src="/img/placeholder-story-cover.jpeg" alt={props.title} layout="responsive" height="30%" width="100%" title={props.title} />
                    }
                </div>
                <div className="container">
                    <div className="story-content" dangerouslySetInnerHTML={{ __html: props.content.html }}></div>
                    <div className="story-footer">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="story-author">
                                    <img src={props.author.picture.url} alt={props.author.name} />
                                    <div className="content">
                                        <p className="story-author-name">{props.author.name}</p>
                                        <p className="story-author-title">{props.author.title}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <StoryShare
                                    url={`https://nextgraphify.app.vercel/stories/${props.slug}`}
                                    title={props.title}
                                    description={props.description}
                                    excerpt={props.excerpt}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}