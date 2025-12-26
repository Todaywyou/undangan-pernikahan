import React from "react";

const Awal = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/bgose1.jpeg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Judul & Tanggal di ATAS */}
      <div className="absolute top-10 w-full text-center text-white px-4 z-10">
        <h1 className="text-3xl md:text-4xl font-serif tracking-widest mb-2">
          The Wedding of
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-3">
          Karsih & Munajid
        </h2>
        <p className="text-lg md:text-xl font-light tracking-wide">
          11 Januari 2025
        </p>
      </div>

      {/* Ayat Al-Qur'an di BAWAH */}
      <div className="absolute bottom-10 w-full text-center text-white px-6 z-10">
        <p className="text-lg md:text-xl font-serif leading-relaxed mb-3">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
          لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً
        </p>
        <p className="text-sm md:text-base font-light italic">
          “Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri agar kamu merasa
          tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
          sayang.”
          <br />
          (QS. Ar-Rum: 21)
        </p>
      </div>
    </section>
  );
};

export default Awal;
