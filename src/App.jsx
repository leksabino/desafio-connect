import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globalStyles.scss";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Doacao from "./pages/doacao/Doacao";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import Mentoria from "./pages/mentoria/Mentoria";
import EventosEP from "./pages/eventosEP/EventosEP";
import Usuario from "./pages/usuario/Usuario";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doacao" element={<Doacao />} />
            <Route path="/voluntariado" element={<Voluntariado />} />
            <Route path="/mentoria" element={<Mentoria />} />
            <Route path="/eventosEP" element={<EventosEP />} />
            <Route path="/usuario" element={<Usuario />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
