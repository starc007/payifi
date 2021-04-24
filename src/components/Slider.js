import React, { useState } from "react";
import { Carousel, Modal, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Slider1 from "../assets/Slider/Slider1.png";
import Slider2 from "../assets/Slider/Slider2.png";
import Slider3 from "../assets/Slider/Slider3.png";
import { DistributorSignup, RetailerSignup } from "./ModalComponent";





const Slider = () => {
	const [modalShow, setModalShow] = React.useState(false);
	const [modalShow1, setModalShow1] = React.useState(false);
	return (
		<Carousel className="slider">
			<Carousel.Item slide>
				<img src={Slider1} alt="First slide" className="img-style" />
				<Carousel.Caption>
					<div className="md:leading-none leading-3 mt-4 md:m-0">
						<label className="md:font-bold font-medium text-white md:text-3xl text-xs ">
							<span className="font-extrabold md:text-6xl text-2xl text-color-main animate-pulse">
								Payifi
							</span>
							aims to Implement Financial Inclusion in True Spirit
						</label>
						<br />
						<label className="md:font-bold font-medium text-white md:text-3xl text-sm">
							Providing Banking Services at Last Mile
						</label>

						<button
							onClick={() => setModalShow(true)}
							className=" btn-style focus:outline-none md:h-10 h-5 w-56 text-xs md:w-64 md:text-base rounded-lg md:mb-4 mb-2 mt-2"
						>
							CREATE ACCOUNT FOR DISTRIBUTOR
						</button>
						<DistributorSignup
							show={modalShow}
							onHide={() => setModalShow(false)}
						/>
						<br />
						<button
							onClick={() => setModalShow1(true)}
							className=" btn-style focus:outline-none md:h-10 h-5 w-56 text-xs md:w-64 md:text-base rounded-lg  "
						>
							CREATE ACCOUNT FOR RETAILER
						</button>
						<RetailerSignup
							show={modalShow1}
							onHide={() => setModalShow1(false)}
						/>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item slide>
				<img src={Slider3} alt="Second slide" className="img-style" />

				<Carousel.Caption>
					<div className="md:leading-none leading-3 mt-4 md:m-0">
						<label className="md:font-bold font-medium text-white md:text-5xl text-xs ">
							Become a Payifi Distributor
						</label>
						<br />
						<label className="md:font-bold font-medium text-white md:text-3xl text-sm">
							Enhance Your Earnings with payifi
						</label>

						<button
							onClick={() => setModalShow(true)}
							className=" btn-style focus:outline-none md:h-10 h-5 w-56 text-xs md:w-64 md:text-base rounded-lg md:mb-4 mb-2 mt-2"
						>
							CREATE ACCOUNT FOR DISTRIBUTOR
						</button>
						<DistributorSignup
							show={modalShow}
							onHide={() => setModalShow(false)}
						/>
						<br />
						<button
							onClick={() => setModalShow1(true)}
							className=" btn-style focus:outline-none md:h-10 h-5 w-56 text-xs md:w-64 md:text-base rounded-lg  "
						>
							CREATE ACCOUNT FOR RETAILER
						</button>
						<RetailerSignup
							show={modalShow1}
							onHide={() => setModalShow1(false)}
						/>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item slide>
				<img src={Slider2} alt="Second slide" className="img-style" />

				<Carousel.Caption>
					<div className="md:leading-none leading-3 mt-4 md:m-0">
						<label className="md:font-bold font-medium text-white md:text-4xl text-xs ">
							Become a part of India’s Fastest Growing retail network
						</label>
						<br />
						<label className="md:font-bold font-medium text-white md:text-3xl text-sm">
							Partner with us Today and Start Earning
						</label>

						<button
							onClick={() => setModalShow(true)}
							className=" btn-style focus:outline-none md:h-10 h-5 w-56 text-xs md:w-64 md:text-base rounded-lg md:mb-4 mb-2 mt-2"
						>
							CREATE ACCOUNT FOR DISTRIBUTOR
						</button>
						<DistributorSignup
							show={modalShow}
							onHide={() => setModalShow(false)}
						/>
						<br />
						<button
							onClick={() => setModalShow1(true)}
							className=" btn-style focus:outline-none md:h-10 h-5 w-56 text-xs md:w-64 md:text-base rounded-lg  "
						>
							CREATE ACCOUNT FOR RETAILER
						</button>
						<RetailerSignup
							show={modalShow1}
							onHide={() => setModalShow1(false)}
						/>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slider;
