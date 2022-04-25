import Image from 'next/image'
import Slider from 'react-slick'

import Slider1 from 'assets/slider/slider1.jpg'
import Slider2 from 'assets/slider/slider2.jpg'
import Slider3 from 'assets/slider/slider3.jpg'

var sliderSettings = {
	arrow: true,
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
}

export default function Carousel() {
	return (
		<Slider {...sliderSettings}>
			<div>
				<Image src={Slider1} alt="Slider 1"></Image>
			</div>
			<div>
				<Image src={Slider2} alt="Slider 2"></Image>
			</div>
			<div>
				<Image src={Slider3} alt="Slider 3"></Image>
			</div>
		</Slider>
	)
}
