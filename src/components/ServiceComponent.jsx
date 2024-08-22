function ServiceComponent ({projectBGImage, serviceName, serviceType}) {
    const serviceLists = [{
        projectBGImage: "images/totalsolution_bg.webp",
        serviceName: 'Total Solution',
        serviceTypes: ['Marketing Strategy','360 Communication','Influencer Marketing', 'Digital Marketing','Marketing Research Report'],
        },
        {
            projectBGImage: "images/storytelling_bg.webp",
            serviceName: 'Storytelling',
            serviceTypes: ['Film & Photography', 'Content Creation'],
        },
        {
            projectBGImage: "images/socialmedia_bg.webp",
            serviceName: 'Social Media',
            serviceTypes: ['Social Media Strategy','Content Planning & Scheduling'],
        },
        {
            projectBGImage: "images/digital_bg.webp",
            serviceName: 'Digital',
            serviceTypes: ['Website Development', 'Digital Advertising', 'UX UI Design & Programming'],
        },
        {
            projectBGImage: "images/events_bg.webp",
            serviceName: 'Events',
            serviceTypes: ['New Experience Activities', 'Sustainability Events', 'Team Building Events', 'Lifestyle Events', 'Workshops'],
        },
        {
            projectBGImage: "images/branding_bg.webp",
            serviceName: 'Branding',
            serviceTypes: ['Brand Visual Identity', 'Brand Architecture', 'Brand Strategy', 'Rebranding'],
        }
    ]   
    return (
        <>
        {serviceLists.map((serviceList, index) => 
            <div key={index} className="text-center w-full pt-4 h-56 lg:h-96" style={{ backgroundImage: `url(${serviceList.projectBGImage})` }}>
            <h3 className="uppercase text-2xl pb-2">{serviceList.serviceName}</h3>
            {serviceList.serviceTypes.map((serviceType, index) =>
            <p key={index}>{serviceType}</p>)}
            </div>
    )}  
        </>
    );
}
export default ServiceComponent