import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function EventHopeSpotEMPage () {
    const projectBannerData = 
        {
            projectName: "Hope Spot",
            projectType: "Sustainable Activity Experience & Mini Concert",
            clientName: "Power development fund thailand",
            serviceType: "( Events & Lifestyle Activities )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/event-Wdetail-BG-hopespot.webp"
        }

    const projectImage = [
        'images/event-Wdetail-hopespot-01.webp', 
        'images/event-Wdetail-hopespot-02.webp', 
        'images/event-Wdetail-hopespot-03.webp', 
        'images/event-Wdetail-hopespot-04.webp', 
        'images/event-Wdetail-hopespot-05.webp', 
        'images/event-Wdetail-hopespot-06.webp', 
        'images/event-Wdetail-hopespot-07.webp', 
        'images/event-Wdetail-hopespot-08.webp',
    ]

    const projectDescription = {
        clientName: 'Hope Spot',
        projectType: 'Sustainable Activity Experience & Mini Concert',
        projectDescription: '‘Hope is the most innocent & powerful thing in the world’'
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

export default EventHopeSpotEMPage