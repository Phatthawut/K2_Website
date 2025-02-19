function ProjectDetailContent({ projectDetailDescription, descriptionList }) {
	if (
		!projectDetailDescription ||
		!descriptionList ||
		descriptionList.length === 0
	) {
		return null; // Don't render anything if data is missing
	}

	const [firstPart, ...rest] = projectDetailDescription.projectType.split(" ");
	const secondPart = rest.join(" ");

	// Function to process text and convert link tags to actual links
	const processText = (text) => {
		// Split by <!--split--> first
		return text.split("<!--split-->").map((paragraph, index) => {
			// Check for link tags
			const linkMatch = paragraph.match(/<!--link:(.*?)-->(.*?)<!--endlink-->/);
			if (linkMatch) {
				const [fullMatch, url, linkText] = linkMatch;
				return (
					<p key={index} className="pt-6 font-NotoSans">
						{paragraph.substring(0, linkMatch.index)}
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-yellow-400 hover:text-yellow-300 underline"
						>
							{linkText}
						</a>
						{paragraph.substring(linkMatch.index + fullMatch.length)}
					</p>
				);
			}
			return (
				<p key={index} className="pt-6 font-NotoSans">
					{paragraph}
				</p>
			);
		});
	};

	return (
		<section className="flex justify-center bg-detail-content bg-cover bg-center bg-sky-600 pb-12">
			<div className="mx-8 md:mx-20 max-w-[1024px] text-white">
				<div className="py-12">
					<div className="text-center">
						<h3 className="font-OpenSans uppercase text-3xl">
							{projectDetailDescription.clientName}
						</h3>
						<h4>
							<span className="font-Merriweather text-3xl italic">
								{firstPart}
							</span>{" "}
							<span className="font-OpenSans text-3xl uppercase">
								{secondPart}
							</span>
						</h4>
					</div>
					{processText(projectDetailDescription.projectDescription)}
				</div>
				{descriptionList.map((description, index) => {
					if (!description.listname.trim() && !description.description.trim()) {
						return null;
					}
					return (
						<div key={index}>
							<div className="divider bg-white h-0.5 w-2/4"></div>
							<h3 className="font-BodoniModa text-xl italic -mt-2">
								{description.listname}
							</h3>
							{processText(description.description)}
						</div>
					);
				})}
			</div>
		</section>
	);
}
export default ProjectDetailContent;
