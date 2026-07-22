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
    </div>
  );
}

export default App;
