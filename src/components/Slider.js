import React from "react";
import { Carousel } from "react-bootstrap";
import image3 from "../assets/Slider/12.png";


const Slider = () => {
	return (
		<Carousel className="slider">
			<Carousel.Item slide>
				<img
					src={image3}
					alt="First slide"
				/>
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
							<button className="md:mt-4 btn-style focus:outline-none md:h-10 h-5 md:font-medium w-20 text-xs md:w-48 md:text-xl rounded-xl animate-bounce  ">
								Learn More
							</button>
						</div>
						{/* <div className="text-center mt-3 mr-3 md:m-0 leading-3 md:leading-10">
							<label className="font-bold text-black text-xs md:text-2xl">
								To start using Payifi Retailer Services
							</label>
							<br />
							<button className="items-center justify-center btn-style focus:outline-none md:h-10 h-6 w-40 md:font-medium md:w-56 text-xs md:text-base rounded-xl md:my-2 ">
								CREATE ACCOUNT FOR FREE
							</button>
							<br />
							<label className="line-styling text-black md:font-bold md:mt-2 text-xs">
								OR
							</label>
							<label className="font-bold text-black md:text-2xl md:mt-2 text-xs">
								To start using our Distributor Service
							</label>
							<br />
							<button className="btn-style focus:outline-none md:h-10 h-6 md:font-medium md:w-48 w-32 text-xs md:text-base rounded-xl md:mt-2  ">
								CREATE ACCOUNT
							</button>
						</div> */}
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			{/* <Carousel.Item slide>
				<img src={image2} alt="Second slide" />

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item> */}
		</Carousel>
	);
};

export default Slider;
