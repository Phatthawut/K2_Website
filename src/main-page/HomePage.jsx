import ContentBlock from '../components/ContentBlock'
import ContentCta from '../components/ContentCta'
import HeroSection from "../components/HeroSection"
import PartnerCard from "../components/PartnerCard"

function HomePage () {
    return (
    <div className="flex flex-col">
        <HeroSection />
        <ContentBlock />
        <ContentCta />
        <PartnerCard />
    </div>
    )
}

export default HomePage