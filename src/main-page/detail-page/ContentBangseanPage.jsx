import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function ContentBangseanPage () {
    const projectBannerData = 
        {
            projectName: "Bangsean",
            projectType: "Health Festival",
            clientName: "Saensuk Municipality",
            serviceType: "( Content Creation )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/content-Wdetail-BG-Bangsean.webp"
        }

    const projectImage = [
        'images/content-Wdetail-Bangsean-01.webp', 
        'images/content-Wdetail-Bangsean-02.webp', 
        'images/content-Wdetail-Bangsean-03.webp', 
        'images/content-Wdetail-Bangsean-04.webp', 
        'images/content-Wdetail-Bangsean-05.webp', 
        'images/content-Wdetail-Bangsean-06.webp', 
    ]

    const projectDescription = {
        clientName: 'Bangsaen',
        projectType: 'Health Festival VDO Presnetation',
        projectDescription: 'รับชมผลงานเต็มได้ที่ Vimeo K2 http://vimeo.com/793236248'
    }

    const descriptionLists = [
        {
        listname: '',
        description: ''}
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-[1920px] mx-auto">
            <BandnerProjectDetail bannerDetail={projectBannerData}/>
            <ProjectDetailImageCard imageList={projectImage}/>
            <ProjectDetailContent projectDetailDescription={projectDescription} descriptionList={descriptionLists}/>
        </div>
    )
}

export default ContentBangseanPage