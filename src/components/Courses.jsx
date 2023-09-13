/* eslint-disable react/prop-types */
import { BsArrowRightShort } from "react-icons/bs";
import Img1 from "../assets/c1.png";
import Img2 from "../assets/c2.png";
import Img3 from "../assets/c3.png";
const Card = ({ img, title, price, description }) => {
	return (
		<div className="w-[320px] border rounded-xl overflow-hidden">
			<div>
				<img
					src={img}
					alt=""
				/>
			</div>
			<div className="pt-8 px-5 pb-4 bg-[rgba(129,129,139,0.1)] text-black">
				<h4 className="font-medium text-2xl">{title}</h4>
				<h5 className="font-bold text-2xl pt-4">₹ {price}</h5>
				<p className="font-light text-[12px] text-[#4B5563] py-4">{description}</p>
				<button className="flex items-center text-[#3D96F4] font-normal text-lg">
					Learn More <BsArrowRightShort className="text-2xl" />{" "}
				</button>
			</div>
		</div>
	);
};
function Courses() {
	return (
		<section className="w-full h-full bg-white">
			<div className="max-w-[1200px] mx-auto font-poppins text-black py-10 px-5 md:py-20 md:px-20">
				<div className="flex items-center justify-between flex-wrap gap-5">
					<div>
						<h2 className="font-semibold text-3xl">
							Unlock New Skills with Our Courses
						</h2>
						<p className="font-normal text-lg pt-1">
							Learn and Grow at Your Own Pace.
						</p>
					</div>
					<div>
						<button className="bg-[#0030FF] font-semibold text-base py-2 px-6 rounded-full text-white">
							Explore More
						</button>
					</div>
				</div>
				<div className="flex  justify-center lg:justify-between items-center py-10 flex-wrap gap-10 lg:gap-0">
					<Card
						title={"Web Development Mastery"}
						price="60,000"
						img={Img1}
						description="Master the art of web development with our comprehensive course. Learn coding, design, and deployment."
					/>
					<Card
						title={"Digital Marketing Fundamentals"}
						price="80,000"
						img={Img2}
						description="Navigate the Digital Landscape. Explore the world of digital marketing. Acquire skills in SEO, social media, and online advertising."
					/>
					<Card
						title={"Graphic Design Fundamentals"}
						price="60,000"
						img={Img3}
						description="Unleash your creativity with graphic design. Learn layout, typography, and visual communication."
					/>
				</div>
			</div>
		</section>
	);
}

export default Courses;