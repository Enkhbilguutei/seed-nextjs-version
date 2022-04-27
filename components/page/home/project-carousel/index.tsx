import Slider from 'react-slick'
import Box from '@mui/material/Box'

import ProjectGrid1 from 'assets/project/project-grid-01.jpg'
import ProjectGrid2 from 'assets/project/project-grid-02.jpg'
import ProjectGrid3 from 'assets/project/project-grid-03.jpg'
import ProjectGrid4 from 'assets/project/project-grid-04.jpg'
import ProjectGrid5 from 'assets/project/project-grid-05.jpg'
import ProjectGrid6 from 'assets/project/project-grid-06.jpg'

import ProjectItem from 'components/common/project-item'

var sliderSettings = {
	arrows: true,
	dots: false,
	infinite: true,
	autoplay: true,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
	swipeToSlide: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
}

export default function ProjectCarousel() {
	// Backend data fetch

	return (
		<Box sx={{ backgroundColor: '#001d23', py: 7, px: 5, marginTop: '-7px' }}>
			<Slider {...sliderSettings}>
				<ProjectItem
					image={ProjectGrid1}
					alt="Project Grid 1"
					title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
					authorLink="http://seed.mn/"
					author="EKU"
					href="http://seed.mn/"
				/>
				<ProjectItem
					image={ProjectGrid2}
					alt="Project Grid 2"
					title="Big Life Lil Thug E ft (Desant, Fla, Ginjin ...)"
					authorLink="http://seed.mn/"
					author="EKU"
					href="http://seed.mn/"
				/>
				<ProjectItem
					image={ProjectGrid3}
					alt="Project Grid 3"
					title="Халуун Маруужин цомог B Production"
					authorLink="http://seed.mn/"
					author="EKU"
					href="http://seed.mn/"
				/>
				<ProjectItem
					image={ProjectGrid4}
					alt="Project Grid 4"
					title="LMAO"
					authorLink="http://seed.mn/"
					author="EKU"
					href="http://seed.mn/"
				/>
				<ProjectItem
					image={ProjectGrid5}
					alt="Project Grid 5"
					title="Маш Нууц III: No Country For Old Men"
					authorLink="http://seed.mn/"
					author="EKU"
					href="http://seed.mn/"
				/>
				<ProjectItem
					image={ProjectGrid6}
					alt="Project Grid 6"
					title="Ганц Бие Бүсгүйчүүд IV: Төгсгөл ба Эхлэл"
					authorLink="http://seed.mn/"
					author="EKU"
					href="http://seed.mn/"
				/>
			</Slider>
		</Box>
	)
}
