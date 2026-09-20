import { useState } from "react"

function ProductGallery({ images, badge }) {
    const [activeImage, setActiveImage] = useState(images[0])

    return (
        <div className="w-full">
            {/* Imagen principal */}
            <div className="relative w-full h-100 rounded-3xl overflow-hidden bg-taupe/10">
                {badge && (
                    <span className="absolute top-6 left-6 px-5 py-2 rounded-full bg-dorado text-white text-xs font-outfit uppercase tracking-[0.15em] font-medium">
                        {badge}
                    </span>
                )}
                <img
                    src={activeImage}
                    alt="Producto"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Miniaturas */}
            <div className="flex gap-4 mt-4">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveImage(img)}
                        className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
                            activeImage === img
                                ? "border-salvia"
                                : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                    >
                        <img
                            src={img}
                            alt={`Vista ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ProductGallery