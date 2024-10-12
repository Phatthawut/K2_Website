import { useEffect } from "react";

import ServiceBanner from '../components/ServiceBanner';
import ProjectCard from '../components/ProjectCard'

function ContentCreationPage () {
    const workType = "Content Creation";
    
    const projectLists = [
        
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "Hope Spot",
            projectType: "Sustainable Content",
            projectImage: "images/Content_Creation_Hope_Spot.webp",
            projectBGImage: "images/service_branding_bg01.webp",
            projectLink: "/Hope-Spot-Content"
        },
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "PDF ERC",
            projectType: "Content Management & Online Ads",
            projectImage: "images/Content_Creation_PDF_ERC.webp",
            projectBGImage: "images/service_branding_bg02.webp",
            projectLink: "/PDF-Content"
        },
        {
            projectClientName: "Digital Government Development Agency",
            projectName: "DGA VDO",
            projectType: "Presentation",
            projectImage: "images/Content_Creation_DGA_VDO.webp",
            projectBGImage: "images/service_branding_bg01.webp",
            projectLink: "/DGA-Content"
        },
        {
            projectClientName: "Saensuk Municipality",
            projectName: "Bangsaen Health Festival",
            projectType: "VDO Presentation",
            projectImage: "images/Content_Creation_Bangsaen_Health_Festival.webp",
            projectBGImage: "images/service_branding_bg02.webp",
            projectLink: "/Bangsean"
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
                        projectLink={project.projectLink}
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

export default ContentCreationPage