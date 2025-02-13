import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacto from "./pages/contacto";
import ResultadosMotocross from "./pages/motocross/Resultados";
import CampeonatoMotocross from "./pages/motocross/Campeonato";
import ReglamentoMotocross from "./pages/motocross/Reglamento";
import CalendarioMotocross from "./pages/motocross/Calendario";
import ResultadosEnduro from "./pages/enduro/Resultados";
import CampeonatoEnduro from "./pages/enduro/Campeonato";
import ReglamentoEnduro from "./pages/enduro/Reglamento";
import CalendarioEnduro from "./pages/enduro/Calendario";
import ResultadosVelocidad from "./pages/velocidad/Resultados";
import CampeonatoVelocidad from "./pages/velocidad/Campeonato";
import ReglamentoVelocidad from "./pages/velocidad/Reglamento";
import CalendarioVelocidad from "./pages/velocidad/Calendario";
import ResultadosQuadcross from "./pages/quadcross/Resultados";
import CampeonatoQuadcross from "./pages/quadcross/Campeonato";
import ReglamentoQuadcross from "./pages/quadcross/Reglamento";
import CalendarioQuadcross from "./pages/quadcross/Calendario";
import Home from "./pages/Home";
import Header from './components/Header';
import Menu from "./components/Menu";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Motocross */}
          <Route path="/motocross/resultados" element={<ResultadosMotocross />} />
          <Route path="/motocross/campeonato" element={<CampeonatoMotocross />} />
          <Route path="/motocross/reglamento" element={<ReglamentoMotocross />} />
          <Route path="/motocross/calendario" element={<CalendarioMotocross />} />
          {/* Enduro */}
          <Route path="/enduro/resultados" element={<ResultadosEnduro />} />
          <Route path="/enduro/campeonato" element={<CampeonatoEnduro />} />
          <Route path="/enduro/reglamento" element={<ReglamentoEnduro />} />
          <Route path="/enduro/calendario" element={<CalendarioEnduro />} />
          {/* Velocidad */}
          <Route path="/velocidad/resultados" element={<ResultadosVelocidad />} />
          <Route path="/velocidad/campeonato" element={<CampeonatoVelocidad />} />
          <Route path="/velocidad/reglamento" element={<ReglamentoVelocidad />} />
          <Route path="/velocidad/calendario" element={<CalendarioVelocidad />} />
          {/* Quadcross */}
          <Route path="/quadcross/resultados" element={<ResultadosQuadcross />} />
          <Route path="/quadcross/campeonato" element={<CampeonatoQuadcross />} />
          <Route path="/quadcross/reglamento" element={<ReglamentoQuadcross />} />
          <Route path="/quadcross/calendario" element={<CalendarioQuadcross />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

