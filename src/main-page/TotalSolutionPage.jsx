import { useEffect } from "react";

import ServiceBanner from '../components/ServiceBanner';
import ProjectCard from '../components/ProjectCard'

function TotalSolutionPage () {
    const workType = "Total Solution";
    const projectLists = [
        
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "PDF ERC",
            projectType: "Integreted Communication",
            projectImage: "images/Total_Solution_Integreted_communication.webp",
            projectBGImage: "images/service_branding_bg01.webp"
        },
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "Hope Spot",
            projectType: "360 Communication",
            projectImage: "images/Total_Solution_360_communication.webp",
            projectBGImage: "images/service_branding_bg02.webp"
        },
        {
            projectClientName: "Phibun Mangsahan Municipality",
            projectName: "Kaesapue Run", 
            projectType: "Strategic City Marketing",
            projectImage: "images/Total_Solution_Strategic_city_marketing.webp",
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

export default TotalSolutionPage

{{/* {
            projectClientName: "BMW Thailand",
            projectName: "BMW",
            projectType: "Excellence Club",
            projectImage: "images/Events_BMW_Excellence_Club.webp",
            projectBGImage: "images/service_branding_bg02.webp"
}, */}}