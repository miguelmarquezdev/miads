"use client";

import Link from "next/link";


export function SingleTour({ resultado }) {
  const tour = resultado[0]; // Extraer datos del tour
  const featuredImage = tour?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.full;

  const navLink = [
    { name: "Machu Picchu", link: "/machu-picchu", tag: "18" },
    { name: "Inca Trail", link: "/inca-trail", tag: "17" },
    { name: "Choquequirao Trek", link: "/choquequirao-trek", tag: "16" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto w-full mb-32">
      <section className="bg-white rounded-t-primary">
        <div className="container mx-auto px-4 sm:px-4 md:px-4 lg:px-0 py-5 flex gap-3">
          <Link href="/" className="text-primary hover:text-blue-700">
            Home
          </Link>
          /<span>{tour?.title?.rendered}</span>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-4 md:px-4 lg:px-0">
        <main>
          <section className="flex flex-col md:flex-row gap-5">
            
             {/* Imagen Destacada */}
             <div className="w-full sm:w-full md:w-1/2">
              {featuredImage ? (
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={featuredImage.source_url}
                    width={featuredImage.width}
                    height={featuredImage.height}
                    alt={tour?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || "Imagen del Tour"}
                    className="rounded-xl"
                  />
                </div>
              ) : (
                <p>Imagen no disponible</p>
              )}
            </div>
            <div className="w-full sm:w-full md:w-1/2">
              <h1 className="font-bold text-4xl mb-5 text-secondary">
                {tour?.title?.rendered}
              </h1>
              <div
                dangerouslySetInnerHTML={{ __html: tour?.excerpt?.rendered }}
                className="text-lg"
              ></div>
              <div className="mt-5 flex gap-2">
                {tour?._embedded?.["wp:term"]?.[1]?.map((tag) => (
                  <li
                    key={tag.name}
                    className="bg-primary/5 px-3 py-1 rounded-full inline text-sm font-normal text-secondary border border-transparent hover:border-primary transition-all duration-300"
                  >
                    {tag.name}
                  </li>
                ))}
              </div>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}
