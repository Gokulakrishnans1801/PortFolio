import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const offsetTop = section.offsetTop - 100;
        const offsetHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(sectionId);
        }
      });
      // Add sticky header class
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", scrollPosition > 100);
      }
      // Close navbar on scroll
      setIsNavbarActive(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* header section of home page  */}
      <header className="header">
        <a href="#" className="logo">
          GOKUL.
        </a>
        <div
          className={`bx bx-menu ${isNavbarActive ? "bx-x" : ""}`}
          id="boxmenu"
          onClick={() => setIsNavbarActive((prev) => !prev)}
          ref={menuIconRef}
        ></div>
        <nav
          className={`navbar  ${isNavbarActive ? "active" : ""}`}
          ref={navbarRef}
        >
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            home
          </a>
          <a href="#section">about</a>
          <a href="#education">education</a>
          <a href="#skills">skills</a>
          <a href="#contact">contact</a>

          <span className="nav-active"></span>
        </nav>
      </header>
    </>
  );
};

export default Header;
