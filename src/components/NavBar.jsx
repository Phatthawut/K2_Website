import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaXmark, FaBars, FaArrowUp } from "react-icons/fa6"
import { useState, useEffect } from 'react'

function NavBar () {
    const [moblieNavVisible, setMoblieNavVisble] = useState(false)
    const [showScrollTopButton, setShowScrollTopButton] = useState(false)
    const [navBarScrolled, setNavBarScrolled] = useState(false)

    function toggleMoblieNav() {
        setMoblieNavVisble(!moblieNavVisible)
    }

    function scrollToTop() {
        window.scroll({top:0, behavior: 'smooth'})
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >50) {
                setNavBarScrolled(true)
            } else {
                setNavBarScrolled(false)
            }

            if (window.scrollY > 300) {
                setShowScrollTopButton(true)
            } else {
                setShowScrollTopButton(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBarScrolled ? 'bg-blue-800' : 'bg-transparent'}`}>
            {/*desktop nav*/}
            <nav className="hidden lg:flex items-center max-w-[1440px] mx-auto text-white text-3xl px-8">
                <div className='flex flex-1'>
                    <ul className='flex gap-4 font-semibold'>
                        <li><Link to="/">Home</Link>
                        </li>
                        <li><Link to="/ourwork">Our Work</Link></li>
                    </ul>
                    </div>
                    <div className='flex-1 flex justify-center'>
                        <Link to="/">
                        <img src='K2_white_logo.webp' alt='K2 logo'/>
                        </Link>
                    </div>
                    <div className="flex flex-1 justify-end gap-2">
                    <a href='https://www.facebook.com/k2venture'><FaFacebook /></a>
                    <a href='https://www.instagram.com/k2.venture/'><FaInstagram /></a>
                    </div>
            </nav>
            {/*mobile nav*/}
            <nav className={`sticky top-0 lg:hidden bg-blue-800 text-white text-lg pb-6 px-6 z-40 ${navBarScrolled ? 'bg-blue-800' : 'bg-transparent'}`}>
                <ul className='flex items-center justify-between'>
                    <li className='flex'>
                        <button onClick={toggleMoblieNav}>
                        {moblieNavVisible ? (<FaXmark />) : (<FaBars />) }
                        </button>
                    </li>
                    <div className='flex justify-center pl-6'>
                    <li>
                    <Link to="/">
                    <img className='w-24' src='K2_white_logo.webp' />
                    </Link>
                    </li>
                    </div>
                    <li className="flex gap-2">
                        <a href='https://www.facebook.com/k2venture'><FaFacebook /></a>
                        <a href='https://www.instagram.com/k2.venture/'><FaInstagram /></a>
                    </li>
                </ul>
            </nav>
            {moblieNavVisible && (
                <section className='bg-blue-800 text-white text-lg font-semibold'>
                    <nav className='w-full'>
                        <ul className='pl-8'>
                        <li><Link to="/">Home</Link>
                        </li>
                        <li><Link to="/OWB">Our Work</Link></li>
                        </ul>
                    </nav>
                </section>
            )}
            {showScrollTopButton && (
                <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-blue-800 text-white p-2 shadow-lg rounded-full hover:bg-blue-700 transition-colors"
                ><FaArrowUp size={24} />
                </button>
            )}
        </header>
    )
}

export default NavBar