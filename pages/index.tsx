import PageLayout from 'layout/page-layout';

import LandingCarousel from 'components/page/home/landing-carousel'
import ProjectCarousel from 'components/page/home/project-carousel'
import AboutUs from 'components/page/home/about-us'

export default function Home() {
    return (
        <PageLayout>
            <LandingCarousel />
			<ProjectCarousel />
            <AboutUs />
        </PageLayout>
    )
}