import {Link} from 'react-router-dom'

function NavBar () {
    return (
        <>
        <header>
            <nav className='flex gap-2'>
                <Link to="/">
                <img src='https://placehold.co/40' />
                </Link>
                <Link to="/">Home</Link>
                <Link to="/ourwork">Our Work</Link>
            </nav>
        </header>
        </>
    )
}

export default NavBar