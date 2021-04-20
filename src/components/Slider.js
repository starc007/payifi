import React from "react";
import { Carousel } from "react-bootstrap";
import Slider1 from "../assets/Slider/Slider1.png";
import Slider2 from "../assets/Slider/Slider2.png";
import Slider3 from "../assets/Slider/Slider3.png";


const Slider = () => {
	return (
		<Carousel className="slider">
			<Carousel.Item slide>
				<img src={Slider1} alt="First slide" />
				<Carousel.Caption>
					<div className="flex justify-between">
						<div className="md:leading-none leading-3 mt-4 md:m-0">
							<label className="font-bold text-white md:text-3xl text-xs ">
								<span className="font-extrabold md:text-6xl text-lg text-color-main animate-pulse">
									Payifi
								</span>{" "}
								is trusted by lakhs
							</label>
							<br />
							<label className="font-bold text-white md:text-3xl text-xs">
								of Indian Retailers
							</label>
							<br />
							<label className="font-bold text-white md:text-3xl text-xs">
								Become a Payifi Sathi
							</label>
							<br />
							{/* <div className=""> */}
							<button className=" btn-style focus:outline-none md:h-10 h-5 w-32 text-xs md:w-64 md:text-base rounded-xl mb-4 mt-2">
								CREATE ACCOUNT FOR DISTRIBUTOR
							</button>
							<br />
							<button className=" btn-style focus:outline-none md:h-10 h-5 w-44 text-xs md:w-64 md:text-base rounded-xl  ">
								CREATE ACCOUNT FOR RETAILER
							</button>
							{/* </div> */}
						</div>
						
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item slide>
				<img src={Slider2} alt="Second slide" />

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item slide>
				<img src={Slider3} alt="Second slide" />

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slider;
