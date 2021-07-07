import { useEffect } from 'react'
import Link from 'next/link'

const Nav = (props) => {
    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", mobileMenu);

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }

        const navLink = document.querySelectorAll(".nav-link");
        navLink.forEach(n => n.addEventListener("click", closeMenu));
        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }

    })


    return (
        <>
            <nav className={`navbar ${props.accent ? props.accent : ''}`}>
                <div className="container">
                    <Link href="/">
                        <a className="nav-logo">Next.js/GraphCMS </a>
                    </Link>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Welcome</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/stories">
                                <a className="nav-link">Stories</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link">Contact Creator</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;