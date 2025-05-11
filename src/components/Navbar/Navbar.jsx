import React, { useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import gsap from "gsap";
import myPic from "../../assets/myPic.jpeg"; 

function Navbar() {
    const menu = useRef(null);
    const mobile = useRef(null);
    const title = useRef(null); 
    const navItems = useRef([]); 
    const myPicRef = useRef(null); // Reference for myPic

    useEffect(() => {
        // Ensure the h1, nav items, and myPic are visible before animation
        gsap.set(title.current, { opacity: 1 });
        gsap.set(navItems.current, { opacity: 1 });
        gsap.set(myPicRef.current, { opacity: 1 });

        // GSAP animation for the navbar title, nav items, and myPic
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

        // Animate myPic
        tl.fromTo(
            myPicRef.current,
            { scale: 0, opacity: 0 }, // Starting state
            { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" }, // Ending state
            "-=0.8" // Overlap with the nav items animation
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
            <img
                src={myPic}
                alt="My Pic"
                className="mypic"
                ref={myPicRef} // Attach the ref to myPic
                onClick={() => {
                    document
                        .getElementById("home")
                        .scrollIntoView({ behavior: "smooth" });
                }}
            />
            <ul className="desktopmenu">
                {["home", "about", "experience", "projects", "contact"].map((section, index) => (
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
                {["home", "about", "experience", "projects", "contact"].map((section) => (
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