import { useEffect, useRef, useState } from "react";
import "./Perempuan.css";

export default function Perempuan() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`wanita-section ${show ? "show" : ""}`}
    >
      {/* 🌸 BUNGA */}
      <div className="flower-layer">
        {[...Array(28)].map((_, i) => (
          <img
            key={i}
            src="/bunga1.png"
            className="flower"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${7 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random() * 0.6})`,
            }}
            alt="flower"
          />
        ))}
      </div>

      {/* TEKS PEMBUKA */}
      <div className="intro-text">
        <h2>Assalamualaikum Warahmatullahi Wabarakatuh</h2>
        <p>
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
          Ya Allah, semoga ridho-Mu tercurah mengiringi pernikahan kami.
        </p>
      </div>

      {/* MEMPELAI WANITA */}
      <div className="couple-block">
        <div className="couple-text">
          <h3>Karsih</h3>
          <p>Putri dari Bapak M. Adi Kusno & Ibu Kartisah</p>
        </div>

        <div className="couple-photo">
          <img src="/bose1.jpeg" alt="Mempelai Wanita" />
        </div>
      </div>

      {/* MEMPELAI PRIA */}
      <div className="couple-block">
        <div className="couple-photo">
          <img src="/najib1.jpeg" alt="Mempelai Pria" />
        </div>

        <div className="couple-text">
          <h3>Munajid</h3>
          <p>Putra dari Bapak Jayak & Ibu Munah</p>
        </div>
      </div>
    </section>
  );
}
