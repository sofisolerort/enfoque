const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = "https://api.pexels.com/v1";

// El tipo de dato de una foto (solo los campos que Pexels realmente devuelve)
export interface Foto {
  id: number;
  width: number;
  height: number;
  alt: string;
  avg_color: string;
  photographer: string;
  photographer_url: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    tiny: string;
  };
}

// Busca fotos por término. Si no hay término, trae fotos destacadas.
export async function buscarFotos(query: string): Promise<Foto[]> {
  const endpoint = query
    ? `${BASE_URL}/search?query=${encodeURIComponent(query)}&per_page=24`
    : `${BASE_URL}/curated?per_page=24`;

  const res = await fetch(endpoint, {
    headers: { Authorization: API_KEY },
  });

  if (!res.ok) {
    throw new Error("No se pudieron cargar las fotos");
  }

  const data = await res.json();
  return data.photos;
}

// Trae una foto puntual por su ID
export async function obtenerFoto(id: string): Promise<Foto> {
  const res = await fetch(`${BASE_URL}/photos/${id}`, {
    headers: { Authorization: API_KEY },
  });

  if (!res.ok) {
    throw new Error("No se pudo cargar la foto");
  }

  return res.json();
}
