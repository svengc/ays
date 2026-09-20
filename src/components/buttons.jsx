const categorias = ["Todos", "Sala", "Comedor", "Dormitorio", "Auxiliares"]


function ButtonsCollections() {
    return (
        <div className="flex gap-3 flex-wrap">
            {categorias.map((categoria) => (
                <button
                    key={categoria}
                    className="px-4 py-2 rounded-full border transition-all duration-200 border-salvia/25 text-salvia-dark bg-transparent"
                >
                    <p>{categoria}</p>
                </button>
            ))}
        </div>
    )
}

export {ButtonsCollections}