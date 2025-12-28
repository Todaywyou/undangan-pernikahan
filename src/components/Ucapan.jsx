import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import "./Ucapan.css";

export default function Ucapan() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [ucapan, setUcapan] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const q = query(collection(db, "ucapan"), orderBy("createdAt", "desc"));

    const unsub = onSnapshot(q, (snap) => {
      setUcapan(
        snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsub();
  }, []);

  const kirimUcapan = async (e) => {
    e.preventDefault();
    if (!nama || !pesan) return;

    await addDoc(collection(db, "ucapan"), {
      nama,
      pesan,
      createdAt: serverTimestamp(),
    });

    setNama("");
    setPesan("");
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="ucapan-section">
      <h2>Ucapan & Doa</h2>
      <span className="ucapan-line"></span>

      <form className="ucapan-form" onSubmit={kirimUcapan}>
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <textarea
          placeholder="Tulis doa & ucapan..."
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
        />
        <button type="submit">Kirim Ucapan</button>
      </form>

      <div className="ucapan-list">
        {ucapan.map((u) => {
          const isExpanded = expanded[u.id];
          const isLong = u.pesan.length > 120;

          return (
            <div key={u.id} className="ucapan-card">
              <strong>{u.nama}</strong>

              <p className={`ucapan-pesan ${isExpanded ? "expanded" : ""}`}>
                {u.pesan}
              </p>

              {isLong && (
                <button
                  className="ucapan-toggle"
                  onClick={() => toggleExpand(u.id)}
                >
                  {isExpanded ? "Lebih sedikit" : "Selengkapnya"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
