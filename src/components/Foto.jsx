import { useEffect, useState } from "react";
import "./Foto.css";

const images = ["/bgose3.jpeg", "/bgose4.jpeg", "/bgose5.jpeg"];

export default function Foto() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000); // ganti tiap 4 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="foto-divider">
      {images.map((img, i) => (
        <div
          key={i}
          className={`foto-slide ${i === active ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* overlay gelap */}
      <div className="foto-overlay"></div>
    </section>
  );
}
