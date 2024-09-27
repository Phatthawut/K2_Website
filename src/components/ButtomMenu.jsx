import { FaFacebook, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

function ButtomMenu () {
    return (
        <section>
            <div className="flex flex-col md:flex-row gap-6 justify-center w-full px-6 pt-8 font-semibold text-blue-700 bg-blue-100">
                <div className="flex-1 justify-center items-center w-full md:w-1/4">
                    <img src="K2_blue_logo.webp" alt="K2 Logo"/>
                </div>
                <div className="flex flex-col text-center mt-4">
                    <h3 className="pb-2">Follow Us</h3>
                    <div className="flex gap-2 items-center justify-center">
                    <FaFacebook />
                    <FaInstagram />
                    </div>
                </div>
                <div className="flex-1 flex-col text-center mt-4">
                    <h3 className="pb-2">Take to Us</h3>
                    <a href="mailto:info@k2-venture.com">info@k2-venture.com</a>
                </div>
                <div className="flex-1 flex-col text-center mt-4 text-sm">
                    <h3 className="pb-2">Visit Us</h3>
                    <div className="-space-y-1">
                    <p>K2 Venture Co.,Ltd</p>
                    <p>30 Seri 9 Soi 11</p>
                    <p>Suanluang, </p>
                    <p>Suanluang</p>
                    <p>Bangkok 10250</p>
                    </div>
                </div>
                <div className="flex-1 flex-col leading-4 text-center mt-4">
                    <h3 className="pb-2">Our Work</h3>
                    <div><Link to="/">Services</Link></div>
                    <div><Link to="/">Partners</Link></div>
                    <div><Link to="/">Team</Link></div>
                    <div><Link to="/">Contact</Link></div>
                </div>
            </div>
        </section>
    )
}

export default ButtomMenu