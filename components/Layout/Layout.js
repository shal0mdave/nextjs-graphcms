import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const Layout = (props) => {

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta name="author" content="Shalom Effiom" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
				<meta name="theme-color" content={props.themeColour ? props.themeColour : '#FEC89A'} />
				<meta name="title" content={props.title ? props.title : 'GraphCMS/NextJs Blog Starter By Shalom Effiom'} />
				<meta name="description" content={props.description ? props.description : 'Hit the ground running with Next.js & GraphCMS'} />
				<meta name="keywords" content={props.keywords ? Object.values(props.keywords).join(', ') : ''} />

				<meta property="og:title" content={props.title ? props.title : 'GraphCMS/NextJs Blog Starter By Shalom Effiom'} />
				<meta property="og:description" content={props.description ? props.description : 'Hit the ground running with Next.js & GraphCMS'} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={props.url ? props.url : 'https://graphcmsnextjs.vercel.app/'} />
				<meta property="og:title" content={props.title ? props.title : 'GraphCMS/NextJs Blog Starter By Shalom Effiom'} />
				<meta property="og:description" content={props.description ? props.description : 'content="Hit the ground running with Next.js & GraphCMS'} />
				<meta property="og:image" content={props.image ? props.image : '/vercel.svg'} />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@sire_shalom" />
				<meta name="twitter:title" content={props.title ? props.title : 'GraphCMS/NextJs Blog Starter By Shalom Effiom'} />
				<meta name="twitter:description" content={props.description ? props.description : 'Hit the ground running with Next.js & GraphCMS'} />
				<meta name="twitter:creator" content="@sire_shalom" />
				<meta name="twitter:url" property="og:url" content={props.url ? props.url : 'https://graphcmsnextjs.vercel.app/'} />
				<meta name="twitter:image" property="og:image" content={props.image ? props.image : '/vercel.svg'} />

				<title>{props.title ? props.title : 'GraphCMS/NextJs Blog Starter By Shalom Effiom'}</title>

				<link rel="icon" href="/favicon.ico" />
				<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
			</Head>

			<Nav accent={props.navAccent} />

			{props.children}

			<Footer />
		</>
	)
}

export default Layout