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
                                <h1>Hit the ground running with Next.js &amp; GraphCMS </h1>
                                <a href="https://github.com/shal0mdave" target="_blank" rel="noopener noreferrer" className="btn"><i className="fab fa-git-alt"></i> Fork on Github</a>
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