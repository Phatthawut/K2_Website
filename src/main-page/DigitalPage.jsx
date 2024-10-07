import { useEffect } from "react";

import ServiceBanner from '../components/ServiceBanner';
import ProjectCard from '../components/ProjectCard'

function DigitalPage () {
    const workType = "Website & Web App Development";
    const projectLists = [
        
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "PDF ERC",
            projectType: "Main Website Design",
            projectImage: "images/Web_Development_PDF_Mainsite.webp",
            projectBGImage: "images/service_branding_bg01.webp"
        },
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "PDF ERC",
            projectType: "Mini Website Design",
            projectImage: "images/Web_Development_PDF_Minisite.webp.webp",
            projectBGImage: "images/service_branding_bg02.webp"
        },
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "Hope Spot",
            projectType: "Informative Website",
            projectImage: "images/Web_Development_Hope_Spot_informative_website.webp",
            projectBGImage: "images/service_branding_bg01.webp"
        },
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "Hope Spot",
            projectType: "Carbon Point Web App",
            projectImage: "images/Web_Development_Hope_Spot_carbon_point.webp",
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

export default DigitalPage

{{/* {
            projectClientName: "BMW Thailand",
            projectName: "BMW",
            projectType: "Excellence Club",
            projectImage: "images/Events_BMW_Excellence_Club.webp",
            projectBGImage: "images/service_branding_bg02.webp"
}, */}}