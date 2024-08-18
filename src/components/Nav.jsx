import { useEffect, useState } from "react";

import "./Nav.css";

const Nav = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const navbarHeight = document.querySelector("nav").offsetHeight;
            const firstSectionHeight =
                document.querySelector("#locations").offsetHeight;

            const newOpacity = Math.min(
                1,
                1 - scrollPosition / (firstSectionHeight - navbarHeight)
            );
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="main-head"
            style={{
                backgroundColor: `rgba(19, 28, 39, ${opacity})`,
            }}
        >
            <nav>
                <h1 id="logo">
                    <a href="#">Travelly</a>
                </h1>
                <ul>
                    <li>
                        <a className="nav-item" href="#locations">
                            Locations
                        </a>
                    </li>
                    <li>
                        <a className="nav-item" href="#benefits">
                            Benefits
                        </a>
                    </li>
                    <li>
                        <a className="nav-item" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
