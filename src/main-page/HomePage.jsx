import HeroSection from "../components/HeroSection"
import PartnerCard from "../components/PartnerCard"
import ServiceComponent from "../components/ServiceComponent"
import {Link} from 'react-router-dom'

function HomePage () {
    const heroData =
        {
            title: "NOTH/NG /s /MPOSS/BLE",
            heroBGImage: "images/hero_bg.webp"
        }

        const bgImage = 
        {
            foundationBGImage: "images/foundation_bg.webp",
            destinationBGImage: "images/destination_bg.webp",
            teamBGImage: "images/team_bg.webp",
            serviceLogoImage: "images/service.png",
            serviceBGImage: "images/service_bg.webp",
        }

    return (
    <div className="flex flex-col max-w-[1440px] mx-auto">
        <HeroSection title={heroData.title} heroBGImage={heroData.heroBGImage} />
        {/* about 1 foundation*/}
        <div id="aboutus" style={{ backgroundImage: `url(${bgImage.foundationBGImage})` }} className="relative py-8 min-h-[400px]">
            <div className="text-sm text-white font-bold text-center pb-6 lg:text-right lg:pr-14"><h2>(k2 Venture    Creative Communication Agency)</h2></div>
            <div className="flex flex-col text-center gap-4 text-white text-lg font-bold ">        
                <h3 className="leading-4 lg:text-3xl">BUILT on the <span className="font-normal">FOUNDATION<br />of ACHIEVING</span></h3>
                <h3 className="lg:text-3xl">the IMPOSSIBLE</h3>
                <h3 className="leading-4 lg:text-3xl">WE BELIEVE in the POWER of<br /> <span className="font-normal lg:text-3xl">REACHING NEW HEIGHTS</span></h3>
                <h3 className="font-normal lg:text-3xl">and PUSHING BOUNDARIES</h3>
            </div>
            <div className="absolute left-0 bottom-0 z-10 w-full">
                <div className="w-1 h-screen bg-yellow-400 "></div>
                <div className="w-full h-1 bg-yellow-400"></div>
            </div>
        </div>
        {/* about 2 not-just*/}
        <div style={{ backgroundImage: `url(${bgImage.destinationBGImage})`}} className="relative text-center py-12 px-8 md:px-32 min-h-[600px] bg-cover bg-center">
            <div className="flex flex-col text-white py-20">
            <h3 className="w-44 pb-6 uppercase leading-4 lg:text-3xl lg:w-96 text-justify">it’s not ----<span className="italic">just</span><br /><span className="lowercase italic">the</span> <span className="font-bold"> destination</span><br />it’s <span className="lowercase italic">the </span><span className="font-bold">journey</span></h3>
            <div className="text-end pl-16 md:pl-56 lg:text-3xl leading-4">
            <h3 className="indent-4">Our agency is built on the</h3>
                <h3 className="indent-8">foundation of achieving</h3>
                <h3 className="indent-12">the impossible and to</h3>
                <h3 className="indent-16">do that we need the</h3>
			</div>
            <div className="flex justify-end pr-10 py-4">
            <hr className="w-32" /></div>
            <h3 className="flex justify-end text-left lg:text-2xl leading-4">right team<br />the right technique<br />and the right terrain</h3>
            </div>
            <div className="absolute right-0 bottom-0 h-full z-10">
                <div className="w-1 h-full bg-yellow-400 "></div>
            </div>
        </div>
        {/* section team technique terrain */}
        <div style={{ backgroundImage: `url(${bgImage.teamBGImage})`}} className="relative px-14 md:px-60 lg:flex gap-2 lg:pl-0 text-white bg-blue-700 min-h-[600px] bg-cover bg-center">
            {/* team */}
            <div className="flex flex-col items-center py-4 px-8 h-96 bg-gradient-to-b from-blue-500 from-70% lg:pt-64 lg:w-[260px]">
                <h2 className="text-3xl pb-4 uppercase">Team</h2>
                <h3 className="font-bold leading-4">Our team is a diverse group of<br />individuals brought together by<br />a Shared passion for creativity<br />and communication</h3>
                
                <p className="font-thin pt-2 leading-4 text-balance text-sm">Each member brings a unique set of skills and experiences to the table, allowing us to approach every project with fresh perspectives and innovative ideas</p>
            </div>
            {/* technique */}
            <div className="flex flex-col items-center py-4 px-8 h-96 bg-gradient-to-b from-blue-500 from-70% lg:pt-52 lg:w-[260px]">
                <h2 className="text-3xl pb-4 uppercase">Technique</h2>
                <h3 className="font-bold leading-4">We begin by thoroughly understanding<br />our clients goals and target audience.<br />Allowing us to craft strategic plans that<br />resonate and drive results</h3>
                
                <p className="font-thin pt-2 leading-4 text-balance text-sm">Our approach combines creativity data-drivenbr insights and measurable outcomes to ensure maximum impact, geared towards driving growth and success for our clients in today's dynamic market landscape</p>
            </div>
            {/* terrain */}
            <div className="flex flex-col items-center py-4 px-8 h-96 bg-gradient-to-b from-blue-500 from-70% lg:pt-40 lg:w-[260px]">
                <h2 className="text-3xl pb-4 uppercase">Terrain</h2>
                <h3 className="font-bold leading-4 text-balance">We Embody the spirit of perseverance, much like navigating the challenging terrain of a mountain, Tackling complex projects with resilience and determination</h3>
                
                <p className="font-thin pt-2 leading-4 text-balance text-sm">Just as reaching the summit of a mountain requires tenacity, Our commitment to overcoming challenges drives us to achieve expectional results for our clients</p>
            </div>
            <div className="absolute right-0 bottom-0 z-10 w-full h-full">
    <div className="absolute right-0 bottom-0 w-1 h-full bg-yellow-400"></div>
    <div className="absolute right-0 bottom-0 w-full h-1 bg-yellow-400"></div>
            </div>
        </div>

        {/* service section */}
        <div className="relative flex flex-col justify-center items-center text-white">
            <div className="flex justify-center w-full py-6" style={{ backgroundImage: `url(${bgImage.serviceBGImage})` }}>
            <img className="" src= {bgImage.serviceLogoImage} alt='service'/>
            </div>
            <ServiceComponent />
            <div className="absolute left-0 bottom-0 z-10 w-full h-full pointer-events-none">
                <div className="w-1 h-full bg-yellow-400 "></div>
                <div className="w-full h-1 bg-yellow-400"></div>
            </div>
        </div>
        <PartnerCard />
        <Link to="/OWB">
    <div>Click Me</div>
</Link>
    </div>
    )
}

export default HomePage

{/* old design team technique terrain
    
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
    */}