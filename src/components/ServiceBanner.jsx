function BandnerSection({ bannerName }) {
	const [firstPart, ...rest] = bannerName.split(" ");
	const secondPart = rest.join(" ");

	const serviceData = {
		title: "our",
		title2: "Work",
	};
	return (
		<div className="w-full">
			<div className="grid grid-cols-1 items-center justify-between bg-blue-700 h-[100vh] text-white font-bold gap-2">
				<div className="flex flex-col w-full xl:mt-24">
					<div className="divider mx-auto bg-white h-0.5 w-[90%]"></div>
					<h2 className="font-Domine text-2xl md:text-3xl text-center mx-auto w-1/2 md:w-[10em] md:hidden">
						( K2 Venture Creative Comunication Agency )
					</h2>
					<div className="md:flex items-center justify-around font-Domine text-lg md:text-xl lg:text-2xl xl:text-3xl hidden">
						<div>( K2 Venture</div>
						<div>Creative Comunication Agency)</div>
					</div>
				</div>
				<div className="flex flex-col w-full text-6xl md:text-8xl lg:text-9xl xl:text-10xl px-8 md:px-16 lg:px-24 xl:px-32 -space-y-6 md:-space-y-8">
					<h3 className="font-Arapey italic font-medium">
						{serviceData.title}
					</h3>
					<h3 className="font-light uppercase">{serviceData.title2}</h3>
				</div>

				<div className="flex flex-col items-center uppercase px-8 w-full">
					<div className="flex flex-col text-4xl md:text-6xl lg:text-8xl xl:text-9xl w-1/2">
						<h3 className="font-Anek font-light">{firstPart}</h3>
						<h3 className="font-semibold">{secondPart}</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BandnerSection;
