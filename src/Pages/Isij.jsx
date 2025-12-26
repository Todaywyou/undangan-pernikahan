import Awal from "../components/Awal";
import Perempuan from "../components/Perempuan";
import Date from "../components/Date";
import Foto from "../components/Foto";
import Resepsi from "../components/Resepsi";
import Our from "../components/Our";


export default function Isi() {
  return (
    <div className="p-0 m-0">
      <Awal />
      <section className="relative overflow-hidden min-h-screen bg-transparent">
        <div className="relative z-10">
          <Perempuan />
          <Date />
          <Foto />
          <Resepsi/>
          <Our/>
        </div>
      </section>
    </div>
  );


}

