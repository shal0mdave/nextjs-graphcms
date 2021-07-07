import Layout from '../components/Layout/Layout'
import HeaderSection from '../components/Home/HeaderSection'
import TechStack from '../components/Home/TechStack'

export default function Home() {
	return (
		<Layout
			title='A GraphCMS/Nextjs Powered Blog'
			description=''
			keywords={['nextjs', 'vercel', 'react', 'jamstack']}
		>
			<HeaderSection />
			<TechStack />
		</Layout>
	)
}
