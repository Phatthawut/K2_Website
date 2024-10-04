import HeroSection from "../components/HeroSection"

function ComingSoon () {
    const heroData =
        {
            title: "",
            heroBGImage: "images/hero_bg.webp"
        }
    return (
        <div className="relative flex flex-col max-w-[1440px] mx-auto">
            <HeroSection title={heroData.title} heroBGImage={heroData.heroBGImage} />
            <h2 className="absolute left-24 md:left-1/3 top-1/2 text-3xl md:text-5xl font-OpenSans font-bold text-white">Coming Soon</h2>
        </div>
    )
}
export default ComingSoon