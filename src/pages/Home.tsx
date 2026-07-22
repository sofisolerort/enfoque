import { useEffect, useState } from "react";
import { buscarFotos, type Foto } from "../api/pexels";
import { Link } from "react-router-dom";

const CATEGORIAS = [
  "Naturaleza",
  "Arquitectura",
  "Retrato",
  "Comida",
  "Viajes",
  "Minimalista",
];

function Home() {
  const [fotos, setFotos] = useState<Foto[]>([]);
  const [query, setQuery] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    cargarFotos("");
  }, []);

  async function cargarFotos(termino: string) {
    setCargando(true);
    setError(false);
    try {
      const resultado = await buscarFotos(termino);
      setFotos(resultado);
    } catch {
      setError(true);
    } finally {
      setCargando(false);
    }
  }

  function manejarBusqueda(e: React.FormEvent) {
    e.preventDefault();
    cargarFotos(query);
  }

  function buscarCategoria(categoria: string) {
    setQuery(categoria);
    cargarFotos(categoria);
  }

  return (
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

      {cargando && <p className="estado">Cargando fotos...</p>}

      {error && (
        <p className="estado">Algo salió mal. Probá de nuevo en un momento.</p>
      )}

      {!cargando && !error && fotos.length === 0 && (
        <p className="estado">No encontramos fotos para esa búsqueda.</p>
      )}

      {!cargando && !error && fotos.length > 0 && (
        <section className="photo-grid">
          {fotos.map((foto) => (
            <Link key={foto.id} to={`/foto/${foto.id}`}>
              <img className="photo-card" src={foto.src.large} alt={foto.alt} />
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}

export default Home;
