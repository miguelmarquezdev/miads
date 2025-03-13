"use server";


import { SingleTour } from "@/components/single-tour";
import { notFound } from "next/navigation";

// Función para obtener los datos del tour desde la API
async function getTourData(slug) {
  const res = await fetch(
    `https://app.enjoyperu.org/wp-json/wp/v2/posts?slug=${slug}&_embed=true`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.length > 0 ? data[0] : null;
}

// Recibe `params` automáticamente desde el App Router
export default async function Producto({ params }) {
  const { url } = params; // Obtiene el slug desde la URL
  const resultado = await getTourData(url);

  if (!resultado) {
    notFound(); // Muestra la página 404 si no encuentra datos
  }

  return (
    <div
      title={resultado.yoast_head_json?.title || "Tour"}
      description={resultado.yoast_head_json?.description || ""}
      og_title={resultado.yoast_head_json?.og_title || ""}
      og_description={resultado.yoast_head_json?.og_description || ""}
      og_locale={resultado.yoast_head_json?.og_locale || ""}
      og_url={resultado.yoast_head_json?.og_url || ""}
      og_sitename={resultado.yoast_head_json?.og_sitename || ""}
      og_image={resultado.yoast_head_json?.og_image?.[0]?.url || ""}
      og_width={resultado.yoast_head_json?.og_image?.[0]?.width || ""}
      og_height={resultado.yoast_head_json?.og_image?.[0]?.height || ""}
      og_image_type={resultado.yoast_head_json?.og_image?.[0]?.type || ""}
      twitter_card={resultado.yoast_head_json?.twitter_card || ""}
    >
      <SingleTour key={resultado.slug} resultado={[resultado]} />
    </div>
  );
}
