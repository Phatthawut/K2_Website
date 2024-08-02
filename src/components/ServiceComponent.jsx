function ServiceComponent ({projectBGImage, serviceName, serviceType}) {
    const serviceLists = [{
        projectBGImage: "https://placehold.co/1440x600/blue/white",
        serviceName: 'Total Solution',
        serviceTypes: ['Marketing Strategy','360 Communication','Influencer Marketing', 'Digital Marketing','Marketing Research Report'],
        },
        {
            projectBGImage: "https://placehold.co/1440x600/orange/white",
            serviceName: 'Storytelling',
            serviceTypes: ['Film & Photography', 'Content Creation'],
        },
        {
            projectBGImage: "https://placehold.co/1440x600/blue/white",
            serviceName: 'Social Media',
            serviceTypes: ['Social Media Strategy','Content Planning & Scheduling'],
        },
        {
            projectBGImage: "https://placehold.co/1440x600/orange/white",
            serviceName: 'Digital',
            serviceTypes: ['Website Development', 'Digital Advertising', 'UX UI Design & Programming'],
        },
        {
            projectBGImage: "https://placehold.co/1440x600/blue/white",
            serviceName: 'Events',
            serviceTypes: ['New Experience Activities', 'Sustainability Events', 'Team Building Events', 'Lifestyle Events', 'Workshops'],
        },
        {
            projectBGImage: "https://placehold.co/1440x600/orange/white",
            serviceName: 'Branding',
            serviceTypes: ['Brand Visual Identity', 'Brand Architecture', 'Brand Strategy', 'Rebranding'],
        }
    ]   
    return (
        <>
        {serviceLists.map((serviceList, index) => 
            <div key={index} className="text-center w-full pt-4 h-56" style={{ backgroundImage: `url(${serviceList.projectBGImage})` }}>
            <h3 className="uppercase text-2xl pb-2">{serviceList.serviceName}</h3>
            {serviceList.serviceTypes.map((serviceType, index) =>
            <p key={index}>{serviceType}</p>)}
            </div>
    )}  
        </>
    );
}
export default ServiceComponent