import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function TotalPDFPage () {
    const projectBannerData = 
        {
            projectName: "PDF ERC",
            projectType: "Integrated Communication",
            clientName: "Power development fund thailand",
            serviceType: "( Total Solution )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/total-Wdetail-BG-hopespot.webp"
        }

    const projectImage = [
        'images/total-Wdetail-PDF-01.webp', 
        'images/total-Wdetail-PDF-02.webp', 
        'images/total-Wdetail-PDF-03.webp', 
        'images/total-Wdetail-PDF-04.webp', 
        'images/total-Wdetail-PDF-05.webp', 
        'images/total-Wdetail-PDF-06.webp', 
        'images/total-Wdetail-PDF-07.webp', 
        'images/total-Wdetail-PDF-08.webp',
    ]

    const projectDescription = {
        clientName: 'PDF ERC',
        projectType: 'Integrated Communication',
        projectDescription: 'Power Dev. Fund Integrated Communication โครงการประชาสัมพันธ์ตัวตน ผลงานและ key messages ของกองทุนพัฒนาไฟฟ้าให้เป็นที่รู้จักในวงกว้างอย่างมีคุณภาพ'}

    const descriptionLists = [
        {
            listname: 'Content Management Strategy & Ads',
            description: 'นำเนื้อหาที่มีอยู่ของกองทุนมาใช้ประโยชน์โดยการ<!--split-->Simplify Content การรวบรวมเนื้อหาจากโครงการที่ผ่านมา มาทำการ Re-Arrange/ Re-Edit/ Re-write เพื่อให้เหมาะสมกับกลุ่มเป้าหมาย<!--split-->Synchronize Multi Platform to Multi Target  การนำคอนเทนต์ที่ผ่านการ simplify ไปเผยแพร่และสื่อสารไปยังกลุ่มเป้าหมายผ่านแพลตฟอร์มโซเชียลมีเดีย<!--split-->Lead Traffic to Website & Facebook การเพิ่มจำนวนผู้เข้าเยี่ยมชมคอนเทนต์ โดยการยิง Ads เพื่อดึงให้ผู้ชมคอนเทนต์จากทุกแพลตฟอร์มกลับมาดูคอนเทนต์ฉบับเต็มที่ website และ facebook ของกองทุนฯ'},
            {
            listname: 'Visual Identity Brand Refresh',
            description: 'อัพเดทรูปลักษณ์แบรนด์ของกองทุนฯ  เพื่อให้สอดคล้องกับปัจจุบันและกลุ่มเป้าหมายอย่างเหมาะสม โดยการปรับปรุงและเพิ่มเติม brand visual ต่าง ๆ เช่น logo, color palette, font, composition, design elements และอื่นๆ ช่วยสร้างความรับรู้ ความสนใจ และความน่าจดจำสำหรับ audience<!--split-->ใช้สำหรับ communication ของกองทุนฯเอง และสำหรับสวมใส่โครงการของผู้รับทุนด้วย เพื่อให้ภาพใหญ่ออกมามี unity ที่แข็งแรง'},
            {
            listname: 'Website Renovation',
            description: 'Re-design & Re-develop โครงสร้างข้อมูลของเว็บไซต์หลักของกองทุนฯใหม่  เพื่อให้มีความทันสมัยทั้งในเชิงภาพลักษณ์และการใช้งาน<!--split-->ออกแบบและสร้างมินิไซต์จำนวน 3 ไซต์สำหรับมาตราต่างๆของกองทุน เพื่อง่ายต่อการนำเสนอ ค้นหาข้อมูล และมีประสิทธิภาพต่อการทำSEO<!--split-->จัดทำ content สำหรับเผยแพร่บนเว็บไซต์ในหลากหลายรูปแบบ ไม่ว่าจะเป็น Google Web Stories, Infographic และ Article<!--split-->การจัดการฝึกอบรมการใช้งานเว็บไซต์แบบInteractive Training'},
            {
            listname: 'Workshop for Partners',
            description: 'การจัด workshop ต่างๆ เพื่อเป็นประโยชน์ในการสร้างสรรค์งานที่มีคุณภาพให้กับกองทุนฯ ไม่ว่าจะเป็น Workshop การจัดทำคอนเทนต์, Workshop การใช้ Visual Identity และ Performance Report Seminar'},
            {
            listname: 'Data Collection & Research Analytivs',
            description: 'การเก็บข้อมูลผ่านช่องทางต่างๆ ทั้ง online & onground เพื่อนำมาวิเคราะห์ และประเมินผลการดำเนินการของโครงการ โดยใช้เครื่องมือ Supermetrics for Data Studio และ Social Listening by Wise Sight เพื่อจัดทำรายงานเชิงปริมาณและเชิงคุณภาพและสรุปผลในรูปแบบ Summary Insight Report แบบ Monthly, Quarterly และ Yearly'}
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

export default TotalPDFPage