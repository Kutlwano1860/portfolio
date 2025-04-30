import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [navTextColor, setNavTextColor] = useState("text-light");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === "white-section") {
            setNavTextColor("text-dark"); // Dark text for white background
          } else if (entry.isIntersecting && entry.target.id === "dark-section") {
            setNavTextColor("text-light"); // Light text for dark background
          }
        });
      },
      { threshold: 0.1 } // Adjust as needed
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-b navbar-expand-md fixed-top ${navTextColor}`}
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">
          My Portfolio
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navbar-collapse justify-content-end" id="navbarDefault">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link js-scroll ${navTextColor}`} href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link js-scroll ${navTextColor}`} href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link js-scroll ${navTextColor}`} href="#services">
                My Services
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link js-scroll ${navTextColor}`} href="#contact">
                Contact Me
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link js-scroll ${navTextColor}`} href="#hire-me">
                Hire Me
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link js-scroll ${navTextColor}`} href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
