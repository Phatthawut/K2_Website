import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ButtomMenu() {
	const navigate = useNavigate();

	const handleNavigation = (sectionId) => {
		navigate("/");
		setTimeout(() => {
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}, 100);
	};

	return (
		<section className="max-w-[1920px] mx-auto md:text-xs">
			<div className="grid grid-cols-1 md:grid-cols-5 justify-center items-start gap-2 w-full mx-auto pt-8 font-semibold text-blue-700 bg-blue-100">
				<div className="mx-auto w-[30%] md:w-[45%]">
					<img src="K2-Logo-yellow.webp" alt="K2 Logo" />
				</div>
				<div className="flex flex-col text-center mt-4">
					<h3 className="pb-2 font-bold">Follow Us</h3>
					<div className="flex gap-2 items-center text-2xl justify-center">
						<a href="https://www.instagram.com/k2.venture?igsh=Mm04eGhrM2ZreHEx">
							<FaInstagram />
						</a>
					</div>
				</div>
				<div className="flex flex-col text-center mt-4">
					<h3 className="pb-2 font-bold">Take to Us</h3>
					<a href="tel:0971619555"> Tel. 0971619555</a>
					<a href="mailto:k2venture.info@gmail.com">k2venture.info@gmail.com</a>
				</div>
				<div className="flex-1 flex-col text-center mt-4">
					<h3 className="pb-2 font-bold">Visit Us</h3>
					<div className="-space-y-1">
						<p>K2 Venture Co.,Ltd</p>
						<p>30 Seri 9 Soi 11</p>
						<p>Suanluang, </p>
						<p>Suanluang</p>
						<p>Bangkok 10250</p>
					</div>
				</div>
				<div className="flex-1 flex-col text-center mt-4">
					<h3 className="pb-2 font-bold">Our Work</h3>
					<div className="flex flex-col gap-0">
						<button
							onClick={() => handleNavigation("services")}
							className="hover:text-blue-900"
						>
							Services
						</button>
						<button
							onClick={() => handleNavigation("partners")}
							className="hover:text-blue-900"
						>
							Partners
						</button>
						<button
							onClick={() => handleNavigation("team")}
							className="hover:text-blue-900"
						>
							Team
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ButtomMenu;
