import { useEffect } from "react";

import HeroSection from "../components/HeroSection";
import PartnerCard from "../components/PartnerCard";
import ServiceComponent from "../components/ServiceComponent";
import ContactForm from "../components/ContactForm";

function HomePage() {
	const heroData = {
		title: "NOTH/NG /S /MPOSS/BLE",
		heroBGImage: "images/hero_bg.webp",
	};

	const bgImage = {
		foundationBGImage: "images/foundation_bg.webp",
		destinationBGImage: "images/destination_bg.webp",
		teamBGImage: "images/team_bg.webp",
		serviceLogoImage: "images/service.png",
		serviceBGImage: "images/service_bg.webp",
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="flex flex-col max-w-[1920px] mx-auto">
			<HeroSection title={heroData.title} heroBGImage={heroData.heroBGImage} />
			{/* about 1 foundation*/}
			<div
				id="aboutus"
				style={{ backgroundImage: `url(${bgImage.foundationBGImage})` }}
				className="relative py-12 bg-center bg-cover lg:min-h-[560px]"
			>
				<div className="text-xs lg:text-lg text-white font-bold text-center font-Arapey pb-6 lg:pb-16 md:text-right md:pr-10">
					<h2>(K2 Venture Creative Communication Agency)</h2>
				</div>
				<div className="flex flex-col md:py-18 text-center h-full text-white text-xl font-bold md:text-3xl lg:text-4xl">
					<div className="lg:flex gap-32 justify-center items-end lg:pb-10">
						<h3 className="font-semibold leading-4 md:leading-8">
							BUILT{" "}
							<span className="font-Arapey font-normal italic">on the </span>
							<span className="font-OpenSans font-thin">
								FOUNDATION
								<br />
							</span>
							<span className="font-Arapey font-normal italic">of</span>
							<span className="font-OpenSans font-thin"> ACHIEVING</span>
						</h3>
						<h3 className="font-semibold py-4 md:py-6">
							<span className="font-Arapey font-normal italic">the </span>
							IMPOSSIBLE
						</h3>
					</div>
					<div className="font-OpenSans">
						<h3 className="font-semibold leading-4 md:leading-8 lg:-ml-72">
							WE BELIEVE{" "}
							<span className="font-Arapey font-noral italic">in the </span>{" "}
							POWER <span className="font-Arapey font-normal italic">of </span>
							<br />
							<span className="font-thin lg:-ml-20">REACHING NEW HEIGHTS</span>
						</h3>
						<h3 className="font-semibold items-end pt-6 lg:indent-48">
							<span className="font-Arapey font-normal italic">and </span>{" "}
							PUSHING BOUNDARIES
						</h3>
					</div>
				</div>
				<div className="absolute left-0 bottom-0 z-10 w-full">
					<div className="w-1 h-screen bg-yellow-400 "></div>
					<div className="w-full h-1 bg-yellow-400"></div>
				</div>
			</div>
			{/* about 2 not-just*/}
			<div
				style={{ backgroundImage: `url(${bgImage.destinationBGImage})` }}
				className="relative text-center py-8 px-8 md:px-32 min-h-[480px] bg-cover bg-center"
			>
				<div className="flex flex-col w-full gap-8 text-white py-20">
					<div className="text-left w-full uppercase leading-4 md:leading-7 text-xl md:text-3xl lg:text-5xl ">
						<h3 className="font-OpenSans font-thin">
							it&apos;s not ───
							<span className="font-Arapey italic"> just</span>
							<br />
							<span className="font-Arapey lowercase italic">the</span>
							<span className="font-semibold"> destination</span>
							<br />
							it&apos;s
							<span className="font-Arapey lowercase italic"> the </span>
							<span className="font-semibold">journey</span>
						</h3>
					</div>
					<div className="text-center lg:pl-2 md:text-xl lg:text-2xl leading-4 md:leading-5 font-OpenSans font-thin">
						<h3 className="md:-indent-[1em]">Our agency is built on the</h3>
						<h3 className="indent-[3em] md:indent-[3em]">
							foundation of achieving
						</h3>
						<h3 className="indent-[5em] md:indent-[8em]">
							the impossible and to
						</h3>
						<h3 className="indent-[7em] md:indent-[13em]">
							do that we need the
						</h3>
					</div>
					<div className="flex flex-col gap-4 self-end">
						<div className="divider divider-end bg-white h-0.5 w-1/2"></div>
						<h3 className="text-xl md:text-2xl lg:text-3xl font-Arapey italic text-left leading-5 md:leading-6 -mt-4">
							right team
							<br />
							the right technique
							<br />
							and the right terrain
						</h3>
					</div>
				</div>
				<div className="absolute right-0 bottom-0 h-full z-10">
					<div className="w-1 h-full bg-yellow-400 "></div>
				</div>
			</div>
			{/* section team technique terrain */}
			<div
				id="team"
				style={{ backgroundImage: `url(${bgImage.teamBGImage})` }}
				className="relative px-14 md:px-60 lg:flex gap-2 lg:pl-0 text-white bg-blue-700 min-h-[600px] bg-cover bg-center"
			>
				{/* team */}
				<div className="flex flex-col items-center py-4 px-8 h-96 bg-gradient-to-b from-blue-500 from-70% lg:pt-64 lg:w-[360px] text-balance">
					<h2 className="text-3xl font-bold pb-4 uppercase">Team</h2>
					<h3 className="leading-4 font-semibold">
						Our team is a diverse group of individuals brought together by a
						Shared passion for creativity and communication
					</h3>
					<p className="pt-2 font-thin leading-4 text-balance">
						Each member brings a unique set of skills and experiences to the
						table, allowing us to approach every project with fresh perspectives
						and innovative ideas
					</p>
				</div>
				{/* technique */}
				<div className="flex flex-col items-center py-4 px-10 h-96 bg-gradient-to-b from-blue-500 from-70% lg:pt-52 lg:w-[360px] text-balance">
					<h2 className="text-3xl font-bold pb-4 uppercase">Technique</h2>
					<h3 className="leading-4 font-semibold">
						We begin by thoroughly understanding our clients goals and target
						audience. Allowing us to craft strategic plans that resonate and
						drive results
					</h3>

					<p className="font-thin pt-2 leading-4">
						Our approach combines creativity data-drivenbr insights and
						measurable outcomes to ensure maximum impact, geared towards driving
						growth and success for our clients in today's dynamic market
						landscape
					</p>
				</div>
				{/* terrain */}
				<div className="flex flex-col items-center py-4 px-12 h-96 bg-gradient-to-b from-blue-500 from-70% lg:pt-40 lg:w-[360px] text-balance">
					<h2 className="text-3xl font-bold pb-4 uppercase">Terrain</h2>
					<h3 className="leading-4 font-semibold">
						We Embody the spirit of perseverance, much like navigating the
						challenging terrain of a mountain, Tackling complex projects with
						resilience and determination
					</h3>

					<p className="font-thin pt-2 leading-4 text-balance">
						Just as reaching the summit of a mountain requires tenacity, Our
						commitment to overcoming challenges drives us to achieve expectional
						results for our clients
					</p>
				</div>
				<div className="absolute right-0 bottom-0 z-10 w-full h-full">
					<div className="absolute right-0 bottom-0 w-1 h-full bg-yellow-400"></div>
					<div className="absolute right-0 bottom-0 w-full h-1 bg-yellow-400"></div>
				</div>
			</div>

			{/* service section */}
			<div
				id="services"
				className="relative flex flex-col justify-center items-center text-white"
			>
				<div
					className="flex justify-center w-full py-6"
					style={{ backgroundImage: `url(${bgImage.serviceBGImage})` }}
				>
					<img className="" src={bgImage.serviceLogoImage} alt="service" />
				</div>
				<ServiceComponent />
				<div className="absolute left-0 bottom-0 z-10 w-full h-full pointer-events-none">
					<div className="w-1 h-full bg-yellow-400 "></div>
					<div className="w-full h-1 bg-yellow-400"></div>
				</div>
			</div>
			<div id="partners">
				<PartnerCard />
			</div>
			<ContactForm />
		</div>
	);
}

export default HomePage;

/* old design team technique terrain
    
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);



    <div className="flex flex-col justify-center items-center py-8 px-12 text-white bg-blue-700" >
    <img className="pb-6" src='https://placehold.co/180x80' alt='team'/>
    <h3 className="leading-4"><span className="font-bold">Our team</span> <span className="italic">is</span> A DIVERSE GROUP <span className="italic">of </span> <br />
    INDIVIDUALS BROUGHT TOGETHER
    
    <div className="flex items-center w-64">
        <div className="border-t border-0 border-gray-400 flex-grow"></div>
        <div className="px-3 text-white">by A SHARED PASSION for</div>
        <div className="border-t border-0 border-white flex-grow"></div>
    </div>

    <span className="italic"> 
    CAREATIVITY and COMMUNICATION</span></h3>
    
    <h3 className="pt-4 leading-4">Each member brings<br />a unique set of skills and experiences<br />to the table, allowing us to approach<br />every project with fresh perspectives<br />and innovative ideas</h3>
</div>

<div className="text-center py-8 px-12 bg-blue-100 text-blue-800">
    <h2 className="text-3xl pb-6 uppercase font-light">Technique</h2>
    <div className="flex justify-center">
    <h3 className="text-left uppercase font-semibold leading-4 w-48">We begin <span className="text-sm lowercase italic font-normal">by </span>thoroughly understanding our clients goals <span className="text-sm lowercase italic font-normal">and </span> target audience</h3>
    <div className="mt-28 text-left leading-4 space-y-4">
    <h3>Allowing us to<br /><span className="font-bold">craft strategic plans</span><br />that resonate and<br /><span className="font-bold">drive results</span></h3>
    <h3>Our approach combines<br /><span className="font-bold">creativity<br />data-driven insights</span> and<br /><span className="font-bold">measurable outcomes</span> to<br />ensure maximum impact,</h3>
    <h3>geared towards<br /><span className="font-bold">driving growth and success<br />for our clients<br /></span> in today's dynamic market<br />landscape</h3>
    </div>
    </div>
</div>

<div className="relative flex flex-col items-center py-8 px-12 bg-blue-700 text-white">
    <h2 className="text-3xl pb-6 uppercase font-semibold">Terrain</h2>
    <h3 className="text-center uppercase leading-4">We Embody the spirit <span className="text-sm lowercase italic font-normal">of </span>perseverance,<br />much like navigating the challenging<br />terrain <span className="text-sm lowercase italic font-normal">of </span> a mountain, Tackling complex<br />projects <span className="text-sm lowercase italic font-normal">with </span> resilience <span className="text-sm lowercase italic font-normal">and </span> determination</h3>
    <img className="py-6" src='https://placehold.co/220x80' alt='terrain'/>
    <h3 className="text-center uppercase leading-4">Just <span className="text-sm lowercase italic font-normal">as </span> reaching the summit <span className="text-sm lowercase italic font-normal">of </span> a mountain<br />requires tenacity, Our commitment <span className="text-sm lowercase italic font-normal">to<br /></span> overcoming challenges drives us <span className="text-sm lowercase italic font-normal">to </span> achieve<br />expectional results <span className="text-sm lowercase italic font-normal">for </span> our clients</h3>
</div>
    */
