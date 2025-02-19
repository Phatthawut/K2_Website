import { useState } from "react";
import { FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";

function ContactForm() {
	const [isOpen, setIsOpen] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			const result = await emailjs.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				e.target,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			);

			console.log("Email sent successfully:", result.text);
			setSubmitStatus("success");
			e.target.reset();
			// Close the form after successful submission
			setTimeout(() => {
				setIsOpen(false);
				setSubmitStatus(null);
			}, 2000);
		} catch (error) {
			console.error("Email send failed:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			{/* Floating Button */}
			<button
				onClick={() => setIsOpen(true)}
				className="fixed bottom-24 right-6 z-50 bg-yellow-400 text-blue-900 p-4 rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300"
			>
				<BsChatDotsFill className="text-2xl" />
			</button>

			{/* Modal Overlay */}
			{isOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
					{/* Modal Content */}
					<div className="relative w-full max-w-md bg-blue-700 text-white rounded-lg shadow-xl">
						{/* Close Button */}
						<button
							onClick={() => setIsOpen(false)}
							className="absolute top-4 right-4 text-white hover:text-gray-300"
						>
							<FaTimes className="text-xl" />
						</button>

						<div className="p-8">
							<h2 className="text-3xl font-bold mb-8 text-center">
								Contact Us
							</h2>

							{/* Social Links */}
							<div className="flex gap-6 mb-8 justify-center">
								<a
									href="https://facebook.com"
									className="text-3xl hover:text-blue-300"
								>
									<FaFacebook />
								</a>
								<a
									href="https://instagram.com"
									className="text-3xl hover:text-blue-300"
								>
									<FaInstagram />
								</a>
							</div>

							{/* Contact Form */}
							<div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium mb-2"
										>
											Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											className="w-full px-4 py-2 bg-white/20 rounded border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
											placeholder="Your Name"
											required
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium mb-2"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											className="w-full px-4 py-2 bg-white/20 rounded border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
											placeholder="your.email@example.com"
											required
										/>
									</div>

									<div>
										<label
											htmlFor="subject"
											className="block text-sm font-medium mb-2"
										>
											Subject
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											className="w-full px-4 py-2 bg-white/20 rounded border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
											placeholder="Message Subject"
											required
										/>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium mb-2"
										>
											Message
										</label>
										<textarea
											id="message"
											name="message"
											rows="4"
											className="w-full px-4 py-2 bg-white/20 rounded border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
											placeholder="Your Message"
											required
										></textarea>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full py-3 px-6 bg-yellow-400 text-blue-900 font-semibold rounded hover:bg-yellow-300 transition duration-300 disabled:opacity-50"
									>
										{isSubmitting ? "Sending..." : "Send Message"}
									</button>

									{submitStatus === "success" && (
										<p className="text-green-400 text-center">
											Message sent successfully!
										</p>
									)}
									{submitStatus === "error" && (
										<p className="text-red-400 text-center">
											Failed to send message. Please try again.
										</p>
									)}
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ContactForm;
