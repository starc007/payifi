import React from "react";
import { Carousel } from "react-bootstrap";
import Slider1 from "../assets/Slider/Slider1.png";
import Slider2 from "../assets/Slider/Slider2.png";
import Slider3 from "../assets/Slider/Slider3.png";


const Slider = () => {
	return (
		<Carousel className="slider">
			<Carousel.Item slide>
				<img src={Slider1} alt="First slide" className="img-style" />
				<Carousel.Caption>
					<div className="flex justify-between">
						<div className="md:leading-none leading-3 mt-4 md:m-0">
							<label className="md:font-bold font-medium text-white md:text-3xl text-xs ">
								<span className="font-extrabold md:text-6xl text-2xl text-color-main animate-pulse">
									Payifi
								</span>{" "}
								is trusted by lakhs
							</label>
							<br />
							<label className="md:font-bold font-medium text-white md:text-3xl text-sm">
								of Indian Retailers
							</label>
							<br />
							<label className="md:font-bold font-medium text-white md:text-3xl text-sm">
								Become a Payifi Sathi
							</label>
							<br />
							{/* <div className=""> */}
							<button className=" btn-style focus:outline-none md:h-10 h-5 w-56 text-xs md:w-64 md:text-base rounded-lg mb-4 mt-2">
								CREATE ACCOUNT FOR DISTRIBUTOR
							</button>
							<br />
							<button className=" btn-style focus:outline-none md:h-10 h-5 w-56 text-xs md:w-64 md:text-base rounded-lg  ">
								CREATE ACCOUNT FOR RETAILER
							</button>
							{/* </div> */}
						</div>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item slide>
				<img src={Slider2} alt="Second slide" className="img-style" />

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item slide>
				<img src={Slider3} alt="Second slide" className="img-style" />

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slider;
