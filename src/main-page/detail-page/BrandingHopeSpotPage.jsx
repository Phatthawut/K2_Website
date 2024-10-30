import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function BrandingHopeSpotPage () {
    const projectBannerData = 
        {
            projectName: "Hope Spot",
            projectType: "Visual Identity",
            clientName: "Power development fund thailand",
            serviceType: "( Branding )",
            projectIntro: "Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
            description: "Visual Design",
            heroBGImage: "images/Branding-Wdetail-BG-hopespot.webp"
        }

    const projectImage = [
        'images/Branding-Wdetail-HopeSpot-01.webp', 
        'images/Branding-Wdetail-HopeSpot-02.webp', 
        'images/Branding-Wdetail-HopeSpot-03.webp', 
        'images/Branding-Wdetail-HopeSpot-04.webp', 
        'images/Branding-Wdetail-HopeSpot-05.webp', 
        'images/Branding-Wdetail-HopeSpot-06.webp', 
        'images/Branding-Wdetail-HopeSpot-07.webp', 
        'images/Branding-Wdetail-HopeSpot-08.webp',
    ]

    const projectDescription = {
        clientName: 'Hope Spot',
        projectType: 'Visual Identity',
        projectDescription: '‘Hope is the most innocent & powerful thing in the world’'
    }

    const descriptionLists = [
        {
            listname: 'Design Goal',
            description: 'สร้างสรรค์ตัวตนของแบรนด์สะท้อนความรู้สึกที่เต็มเปี่ยมไปด้วยความหวังและความร่าเริง สร้างแรงบันดาลใจในการเปลี่ยนแปลงพฤติกรรมเล็กๆในชีวิตประจำวัน ด้วยมือของเราเอง ซึ่งเมื่อมารวมกันเป็นกลุ่มก้อนแล้ว จึงกลายเป็นการเปลี่ยนแปลงที่ยิ่งใหญ่'},
            {
            listname: 'Logo',
            description: 'เราใช้โลโก้แบบมาสคอตผสมผสานกับ Hand  Lettering เพื่อสร้าง connection กับกลุ่มเป้าหมาย สร้างรูปลักษณ์ที่เป็นมิตร และเหมาะสมสำหรับ Marketing Campaign<!--split-->ตัวละครหลักคือ Location Pin สีเหลืองที่กำลังยิ้ม ซึ่งเป็นสัญลักษณ์สำหรับคำว่า "hope & spot" ซึ่งบ่งบอกว่าความหวังสามารถเกิดขึ้นได้ที่นี่ แทนตัว "O" ในคำว่า Hope Spot ที่วาดมือขึ้นมา รองหลังด้วยก้อนแห่งความหวังที่มารวมตัวกัน วาดเขียนด้วยสีและเส้นสไตล์ไร้เดียงสีเพื่อสร้างความรู้สึกของ ‘ความหวัง’ ที่คุณรู้สึกบ่อยครั้งเมื่อยามเป็นเด็กน้อย ตอนที่เราคิดว่าเวทมนต์มีจริงทุกสิ่งเป็นไปได้ เราต้องการนำความรู้สึกนั้นกลับมาสู่ผู้ชมของเราเมื่อพวกเขาเห็นดีไซน์นี้'},
            {
            listname: 'Color Palette',
            description: 'การเลือกใช้สีของเราที่เกี่ยวข้องกับธรรมชาติ <!--split-->สีเหลืองแทนความหวัง ความอบอุ่น และความชัดเจน  เหมือนดวงอาทิตย์ สัญลักษณ์ของความหวังและการฟื้นฟู สีเขียวแทนต้นไม้ชะอุ่ม สีฟ้าแทนมหาสมุทร สีชมพูสำหรับท้องฟ้า Vanilla Sky ในยามเย็น รวมถึงสีสันสดใสอื่นๆที่เป็นองค์ประกอบของความสดใส'},
            {
            listname: 'Typeface',
            description: 'เนื่องจาก Hope Spot มีสีสันสดใส มีความวิไรตี้ เป็นโครงการใหญ่ที่จำเป็นต้องมีหลากหลายรูปแบบที่ถูกเผยแพร่ใน Platform ต่างๆ เราจึงเลือกใช้ฟ้อนต์ให้น้อยที่สุดเพื่อคุมความเรียบร้อย<!--split-->เราเลือกฟ้อนต์ Marshmallow FC ฟ้อนต์ลายมือที่ให้ความรู้สึกบริสุทธิ์และเป็นมิตร เพื่อใช้สำหรับ Heading ทั้งในภาษาไทยและอังกฤษ หนุนด้วยฟ้อนต์ Prompt ที่อ่านง่ายและดูทั้นสมัยสำหรับ Body'},
            {
            listname: 'Brand Elements',
            description: 'Little Hope ตัวแทนความหวังของทุกคน ที่ในที่สุดมารวมกันและสะสมเป็นความหวังอันยิ่งใหญ่ สะท้อนแนวคิดของแบรนด์ ‘Together We Can’<!--split-->Earth Ocean Sky Sub-visual แคมเปญถูกแบ่งออกเป็น Sub-visual ภายใต้แนวคิดของผืนดิน, มหาสมุทร, และท้องฟ้า ลายของ Location Pin สะท้อนปัญหาสิ่งแวดล้อมต่างๆ สำหรับ Earth คือการตัดไม้ทำลายป่า สำหรับ Ocean คือขยะทะเล และสำหรับ Sky คือมลพิษในอากาศ<!--split-->Doodle ภาพของธรรมชาติ ไม่ว่าจะเป็นดอกไม้ ใบหญ้า ภูเขา วาดด้วยเส้นสีขาวสไตล์เรียบง่าย เสมือนการวาดรูปเล่นบนกระดาษ'}
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

export default BrandingHopeSpotPage