import { useEffect } from "react";

import BandnerProjectDetail from "../../components/BannerProjectDetail";
import ProjectDetailContent from "../../components/ProjectDetailContent";
import ProjectDetailImageCard from "../../components/ProjectDetailImageCard";

function EventThophapaPage() {
	const projectBannerData = {
		projectName: "Thophapa",
		projectType: "Event",
		clientName: "Ang Thong Office of Tourism and Sports offense",
		serviceType: "( Events & Lifestyle Activities )",
		projectIntro:
			"Brand visual identity for the Power Development Fund of Thailand and partners, under the Integrated Communication project, focusing on the thematic ‘Clean Energy for Life’ with creating modern aesthetics, unity and accessibility in mind",
		description: "Visual Design",
		heroBGImage: "images/event-Wdetail-BG-thophapa.webp",
	};

	const projectImage = [
		"images/event-Wdetail-thophapa-01.webp",
		"images/event-Wdetail-thophapa-02.webp",
		"images/event-Wdetail-thophapa-03.webp",
		"images/event-Wdetail-thophapa-04.webp",
		"images/event-Wdetail-thophapa-05.webp",
		"images/event-Wdetail-thophapa-06.webp",
		"images/event-Wdetail-thophapa-07.webp",
		"images/event-Wdetail-thophapa-08.webp",
	];

	const projectDescription = {
		clientName: "Ang Thong Office of Tourism and Sports offense",
		projectType: "Event",
		projectDescription:
			'งาน "สายธารแห่งศรัทธา วิถีผ้าป่าแม่น้ำน้อย" เป็นกิจกรรมบุญประเพณีที่จัดขึ้นอย่างยิ่งใหญ่ เพื่อสืบสานวัฒนธรรมการทอดผ้าป่าทางน้ำริมแม่น้ำน้อย ล่องเรือทอดผ้าป่าเส้นทางบุญ 16 วัดริมแม่น้ำน้อย จังหวัดอ่างทอง',
	};

	const descriptionLists = [
		{
			listname: "",
			description: "",
		},
	];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="max-w-[1920px] mx-auto">
			<BandnerProjectDetail bannerDetail={projectBannerData} />
			<ProjectDetailImageCard imageList={projectImage} />
			<ProjectDetailContent
				projectDetailDescription={projectDescription}
				descriptionList={descriptionLists}
			/>
		</div>
	);
}

export default EventThophapaPage;
