import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pembuka from "./components/Pembuka";
import Isi from "./Pages/Isij";
import { AudioProvider } from "./AudioContext";

export default function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pembuka />} />
          <Route path="/isi" element={<Isi />} />
        </Routes>
      </BrowserRouter>
    </AudioProvider>
  );
}
