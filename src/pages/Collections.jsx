import { Navbar } from "../components/Navbar"
import { ButtonsCollections } from "../components/buttons"
import ProductGrid from "../components/ProductGrid"
import { CardCollections } from "../components/Cards"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import Breadcrumb from "../components/Breadcrumb"

function Collections() {
    return (
        <main>
            <Navbar />
            <section className="pt-24 flex flex-col items-center justify-center w-full bg-crema">
                <Breadcrumb
                    items={[
                        { label: "Inicio", to: "/" },
                        { label: "Colecciones", to: "/colecciones" }
                    ]}
                />
                <div className="w-full px-4 mb-6 md:px-16 md:pb-8  flex gap-4 md:gap-8 md:justify-between flex-col md:flex-row ">
                    <div>
                        <p className="md:mt-4 text-salvia md:max-w-xl text-[8px] font-outfit font-thin uppercase tracking-[4.4px] ">
                            Catálogo
                        </p>
                        <h1 className="text-4xl md:text-5xl text-salvia-dark font-fraunces font-thin leading-tight italic mt-3">
                            <span className="not-italic">Nuestras.</span> <br /> Colecciones.
                        </h1>
                    </div>
                    <div className=" flex md:items-end justify-end md:text-end md:max-w-md text-xs md:text-sm">
                        <p>
                            Piezas pensadas para quienes eligen vivir con intención. Cada pieza fue seleccionada para transformar tu hogar en un espacio que se siente, se recuerda y se atesora.
                        </p>
                    </div>
                </div>
                <div className="w-full px-4 md:px-16 mb-8 md:mb-12 flex justify-start items-center">
                    <ButtonsCollections />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center mx-auto mb-8 md:mb-16 px-4 md:px-16">
                    <ProductGrid>
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
                        <CardCollections
                            id={3}
                            category="Sala"
                            name="Sofá Milano"
                            price="$ 4.200.000"
                            image="https://placehold.co/290x210"
                        />
                        <CardCollections
                            id={4}
                            category="Dormitorio"
                            name="Cama Oslo"
                            price="$ 2.800.000"
                            image="https://placehold.co/290x210"
                        />
                        <CardCollections
                            id={5}
                            category="Sala"
                            name="Sofá Milano"
                            price="$ 4.200.000"
                            image="https://placehold.co/290x210"
                        />
                        <CardCollections
                            id={6}
                            category="Dormitorio"
                            name="Cama Oslo"
                            price="$ 2.800.000"
                            image="https://placehold.co/290x210"
                        />
                        <CardCollections
                            id={7}
                            category="Sala"
                            name="Sofá Milano"
                            price="$ 4.200.000"
                            image="https://placehold.co/290x210"
                        />
                        <CardCollections
                            id={8}
                            category="Dormitorio"
                            name="Cama Oslo"
                            price="$ 2.800.000"
                            image="https://placehold.co/290x210"
                        />
                    </ProductGrid>
                </div>
            </section>
            <Outlet />
            <Footer />
        </main>
    )
}

export default Collections
