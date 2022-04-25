import PageLayout from 'layout/page-layout';

import Landing from 'components/page/about-us/landing'
import WhyChooseUs from 'components/page/about-us/why-choose-us'
import AboutUsFAQ from 'components/page/about-us/faq'

export default function AboutUsPage() {
	return (
		<PageLayout>
			<Landing />
			<WhyChooseUs />
			<AboutUsFAQ />
		</PageLayout>
	)
}
