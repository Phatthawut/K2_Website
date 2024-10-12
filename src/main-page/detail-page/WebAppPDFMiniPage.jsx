import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function WebAppPDFMiniPage () {
    const projectBannerData = 
        {
            projectName: "PDF ERC",
            projectType: "Mini Website Design",
            clientName: "Power development fund thailand",
            serviceType: "( Website & Web App Development )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/webApp-Wdetail-BG-PDF-Minisite.webp"
        }

    const projectImage = [
        'images/webApp-Wdetail-PDF-Minisite-01.webp', 
        'images/webApp-Wdetail-PDF-Minisite-02.webp', 
        'images/webApp-Wdetail-PDF-Minisite-03.webp', 
        'images/webApp-Wdetail-PDF-Minisite-04.webp', 
        'images/webApp-Wdetail-PDF-Minisite-05.webp', 
        'images/webApp-Wdetail-PDF-Minisite-06.webp', 
    ]

    const projectDescription = {
        clientName: 'PDF ERC',
        projectType: 'Mini Website',
        projectDescription: ''
    }

    const descriptionLists = [
        {
            listname: 'Goals',
            description: 'Expand Awareness เพื่อให้ประชาชนที่มีความสนใจได้ทำความรู้จักและตระหนักถึงบทบาทหน้าที่อันสำคัญของกองทุนพัฒนาไฟฟ้า 97(3) / 97(4) / 97(5) และเป็นที่รู้จักในวงกว้าง<!--split-->Individually Outstanding เพื่อให้พันธกิจและงานของแต่ละวงเล็บ 97(3) / 97(4) / 97(5)  มีความโดดเด่นและมีความน่าดึงดูดในตัวของมันเอง <!--split-->Strengthen Brand Image เพื่อเสริมสร้างภาพลักษณ์ที่น่าจดจำและมีเอกลักษณ์ที่ชัดเจนให้กับกองทุนพัฒนาไฟฟ้า<!--split-->Increase Online Presence เพื่อสร้าง High SEO ranking และเพิ่มจำนวนคนเยี่ยมชมเว็บไซต์'},
            {
            listname: 'Style',
            description: 'Modern/Minimal Visual ออกแบบให้ตัวเว็บไซต์มีความทันสมัย ดูเรียบง่าย มีความน่าดึงดูด สามารถอ่านได้ง่าย  Navigate  ได้อย่างสะดวก นอกจากนั้นยังมีการคุมโทนสีและ Layout ให้สม่ำเสมอตลอดทั้งเว็บไซต์<!--split-->Professional Look คำนึงถึงความเป็นทางการตลอดการออกแบบ โดยมีการควบคุมทั้งการใช้สีรูปภาพ ตัวหนังสือ และอื่นๆเพื่อแสดงถึงความน่าเชื่อถือขององค์กร<!--split-->Typography-based เน้นการใช้ตัวอักษรเป็นหลัก เพื่อป้องกันปัญหาการต้องใช้รูปเยอะ รวมถึงเรื่องของการออกแบบหน้าตาให้มีความสวยงามและเรื่องของการจัดระเบียบข้อมูล'}
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

export default WebAppPDFMiniPage