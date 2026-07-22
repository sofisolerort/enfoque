import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { obtenerFoto, type Foto } from "../api/pexels";
import { useFavoritos } from "../hooks/useFavoritos";

function Detalle() {
  const { id } = useParams();
  const [foto, setFoto] = useState<Foto | null>(null);
  const [cargando, setCargando] = useState(true);
  const { esFavorito, alternarFavorito } = useFavoritos();

  useEffect(() => {
    if (!id) return;
    setCargando(true);
    obtenerFoto(id)
      .then(setFoto)
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) return <p className="estado">Cargando foto...</p>;
  if (!foto) return <p className="estado">No encontramos esta foto.</p>;

  return (
    <main className="main detalle">
      <Link to="/" className="volver">
        ← Volver
      </Link>

      <img className="detalle-img" src={foto.src.large2x} alt={foto.alt} />

      <div className="detalle-info">
        <div>
          <p className="autor">{foto.photographer}</p>
          <a
            className="autor-link"
            href={foto.photographer_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Foto de {foto.photographer} en Pexels
          </a>
        </div>

        <div className="detalle-acciones">
          <a
            className="btn-descargar"
            href={foto.src.original}
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar
          </a>
          <button
            className={`btn-fav-detalle ${esFavorito(foto.id) ? "activo" : ""}`}
            onClick={() => alternarFavorito(foto)}
          >
            ♥ {esFavorito(foto.id) ? "Guardada" : "Guardar"}
          </button>
        </div>
      </div>

      <div className="metadata">
        <span>
          {foto.width} x {foto.height}
        </span>
        <span className="color-chip">
          <span
            className="color-muestra"
            style={{ backgroundColor: foto.avg_color }}
          />
          {foto.avg_color}
        </span>
      </div>
    </main>
  );
}

export default Detalle;
