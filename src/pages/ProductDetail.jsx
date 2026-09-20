import { useParams } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import Footer from "../components/Footer"
import Breadcrumb from "../components/Breadcrumb"
import ProductGallery from "../components/ProductGallery"
import AddToCart from "../components/AccountSelector"
import ProductTableGrid from "../components/ProductTableGrid"
import ProductGrid from "../components/ProductGrid"
import { CardCollections } from "../components/Cards"

function ProductDetail() {
    const { id } = useParams()
    const imagenesProducto = [
        "https://placehold.co/1000x700",
        "https://placehold.co/1000x700/333/fff",
        "https://placehold.co/1000x700/666/fff",
    ]
    const especificaciones = [
        { label: "Material", value: "Madera + tela" },
        { label: "Estilo", value: "Moderno / Contemporáneo" },
        { label: "Almacenamiento", value: "No incluye almacenamiento" },
        { label: "Ideal para", value: "Sala principal · Estudio · Apartamento" },
        { label: "Garantía", value: "12 meses" },
        { label: "Stock", value: "5 unidades disponibles" },
    ]


    return (
        <main>
            <Navbar />
            <section className="pt-24 flex flex-col items-center justify-center w-full ">
                <Breadcrumb
                    items={[
                        { label: "Inicio", to: "/" },
                        { label: "Colecciones", to: "/colecciones" },
                        { label: `Producto ${id}` }
                    ]}
                />
                <div className="w-full px-4 mb-6 md:px-16 md:pb-8 flex gap-4 md:gap-8 flex-col md:flex-row">
                    <div className="w-full md:w-[50%]">
                        <ProductGallery images={imagenesProducto} badge="Destacado" />
                    </div>
                    <div className="w-full md:w-[50%] flex items-start flex flex-col">
                        <div className="w-full">
                            <p className="my-3 text-dorado max-w-xl text-[11px] font-outfit font-thin uppercase tracking-[4.4px]">
                                Sala & Descanso
                            </p>
                            <h1 className="text-4xl not-italic text-salvia-dark font-fraunces font-thin leading-tight italic">
                                Sofá Módena 2P
                            </h1>
                            <p className="mt-3 text-md font-outfit text-taupe-dark font-thin leading-relaxed">
                                Sofá de dos puestos con diseño contemporáneo, líneas limpias y cojines generosos. Su tela suave y patas en madera lo convierten en una pieza protagonista para salas serenas y elegantes.
                            </p>
                            <div className="flex flex-col w-full gap-4 mt-5  items-stretch">
                                <div className="flex gap-2  md:gap-4 shrink-0">
                                    <AddToCart />
                                    <button className="flex-1 px-4 py-3 rounded-xl bg-salvia-dark text-white text-sm font-outfit font-medium hover:opacity-90 transition-opacity">
                                        Agregar al carrito
                                    </button>
                                </div>
                                <button className="w-full px-4 py-3 rounded-xl border border-taupe/40 text-salvia text-sm font-outfit font-medium flex items-center justify-center gap-2 hover:bg-crema transition-colors">
                                    Consultar disponibilidad
                                    <span>→</span>
                                </button>
                            </div>
                        </div>
                        <div className="w-full ">

                            <div className="w-full h-px bg-taupe/20 mt-9"></div>
                            <p className="my-4 text-salvia max-w-xl text-[11px] font-outfit font-thin uppercase tracking-[4.4px]">
                                Especificaciones
                            </p>

                            <ProductTableGrid specs={especificaciones} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-crema">
                <div className="w-full p-4 md:p-16 md:pb-8 flex gap-4 md:gap-8 flex-col md:flex-row">
                    <div className="w-full md:w-[50%] flex items-start flex flex-col">
                        <div className="w-full">
                            <p className="my-1 md:my-3 text-dorado max-w-xl text-[11px] font-outfit font-thin uppercase tracking-[4.4px]">
                                También te puede gustar
                            </p>
                            <h1 className="text-4xl not-italic text-salvia-dark font-fraunces font-thin leading-tight italic">
                                Piezas <span className="no italic">relacionadas</span>.
                                <div className="flex flex-col md:flex-row items-center mx-auto mb-3 md:mb-6 my-4 md:my-8 ">
                                    <ProductGrid>
                                        {/* en esta seccion, falta limitar a 4 elementos */}
                                        <CardCollections
                                            id={1}
                                            category="Sala"
                                            name="Sofá Milano"
                                            price="$ 4.200.000"
                                            image="https://placehold.co/290x210"
                                        />
                                        <CardCollections
                                            id={2}
                                            category="Dormitorio"
                                            name="Cama Oslo"
                                            price="$ 2.800.000"
                                            image="https://placehold.co/290x210"
                                        />
                                    </ProductGrid>
                                </div>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default ProductDetail