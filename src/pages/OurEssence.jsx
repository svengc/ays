import { Navbar } from '../components/Navbar'
import StatsBar from '../components/StarBar'
import { PrincipleCard } from '../components/Cards'
import Footer from '../components/Footer'


function OurEssence() {
    const principios = [
        {
            numero: "01",
            categoria: "Creatividad",
            titulo: "Cada espacio, una visión única.",
            texto: "Traducimos tu estilo de vida en composiciones únicas donde la estética y el propósito conviven en perfecta armonía. Cada ambiente nace de una idea — y culmina en un hogar irrepetible.",
            image: "https://placehold.co/600x400",
        },
        {
            numero: "02",
            categoria: "Innovación",
            titulo: "Diseño que define el mañana.",
            texto: "Evolucionamos con el diseño contemporáneo sin perder de vista lo atemporal. Incorporamos materiales, formas y tendencias que transforman los interiores del presente.",
            image: "https://placehold.co/600x400",
        },
        {
            numero: "03",
            categoria: "Calidad",
            titulo: "Elegancia que no caduca.",
            texto: "Seleccionamos cada detalle con rigor. Nuestras piezas están concebidas para perdurar — porque la verdadera elegancia es una inversión en el tiempo, no un capricho del momento.",
            image: "https://placehold.co/600x400",
        },
    ]
    return (
        <main>
            <Navbar />
            <section className="pt-24 pb-6 flex flex-col items-center justify-center w-full mt-14 bg-salvia-dark">
                <div className="w-full px-4 mb-6 md:px-16 md:pb-8 flex gap-4 md:gap-8 flex-col md:flex-row justify-center items-center">
                    <div className="w-full md:w-[50%] flex flex-col justify-center items-center">
                        <div className="w-full">
                            <p className="my-3 text-salvia-light max-w-xl text-[11px] font-outfit font-thin uppercase tracking-[4.4px]">
                                Sala & Descanso
                            </p>
                            <h1 className="text-5xl md:text-6xl text-crema font-fraunces font-thin leading-tight italic">
                                Donde el buen gusto
                                <br />
                                <span className='not-italic font-semibold'>
                                    encuentra su hogar.
                                </span>
                            </h1>
                            <hr className="w-75 border-t border-white/40 my-6" />
                            <p className="mt-3 text-xl font-outfit text-crema/50 font-thin leading-relaxed">
                                Creemos que un hogar bien concebido es la expresión más íntima del carácter de quien lo habita. Cada línea, cada textura, cada proporción habla en silencio de quien elige vivirlo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <StatsBar />
            <section className="w-full bg-crema/20 py-20 px-4 md:px-16">
                <div className="text-center mb-14">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-taupe font-outfit mb-3">
                        Lo que nos define
                    </p>
                    <h2 className="text-4xl md:text-5xl text-salvia-dark font-fraunces font-thin leading-tight">
                        Tres principios,
                        <br />
                        <span className="italic">un solo propósito.</span>
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col gap-8">
                    {principios.map((item, index) => (
                        <PrincipleCard
                            key={item.numero}
                            {...item}
                            invertido={index % 2 !== 0}
                        />
                    ))}
                </div>
            </section>
            <section className="pt-24 pb-6 flex flex-col items-center justify-center w-full mt-14 bg-salvia-dark">
                <div className="w-full px-4 mb-6 md:px-16 md:pb-8 flex gap-4 md:gap-8 flex-col md:flex-row justify-center items-center">
                    <div className="w-full md:w-[50%] flex flex-col justify-center items-center">
                        <div className="w-full">
                            <p className="my-3 text-salvia-light max-w-xl text-[11px] text-center font-outfit font-thin uppercase tracking-[4.4px]">
                                Nuestra promesa
                            </p>
                            <h1 className="text-4xl text-crema text-center font-fraunces font-thin leading-tight not-italic">
                                "Más que mobiliario, ofrecemos el
                                <br />
                                <span className='italic text-dorado font-semibold'>
                                    arte de vivir bien."
                                </span>
                            </h1>
                            <p className="mt-3 md:text-md font-outfit text-center text-crema/50 font-thin leading-relaxed">
                                Hay espacios que simplemente se habitan, y hay espacios que se sienten desde el primer instante en que se cruza su umbral. En Arte & Estilo trabajamos para que cada hogar pertenezca a esa segunda categoría — donde cada mueble tiene su razón de ser.
                            </p>
                            <div className="flex items-center justify-center mt-4 md:mt- gap-2 md:gap-4 shrink-0">
                                <button className="flex px-4 py-3 rounded-xl bg-salvia text-white text-sm font-outfit font-medium hover:opacity-90 transition-opacity">
                                    Conversemos sobre tu hogar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default OurEssence