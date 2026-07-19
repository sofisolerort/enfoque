import { useEffect, useState } from "react";
import { buscarFotos, type Foto } from "./api/pexels";
import "./App.css";

function App() {
  const [fotos, setFotos] = useState<Foto[]>([]);

  useEffect(() => {
    buscarFotos("").then(setFotos);
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">Enfoque</h1>
        <button className="fav-link">♥ Favoritos</button>
      </header>

      <main className="main">
        <h2 className="hero-title">Encontrá tu próxima inspiración</h2>

        <section className="photo-grid">
          {fotos.map((foto) => (
            <img
              key={foto.id}
              className="photo-card"
              src={foto.src.medium}
              alt={foto.alt}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
