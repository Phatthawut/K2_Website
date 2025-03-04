function BannerProjectDetail({ bannerDetail }) {
	return (
		<section>
			<div className="relative w-full">
				<div
					style={{
						backgroundImage: `url(${bannerDetail.heroBGImage})`,
						height: "100vh",
					}}
					className="relative flex items-center justify-center bg-center bg-cover"
				>
					<div className="flex flex-col absolute text-white gap-28 md:gap-24 px-10 md:px-28 justify-center lg:pt-24 w-full max-w-[1920px]">
						<div className="">
							<h3 className="font-Domine text-sm md:text-xl">
								{bannerDetail.serviceType}
							</h3>
							<h3 className="text-3xl md:text-5xl lg:text-7xl font-OpenSans">
								{bannerDetail.projectName}
							</h3>
							<h3 className="w-4/5 text-2xl md:text-5xl lg:text-7xl font-semibold font-Merriweather">
								{bannerDetail.projectType}
							</h3>
						</div>
						<div className="w-full">
							<h3 className="font-OpenSans text-right md:text-2xl uppercase">
								{bannerDetail.clientName}
							</h3>
							<div className="flex justify-between items-center">
								<h3 className="w-24 md:w-28 uppercase font-OpenSans font-semibold md:text-2xl">
									/ client
								</h3>
								<div className="w-5/6 divider h-0.5 bg-white"></div>
							</div>
							{/*
							<div className="flex justify-end w-full">
								<p className="font-OpenSans text-sm md:text-2xl text-justify xl:w-[75%] md:pt-8 md:leading-7">
									{bannerDetail.projectIntro}
								</p>
							</div>
							*/}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BannerProjectDetail;
