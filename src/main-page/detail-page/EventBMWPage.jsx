import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function EventBMWPage () {
    const projectBannerData = 
        {
            projectName: "BMW",
            projectType: "Excellence Club",
            clientName: "BMW Thailand",
            serviceType: "( Events & Lifestyle Activities )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/event-Wdetail-BG-BMW.webp"
        }

    const projectImage = [
        'images/event-Wdetail-BMW-02.webp', 
        'images/event-Wdetail-BMW-01.webp', 
        'images/event-Wdetail-BMW-03.webp', 
        'images/event-Wdetail-BMW-04.webp', 
        'images/event-Wdetail-BMW-05.webp', 
        'images/event-Wdetail-BMW-06.webp', 
        'images/event-Wdetail-BMW-07.webp', 
        'images/event-Wdetail-BMW-08.webp',
    ]

    const projectDescription = {
        clientName: 'BMW',
        projectType: 'Excellence Club',
        projectDescription: ''
        }

    const descriptionLists = [
        {
            listname: '',
            description: 'การสร้างประสบการณ์สุดพิเศษที่คุณจะไม่มีวันลืมคือสิ่งสำคัญที่ BMW จะมอบให้กับลูกค้าที่เป็นเจ้าของรถยนต์ในกลุ่ม Luxury Class และโจทย์ที่ K2 Venture ได้รับคือการสร้าง "Experience that money can’t buy" ประสบการณ์ล้ำค่าที่เงินซื้อไม่ได้ ความพิเศษที่หาไม่ได้ทั่วไปสำหรับลูกค้ากลุ่ม Top Tier<!--split-->เราต้อนรับลูกค้าในวินาทีแรกด้วย Champagne ก่อนที่จะเชิญลูกค้าลงไปสู่โต๊ะที่จัดเตรียมไว้ในลำธารที่น้ำใสราวกับกระจก สัมผัสกับประสบการณ์แห่งความสุขใกล้ชิดธรรมชาติกับช่วงเวลา High Tea พร้อมกับฟังเสียงของขุนเขาและสายน้ำ<!--split-->ช่วงเวลา Dinner ที่เราเตรียม Wine Tasting ที่คัดสรรโดย Sommelier อันดับต้นของประเทศ ที่เลือก Wine หายากจากประเทศฝรั่งเศสและอิตาลี มาให้ลิ้มลองรสชาติกัน ทั้ง Wine จากหมู่บ้านเล็กๆในฝรั่งเศสที่ผลิตในจำนวนจำกัด Wine จากสายพันธุ์องุ่นที่กำลังจะสูญพันธุ์ และ Wine ที่มีกระบวนการผลิตแตกต่างที่ให้รสชาติเป็นเอกลักษณ์ไม่เหมือนใคร เพื่อเปิดประสบการณ์การดื่ม Wine ที่ไม่สามารถหาจากที่ใดได้ง่ายๆ'},
            {
                listname: '',
                description: 'ช่วงเวลาTest Drive ที่ทุกคนรอคอย โดยการดูแลอย่างใกล้ชิดจากทีม Certified Instructor ของ BMW ลูกค้าได้ทดลองขับ BMW X7, BMW 7 Series, BMW XM บน Scenic Drive เส้นทางคดเคี้ยวเลียบขนาบด้วยขุนเขาท่ามกลางทัศนียภาพที่สวยงาม และ Gymkhana สนาม Test Drive สุดโหดที่ลูกค้าจะได้รับความสนุกเร้าใจ<!split>เสริมด้วย Gimmic เล็กๆ เราพาทุกคนไปสัมผัสกับชุมชนท้องถิ่น ใส่บาตรพระริมน้ำยามเช้า ชมฝูงสุนัขต้อนแกะ และรับประทาน Chef’s Table & Wine Pairing ริมลำธาร กับอาหารสไตล์ Rustic<!--split--> เราจัดทำส่วนประกอบต่างๆที่เป็นEvent Identity ของ BMW ในงานเช่น Welcome Card, Tent Card, J Flag, ป้ายชื่อ Dinner<!--split-->เป็นอีกหนึ่งรูปแบบ Lifestyle Event ที่เรานำกิจกรรม Outdoor Adventure มาผสมผสานกับความหรูหรา มีระดับอย่างลงตัว เป็นการสร้างประสบการณ์ใหม่แก่ลูกค้าที่ทั้งน่าประทับใจและไม่รู้ลืม'}
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

export default EventBMWPage