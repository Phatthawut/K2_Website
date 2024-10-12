import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function ContentHopePage () {
    const projectBannerData = 
        {
            projectName: "Hope Spot",
            projectType: "Sustainable Content",
            clientName: "Power Development Fund Thailand",
            serviceType: "( Content Creation )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/content-Wdetail-BG-hopespot.webp"
        }

    const projectImage = [
        'images/content-Wdetail-hopespot-01.webp', 
        'images/content-Wdetail-hopespot-02.webp', 
        'images/content-Wdetail-hopespot-03.webp', 
        'images/content-Wdetail-hopespot-04.webp', 
        'images/content-Wdetail-hopespot-05.webp', 
        'images/content-Wdetail-hopespot-06.webp',
        'images/content-Wdetail-hopespot-07.webp', 
        'images/content-Wdetail-hopespot-08.webp', 
    ]

    const projectDescription = {
        clientName: 'Hope Spot',
        projectType: 'Sustainable Content',
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

export default ContentHopePage