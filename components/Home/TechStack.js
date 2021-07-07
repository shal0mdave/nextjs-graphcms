import Image from 'next/image'
import Link from 'next/link'

import ApolloSvg from '../../public/img/stack/apollostack.svg'
import NextjsSvg from '../../public/img/stack/nextjs.svg'
import VercelSvg from '../../public/img/stack/vercel.svg'
import GraphCMSvg from '../../public/img/stack/graphcms.svg'
import BootstrapSvg from '../../public/img/stack/bootstrap.svg'
import SassSvg from '../../public/img/stack/sass.svg'


let stack = [
    {
        name: "GraphCMS",
        description: "This is our data powerhouse. <a href='https://graphcms.com' target='_blank'>GraphCMS</a> is a very powerful and yet easy to use Headless CMS with tons of useful options to support different projects.",
        img: GraphCMSvg
    },
    {
        name: "Next.js",
        description: "An amazing <a href='https://nextjs.org/' target='_blank'>React framework</a> that straps everything together, providing us with all the necessary dependencies and project configurations to start coding right away.",
        img: NextjsSvg
    },
    {
        name: "Apollo GraphQL Client",
        description: "Of course, I was not going to build a <a href='https://jamstack.org/' target='_blank' >Jamstack</a> project and leave out our beloved <a href='https://www.apollographql.com/docs/react/' target='_blank'>Apollo</a> GraphQL client library, nope!  I love the way this thing works.",
        img: ApolloSvg
    },
    {
        name: "Bootstrap",
        description: "We cannot deny the simplicity that <a href='https://getbootstrap.com/' target='_blank'>Boostrap</a> brings to Frontend work. Well... Some of us can deny that, but who cares? I installed and used Bootstrap 5 on this project.",
        img: BootstrapSvg
    },
    {
        name: "Sass",
        description: "There are lots of reasons why <a href='https://sass-lang.com/' target='_blank'>Sass</a> is referred to as CSS with superpowers. You might find a few if you have a look into <code><b>root/styles</b></code> directory.",
        img: SassSvg
    },
    {
        name: "Vercel",
        description: "Last but not the least... Can you take a guess on where this beautiful piece of work was deployed? That is right, <a href='https://vercel.com/' target='_blank'>Vercel!</a> ",
        img: VercelSvg
    },
]
const TechStack = () => {
    return (
        <section className="home-stack">
            <div className="container">
                <div className="heading">
                    <h1>Built with your favourite web technologies</h1>
                </div>
                <div className="row">
                    {stack.map(({ name, description, img }) => (
                        <div className="col-md-4" key={name}>
                            <div className="technology">
                                <Image src={img} alt={name} width="100" height="100" layout="responsive" />
                                <h1>{name}</h1>
                                <p dangerouslySetInnerHTML={{ __html: description }}></p>
                            </div>
                        </div>
                    ))}
                </div>
                <Link href="/stories"><a className="stories-link">Read my stories</a></Link>
            </div>
        </section>
    )
}

export default TechStack;