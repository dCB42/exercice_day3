import { Routes, Route } from "react-router-dom";

import Home from "../page/Home";
import AteliersPratique from "../page/AteliersPratique";
import Contact from "../page/Contact";
import Participants from "../page/Participants";
import Confirmation from "../page/Confirmation";

export default function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/ateliers-pratique" element={<AteliersPratique />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/participants" element={<Participants />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
