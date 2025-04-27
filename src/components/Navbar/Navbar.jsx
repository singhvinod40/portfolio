import React, { useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import gsap from "gsap";
import logo from "../../assets/logo.png"; 

function Navbar() {
    const menu = useRef(null);
    const mobile = useRef(null);
    const title = useRef(null); // Ref for the h1 element
    const navItems = useRef([]); // Ref for the nav items

    useEffect(() => {
        // Ensure the h1 and nav items are visible before animation
        gsap.set(title.current, { opacity: 1 });
        gsap.set(navItems.current, { opacity: 1 });

        // GSAP animation for the navbar title and nav items
        const tl = gsap.timeline();

        // Animate the title
        tl.fromTo(
            title.current,
            { y: -100, opacity: 0 }, // Starting state
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" } // Ending state
        );

        // Animate the nav items
        tl.fromTo(
            navItems.current,
            { y: 50, opacity: 0 }, // Starting state
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" }, // Ending state
            "-=0.5" // Overlap with the title animation
        );

        return () => {
            // Cleanup GSAP animation
            tl.kill();
        };
    }, []);

    const toggleMenu = () => {
        mobile.current.classList.toggle("activemobile");
        menu.current.classList.toggle("activeham");
    };

    return (
        <nav>
            <h1 ref={title}>PORTFOLIO</h1>
            <img src={logo} alt="Logo" className="logo"/>
            <ul className="desktopmenu">
                {["home", "about", "project", "contact"].map((section, index) => (
                    <Link
                        key={section}
                        to={section}
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        duration={500}
                    >
                        <li ref={(el) => (navItems.current[index] = el)}>{section.charAt(0).toUpperCase() + section.slice(1)}</li>
                    </Link>
                ))}
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
                {["home", "about", "project", "contact"].map((section) => (
                    <Link
                        key={section}
                        to={section}
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        duration={500}
                    >
                        <li>{section.charAt(0).toUpperCase() + section.slice(1)}</li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;