import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSlider.css";
import banner1 from "../../Images/HeroSlider-images/banner1.jpeg";
import banner2 from "../../Images/HeroSlider-images/banner2.jpeg";
import slide1 from "../../Images/HeroSlider-images/slide1.jpeg";
import slide2 from "../../Images/HeroSlider-images/slide2.jpeg";
import slide3 from "../../Images/HeroSlider-images/slide3.jpeg";

export function HeroSlider() {
	let settings = {
		adaptiveHeight: false,
		dots: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		slidesPerRow: 1,
	};

	return (
		<Slider {...settings}>
			<div className="!flex">
				<img
					className="h-60 w-full !object-cover"
					src={banner2}
					alt=""
				/>
			</div>
			<div className="!flex">
				<img
					className="h-60 w-full !object-cover"
					src={banner1}
					alt=""
				/>
			</div>
			<div className="!flex">
				<img
					className="h-60 w-full !object-cover"
					src={slide1}
					alt=""
				/>
			</div>
			<div className="!flex">
				<img
					className="h-60 w-full !object-cover"
					src={slide2}
					alt=""
				/>
			</div>
			<div className="!flex">
				<img
					className="h-60 w-full !object-cover"
					src={slide3}
					alt=""
				/>
			</div>
			<div className="!flex">
				<img
					className="h-60 w-full !object-cover"
					src={slide1}
					alt=""
				/>
			</div>
		</Slider>
	);
}
