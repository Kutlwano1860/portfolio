import React, { useState, useEffect } from "react";
import './portfolio.css';
import { Navbar } from "./Components/Navbar";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Intro } from "./Components/Intro";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

export default function App() {
  const [navTextColor, setNavTextColor] = useState("text-light");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let newTextColor = "text-light";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          const bgColor = window.getComputedStyle(section).backgroundColor;
          if (bgColor === "rgb(255, 255, 255)") {
            newTextColor = "text-dark";
          }
        }
      });

      if (newTextColor !== navTextColor) {
        setNavTextColor(newTextColor);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navTextColor]);

  return (
    <div id="page-top">
      <Navbar navTextColor={navTextColor} />
      <Intro />
      <section id="about" style={{ backgroundColor: "white" }}>
        <About />
      </section>
      <section id="services" style={{ backgroundColor: "black", color: "white" }}>
        <Services />
      </section>
      <section id="contact" style={{ backgroundColor: "white" }}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
