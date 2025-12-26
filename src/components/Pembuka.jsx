import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = ["/bgose1.jpeg", "/bgose2.jpeg", "/bgose5.jpeg", "/bgose4.jpeg"];

const Pembuka = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-between text-center px-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 mt-16">
        <h2 className="text-2xl font-serif text-white">The Wedding of</h2>
        <h1 className="font-serif text-4xl text-white mt-3">
          Karsih & Munajid
        </h1>
      </div>

      <div className="relative z-15 mb-20">
        <p className="text-white text-lg font-semibold">
          Kepada Yth. Bapak/ibu/sdr/i
        </p>

        <Link
          to="/isi"
          className="inline-block bg-black/65 text-white px-9 py-3 rounded-full shadow-md"
        >
          Open Invitation
        </Link>
      </div>
    </section>
  );
};

export default Pembuka;
