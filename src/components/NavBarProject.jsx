import { Link } from "react-router-dom";

function NavBarProject () {
    return (
        <nav>
            <h2 className="bg-blue-800 h-24 max-w-[1920px] mx-auto text-white text-3xl px-8">new nav</h2>
            <Link to="/">Home</Link>
        </nav>
    )
}

export default NavBarProject