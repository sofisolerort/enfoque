import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Detalle from "./pages/Detalle";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">Enfoque</h1>
        <button className="fav-link">♥ Favoritos</button>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foto/:id" element={<Detalle />} />
      </Routes>
    </div>
  );
}

export default App;
