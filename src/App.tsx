import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">Enfoque</h1>
        <button className="fav-link">♥ Favoritos</button>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
