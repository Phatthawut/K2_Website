import { Link } from "react-router-dom";

function ServiceComponent () {
    const serviceLists = [{
        projectBGImage: "images/totalsolution_bg.webp",
        serviceName: 'Total Solution',
        serviceLink: '/Total-Solution',
        serviceTypes: ['Marketing Strategy','360 Communication','Influencer Marketing', 'Digital Marketing','Marketing Research Report'],
        },
        {
            projectBGImage: "images/storytelling_bg.webp",
            serviceName: 'Storytelling',
            serviceLink: '/Storytelling',
            serviceTypes: ['Film & Photography', 'Content Creation'],
        },
        {
            projectBGImage: "images/socialmedia_bg.webp",
            serviceName: 'Social Media',
            serviceLink: '/',
            serviceTypes: ['Social Media Strategy','Content Planning & Scheduling'],
        },
        {
            projectBGImage: "images/digital_bg.webp",
            serviceName: 'Digital',
            serviceLink: '/Digital',
            serviceTypes: ['Website Development', 'Digital Advertising', 'UX UI Design & Programming'],
        },
        {
            projectBGImage: "images/events_bg.webp",
            serviceName: 'Events',
            serviceLink: '/Events',
            serviceTypes: ['New Experience Activities', 'Sustainability Events', 'Team Building Events', 'Lifestyle Events', 'Workshops'],
        },
        {
            projectBGImage: "images/branding_bg.webp",
            serviceName: 'Branding',
            serviceLink: '/Branding',
            serviceTypes: ['Brand Visual Identity', 'Brand Architecture', 'Brand Strategy', 'Rebranding'],
        }
    ]   
    return (
        <div className="md:flex flex-col w-full">
        {serviceLists.map((serviceList, index) =>  
            <Link to={serviceList.serviceLink} key={index} className="w-full">
            <div className="w-full min-h-56 lg:h-96 bg-cover bg-center bg-blue-300" style={{ backgroundImage: `url(${serviceList.projectBGImage})`}}>
            <div className="mx-8">
                <h3 className="font-semibold uppercase text-2xl lg:text-5xl pt-4 lg:pt-10 pb-6 text-center">{serviceList.serviceName}</h3>
                <div className="lg:grid grid-cols-3">{serviceList.serviceTypes.map((serviceType, index) =>
                <p className="md:flex lg:text-2xl items-start" key={index}>{serviceType}</p>)}
                </div>
            </div>
            
            </div>
            </Link>
    )}  
        </div>
    );
}
export default ServiceComponent