import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function ContentDGAPage () {
    const projectBannerData = 
        {
            projectName: "DGA VDO",
            projectType: "Presneattion",
            clientName: "Digital Government Development Agency",
            serviceType: "( Content Creation )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/content-Wdetail-BG-DGA.webp"
        }

    const projectImage = [
        'images/content-Wdetail-DGA-01.webp', 
        'images/content-Wdetail-DGA-02.webp', 
        'images/content-Wdetail-DGA-03.webp', 
        'images/content-Wdetail-DGA-04.webp', 
        'images/content-Wdetail-DGA-05.webp', 
        'images/content-Wdetail-DGA-06.webp', 
    ]

    const projectDescription = {
        clientName: 'DGA VDO',
        projectType: 'Presentation',
        projectDescription: 'Content Management & Online Ads นำเนื้อหาที่มีอยู่ของกองทุนมาใช้ประโยชน์โดยการ'
    }

    const descriptionLists = [
        {
        listname: 'Simplify Content',
        description: 'การรวบรวมเนื้อหาจากโครงการที่ผ่านมามาทำการ Re-Arrange/Re-Edit/Re-write เพื่อให้เหมาะสมกับกลุ่มเป้าหมาย'},
        {
        listname: 'Simplify Content',
        description: 'การรวบรวมเนื้อหาจากโครงการที่ผ่านมามาทำการ Re-Arrange/Re-Edit/Re-write เพื่อให้เหมาะสมกับกลุ่มเป้าหมาย'},
        {
        listname: 'Simplify Content',
        description: 'การรวบรวมเนื้อหาจากโครงการที่ผ่านมามาทำการ Re-Arrange/Re-Edit/Re-write เพื่อให้เหมาะสมกับกลุ่มเป้าหมาย'},
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

export default ContentDGAPage