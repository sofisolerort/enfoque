import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Detalle from "./pages/Detalle";
import Favoritos from "./pages/Favoritos";

function App() {
  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="logo-link">
          <h1 className="logo">Enfoque</h1>
        </Link>
        <Link to="/favoritos" className="fav-link">
          ♥ Favoritos
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foto/:id" element={<Detalle />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>

      <footer className="footer">
        <p>
          Fotos provistas por{" "}
          <a
            href="https://www.pexels.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexels
          </a>
        </p>
        <p className="footer-autor">Un proyecto de Sofía Soler</p>
      </footer>
    </div>
  );
}

export default App;
