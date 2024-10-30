import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function TotalKaesapuePage () {
    const projectBannerData = 
        {
            projectName: "Kaeng Saphue Run",
            projectType: "Straetegic City Marketing",
            clientName: "Phibun City Municipality Ubol Ratchathani",
            serviceType: "( Total Solution )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/total-Wdetail-BG-kaesapue.webp"
        }

    const projectImage = [
        'images/total-Wdetail-kaesapue-01.webp', 
        'images/total-Wdetail-kaesapue-02.webp', 
        'images/total-Wdetail-kaesapue-03.webp', 
        'images/total-Wdetail-kaesapue-04.webp', 
        'images/total-Wdetail-kaesapue-05.webp', 
        'images/total-Wdetail-kaesapue-06.webp', 
        'images/total-Wdetail-kaesapue-07.webp', 
        'images/total-Wdetail-kaesapue-08.webp',
    ]

    const projectDescription = {
        clientName: 'Kaeng Saphue Run',
        projectType: 'Straetegic City Marketing',
        projectDescription: ''
    }

    const descriptionLists = [
        {
            listname: 'Goal',
            description: 'การวางแผนกลยุทธ์ในการโปรโมทเมืองพิบูลมังสาหาร  จังหวัดอุบลราชธานี ให้เป็นที่รู้จักในวงกว้าง  ผ่านเครื่องมือมาร์เก็ตติ้งที่ส่งเสริมกัน เป็นวงกลมที่ full circle เพื่อสร้างคุณค่าให้กับเมืองพิบูลย์มังสาหาร ด้วยการสื่อสารผ่าน Content และ Ads สร้างสรรค์ New Experience ที่ Priceless หาที่อื่นไม่ได้ ผ่านกิจกรรม แก่งสะพือ Run'},
            {
            listname: 'Strategic Thinking',
            description: 'วิธีคิดของเราคือการสร้างกลยุทธ์ที่เล่าเรื่องของเมืองในโซเชียลมีเดีย ใช้ content management และ digital เข้าไปจัดการ เพื่อสร้างการรับรู้ในวงกว้างและเจาะลุ่มเป้าหมายกระตุ้นการเดินทางมาท่องเที่ยว จากนั้นก็ใช้กิจกรรมมหาสงกรานต์ คอนเสิร์ต และการแข่งขันวิ่ง ดึงดูดนักท่องเที่ยวจำนวนมหาศาลเข้ามาร่วมกิจกรรม<!--split-->ซึ่งจากจำนวนนักท่องเที่ยวนับหมื่นคนที่หมุนเวียนเข้ามาร่วมกิจกรรมต่างๆในช่วงเวลาดังกล่าวก็จะสร้างรายได้กระตุ้นเศรษฐกิจในทุกองคาพยพของอำเภอพิบูลมังสาหาร สร้างความจดจำ ความประทับใจ และอยากกลับมาท่องเที่ยวอีก'},
            {
            listname: 'Content & Ads',
            description: 'strategic planning ของเราคือการสร้างกิจกรรมที่จะชวนคนจำนวนมากมาทำร่วมกัน แล้วโชว์เสน่ห์ของเมืองในแง่มุมต่างๆด้วยการสร้าง Storytelling ผ่านโซเชียลมีเดีย ให้เห็นเสน่ห์ของเมืองเล็กที่ผู้คนยังคงรักษาวิถีชีวิตดั้งเดิมของท้องถิ่นไว้อย่างดี ใช้ content management ในการค่อยสร้างการรับรู้และนำไปสู่กิจกรรมที่เชิญชวนให้ผู้คนเข้ามาท่องเที่ยวในช่วงเวลาที่เรากำหนด'},
            {
            listname: 'City Marathon',
            description: 'เราเลือกการจัดงานวิ่งมาราธอนxกับงานมหาสงกรานต์แก่งสะพือ ซึ่งการวิ่งมาราธอนเป็นกิจกรรมที่สามารถพาคนให้เข้าร่วมเป็นจำนวนนับพันคน และนักวิ่งทั้งหมดจะวิ่งผ่านจุดต่างๆซึ่งเป็นไฮไลท์ของเมืองที่เราจะถ่ายภาพเพื่อ โปรโมทเช่น วัดเก่า เมืองเก่า ตลาดและย่านชุมชนและไฮไลท์ครั้งประวัติศาสตร์ในรอบ 15ปี นั่นคือการวิ่งลงแก่งสะพือที่มีการเปิดเขื่อนปล่อยน้ำเพื่อให้แก่งสะพือโผล่ขึ้นมาให้นักเที่ยวได้สามารถลงไปสัมผัสกับจุดท่องเที่ยวที่มีชื่อเสียงระดับชาติของอำเภอพิบูลมังสาหารที่จมอยู่ใต้แม่น้ำมูลมาเป็นเวลานาน ภาพประวัติศาสตร์นี้จะถูกโพสท์และแชร์ออกไปเป็นวงกว้างทั้งจากสื่อของเมืองและจากนักวิ่งและนักท่องเที่ยวจำนวนนับพันโพสท์ให้เห็นถึงเสน่ห์ของเมือง และภาพแก่งสะพือสถานที่ท่องเที่ยวที่มีชื่อเสียงที่สุดแห่งหนึ่งของภาคอีสาน'}
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

export default TotalKaesapuePage