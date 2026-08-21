function Footer() {
    return (
        <footer className="bg-linear-to-br from-[#3D5245] to-salvia-dark text-white/75">
            <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20 flex flex-col md:flex-row items-start justify-between gap-10">
                <div className="max-w-md">
                    <p className="text-[10px] font-outfit uppercase tracking-[0.4em] mb-4 text-salvia-light">
                        Contacto
                    </p>

                    <h2 className="font-fraunces font-thin text-3xl md:text-4xl text-white leading-tight mb-4">
                        ¿Tienes un proyecto
                        <br />
                        <span>en mente?</span>
                    </h2>

                    <p className="text-sm font-outfit text-white/50 leading-relaxed mb-6">
                        Nuestro equipo está listo para ayudarte a encontrar la pieza perfecta o crear un espacio a tu medida.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="tu@correo.com"
                            className="flex-1 px-4 py-3 rounded-xl text-sm outline-none border border-white/20 bg-white/10"
                        />
                        <button className="px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-all hover:opacity-90 whitespace-nowrap font-outfit bg-salvia text-white">
                            Escribirnos
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-14 gap-y-3 text-sm pt-2">
                    <button className="text-left hover:text-white transition-colors text-white/50">Inicio</button>
                    <button className="text-left hover:text-white transition-colors text-white/50">Colecciones</button>
                    <button className="text-left hover:text-white transition-colors text-white/50">Nuestra Esencia</button>
                    <button className="text-left hover:text-white transition-colors text-white/50">Contacto</button>
                    <button className="text-left hover:text-white transition-colors text-white/50">Mi perfil</button>
                    <button className="text-left hover:text-white transition-colors text-white/50">Términos de uso</button>
                </div>
            </div>
            <div className="border-t border-white/10 px-5 md:px-10 py-5 grid grid-cols-1 sm:grid-cols-3 items-center gap-3 text-[11px] tracking-wide text-white/30">
                <div className="flex justify-center sm:justify-start">
                    <button className="font-display text-base font-light tracking-[0.2em] hover:opacity-80 transition-opacity">
                        Arte <span className="text-dorado">&</span> Estilo
                    </button>
                </div>
                <span className="text-center">
                    © 2025 Arte & Estilo. Todos los derechos reservados.
                </span>
                <div className="flex justify-center sm:justify-end gap-4 text-white/50">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Pinterest</a>
                    <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer