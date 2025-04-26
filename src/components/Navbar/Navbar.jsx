import React, { useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import gsap from "gsap";

function Navbar() {
    const menu = useRef(null);
    const mobile = useRef(null);

    useEffect(() => {
        // GSAP animation for the navbar title
        const animation = gsap.from("nav h1", {
            y: -100,
            duration: 1,
            opacity: 0,
        });

        return () => {
            // Cleanup GSAP animation
            animation.kill();
        };
    }, []);

    const toggleMenu = () => {
        mobile.current.classList.toggle("activemobile");
        menu.current.classList.toggle("activeham");
    };

    return (
        <nav>
            <h1>PORTFOLIO</h1>
            <ul className="desktopmenu">
                <Link to="home" activeClass="active" smooth={true} spy={true} duration={500}>
                    <li>Home</li>
                </Link>
                <Link to="about" activeClass="active" smooth={true} spy={true} duration={500}>
                    <li>About</li>
                </Link>
                <Link to="project" activeClass="active" smooth={true} spy={true} duration={500}>
                    <li>Projects</li>
                </Link>
                <Link to="contact" activeClass="active" smooth={true} spy={true} duration={500}>
                    <li>Contact</li>
                </Link>
            </ul>

            <div
                className="hamburger"
                ref={menu}
                onClick={toggleMenu}
                role="button"
                aria-label="Toggle navigation menu"
            >
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>
            <ul className="mobilemenu" ref={mobile}>
                <Link to="home" activeClass="active" smooth={true} spy={true} duration={500}>
                    <li>Home</li>
                </Link>
                <Link to="about" activeClass="active" smooth={true} spy={true} duration={500}>
                    <li>About</li>
                </Link>
                <Link to="project" activeClass="active" smooth={true} spy={true} duration={500}>
                    <li>Projects</li>
                </Link>
                <Link to="contact" activeClass="active" smooth={true} spy={true} duration={500}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;