import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function WebAppHopespotPage () {
    const projectBannerData = 
        {
            projectName: "Hope Spot",
            projectType: "Informative Website",
            clientName: "Power development fund thailand",
            serviceType: "( Website & Web App Development )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/webApp-Wdetail-BG-webHope.webp"
        }

    const projectImage = [
        'images/webApp-Wdetail-webHope-01.webp', 
        'images/webApp-Wdetail-webHope-02.webp', 
        'images/webApp-Wdetail-webHope-03.webp', 
        'images/webApp-Wdetail-webHope-04.webp', 
        'images/webApp-Wdetail-webHope-05.webp', 
        'images/webApp-Wdetail-webHope-06.webp', 
    ]

    const projectDescription = {
        clientName: 'Hope Spot',
        projectType: 'Informative Website',
        projectDescription: ''
    }

    const descriptionLists = [
        {
            listname: 'Goals',
            description: 'สร้างสรรค์ดีไซน์และโครงสร้างข้อมูลของเว็บไซต์ Hope Spot โครงการ Sustainability Campaign ภายใต้กองทุนพัฒนาไฟฟ้า<!--split-->วางแผนการสื่อสารข้อมูลต่างๆออกมาในรูปแบบที่น่าอ่าน เป็นมิตร เข้าใจง่าย และครบถ้วนสำหรับทุกรายละเอียดของโครงการ  ไม่ว่าจะเป็นเรื่องของการบอกเล่าตัวตนของแคมเปญ ประกาศกิจกรรมอีเว้นท์และเวิร์คช้อปต่างๆ และการชักชวนให้ดาวน์โหลด Hope Spot App สะสมคะแนนโดยการทำภารกิจช่วยโลก<!--split-->ออกแบบภายใต้ Branding ของ Hope Spot ที่มี Natural Shape เป็นหลัก ไม่ geometric แบบเว็บไซท์ทั่วไป จึงต้องใช้ความละเอียดในการ Design และ Programming ให้ลงตัว'}
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

export default WebAppHopespotPage