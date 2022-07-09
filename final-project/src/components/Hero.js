import React from "react";
import heroImg from "../images/hero-img.jpg";

export default function Hero() {
  //smooth scroll to comics section
  const scroll = (e) => {
    e.preventDefault();
    const comicsSection = document.getElementById("comics-section");
    comicsSection.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="container">
        <div className="title-holder">
          <h1 className="h1">All Marvel series in one place</h1>
        </div>
        <div className="subtitle-holder">
          <h2 className="subtitle">Explore Marvel comic series</h2>
        </div>
        <div className="btn-holder">
          <a href="#" className="btn" onClick={scroll}>
            Browse now
          </a>
        </div>
      </div>
    </section>
  );
}
