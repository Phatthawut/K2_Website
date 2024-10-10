import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function BrandingHatyaiJazzPage () {
    const projectBannerData = 
        {
            projectName: "Hatyai Jazz",
            projectType: "Visual Identity",
            clientName: "Songkhla Chamber of Commerce",
            serviceType: "( Branding )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/Branding-Wdetail-BG-hatyai-jazz.webp"
        }

    const projectImage = [
        'images/Branding-Wdetail-HatyaiJazz-01.webp', 
        'images/Branding-Wdetail-HatyaiJazz-02.webp', 
        'images/Branding-Wdetail-HatyaiJazz-03.webp', 
        'images/Branding-Wdetail-HatyaiJazz-04.webp', 
        'images/Branding-Wdetail-HatyaiJazz-05.webp', 
        'images/Branding-Wdetail-HatyaiJazz-06.webp', 
        'images/Branding-Wdetail-HatyaiJazz-07.webp', 
        'images/Branding-Wdetail-HatyaiJazz-08.webp',
    ]

    const projectDescription = {
        clientName: 'Hatyai Jazz',
        projectType: 'Visual Identity',
        projectDescription: ''
    }

    const descriptionLists = [
        {
        listname: 'Design Goal',
        description: 'สร้างสรรค์ Visual Identity ของเทศกาลดนตรี Hatyai Jazz Festival ดึงตัวตนของแบรนด์ออกมาจากความเป็น ‘ดนตรีแจ๊ส’ ผสมผสานกับตัวตนของหาดใหญ่และจังหวัดสงขลา'}
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

export default BrandingHatyaiJazzPage