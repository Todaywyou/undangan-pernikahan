import "./Date.css";

export default function Date() {
  return (
    <section className="date-section">
      <div className="date-content">
        <span className="date-sub">Save The Date</span>

        <p className="date-desc">
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, kami
          mengundang Bapak/Ibu/Saudara/i untuk dapat menghadiri acara pernikahan
          kami.
        </p>

        <div className="date-card">
          <span className="date-label">Akad Nikah</span>

          <h2 className="date-day">Minggu</h2>
          <h1 className="date-number">11</h1>
          <h3 className="date-month">Januari 2026</h3>

          <p className="date-time">
            Pukul 10:00 WIB <br /> s/d selesai
          </p>

          {/* LOKASI */}
          <p className="date-location">
            Talang Kemang RT 31 RW 09 <br />
            (Kediaman Bapak M. Adi Kusno)
          </p>

          {/* BUTTON MAPS */}
          <a
            href="https://maps.app.goo.gl/PUWtgFhtiNcKdF4d9"
            target="_blank"
            rel="noopener noreferrer"
            className="date-btn"
          >
            Lihat Lokasi
          </a>
        </div>
      </div>
    </section>
  );
}
