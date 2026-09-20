import { useState, useEffect } from 'react'
import menuIcon from '../assets/icons/MenuLines.svg'
import bagShop from "../assets/icons/CartIcon.svg"
import userIcon from "../assets/icons/UserIcon.svg"
import menuIconDark from '../assets/icons/MenuLinesDark.svg'
import bagShopDark from "../assets/icons/CartIconDark.svg"
import userIconDark from "../assets/icons/UserIconDark.svg"
import logo from "../assets/icons/logo.svg"
import logoDark from "../assets/icons/logoDark.svg"
import { Link } from "react-router-dom"

function NavbarHome() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false) // 👈 nuevo estado

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[rgba(250,250,248,0.93)] backdrop-blur-[14px] border-b border-[rgba(92,122,107,0.12)]'
                : 'bg-transparent backdrop-blur-none border-b-0'
            }`}>
            <nav className="mx-auto max-w-7xl px-5 md:px-10 py-4 flex items-center justify-between">
                <div className="relative">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)} // 👈 alterna el estado
                        className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 border-salvia/25 text-salvia-dark bg-transparent"
                    >
                        <img src={scrolled ? menuIconDark : menuIcon} alt="icono de menú" />
                        <span className={`hidden md:block text-[10px] uppercase tracking-[0.3em] font-thin ${scrolled ? 'text-salvia-dark' : 'text-white'}`}>
                            Menú
                        </span>
                    </button>
                    {menuOpen && (
                        <div className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-lg py-2 w-48">
                            <Link to="/" className="block px-4 py-2 hover:bg-gray-100 text-sm">Inicio</Link>
                            <Link to="/colecciones" className="block px-4 py-2 hover:bg-gray-100 text-sm">Productos</Link>
                            <Link to="/contacto" className="block px-4 py-2 hover:bg-gray-100 text-sm">Contacto</Link>
                        </div>
                    )}
                </div>
                <Link to="/" className="transition-opacity duration-300 hover:opacity-80">
                    <img
                        src={scrolled ? logoDark : logo}
                        alt="Arte & Estilo"
                        className="h-6 md:h-8 w-auto"
                    />
                </Link>

                <div className='flex items-center gap-2 md:gap-3'>
                    <Link to="/carrito" className='relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border transition-all duration-200 border-salvia/25 text-salvia-dark bg-transparent'>
                        <img src={scrolled ? bagShopDark : bagShop} alt="Carrito de compras" />
                    </Link>
                    <Link to="/login" className='relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border transition-all duration-200 border-salvia/25 text-salvia-dark bg-transparent'>
                        <img src={scrolled ? userIconDark : userIcon} alt="Cuenta de usuario" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default NavbarHome

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-[rgba(250,250,248,0.93)] backdrop-blur-[14px] border-b border-[rgba(92,122,107,0.12)]">
            <nav className="mx-auto max-w-7xl px-5 md:px-10 py-4 flex items-center justify-between">
                <div className="relative">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 border-salvia/25 text-salvia-dark bg-transparent"
                    >
                        <img src={menuIconDark} alt="icono de menú" />
                        <span className='hidden md:block text-[10px] uppercase tracking-[0.3em] font-thin'>
                            Menú
                        </span>
                    </button>

                    {menuOpen && (
                        <div className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-lg py-2 w-48">
                            <Link to="/" className="block px-4 py-2 hover:bg-gray-100 text-sm">Inicio</Link>
                            <Link to="/colecciones" className="block px-4 py-2 hover:bg-gray-100 text-sm">Productos</Link>
                            <Link to="/contacto" className="block px-4 py-2 hover:bg-gray-100 text-sm">Contacto</Link>
                        </div>
                    )}
                </div>

                <Link to="/" className="transition-opacity duration-300 hover:opacity-80">
                    <img
                        src={logoDark}
                        alt="Arte & Estilo"
                        className="h-6 md:h-8 w-auto"
                    />
                </Link>

                <div className='flex items-center gap-2 md:gap-3'>
                    <Link to="/carrito" className='relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border transition-all duration-200 border-salvia/25 text-salvia-dark bg-transparent'>
                        <img src={bagShopDark} alt="Carrito de compras" />
                    </Link>
                    <Link to="/login" className='relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border transition-all duration-200 border-salvia/25 text-salvia-dark bg-transparent'>
                        <img src={userIconDark} alt="Cuenta de usuario" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export { Navbar, NavbarHome };