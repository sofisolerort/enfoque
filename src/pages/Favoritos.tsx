import { Link } from "react-router-dom";
import { useFavoritos } from "../hooks/useFavoritos";

function Favoritos() {
  const { favoritos, alternarFavorito } = useFavoritos();

  if (favoritos.length === 0) {
    return (
      <main className="main vacio">
        <div className="vacio-icono">♥</div>
        <h2 className="hero-title">Todavía no guardaste ninguna foto</h2>
        <p className="vacio-texto">
          Explorá la galería para encontrar tu próxima inspiración.
          <br />
          Tus favoritas van a aparecer acá.
        </p>
        <Link to="/" className="btn-descargar">
          Explorar fotos
        </Link>
      </main>
    );
  }

  return (
    <main className="main">
      <h2 className="hero-title">
        Mis favoritas <span className="contador">({favoritos.length})</span>
      </h2>

      <section className="photo-grid">
        {favoritos.map((foto) => (
          <div key={foto.id} className="photo-wrapper">
            <Link to={`/foto/${foto.id}`}>
              <img className="photo-card" src={foto.src.large} alt={foto.alt} />
            </Link>
            <button
              className="btn-fav activo"
              onClick={() => alternarFavorito(foto)}
              aria-label="Quitar de favoritos"
            >
              ♥
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Favoritos;
