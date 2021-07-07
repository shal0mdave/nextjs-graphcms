import ApolloClientConfig from '../graphql/config/ApolloClientConfig'
import GET_STORIES_QUERY from '../graphql/queries/GetStoriesQuery';

import Layout from '../components/Layout/Layout'
import FeaturedStory from '../components/Stories/FeaturedStory'
import StoriesGrid from '../components/Stories/StoriesGrid'


export async function getServerSideProps() {

	const { data } = await ApolloClientConfig.query({
		query: GET_STORIES_QUERY
	});

	return {
		props: {
			featured: data.posts.find(story => story.featured == true),
			posts: data.posts.filter(story => story.featured !== true)
		}
	}
}

export default function Stories({ featured, posts }) {

	return (
		<Layout
			title='Stories - On A GraphCMS/Nextjs Powered Blog'
			description=''
			keywords={['nextjs', 'vercel', 'react', 'jamstack']}
			navAccent='light'
		>
			<FeaturedStory data={featured} />
			<StoriesGrid data={posts} />
		</Layout>
	)
}
