import React, { useState } from "react";
import { Carousel, Modal, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Slider1 from "../assets/Slider/Slider1.png";
import Slider2 from "../assets/Slider/Slider2.png";
import Slider3 from "../assets/Slider/Slider3.png";

function DistributorSignup(props) {
	const [phone, setPhone] = useState();
	return (
		<Modal
			{...props}
			// size="lg"
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Become a Payifi Distributor
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group>
						<Form.Label className="text-base font-medium">
							Mobile Number
						</Form.Label>
						<PhoneInput
							country={"in"}
							value={phone}
							onChange={setPhone}
							className="focus:outline-none focus:shadow:none focus:ring-2 focus:ring-blue-600 w-11/12"
							inputStyle={{ width: "100%" }}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label className="text-base font-medium">Name</Form.Label>
						<Form.Control placeholder="Full Name" type="text" />
					</Form.Group>
					<Form.Group className="text-base font-medium">
						<Form.Label>Email</Form.Label>
						<Form.Control placeholder="Enter email" type="email" />
					</Form.Group>
					<Form.Group className="text-base font-medium">
						<Form.Label>Shop Name</Form.Label>
						<Form.Control placeholder="Enter Shop Name" type="text" />
					</Form.Group>
					<Form.Group>
						<Form.Label className="text-base font-medium">
							Select your Current Business
						</Form.Label>
						<Form.Control as="select">
							<option>Select</option>
							<option>Kirana Shop/Grocery</option>
							<option>Mobile/Mobile Accessories</option>
							<option>Stationary Shop</option>
							<option>Medical Store</option>
							<option>General Store</option>
							<option>Tours and Travels</option>
							<option>Paan Shop</option>
							<option>others</option>
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label className="text-base font-medium">Pincode</Form.Label>
						<Form.Control placeholder="Enter Pincode" type="text" />
					</Form.Group>
					<div className="flex justify-center">
						<button
							className="btn-style focus:outline-none h-10 font-medium w-32 text-base rounded"
							type="submit"
						>
							Generate OTP
						</button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

const Slider = () => {
	const [modalShow, setModalShow] = React.useState(false);
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
						<button className=" btn-style focus:outline-none md:h-10 h-5 w-56 text-xs md:w-64 md:text-base rounded-lg  ">
							CREATE ACCOUNT FOR RETAILER
						</button>
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
						<button className=" btn-style focus:outline-none md:h-10 h-5 w-56 text-xs md:w-64 md:text-base rounded-lg  ">
							CREATE ACCOUNT FOR RETAILER
						</button>
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
						<button className=" btn-style focus:outline-none md:h-10 h-5 w-56 text-xs md:w-64 md:text-base rounded-lg  ">
							CREATE ACCOUNT FOR RETAILER
						</button>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slider;
