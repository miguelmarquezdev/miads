import Link from "next/link";

async function getData() {
    const res = await fetch(`https://app.enjoyperu.org/wp-json/wp/v2/posts?_embed=true`, { cache: "no-store" });
    const resultado = await res.json();
    const trabajos = resultado.filter((trabajo) => trabajo.categories[1] == "3");
    const blogs = resultado.filter((blog) => blog.categories[0] == "9");
    return { trabajos, blogs };
}

export default async function Trabajos() {
    const { trabajos, blogs } = await getData();

    return (
        <section>
            <div className="w-full h-screen relative bg-no-repeat bg-cover bg-center overflow-x-hidden">
                <div className="absolute top-0 w-full flex items-center h-screen justify-center">
                    <div className="w-5/12 hidden lg:block bg-secondary h-full relative overflow-hidden burbujas">
                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <div className="w-full sm:w-full lg:w-7/12 bg-cosmo h-full bg-cover bg-center relative"></div>
                </div>
                <div className="flex items-center relative h-full w-full mx-auto max-w-screen-xl sm:px-4 px-4 lg:px-4 xl:px-0">
                    <h1 className="text-white md:text-7xl font-bold max-w-screen-xl w-4/5 text-4xl leading-normal md:leading-none">
                        Experto en el desarrollo de soluciones digitales.
                    </h1>
                </div>
            </div>

            <main>
                <section className="py-32 w-full max-w-screen-xl mx-auto">
                    <div className="flex flex-col sm:flex-row lg:flex-row xl:flex-row xl:gap-32 lg:gap-32 gap-7 sm:px-4 sm:gap-5 px-4 lg:px-4 xl:px-0">
                        <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 ">
                            <p className="text-3xl leading-10 font-medium">
                                Somos un equipo de desarrolladores web altamente creativos con una visión clara para la creación y desarrollo de productos digitales innovadores.
                            </p>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2">
                            <p className="text-lg left-8">
                                <span className="italic font-medium">M.IA. Digital Solutions</span> no es la típica agencia de marketing...
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-32 w-full max-w-screen-xl mx-auto relative">
                    <div className="grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 sm:grid-cols-3 gap-10 sm:px-4 px-4 lg:px-4 xl:px-0">
                        {trabajos.map((post) => (
                            <Link href={`/proyecto/${post.slug}`} key={post.slug}>
                                <div className="w-full overflow-hidden rounded-2xl hover:scale-105 transition-all duration-300 ease-out">
                                    <img
                                        src={post.yoast_head_json.og_image[0]?.url || ""}
                                        alt={post.yoast_head_json.og_image[0]?.url || "Imagen"}
                                    />
                                </div>
                                <h1 className="font-semibold text-xl uppercase mt-5 mb-3 text-secondary">
                                    {post.title.rendered}
                                </h1>
                                <ul className="flex gap-3 flex-wrap">
                                    {post._embedded["wp:term"][1]?.map((tag) => (
                                        <li className="bg-primary/5 px-3 py-1 rounded-full inline text-sm font-normal text-secondary" key={tag.name}>
                                            {tag.name}
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="bg-neutral-100">
                    <div className="w-full max-w-screen-xl mx-auto py-32 ">
                        <div className="grid grid-cols-1">
                            {blogs.map((blog) => (
                                <article className="flex flex-col gap-2 border-t border-neutral-300 py-10 px-10 hover:bg-neutral-300/20" key={blog.id}>
                                    <Link href={`/blog/${blog.slug}`}>
                                        <ul className="flex gap-3 flex-wrap">
                                            {blog._embedded["wp:term"][1]?.map((tag) => (
                                                <li className="text-primary text-lg capitalize" key={tag.name}>
                                                    {tag.name}
                                                </li>
                                            ))}
                                        </ul>
                                        <h1 className="font-bold text-3xl text-secondary">
                                            {blog.title.rendered}
                                        </h1>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
}
