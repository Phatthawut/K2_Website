import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function EventHealthFestivalPage () {
    const projectBannerData = 
        {
            projectName: "Bangsean",
            projectType: "Health Festival",
            clientName: "Saensuk Municipality",
            serviceType: "( Events & Lifestyle Activities )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/event-Wdetail-BG-bangsean.webp"
        }

    const projectImage = [
        'images/event-Wdetail-bangsean-02.webp', 
        'images/event-Wdetail-bangsean-01.webp', 
        'images/event-Wdetail-bangsean-03.webp', 
        'images/event-Wdetail-bangsean-04.webp', 
        'images/event-Wdetail-bangsean-05.webp', 
        'images/event-Wdetail-bangsean-06.webp', 
    ]

    const projectDescription = {
        clientName: 'Saensuk Municipality',
        projectType: 'Health Festival',
        projectDescription: '’'
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

export default EventHealthFestivalPage