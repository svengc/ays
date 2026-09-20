import { Link } from "react-router-dom"

function Breadcrumb({ items }) {
    return (
        <nav className="w-full px-4 md:px-16 py-4">
            <div className="flex items-center gap-2 text-xs md:text-sm font-outfit tracking-wide">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1

                    return (
                        <span key={index} className="flex items-center gap-2">
                            {isLast ? (
                                <span className="uppercase text-salvia-dark font-medium tracking-[0.15em]">
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    to={item.to}
                                    className="text-taupe hover:text-salvia-dark transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                            {!isLast && <span className="text-taupe">/</span>}
                        </span>
                    )
                })}
            </div>
        </nav>
    )
}

export default Breadcrumb