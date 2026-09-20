import { Link } from "react-router-dom"
import bagShop from "../assets/icons/CartIconDark.svg"

function CardHome({ category, name, price, image }) {
    return (
        <section className="w-64 h-72 rounded-2xl overflow-hidden bg-white shadow-sm">

            {/* Imagen */}
            <img
                src={image}
                alt={name}
                className="w-full h-47 object-cover"
            />

            {/* Información */}
            <div className="relative w-full h-25 p-4">

                {/* Información del producto */}
                <div className="h-full flex flex-col justify-start items-start">

                    <span className="uppercase text-[10px] text-dorado leading-4">
                        {category}
                    </span>

                    <h2 className="text-base font-medium leading-5 mt-1 text-salvia-dark">
                        {name}
                    </h2>

                    {/* Precio */}
                    <div className="mt-auto">
                        <p className="text-[14px] font-semibold leading-5 text-taupe-dark">
                            {price}
                        </p>
                    </div>

                </div>

                {/* Carrito */}
                <button className="absolute bottom-4 right-4">
                    <img
                        src={bagShop}
                        alt="Agregar al carrito"
                        className="w-4 h-4"
                    />
                </button>

            </div>
        </section>
    )
}
function CardHomeDiscount({ category, name, price, discountPrice, image, discount }) {
    return (
        <section className="w-auto h-72 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col">

            {/* Imagen */}
            <img
                src={image}
                alt={name}
                className="w-full h-36 object-cover"
            />

            {/* Información */}
            <div className="flex-1 w-full h-36 p-3 flex flex-col justify-between gap-2">

                {/* Categoría y nombre */}
                <div>
                    <span className="uppercase text-[10px] text-gray-500 leading-4">
                        {category}
                    </span>
                    <h2 className="text-base font-medium leading-5">
                        {name}
                    </h2>
                </div>

                {/* Precio */}
                <div className="flex gap-2 items-center">
                    <p className="text-[12px] text-taupe line-through leading-4">
                        {price}
                    </p>
                    <p className="text-[14px] text-salvia font-semibold leading-5">
                        {discountPrice}
                    </p>
                </div>

                {/* Botón — siempre al fondo */}
                <button className="w-full text-[11px] font-medium text-salvia bg-crema rounded-xl py-1.5">
                    Agregar al carrito
                </button>

            </div>
        </section>
    )
}

function CardCollections({ id, category, name, price, image }) {
    return (
        <Link to={`/colecciones/${id}`}>
            <section className="w-72 rounded-2xl overflow-hidden bg-white shadow-sm">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-47 object-cover"
                />
                <div className="relative w-full p-4">
                    <div className="flex flex-col justify-start items-start">
                        <span className="uppercase text-[10px] text-dorado leading-4">
                            {category}
                        </span>
                        <h2 className="text-base font-medium leading-5 mt-1 text-salvia-dark">
                            {name}
                        </h2>
                        <p className="text-[14px] font-semibold leading-5 text-taupe-dark mt-2">
                            {price}
                        </p>
                    </div>
                    <button className="w-full text-[11px] font-medium text-salvia bg-crema rounded-xl py-1.5 mt-3">
                        Ver detalle
                    </button>
                </div>
            </section>
        </Link>
    )
}

export { CardHome, CardHomeDiscount, CardCollections };