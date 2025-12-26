import { useEffect, useState } from "react";
import "./Our.css";

const slides = ["/bgose1.jpeg", "/bgose2.jpeg", "/bgose3.jpeg"];

export default function Our() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="our-section">
      <div className="our-container">
        {/* TITLE */}
        <h2 className="our-title">OUR GALLERY</h2>
        <span className="our-divider"></span>

        {/* SLIDESHOW */}
        <div className="our-slider">
          {slides.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`our-slide ${i === index ? "active" : ""}`}
              alt="Our Gallery"
            />
          ))}
        </div>

        {/* GRID FOTO */}
        <div className="our-grid">
          <img src="/bose1.jpeg" alt="gallery" />
          <img src="/najib1.jpeg" alt="gallery" />
          <img src="/bgose4.jpeg" alt="gallery" />
          <img src="/bgose5.jpeg" alt="gallery" />
        </div>
      </div>
    </section>
  );
}
