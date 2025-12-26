import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pembuka from "./components/Pembuka";
import Isi from "./Pages/isi";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pembuka />} />
        <Route path="/isi" element={<Isi />} />
      </Routes>
    </BrowserRouter>
  );
}
