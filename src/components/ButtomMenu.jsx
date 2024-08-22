import { FaFacebook, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

function ButtomMenu () {
    return (
        <section>
            <div className="flex flex-col text-2xl gap-12 items-center font-semibold pt-6 text-blue-700 bg-blue-100">
                <img src="K2_blue_logo.webp" alt="placehopld"/>
                <div className="flex flex-col text-center">
                    <h3 className="pb-4">Follow Us</h3>
                    <div className="flex gap-2 items-center justify-center">
                    <FaFacebook />
                    <FaInstagram />
                    </div>
                </div>
                <div className="flex flex-col text-center">
                    <h3 className="pb-4">Take to Us</h3>
                    <a href="mailto:info@k2-venture.com">info@k2-venture.com</a>
                </div>
                <div className="flex flex-col text-center">
                    <h3 className="pb-4">Visit Us</h3>
                    <div className="space-y-[-8px]">
                    <p>K2 Venture Co.,Ltd</p>
                    <p>30 Seri 9 Soi 11</p>
                    <p>Suanluang, Suanluang</p>
                    <p>Bangkok 10250</p>
                    </div>
                </div>
                <div className="flex flex-col text-center">
                    <h3 className="pb-4">Our Work</h3>
                    <Link to="/">Services</Link>
                    <Link to="/">Partners</Link>
                    <Link to="/">Team</Link>
                    <Link to="/">Contact</Link>
                </div>
            </div>
        </section>
    )
}

export default ButtomMenu