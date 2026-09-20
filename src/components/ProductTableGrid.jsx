import React from 'react'

function ProductTableGrid({ specs }) {   {/* 👈 aquí faltaba recibirla */}
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {specs.map((spec, index) => (
                <div key={index}>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-taupe font-outfit">
                        {spec.label}
                    </p>
                    <p className="text-md text-salvia-dark font-outfit mt-1">
                        {spec.value}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default ProductTableGrid