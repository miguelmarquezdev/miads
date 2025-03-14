"use server";

import Singleblog from "@/components/single-blog";
import { notFound } from "next/navigation";

// Función para obtener los datos del blog
async function getBlogData(slug) {
    const res = await fetch(
        `https://app.enjoyperu.org/wp-json/wp/v2/posts?slug=${slug}&_embed=true`,
        { cache: "no-store" }
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data.length > 0 ? data[0] : null;
}

// Componente principal
export default async function Blog({ params }) {
    const { url } = params;
    const resultado = await getBlogData(url);

    if (!resultado) {
        notFound(); // Redirige a 404 si no encuentra el blog
    }

    return (
        <div>
            <Singleblog key={resultado.slug} resultado={[resultado]} />
        </div>
    );
}
