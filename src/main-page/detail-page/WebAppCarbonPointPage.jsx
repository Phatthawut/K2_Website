import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function WebAppCarbonPointPage () {
    const projectBannerData = 
        {
            projectName: "Hope Spot",
            projectType: "Carbon Point Web App",
            clientName: "Power development fund thailand",
            serviceType: "( Website & Web App Development )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/webApp-Wdetail-BG-carbonPoint.webp"
        }

    const projectImage = [
        'images/webApp-Wdetail-carbonPoint-01.webp', 
        'images/webApp-Wdetail-carbonPoint-02.webp', 
        'images/webApp-Wdetail-carbonPoint-03.webp', 
        'images/webApp-Wdetail-carbonPoint-04.webp', 
        'images/webApp-Wdetail-carbonPoint-05.webp', 
        'images/webApp-Wdetail-carbonPoint-06.webp', 
    ]

    const projectDescription = {
        clientName: 'Hope Spot',
        projectType: 'Carbon Point Web App',
        projectDescription: '‘Hope is the most innocent & powerful thing in the world’'
    }

    const descriptionLists = [
        {
            listname: 'test 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aut fugiat animi debitis suscipit nihil numquam accusantium nisi, maxime enim maiores dolorem repudiandae quo quae distinctio blanditiis corrupti earum quisquam.'}
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

export default WebAppCarbonPointPage