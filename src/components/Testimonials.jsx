import { BsFillStarFill } from "react-icons/bs";
import Img1 from "../assets/t1.png";
import Img2 from "../assets/t2.png";
import Img3 from "../assets/t3.png";
const Card = ({ img, name, position, title, review }) => {
	return (
		<div className="bg-white px-10 py-14 rounded-2xl w-[320px]  font-poppins flex flex-col gap-5">
			<div className="flex items-center gap-4">
				<div>
					<img
						src={img}
						alt=""
					/>
				</div>
				<div>
					<p className="text-[#101010] font-normal text-lg">{name}</p>
					<p className="text-base text-[#4B5563] font-light">{position}</p>
				</div>
			</div>
			<h4 className="font-normal text-2xl tracking-wider text-[#101010]">
				"{title}"
			</h4>

			<p className="font-light text-[#374151] text-base">
				{review}
			</p>
			<div className="flex gap-1">
				<BsFillStarFill className="text-yellow-400 text-xl" />
				<BsFillStarFill className="text-yellow-400 text-xl" />
				<BsFillStarFill className="text-yellow-400 text-xl" />
				<BsFillStarFill className="text-yellow-400 text-xl" />
				<BsFillStarFill className="text-yellow-400 text-xl" />
			</div>
		</div>
	);
};
function Testimonials() {
	return (
		<section className="w-full h-full bg-[#14121E]">
			<div className="max-w-[1200px] mx-auto font-poppins text-white py-20">
				<h2 className="font-semibold text-3xl tracking-wide text-center">
					Real Stories from Real Professionals
				</h2>
				<div className="flex justify-around items-center py-10 flex-wrap gap-10 lg:gap-0">
					<Card
						name="John Doe"
						position={"Graduated"}
						img={Img1}
						title={"I recommend this to All"}
						review={"Ricoz connected me with amazing clients. The quality scoring system ensures I work on exciting projects while maintaining my reputation."}
					/>
					<Card
						name="Alice Smith"
						position={"UI/UX designer"}
						img={Img2}
						title={"The Support is Awesome"}
						review={"As a freelancer, Ricoz's instant serach feature saves me time. It's a one stop platform for all my digital marketing needs."}
					/>
					<Card
						name="Sophia Miller"
						position={"Student"}
						img={Img3}
						title={"A Game Changer For Us"}
						review={"I've learned and earned on Ricoz. The courses are well-designed, and the integrated tools streamline communication with clients."}
					/>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;