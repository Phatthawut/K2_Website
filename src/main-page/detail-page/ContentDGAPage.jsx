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
        projectDescription: 'รับชมผลงานเต็มได้ที่ Vimeo K2 https://vimeo.com/722851862'
    }

    const descriptionLists = [
        {
        listname: 'Goals',
        description: 'K2 Venture ทำงานร่วมกับสำนักงานพัฒนารัฐบาลดิจิทัล(องค์การมหาชน) หรือ DGA ในการจัดทำ VDO PRESENTATION เพื่อนำเสนอต่อนายกรัฐมนตรี ในการประชุมคณะรัฐมนตรี<!--split-->เราต้องเล่าเรื่องการทำงานและการให้ความสำคัญในการพัฒนาระบบดิจิทัลของหน่วยงานรัฐบาลในภาพรวมทุกมิติให้สั้นกระชับเหมาะแก่การรับชมในระยะเวลาจำกัดของคณะรัฐมนตรี โดยโจทย์ที่ได้รับต้องสื่อสารครอบคลุมเนื้อหาให้ครบถ้วน สะท้อนความทันสมัยแต่เป็นทางการตามภาพลักษณ์องค์กร เพื่อขับเน้นความสำคัญของ DGA ในการเป็นหน่วยงานกลางที่เป็นผู้ประสานกำลังกับทุกองคาพยพของหน่วยงานรัฐ เพื่อขับเคลื่อนประเทศสู่การเป็นรัฐบาลดิจิทัลอย่างสมบูรณ์'}
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