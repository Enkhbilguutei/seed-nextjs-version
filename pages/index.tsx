import SeedLandingCarousel from 'components/page/home/landing-carousel'
import SeedProjectCarousel from 'components/page/home/project-carousel'
import SeedLandingAboutUs from 'components/page/home/about-us'

export default function Home() {
    return (
        <div>
            <SeedLandingCarousel />
			<SeedProjectCarousel />
            <SeedLandingAboutUs />
        </div>
    )
}