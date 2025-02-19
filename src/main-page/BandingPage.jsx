import { useEffect } from "react";

import ServiceBanner from "../components/ServiceBanner";
import ProjectCard from "../components/ProjectCard";

function BandingPage() {
	const projectLists = [
		{
			projectClientName: "Power Development Fund Thailand",
			projectName: "PDF ERC",
			projectType: "Mini Website",
			projectImage: "images/service_branding_pdf.webp",
			projectBGImage: "images/service_branding_bg02.webp",
		},
		{
			projectClientName: "Power Development Fund Thailand",
			projectName: "Hope Spot",
			projectType: "Visual Identity",
			projectImage: "images/service_branding_hopespot.webp",
			projectBGImage: "images/service_branding_bg01.webp",
		},
		{
			projectClientName: "Songkla Chamber of Commerce",
			projectName: "Hatyai",
			projectType: "Visual Identity",
			projectImage: "images/service_branding_hatyai.webp",
			projectBGImage: "images/service_branding_bg02.webp",
		},
		{
			projectClientName: "Nongmon Market",
			projectName: "NONGMON 24+7",
			projectType: "Banding & Visual Design",
			projectImage: "images/service_branding_nongmon.webp",
			projectBGImage: "images/service_branding_bg01.webp",
		},
	];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="max-w-[1920px] mx-auto">
			<ServiceBanner />
			<div className="w-full">
				{projectLists.map((project, index) => (
					<ProjectCard
						key={index}
						projectClientName={project.projectClientName}
						projectName={project.projectName}
						projectType={project.projectType}
						projectImage={project.projectImage}
						projectBGImage={project.projectBGImage}
					/>
				))}
			</div>
		</div>
	);
}

export default BandingPage;

{
	{
		/* {
    projectClientName: "Nongmon Market",
    projectName: "NONGMON 24+7",
    projectType: "Banding & Visual Design",
    projectImage: "images/service_branding_nongmon.webp",
    projectBGImage: "images/service_branding_bg01.webp"
}, */
	}
}
