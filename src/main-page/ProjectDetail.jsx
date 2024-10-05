import { useEffect } from "react";

import BandnerProjectDetail from "../components/BandnerProjectDetail";
import ProjectDetailContent from "../components/ProjectDetailContent";
import ProjectDetailCard from "../components/ProjectDetailImageCard";

function ProjectDetail () {
    const projectDetail = [
        
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "PDF ERC",
            projectType: "Mini Website",
            projectImage: "images/service_branding_pdf.webp",
            projectBGImage: "images/service_branding_bg02.webp"
        },
        {
            projectClientName: "Power Development Fund Thailand",
            projectName: "Hope Spot",
            projectType: "Visual Identity",
            projectImage: "images/service_branding_hopespot.webp",
            projectBGImage: "images/service_branding_bg01.webp"
        },
        {
            projectClientName: "Songkla Chamber of Commerce",
            projectName: "Hatyai",
            projectType: "Visual Identity",
            projectImage: "images/service_branding_hatyai.webp",
            projectBGImage: "images/service_branding_bg02.webp"
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-[1920px] mx-auto">
            <BandnerProjectDetail />
            <ProjectDetailCard />
            <ProjectDetailContent />
        </div>
    )
}

export default ProjectDetail