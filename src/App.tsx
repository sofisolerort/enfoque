import { useEffect, useState } from "react";
import { buscarFotos, type Foto } from "./api/pexels";
import "./App.css";

const CATEGORIAS = [
  "Naturaleza",
  "Arquitectura",
  "Retrato",
  "Comida",
  "Viajes",
  "Minimalista",
];

function App() {
  const [fotos, setFotos] = useState<Foto[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    buscarFotos("").then(setFotos);
  }, []);

  function manejarBusqueda(e: React.FormEvent) {
    e.preventDefault();
    buscarFotos(query).then(setFotos);
  }

  function buscarCategoria(categoria: string) {
    setQuery(categoria);
    buscarFotos(categoria).then(setFotos);
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">Enfoque</h1>
        <button className="fav-link">♥ Favoritos</button>
      </header>

      <main className="main">
        <h2 className="hero-title">Encontrá tu próxima inspiración</h2>

        <form className="search-bar" onSubmit={manejarBusqueda}>
          <input
            type="text"
            placeholder="Buscar fotos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>

        <div className="chips">
          {CATEGORIAS.map((categoria) => (
            <button
              key={categoria}
              className="chip"
              onClick={() => buscarCategoria(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>

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
