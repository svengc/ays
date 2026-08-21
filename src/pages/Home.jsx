import { CardHome, CardHomeDiscount } from "../components/Cards"
import ProductGrid from "../components/ProductGrid"
import fondoSection from "../assets/Section.jpg"
import Footer from "../components/Footer"
import {NavbarHome} from "../components/Navbar"

function Home() {
    return (
        <main className="">
            <NavbarHome>

            </NavbarHome    >
            <section
                style={{ backgroundImage: `url(${fondoSection})` }}
                className="w-full h-screen bg-cover bg-center flex items-center"
            >
                <div className="w-full px-8 md:px-16">
                    <p className="mt-4 text-salvia-light max-w-xl text-[11px] font-outfit font-thin uppercase tracking-[4.4px]">
                        Colección 2025
                    </p>
                    <h1 className="text-5xl md:text-8xl  text-white font-fraunces font-thin">
                        Cada espacio, <br /> <span className="font-semibold ">una historia.</span>
                    </h1>
                    <div className="flex flex-col md:flex-row md:gap-4">
                        <button className="mt-6 px-10 py-3 rounded-3xl bg-salvia text-white text-start md:text-center text-sm font-outfit hover:bg-gray-100">
                            Ver Colecciones
                        </button>
                        <button className="mt-6 px-10 py-3 rounded-3xl text-white text-start md:text-center text-sm font-outfit border border-white hover:bg-gray-100">
                            Nuestra Esencia
                        </button>
                    </div>
                </div>
            </section>
            <section className="py-20 md:py-28 px-5 md:px-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6 justify-between">
                    <div className="">
                        <p className="text-[11px] tracking-[4px] mb-3 uppercase font-outfit text-salvia-light">
                            Explorar
                        </p>
                        <h2 className="text-5xl md:text-5xl text-salvia-dark font-fraunces font-thin">
                            Algo para cada <br />
                            rincón de tu casa.
                        </h2>
                    </div>
                    <div className="flex justify-end items-end">
                        <p>Muebles, mesas, sillas y comedores — todo lo que necesitas.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 grid-rows-[250px_260px] auto-rows-62.5 mb-3">
                    <div className="col-span-2 row-span-1 bg-cover bg-center" style={{ backgroundImage: `url(https://placehold.co/800x600)` }}></div>
                    <div className="col-span-1 row-span-2 md:col-span-2 md:row-span-2 bg-cover bg-center" style={{ backgroundImage: `url(https://placehold.co/600x900)` }}></div>
                    <div className="col-span-1 row-span-1 bg-cover bg-center" style={{ backgroundImage: `url(https://placehold.co/600x500)` }}></div>
                    <div className="col-span-1 row-span-1 bg-cover bg-center" style={{ backgroundImage: `url(https://placehold.co/600x500)` }}></div>
                </div>
            </section>
            <section className="bg-crema py-12 md:py-20">
                <div className="px-5 md:px-10 mb-12 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-auto justify-between ">
                        <div className="">
                            <p className="text-[10px] tracking-[4px] mb-3 uppercase font-outfit text-salvia-light">
                                Explorar
                            </p>
                            <h2 className="text-3xl md:text-4xl text-salvia-dark font-fraunces font-thin">
                                Algo para cada <br />
                                rincón de tu casa.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="mx-auto pl-3 md:pl-13 flex gap-6 overflow-x-auto pb-4">
                    <div className="flex-none">
                        <CardHome
                            category="Sala"
                            name="Sofá Lugano"
                            price="$ 3.490.000"
                            image="https://placehold.co/290x210"
                            discount={false}
                        />
                    </div>
                    <div className="flex flex-none gap-6">
                        <CardHome
                            category="Sala"
                            name="Sofá Lugano"
                            price="$ 3.490.000"
                            image="https://placehold.co/290x210"
                            discount={false}
                        />
                    </div>
                    <div className="flex flex-none gap-6">
                        <CardHome
                            category="Sala"
                            name="Sofá Lugano"
                            price="$ 3.490.000"
                            image="https://placehold.co/290x210"
                            discount={false}
                        />
                    </div>
                    <div className="flex flex-none gap-6">
                        <CardHome
                            category="Sala"
                            name="Sofá Lugano"
                            price="$ 3.490.000"
                            image="https://placehold.co/290x210"
                            discount={false}
                        />
                    </div>
                    <div className="flex flex-none gap-6">
                        <CardHome
                            category="Sala"
                            name="Sofá Lugano"
                            price="$ 3.490.000"
                            image="https://placehold.co/290x210"
                            discount={false}
                        />
                    </div>
                    <div className="flex flex-none gap-6">
                        <CardHome
                            category="Sala"
                            name="Sofá Lugano"
                            price="$ 3.490.000"
                            image="https://placehold.co/290x210"
                            discount={false}
                        />
                    </div>
                    <div className="flex flex-none gap-6">
                        <CardHome
                            category="Sala"
                            name="Sofá Lugano"
                            price="$ 3.490.000"
                            image="https://placehold.co/290x210"
                            discount={false}
                        />
                    </div>
                    <div className="flex flex-none gap-6">
                        <CardHome
                            category="Sala"
                            name="Sofá Lugano"
                            price="$ 3.490.000"
                            image="https://placehold.co/290x210"
                            discount={false}
                        />
                    </div>
                </div>

            </section>
            <section
                style={{ backgroundImage: `url(${fondoSection})` }}
                className="w-full h-150 bg-cover bg-center flex items-center"
            >
                <div className="w-full px-8 md:px-16">

                    <p className="my-4 text-salvia-light max-w-xl text-[11px] font-outfit uppercase tracking-[4.4px]">
                        Nuestra filosofía
                    </p>
                    <h2 className="text-3xl md:text-5xl max-w-xl text-white font-fraunces font-thin">
                        "El buen diseño no llama la atención. <br /> <span className="font-bold">Transforma el espacio."</span>
                    </h2>
                    <div className="flex flex-col md:flex-row md:gap-4">
                        <button className="mt-6 px-10 py-3 rounded-3xl bg-dorado text-white text-start md:text-center text-sm font-outfit hover:bg-gray-100">
                            Conocer nuestra esencia
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-crema py-20 md:py-28 px-5 md:px-10">
                <div className="mb-10 md:mb-14 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-6 justify-between">
                        <div className="">
                            <p className="text-[11px] tracking-[4px] mb-3 uppercase font-outfit text-salvia-light">
                                Ofertas
                            </p>
                            <h2 className="text-3xl md:text-5xl text-salvia-dark font-fraunces font-thin">
                                Buen precio, <br />
                                <span className="">mejor pieza.</span>
                            </h2>
                        </div>
                        <div className="max-w-xs text-sm leading-relaxed">
                            <p>Porque renovar tu espacio no debería ser un lujo. Estas ofertas no duran para siempre.</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto">
                    <ProductGrid>
                        <CardHomeDiscount
                            category="Sala"
                            name="Sofá Milano"
                            price="$ 4.200.000"
                            discountPrice="$ 3.490.000"
                            image="https://placehold.co/290x210"
                        />
                        <CardHomeDiscount
                            category="Dormitorio"
                            name="Cama Oslo"
                            price="$ 2.800.000"
                            discountPrice="$ 2.190.000"
                            image="https://placehold.co/290x210"
                        />
                        <CardHomeDiscount
                            category="Sala"
                            name="Sofá Milano"
                            price="$ 4.200.000"
                            discountPrice="$ 3.490.000"
                            image="https://placehold.co/290x210"
                        />
                        <CardHomeDiscount
                            category="Dormitorio"
                            name="Cama Oslo"
                            price="$ 2.800.000"
                            discountPrice="$ 2.190.000"
                            image="https://placehold.co/290x210"
                        />
                    </ProductGrid>
                </div>
            </section>
            <Footer>

            </Footer>
        </main >
        
    )
}

export default Home