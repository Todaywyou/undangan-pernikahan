import "./Resepsi.css";

export default function Resepsi() {
  return (
    <section className="resepsi-section">
      <div className="resepsi-content">
        <div className="resepsi-card">
          <span className="resepsi-label">Resepsi</span>

          <h2 className="resepsi-day">Minggu</h2>
          <h1 className="resepsi-number">11</h1>
          <h3 className="resepsi-month">Januari 2026</h3>

          <p className="resepsi-time">
            Pukul 11:00 WIB <br /> s/d selesai
          </p>

          <p className="resepsi-location">
            Talang Kemang RT 31 RW 09 <br />
            (Kediaman Bapak M. Adi Kusno)
          </p>

          <a
            href="https://maps.app.goo.gl/PUWtgFhtiNcKdF4d9"
            target="_blank"
            rel="noopener noreferrer"
            className="resepsi-btn"
          >
            Lihat Lokasi
          </a>
        </div>
      </div>
    </section>
  );
}
