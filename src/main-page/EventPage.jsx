import { useEffect } from "react";

import ServiceBanner from '../components/ServiceBanner';
import ProjectCard from '../components/ProjectCard'

function EventPage () {
    const workType = "Events & Lifestyle Activities";
    const projectLists = [
        
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "Hope Spot Sustainable",
            projectType: "Activity Experience & Mini Concert",
            projectImage: "images/Events_Charity_Concert.webp",
            projectBGImage: "images/service_branding_bg01.webp"
        },
        {
            projectClientName: "Saensuk Municipality",
            projectName: "Bangsaen",
            projectType: "Health Festival",
            projectImage: "images/Events_Banssean_Health_Festival.webp",
            projectBGImage: "images/service_branding_bg02.webp"
        },
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "Hope Spot", 
            projectType: "Sustainability Workshop",
            projectImage: "images/Events_Hope_spot_workshop.webp",
            projectBGImage: "images/service_branding_bg01.webp"
        },
    ]
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        
        <div className='max-w-[1920px] mx-auto'>
            <ServiceBanner bannerName= {workType}/>
                <div className='w-full'>
                {projectLists.map((project, index) => (
                    <ProjectCard
                        key={index}
                        projectClientName= {project.projectClientName}
                        projectName= {project.projectName}
                        projectType= {project.projectType}
                        projectImage= {project.projectImage}
                        projectBGImage= {project.projectBGImage}
                    />
                ))}
                </div>
            </div>
    )
}

export default EventPage

{{/* {
            projectClientName: "BMW Thailand",
            projectName: "BMW",
            projectType: "Excellence Club",
            projectImage: "images/Events_BMW_Excellence_Club.webp",
            projectBGImage: "images/service_branding_bg02.webp"
}, */}}