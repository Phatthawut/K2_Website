import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function BrandingNongmonPage () {
    const projectBannerData = 
        {
            projectName: "Nongmon 24+7",
            projectType: "Brand Visual Identity",
            clientName: "Nongmon Market",
            serviceType: "( Branding )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the themat ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Banding & Visual Design",
            heroBGImage: "images/Branding-Wdetail-BG-nongmon.webp"
        }

    const projectImage = [
        'images/Branding-Wdetail-nongmon-01.webp', 
        'images/Branding-Wdetail-nongmon-02.webp', 
        'images/Branding-Wdetail-nongmon-03.webp', 
        'images/Branding-Wdetail-nongmon-04.webp', 
        'images/Branding-Wdetail-nongmon-05.webp', 
        'images/Branding-Wdetail-nongmon-06.webp', 
        'images/Branding-Wdetail-nongmon-07.webp', 
        'images/Branding-Wdetail-nongmon-08.webp'
    ]

    const projectDescription = {
        clientName: 'Nongmon',
        projectType: 'Visual Identity',
        projectDescription: 'Nongmon 247  เป็นแคมเปญที่มุ่งเน้นการสื่อสารเพื่อปรับเปลี่ยนภาพลักษณ์ของหนองมน จาก ‘จุดแวะซื้อของฝาก’ สู่การเป็น ‘แหล่งรวมอาหารเด็ดของบางแสน’'
    }

    const descriptionLists = [
        {
        listname: 'Design Goal',
        description: 'เพื่อเปลี่ยนแปลงมุมมองของผู้คนที่มีต่อหนองมน จากการมองหนองมนเป็นตลาดของฝากสมัยเก่า  ให้กลายเป็นตลาดอาหารร่วมสมัย เป็นที่เที่ยวที่ต้องไปเมื่อไปบางแสน มีความสนุกสนาน มีชีวิตชีวา และเปี่ยมไปด้วยพลัง'},
        {
        listname: 'Logo',
        description: 'ในส่วนของโลโก้นั้นจะใช้เป็น Combination Logo ผสมผสานระหว่าง Typeface และ Symbol<!--split--> เน้นแบบสีขาวที่อยู่บนพื้นหลังสีแดงเป็นหลัก เพราะสีแดงเป็นสีที่กระตุ้นต่อความอยากอาหารได้ดีและสื่อถึงความมีพลัง ตัวอักษรที่ใช้จะเป็นตัวอักษรหนา ที่เพิ่มความน่าสนใจด้วยการใช้สัญลักษณ์ที่ถูกตัดทอนมาจากอาหารขึ้นชื่อของหนองมนวางแทนลงไปบนตัว ‘O’ เพื่อสร้างจุดเด่นให้กับโลโก'},
        {
        listname: 'Color Palette',
        description: 'Color Palette ได้รับแรงบันดาลใจมาจากสีสันสดใสของชายหาดบางแสน ภาพติดตาที่ทุกคนคุ้นเคยเป็นอย่างดี ไม่ว่าจะเป็น ร่มชายหาดสีสันฉูดฉาด, เก้าอี้ชายหาดลายทาง, หาดทรายเม็ดละเอียด และสีของน้ำทะเล จนได้มาเป็น สีแดง, สีเหลือง, สีน้ำเงิน, สีน้ำตาลอ่อน และสีเทอควอยส์'},
        {
        listname: 'Typeface',
        description: 'พวกเราได้เลือก ‘Archivo’ และ ‘Prompt’ มาเป็น Font ที่ใช้สำหรับแคมเปญนี้ โดย Archivo เป็น Font ที่มีลักษณะเป็นแบบ Sans serif font เน้นใช้งานสำหรับพวกหัวข้อหรือใจความสำคัญต่างๆ อีกทั้งยังเป็น Font ที่สามารถใช้งานได้อย่างหลากหลาย เหมาะสมกับทั้งงานบนเว็บไซต์และสื่อสิ่งพิมพ์ อีกทั้งยังมีน้ำหนักของ Font ให้เลือกได้หลายขนาด ซึ่งทำให้สามารถนำไปใช้งานได้อย่างสะดวก<!--split-->Prompt เป็น Font ภาษาไทยที่ไม่มีหัว ตัวกว้าง มีความโมเดิร์น และมีสัดส่วนของทั้งความสูงและความกว้างที่เป็นระบบ ทำให้สามารถนำไปใช้จัดวางในงานดีไซน์ได้อย่างมีประสิทธิภาพ'},
        {
        listname: 'Brand Elements',
        description: 'ในด้านองค์ประกอบของแบรนด์ เราได้นำอาหารที่มีชื่อเสียงของหนองมนมาตัดทอนให้เป็นรูปร่างที่มีความเรียบง่ายและโมเดิร์นขึ้น โดยอาหารที่เรานำมาดัดแปลงรูปทรง ได้แก่ ข้าวหลาม, ฮ่อยจ๊อ และขนมจาก<!--split-->รวมไปถึงเราได้สร้างสัญลักษณ์ดอกจันขึ้นมาหลายแบบๆเพื่อเป็นสัญลักษณ์ที่เน้นย้ำถึงความสำคัญของหนองมน ที่ไม่ใช่แค่จุดแวะซื้อของฝาก แต่เป็นจุดหมายที่ใครๆ ก็ห้ามพลาดในการแวะมา<!--split-->โดยองค์ประกอบของแบรนด์สามารถนำไปใช้ตกแต่งได้หลายรูปแบบ เช่น นำไปทำเป็นภาพพื้นหลัง หรือทำเป็นแพทเทิร์นเพื่อสร้างจุดเด่นให้กับงาน'}
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

export default BrandingNongmonPage