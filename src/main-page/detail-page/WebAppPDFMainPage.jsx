import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function WebAppPDFMainPage () {
    const projectBannerData = 
        {
            projectName: "PDF ERC",
            projectType: "Main Website Design",
            clientName: "Power development fund thailand",
            serviceType: "( Website & Web App Development )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/webApp-Wdetail-BG-PDF-Mainsite.webp"
        }

    const projectImage = [
        'images/webApp-Wdetail-PDF-Mainsite-01.webp', 
        'images/webApp-Wdetail-PDF-Mainsite-02.webp', 
        'images/webApp-Wdetail-PDF-Mainsite-03.webp', 
        'images/webApp-Wdetail-PDF-Mainsite-04.webp', 
        'images/webApp-Wdetail-PDF-Mainsite-05.webp', 
        'images/webApp-Wdetail-PDF-Mainsite-06.webp', 
    ]

    const projectDescription = {
        clientName: 'PDF ERC',
        projectType: 'Main Website',
        projectDescription: ''
    }

    const descriptionLists = [
        {
            listname: 'Goals',
            description: 'Visual Boost เพื่อปรับเปลี่ยนหน้าตาของเว็บไซต์ให้ดูทันสมัย ช่วยส่งเสริมให้ภาพลักษณ์หน่วยงาน<!--split-->Easily Accessible เพื่อจัดระเบียบเว็บไซต์ให้ง่ายต่อการ Navigate การเข้าถึงข้อมูล<!--split-->Better Image เพื่อปรับปรุงภาพลักษณ์ของตัวเว็บไซต์ให้มีความโดดเด่นและสร้างความน่าดึงดูดให้คนได้เข้ามาดูและเรียนรู้เกี่ยวกับกองทุนพัฒนาไฟฟ้า'},
            {
            listname: 'Style',
            description: 'Modern/Minimal Visual ออกแบบให้ตัวเว็บไซต์มีความทันสมัย ดูเรียบง่าย มีความน่าดึงดูด สามารถอ่านได้ง่าย Navigate ได้อย่างสะดวก นอกจากนั้นยังมีการคุมโทนสีและ Layout ให้สม่ำเสมอตลอดทั้งเว็บไซต์<!--split-->Professional Look คำนึงถึงความเป็นทางการตลอดการออกแบบ โดยมีการควบคุมทั้งการใช้สีรูปภาพ ตัวหนังสือ และอื่นๆ เพื่อแสดงถึงความน่าเชื่อถือขององค์กร<!--split-->Block Design แบ่ง Information / Section เป็น Block เพื่อให้อ่านง่าย ย่อยง่าย ดูแล้วสบายตา รวมทั้งเสริมสร้างให้แต่ละ Block มีจุดเด่นและมี Content เป็นของตัวเอง'}
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

export default WebAppPDFMainPage