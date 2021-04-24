import React,{useState} from "react";
import { AiFillShop } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Header from "../components/Navbar";
import imgfaltu from "../assets/Slider/Slider1.png";
import { Form } from "react-bootstrap";

const Distributor = () => {
    const [phone, setPhone] = useState();
	return (
		<div className="h-full">
			<div className="h-16">
				<Header />
			</div>
			<div className="flex-wrap">
				<div className="h-auto relative">
					<img src={imgfaltu} />
					<div className="absolute text-content">
						
					</div>
				</div>
				<div className="bg-gray-100 h-auto pt-2 pb-4">
					<p className="text-center md:text-2xl text-xl">
						Payifi Aspire to build Network of
					</p>
					<div className="md:flex flex-wrap w-full margin icn">
						<div className="md:w-1/3 w-full box-css pt-2 ">
							<div className="icn ">
								<AiFillShop
									size={48}
									className="text-color-main icn-distributor"
								/>
							</div>

							<p className="text-3xl font-bold text">2 Lakh+</p>
							<p className="text-2xl -mt-4 text">Retailers</p>
						</div>
						<div className="md:w-1/3 w-full box-css pt-2 ">
							<div className="icn ">
								<IoIosPeople
									size={48}
									className=" text-color-main icn-distributor "
								/>
							</div>

							<p className="text-3xl font-bold text">10 Lakh+</p>

							<p className="text-2xl -mt-4 text">Consumers</p>
						</div>
						<div className="md:w-1/3 w-full box-css pt-2">
							<div className="icn">
								<FaBuilding size={48} className=" text-color-main " />
							</div>

							<p className="text-3xl font-bold text">500+</p>

							<p className="text-2xl -mt-4 text">Cities</p>
						</div>
					</div>
				</div>
				<div className="h-auto bg-white pb-4">
					<p className="text-center text-xl font-medium flex-wrap md:text-4xl pt-4">
						Become a Part of India’s Fastest Growing Network and Earn as <br />{" "}
						Much as You Can
					</p>

					<div className="flex flex-wrap w-full">
						<div style={{ width: "5%" }}></div>
						<div className="md:w-2/5 w-full flex-wrap m-4">
							<p className=" md:text-lg text-base">
								Payifi helps distributor to Earn more and increase their earning
								potential by adding unique services for their exiting
								distributor Business and become the part of India’s fastest
								Growing network. Any Distributor Across the nation can be part
								of our network, Just register with us and become a part of
								fastest Growing network.
							</p>
							<p className="font-medium md:text-lg text-base">
								Benefit of Being Distributor
							</p>
							<p className=" md:text-lg text-base">
								In Distributor Panel, you can manage the Retailers easily and
								can accept the Payments with single Click.
							</p>
						</div>
						<div className="md:w-2/5 w-full mt-1">
							<iframe
								// width="560"
								height="315"
								className="w-full"
								src="//www.youtube.com/embed/jFGKJBPFdUA"
								//frameborder="0"
								allowfullscreen
							/>
						</div>
					</div>
				</div>
				<div className="h-auto bg-gray-100 w-full flex flex-wrap">
					<div className="md:w-2/5 w-full bg-blue-700"></div>
					<div className="md:w-3/5 w-full">
						<label className="font-medium text-3xl pl-4">
							Becoming a Payifi Distributor is Fayeda Ka Sauda
						</label>
						<ul className="pl-4 md:text-lg text-lg flex-wrap">
							<li>
								<span>&#8226;</span> Payifi distributors not only manage the
								Agents under him but also evaluate their Performances and can
								easily Accept the Payments from them.
							</li>
							<li className="my-4">
								<span>&#8226;</span> Payifi Distributors have safe & Secure
								access to buy and sell all the service kits at the single click
								and also transfer the balance to their retailers
							</li>
							<li>
								<span>&#8226;</span> Feature of requesting a limit to Payifi and
								the same gets digitally loaded in their wallet
							</li>
							<li className="my-4">
								<span>&#8226;</span> Business expansion and retailers loyalty
								because of evolving services in Payifi
							</li>
							<li>
								<span>&#8226;</span> 24 x 7 Support and training
							</li>
						</ul>
					</div>
				</div>
				<div className="h-auto pb-4">
					<p className="text-center text-4xl font-medium">
						Become Payifi Distributor
					</p>
					<p className="text-center font-light text-2xl">Join Payifi Network</p>
					<div className="flex justify-center ">
						<div className="md:w-1/2 w-full shadow-xl rounded p-4 ">
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
									<Form.Label className="text-base font-medium">
										Name
									</Form.Label>
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
									<Form.Label className="text-base font-medium">
										Pincode
									</Form.Label>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Distributor;
