import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaXmark, FaBars } from "react-icons/fa6"
import { useState } from 'react'

function NavBar () {
    const [moblieNavVisible, setMoblieNavVisble] = useState(false)

    function toggleMoblieNav() {
        setMoblieNavVisble(!moblieNavVisible)
    }
    return (
        <header>
            {/*desktop nav*/}
            <nav className='hidden lg:flex justify-between items-center bg-blue-800 text-white text-3xl px-8'>
                    <ul className='flex gap-4 font-semibold '>
                        <li><Link to="/">Home</Link>
                        </li>
                        <li><Link to="/ourwork">Our Work</Link></li>
                    </ul>
                    <div>
                        <Link to="/">
                        <img className='w-24' src='https://placehold.co/240' />
                        </Link>
                    </div>
                    <div className="flex gap-2">
                            <a href='/'><FaFacebook /></a>
                            <a href='/'><FaInstagram /></a>
                    </div>
            </nav>
            {/*mobile nav*/}
            <nav className='sticky top-0 lg:hidden'>
                <ul className='flex justify-between items-center bg-blue-800 text-white text-lg pb-6 px-6'>
                    <li className='lg:hidden'>
                        <button onClick={toggleMoblieNav}>
                        {moblieNavVisible ? (<FaXmark />) : (<FaBars />) }
                        </button>
                    </li>
                    <li>
                    <Link to="/">
                    <img className='w-24' src='https://placehold.co/240' />
                    </Link>
                    </li>
                    <li className="flex gap-2">
                        <a href='/'><FaFacebook /></a>
                        <a href='/'><FaInstagram /></a>
                    </li>
                </ul>
            </nav>
            {moblieNavVisible && (
                <section className='bg-blue-800 text-white text-lg font-semibold'>
                    <nav className='w-full'>
                        <ul className='pl-8'>
                        <li><Link to="/">Home</Link>
                        </li>
                        <li><Link to="/ourwork">Our Work</Link></li>
                        </ul>
                    </nav>
                </section>
            )}
        </header>
    )
}

export default NavBar