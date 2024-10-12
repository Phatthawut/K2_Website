import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function TotalHopeSpotPage () {
    const projectBannerData = 
        {
            projectName: "Hope Spot",
            projectType: "360 Communication",
            clientName: "Power development fund thailand",
            serviceType: "( Total Solution )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/total-Wdetail-BG-hopespot.webp"
        }

    const projectImage = [
        'images/total-Wdetail-hopespot-01.webp', 
        'images/total-Wdetail-hopespot-02.webp', 
        'images/total-Wdetail-hopespot-03.webp', 
        'images/total-Wdetail-hopespot-04.webp', 
        'images/total-Wdetail-hopespot-05.webp', 
        'images/total-Wdetail-hopespot-06.webp', 
        'images/total-Wdetail-hopespot-07.webp', 
        'images/total-Wdetail-hopespot-08.webp',
    ]

    const projectDescription = {
        clientName: 'Hope Spot',
        projectType: '360 Communication',
        projectDescription: ''
    }

    const descriptionLists = [
        {
            listname: 'Event',
            description: 'จัด Mini Concert ใน 3 พื้นที่ ได้แก่ สวนผึ้งราชบุรี สวนพฤกศาสตร์ระยอง และบางพระ จังหวัดชลบุรี เรียนรู้เรื่องพลังงานสะอาด และการดูแลรักษาสิ่งแวดล้อม ผ่านกิจกรรม Outdoor Adventure ที่เน้นกิจกรรม Low Carbon และคอนเสิร์ต ระดมทุนร่วมบริจาคให้ 3 องค์กรเพื่อสิ่งแวดล้อมได้แก่ มูลนิธิสืบนาคะเสถียร กองทุนแสงอาทิตย์ และกองทุนรักษาเต่าบาดเจ็บ โดยมีผู้ร่วมกิจกรรม 1,000 คน'},
            {
            listname: 'Lifestyle Activity',
            description: 'จัด Sustainability Workshop ไปดูการทำงานของ Sustainable Farm ที่ใช้พลังงานสะอาดในกระบวนการผลิตทั้งหมด ที่ไร่รื่นรมย์ จังหวัดเชียงราย ลงมือเก็บขยะเพื่อนำมาทำเป็นกระเป๋ากับ Souvenirs From the Sea จังหวัดกระบี่ และเดินสำรวจระบบนิเวศบนพื้นที่ป่าชุ่มน้ำ ณ สวนพฤกษศาสตร์พนางตุง จังหวัดพัทลุง'},
            {
            listname: 'TV Series',
            description: 'สามพิธีกรพี่น้องสินเจริญชวน 13 แขกรับเชิญเดินทางทั่วไทยไปเรียนรู้พลังงานสะอาดจากสถานที่จริง ที่สร้างแรงบันดาลใจให้กับผู้ชมทุกคนในรายการ Sincharoen Electrified ทางช่อง Amarin TV'},
            {
            listname: 'Informattive Website',
            description: 'สร้างเว็บไซต์ Hope Spot เพื่อสื่อสารข้อมูลต่างๆออกมาในรูปแบบที่น่าอ่าน เป็นมิตร เข้าใจง่าย สื่อสารให้คนหันมาใช้พลังงานสะอาดเพื่อแก้ปัญหา Climate Change ภายใต้ Big Idea มือเล็กๆของทุกคนสามารถสร้างความเปลี่ยนแปลงที่ยิ่งใหญ่ได้ เมื่อเรามาร่วมกันทำ ผ่านช่องทาง Online, On-Ground และ On-air'},
            {
            listname: 'Influencer Marketing',
            description: 'เราเลือก Influencer 20 คนเป็นผู้บอกเล่าเรื่องการใช้พลังงานสะอาดเพื่อบรรเทาผลกระทบสิ่งแวดล้อม Influencer ทุกคนล้วนเป็นตัวจริงที่มีไลฟ์สไตล์หรือธุรกิจ ที่สัมพันธ์กับ Sustainability และมีวิถีชีวิตที่เป็นมิตรกับสิ่งแวดล้อม สร้างแรงบันดาลใจให้ผู้คนได้หันมาช่วยกันดูแลโลกและเริ่มต้นใช้พลังงานสะอาดในชีวิตประจำวัน'},
            {
            listname: 'Digital Content',
            description: 'เราวางกลยุทธ์ในการสร้าง Content เล่าเรื่องราวของ Sustainability ผ่านมุมมองที่ใกล้ตัว เข้าถึงได้ง่าย ออกมาในรูปแบบบทความ ภาพนิ่ง วีดิโอคลิป อินโฟกราฟิก บน Platform FB, IG, X, TikTok, YouTube'},
            {
                listname: 'Web Application',
                description: 'ร้าง Community ชวนคนมาสะสม Carbon Credit Point สนับสนุนการสร้างนิสัยที่ลดคาร์บอนได้ในชีวิตประจำวัน รับสิทธิเข้าร่วม Workshop ชม Concert และลุ้นของรางวัล Eco Lifestyle'}
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

export default TotalHopeSpotPage