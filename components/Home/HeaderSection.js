import Image from 'next/image'
import HeaderImage from '../../public/img/ship.png'

const HeaderSection = () => {
    return (
        <header className="home-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 order-md-1">
                        <div className="text">
                            <div className="text-inner">
                                <h1>Hit the ground running with Next.js & GraphCMS </h1>
                                <p>Hello there! Welcome to this exciting little virtual space I created. I will briefly walk you through the JAMStack architecture and help you build your own apps. Let's get this show started!</p>
                                <a href="https://github.com/shal0mdave/nextjs-graphcms" target="_blank" rel="noopener noreferrer" className="btn">
                                    <i className="fab fa-git-alt"></i> Fork on Github
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-2">
                        <Image src={HeaderImage} alt="Ship" layout="responsive" title="Designed by UIG Studio" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderSection;