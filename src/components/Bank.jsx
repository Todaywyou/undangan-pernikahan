import "./Bank.css";
import { FaWhatsapp, FaRegCopy } from "react-icons/fa";

export default function Bank() {
  const waNumber = "6289686605922";

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Berhasil disalin");
  };

  return (
    <section className="bank-wrapper">
      {/* Judul */}
      <div className="bank-heading">
        <h2>Kirim Hadiah untuk Pengantin</h2>
        <span className="bank-line"></span>
        <p>
          Doa restu Anda merupakan kebahagiaan terbesar bagi kami. Apabila
          berkenan, tanda kasih dapat dikirim melalui:
        </p>
      </div>

      {/* GRID */}
      <div className="bank-grid">
        {/* ================= DANA ================= */}
        <div className="bank-card dana">
          <div className="bank-header">
            <span className="bank-name">DANA</span>
            <span className="bank-chip dana-chip"></span>
          </div>

          <div className="bank-number">0896 8660 5922</div>

          <div className="bank-footer">
            <div>
              <small>Atas Nama</small>
              <p>Karsih</p>
            </div>

            <button
              className="copy-btn"
              onClick={() => copyText("089686605922")}
            >
              <FaRegCopy />
            </button>
          </div>
        </div>

        {/* ================= BRI ================= */}
        <div className="bank-card bri">
          <div className="bank-header">
            <span className="bank-name">BANK BRI</span>
            <span className="bank-chip bri-chip"></span>
          </div>

          <div className="bank-number">5747 0101 5175 504</div>

          <div className="bank-footer">
            <div>
              <small>Atas Nama</small>
              <p>M. Adi Kusno</p>
            </div>

            <button
              className="copy-btn"
              onClick={() => copyText("574701015175504")}
            >
              <FaRegCopy />
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${waNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
      >
        <FaWhatsapp />
        Konfirmasi via WhatsApp
      </a>
    </section>
  );
}
