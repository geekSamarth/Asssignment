import Img1 from "../assets/f1.png";
import Img2 from "../assets/f2.png";
import Img3 from "../assets/f3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const SwiperButtons = () => {
	const swiper = useSwiper();
	return (
		<div className="gap-4 flex justify-end relative z-10 lg:-mt-6 w-[100px] lg:ml-auto  text-white my-4 ">
			<button
				onClick={() => swiper.slidePrev()}
				className="bg-[#14121E] rounded-full p-2 hover:opacity-75 transition-opacity ease-in-out duration-300"
			>
				<BsChevronLeft className="text-xl" />
			</button>
			<button
				onClick={() => swiper.slideNext()}
				className="bg-[#14121E] rounded-full p-2 hover:opacity-75 transition-opacity ease-in-out duration-300"
			>
				<BsChevronRight className="text-xl" />
			</button>
		</div>
	);
};
const Card = ({ img, title, description }) => {
	return (
		<div className="bg-[#17245B] mx-auto text-white w-[320px] h-[330px] flex flex-col gap-4  rounded-2xl pt-10 pb-4 px-4">
			<div>
				<img
					src={img}
					alt=""
				/>
			</div>
			<h4 className="font-poppins font-semibold text-2xl">{title}</h4>
			<p className="font-poppins font-light text-lg">{description}</p>
		</div>
	);
};
function PlatformFeature() {
	return (
		<section className="w-full h-full bg-white">
			<div className="max-w-[1200px] mx-auto font-poppins text-black py-20 lg:px-20">
				<div className="px-10">
					<h2 className="font-semibold text-3xl tracking-wide">
						Explore Our Platform's Unique Features
					</h2>

					<SwiperButtons />
				</div>
				<div className="py-10">
					<Swiper
						slidesPerView={"auto"}
						modules={[Pagination, Navigation]}
						className="swiper-container"
						breakpoints={{
							0: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							480: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							640: {
								slidesPerView: 2,
								spaceBetween: 30,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 40,
							},
						}}
					>
						<SwiperSlide>
							<Card
								img={Img1}
								title={"Wide Range of Services"}
								description="Find everything from web development to marketing under one roof. Our platform offers a diverse array of tech services"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Card
								img={Img2}
								title={"Instant Search"}
								description="Get connected to top tech professionals within moments. Our intuitive search function ensures quick access."
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Card
								img={Img3}
								title={"Quality Scoring"}
								description="We maintain high service standards. Our unique scoring system ensures you receive top-notch quality from professionals."
							/>
						</SwiperSlide>

						{/* <SwiperButtons /> */}
					</Swiper>
				</div>
			</div>
		</section>
	);
}

export default PlatformFeature;