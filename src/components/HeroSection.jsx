import HerosectionImage1 from "../assets/HerosectionImage1.png";
import HerosectionImage2 from "../assets/HerosectionImage2.png";
function HeroSection() {
	return (
		<div className="heroSection w-full overflow-hidden">
			<div className="max-w-[1200px]  mx-auto ">
				<div className="flex flex-col  lg:flex-row lg:justify-between lg:gap-x-5 items-center px-5 lg:px-10 py-10">
					<div className="w-full text-white">
						<h1 className="text-3xl lg:text-5xl lg:leading-[4rem] mb-5 font-semibold">
							Discover Top Tech Professionals In Minutes.
						</h1>
						<p className="text-xl mb-7 lg:pr-24 font-normal ">
							Streamline Your Business Needs with Ricoz's All-in-One Tech Service Hub.
						</p>
						<button className="get-started text-left px-6 py-2 rounded-3xl">
							Get Started
						</button>
					</div>
					<div className="w-full flex flex-col px-4 mb-8 lg:mb-0">
						<div className="w-4/5 ml-14 lg:w-full lg:ml-32">
							<img
								src={HerosectionImage1}
								alt="herosectionImage"
								className="w-[70%]"
							/>
						</div>
						<div className="w-full">
							<img
								src={HerosectionImage2}
								alt="herosectionImage"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;