import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function BrandingPDFPage () {
    const projectBannerData = 
        {
            projectName: "PDF ERC",
            projectType: "Visual Identity",
            clientName: "Power Development Fund Thailand",
            serviceType: "( Branding )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/Branding-Wdetail-BG-PDF.webp"
        }

    const projectImage = [
        'images/Branding-Wdetail-PDF-01.webp', 
        'images/Branding-Wdetail-PDF-02.webp', 
        'images/Branding-Wdetail-PDF-03.webp', 
        'images/Branding-Wdetail-PDF-04.webp', 
        'images/Branding-Wdetail-PDF-05.webp', 
        'images/Branding-Wdetail-PDF-06.webp', 
        'images/Branding-Wdetail-PDF-07.webp', 
        'images/Branding-Wdetail-PDF-08.webp',
        'images/Branding-Wdetail-PDF-09.webp',
        'images/Branding-Wdetail-PDF-010.webp',
    ]

    const projectDescription = {
        clientName: 'PDF ERC',
        projectType: 'Brand Refresh',
        projectDescription: 'อัพเดทรูปลักษณ์แบรนด์ของกองทุนฯ ทั้งในเชิงฟังค์ชั่นและหน้าตาเพื่อให้สอดคล้องกับปัจจุบันและกลุ่มเป้าหมายอย่างเหมาะสม'
    }

    const descriptionLists = [
        {
        listname: 'Design Goal',
        description: 'ปรับปรุงและเพิ่มเติม brand visual ต่าง ๆ เช่น logo, color palette, font, composition, design elements และอื่นๆ ช่วยสร้างความรับรู้ ความสนใจ และความน่าจดจำสำหรับ audience ใช้สำหรับ communication ของกองทุนฯเอง และสำหรับสวมใส่โครงการของผู้รับทุนด้วย เพื่อให้ภาพใหญ่ออกมามี unity ที่แข็งแรง'},
        {
        listname: 'Right Composition',
        description: 'โฟกัสเรื่องการวางชิ้นส่วนจำเป็นที่หลากหลายอยู่ร่วมกันแบบลงตัว ประกอบไปด้วย โลโก้กองทุนฯ, โลโก้ thematic ‘Clean Energy For Life,’ โลโก้ผู้รับทุน, โลโก้โครงการและข้อความกำกับ ให้ identity ได้ถูกเผยแพร่ออกไปในทุกชิ้นงาน โดยที่มองเห็นได้ชัดเจน เป็นระเบียบ ไม่บดบังเนื้อหา '},
        {
        listname: 'High Adaptability',
        description: 'สำหรับกองทุนเองที่ใช้ visual identity ในหลาย Platform ที่มีหลักในการออกแบบและ function ที่ต่างกัน ไม่ว่าจะเป็น website, minisite, social media, print, ฯลฯ'},
        {
        listname: 'High Versatility',
        description: 'เนื่องจากเป็น visual identity ที่ต้องถูกใช้สำหรับหลายโครงการในหลายรูปแบบและหลายช่องทางการสื่อสารจึงมีวิธีวาง วิธีใช้ให้ทุกแบบ แนบไปกับ Ready-to-use template  เพื่อสร้างมาตรฐานที่คงที่ และเพิ่มความง่ายในการใช้งานสำหรับโครงการผู้รับทุน'},
        {
        listname: 'Modern Look',
        description: 'สร้างภาพลักษณ์ที่ทันสมัยให้กับกองทุนฯ สนับสนุนกันกับ Clean Energy initiatives เปลี่ยนผ่านสู่ audience ที่เป็นคนรุ่นใหม่ เพิ่มความน่าเชื่อถือ'},
        {
        listname: 'Balanced',
        description: 'ปรับภาพลักษณ์ของกองทุนให้เป็นมิตร เข้าถึงได้ง่ายขึ้น ในขณะที่ยังดูเป็นทางการและน่าเชื่อถือ'}
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

export default BrandingPDFPage