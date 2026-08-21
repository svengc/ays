import { Children } from "react"

function ProductGrid({ children }) {
    const count = Children.count(children);

    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-4",
    };

    return (
        <div className={`grid ${gridCols[count] || "grid-cols-1 md:grid-cols-4"} gap-6 justify-items-center`}>
            {Children.map(children, (child) => (
                <div className="w-90 max-w-full">
                    {child}
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;