import { useEffect, useState } from "react";
import type { Foto } from "../api/pexels";

const CLAVE = "enfoque-favoritos";

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState<Foto[]>(() => {
    const guardado = localStorage.getItem(CLAVE);
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem(CLAVE, JSON.stringify(favoritos));
  }, [favoritos]);

  function esFavorito(id: number) {
    return favoritos.some((f) => f.id === id);
  }

  function alternarFavorito(foto: Foto) {
    setFavoritos((actuales) =>
      actuales.some((f) => f.id === foto.id)
        ? actuales.filter((f) => f.id !== foto.id)
        : [...actuales, foto],
    );
  }

  return { favoritos, esFavorito, alternarFavorito };
}
