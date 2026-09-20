import { useState } from "react"

function AddToCart() {
    const [cantidad, setCantidad] = useState(1)

    const disminuir = () => {
        if (cantidad > 1) setCantidad(cantidad - 1)
    }

    const aumentar = () => {
        setCantidad(cantidad + 1)
    }

    return (
        <div className="flex items-center gap-4 px-4 py-3 rounded-xl border border-taupe/40"> {/* 👈 sin w-full */}
            <button onClick={disminuir} className="text-salvia-dark text-lg w-4 text-center">
                −
            </button>
            <span className="text-salvia-dark font-outfit min-w-[16px] text-center">
                {cantidad}
            </span>
            <button onClick={aumentar} className="text-salvia-dark text-lg w-4 text-center">
                +
            </button>
        </div>
    )
}

export default AddToCart