import { useState, useEffect } from 'react'
import menuIcon from '../assets/icons/MenuLines.svg'
import bagShop from "../assets/icons/CartIcon.svg"
import userIcon from "../assets/icons/UserIcon.svg"
import menuIconDark from '../assets/icons/MenuLinesDark.svg'
import bagShopDark from "../assets/icons/CartIconDark.svg"
import userIconDark from "../assets/icons/UserIconDark.svg"
import logo from "../assets/icons/logo.svg"
import logoDark from "../assets/icons/logoDark.svg"

function NavbarHome() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[rgba(250,250,248,0.93)] backdrop-blur-[14px] border-b border-[rgba(92,122,107,0.12)]'
                : 'bg-transparent backdrop-blur-none border-b-0'
                }`}
        >
            <nav className="mx-auto max-w-7xl px-5 md:px-10 py-4 flex items-center justify-between">
                <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 border-salvia/25 text-salvia-dark bg-transparent">
                        <img src={scrolled ? menuIconDark : menuIcon} alt="icono de menú" />
                        <span className={`hidden md:block text-[10px] uppercase tracking-[0.3em] font-thin ${scrolled ? 'text-salvia-dark' : 'text-white'
                            }`}>
                            Menú
                        </span>
                    </button>
                </div>

                <button className="transition-opacity duration-300 hover:opacity-80">
                    <img
                        src={scrolled ? logoDark : logo}
                        alt="Arte & Estilo"
                        className="h-6 md:h-8 w-auto"
                    />
                </button>

                <div className='flex items-center gap-2 md:gap-3'>
                    <button className='relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border transition-all duration-200 border-salvia/25 text-salvia-dark bg-transparent'>
                        <img src={scrolled ? bagShopDark : bagShop} alt="Carrito de compras" />
                    </button>
                    <button className='relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border transition-all duration-200 border-salvia/25 text-salvia-dark bg-transparent'>
                        <img src={scrolled ? userIconDark : userIcon} alt="Carrito de compras" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

function Navbar() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-[rgba(250,250,248,0.93)] backdrop-blur-[14px] border-b border-[rgba(92,122,107,0.12)]">
            <nav className="mx-auto max-w-7xl px-5 md:px-10 py-4 flex items-center justify-between">
                <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 border-salvia/25 text-salvia-dark bg-transparent">
                        <img src={menuIconDark} alt="icono de menú" />
                        <span className='hidden md:block text-[10px] uppercase tracking-[0.3em] font-thin'>
                            Menú
                        </span>
                    </button>
                </div>

                <button className="transition-opacity duration-300 hover:opacity-80">
                    <img
                        src={logoDark}
                        alt="Arte & Estilo"
                        className="h-6 md:h-8 w-auto"
                    />
                </button>

                <div className='flex items-center gap-2 md:gap-3'>
                    <button className='relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border transition-all duration-200 border-salvia/25 text-salvia-dark bg-transparent'>
                        <img src={bagShopDark} alt="Carrito de compras" />
                    </button>
                    <button className='relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border transition-all duration-200 border-salvia/25 text-salvia-dark bg-transparent'>
                        <img src={userIconDark} alt="Carrito de compras" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export { Navbar, NavbarHome };