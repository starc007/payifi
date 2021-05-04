import React, { useState } from "react";
import Header from "../components/Navbar";
import imgfaltu from "../assets/Our Story_01.png";
import PhoneInput from "react-phone-input-2";
import { Col, Form, Row } from "react-bootstrap";
import "react-phone-input-2/lib/style.css";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
const ContactUs = () => {
    const [phone, setPhone] = useState();
	return (
		<div className="h-auto">
			<div className="h-16">
				<Header />
			</div>
			<div className="h-auto relative w-full flex justify-center items-center">
				<img src={imgfaltu} width="100%" style={{ height: 280 }} />
				<div className="absolute">
					<label className="text-white md:text-6xl text-4xl">
						Get in Touch
					</label>
				</div>
			</div>
			<div className="h-auto flex flex-wrap pt-4 p-4">
				<div className="md:w-1/2 w-full flex items-center justify-center">
					<Form className="w-4/5">
						<Form.Group>
							<Form.Label className="text-base font-medium">
								Why are you here ?
							</Form.Label>
							<Form.Control as="select" name="reason">
								<option value="Select the reason">Select the reason</option>
								<option value="Marketing (For Products & Service Companies)">
									Marketing (For Products & Service Companies)
								</option>
								<option value="Partner With Us">Partner With Us</option>
								<option value="Tech Support">Tech Support</option>
								<option value="Customer Support">Customer Support</option>

								<option value="Others">Others</option>
							</Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label className="text-base font-medium">Name</Form.Label>
							<Form.Control placeholder="Full Name" type="text" />
						</Form.Group>
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

						<Form.Group className="text-base font-medium">
							<Form.Label>Email</Form.Label>
							<Form.Control placeholder="Enter email" type="email" />
						</Form.Group>
						<Form.Group>
							<Form.Label className="text-base font-medium">Message</Form.Label>
							<Form.Control placeholder="Want an Internship" type="text" />
						</Form.Group>
						<Row>
							<Col>
								<Form.Group>
									<Form.Label className="text-base font-medium">
										State
									</Form.Label>
									<Form.Control placeholder="Rajasthan" type="text" />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label className="text-base font-medium">
										PinCode
									</Form.Label>
									<Form.Control placeholder="335001" type="text" />
								</Form.Group>
							</Col>
						</Row>

						<div className="flex justify-center">
							<button
								className="btn-style focus:outline-none h-10 font-medium md:w-1/2 w-full text-base rounded"
								type="submit"
							>
								Submit
							</button>
						</div>
					</Form>
				</div>
				<div className="md:w-1/2 w-full p-4">
					<div className="flex flex-wrap">
						<div className="md:w-2/5 w-full">
							<label className="text-2xl">For Queries and Complaints</label>
							<div className="flex">
								<div className="p-2">
									<AiTwotonePhone size={40} />
								</div>
								<div>
									<label className="text-sm">Call Us: 123 456 789</label>
									<br />
									<label className="text-sm">Between 9:00AM - 11PM</label>
								</div>
							</div>
							<div className="flex">
								<div>
									<MdEmail size={35} />
								</div>
								<div className="p-1 pl-2">
									<label className="text-sm">customer.care@payifi.com</label>
								</div>
							</div>
						</div>
						<div className="md:w-2/5 w-full">
							<label className="text-2xl">For Business Details</label>
							<div className="flex">
								<div className="p-2">
									<MdEmail size={40} />
								</div>
								<div>
									<label className="text-sm">listen@payifi.com</label>
									<br />
									<label className="text-sm">info@payifi.com</label>
								</div>
							</div>
						</div>
					</div>
					<div>
						<iframe
							className="w-full"
							height="300"
							frameborder="0"
							style={{ border: 0, borderRadius: 10 }}
							src="https://www.google.com/maps/embed/v1/place?q=dot%20com%20labs%20llp&key=AIzaSyBVwgVXcG_burcAyWMG5trvbfgAcVNBD1s"
							allowfullscreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
