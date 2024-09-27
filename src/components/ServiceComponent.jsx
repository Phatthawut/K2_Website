import { Link } from "react-router-dom";

function ServiceComponent () {
    const serviceLists = [{
        projectBGImage: "images/totalsolution_bg.webp",
        serviceName: 'Total Solution',
        serviceLink: '/OWB',
        serviceTypes: ['Marketing Strategy','360 Communication','Influencer Marketing', 'Digital Marketing','Marketing Research Report'],
        },
        {
            projectBGImage: "images/storytelling_bg.webp",
            serviceName: 'Storytelling',
            serviceLink: '/',
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
            serviceLink: '/',
            serviceTypes: ['Website Development', 'Digital Advertising', 'UX UI Design & Programming'],
        },
        {
            projectBGImage: "images/events_bg.webp",
            serviceName: 'Events',
            serviceLink: '/',
            serviceTypes: ['New Experience Activities', 'Sustainability Events', 'Team Building Events', 'Lifestyle Events', 'Workshops'],
        },
        {
            projectBGImage: "images/branding_bg.webp",
            serviceName: 'Branding',
            serviceLink: '/',
            serviceTypes: ['Brand Visual Identity', 'Brand Architecture', 'Brand Strategy', 'Rebranding'],
        }
    ]   
    return (
        <>
        {serviceLists.map((serviceList, index) =>  
            <Link to={serviceList.serviceLink} key={index} className="w-full">
            <div className="text-center w-full h-56 lg:h-96" style={{ backgroundImage: `url(${serviceList.projectBGImage})` }}>
            
            <h3 className="font-semibold uppercase text-2xl lg:text-5xl pt-4 lg:pt-10 pb-2">{serviceList.serviceName}</h3>
            <div className="lg:grid grid-cols-3">{serviceList.serviceTypes.map((serviceType, index) =>
            <p className="lg:text-2xl" key={index}>{serviceType}</p>)}
            </div>
            
            </div>
            </Link>
    )}  
        </>
    );
}
export default ServiceComponent