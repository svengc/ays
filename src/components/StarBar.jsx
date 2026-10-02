function StatsBar() {
    const stats = [
        { number: "12+", label: "Años de experiencia" },
        { number: "600+", label: "Piezas en catálogo" },
        { number: "3.400+", label: "Hogares transformados" },
        { number: "100%", label: "Garantía en cada pieza" },
    ]

    return (
        <section className="w-full bg-crema py-13">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-salvia-dark/50 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center justify-center px-4">
                        <p className="text-5xl md:text-6xl text-salvia font-fraunces font-thin">
                            {stat.number}
                        </p>
                        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-taupe-dark font-outfit text-center">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StatsBar