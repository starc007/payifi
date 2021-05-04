import React, { useState } from "react";
import { AiFillShop, AiOutlineDownload } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { GoVerified } from "react-icons/go";
import { BiCalculator } from "react-icons/bi";
import {
	FaBuilding,
	FaRegistered,
	FaFileUpload,
	FaMoneyCheckAlt,
	FaGifts,
} from "react-icons/fa";
import Header from "../components/Navbar";
import imgfaltu from "../assets/Slider/Slider2.png";
import img1 from '../assets/WhiteLabel/payifi website-05.png'
import img2 from '../assets/WhiteLabel/payifi website-06.png'
import img3 from '../assets/WhiteLabel/payifi website-07.png'
import img4 from '../assets/WhiteLabel/payifi website-08.png'
import { Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RetailerSignup } from "../components/ModalComponent";
const Retailer = () => {
	const [phone, setPhone] = useState();
	const [modalShow1, setModalShow1] = useState(false);
	return (
		<div className="h-auto">
			<div className="h-16">
				<Header />
			</div>
			<div className="h-auto relative inline-block">
				<img src={imgfaltu} className="block" />
				<div className="text-content md:leading-none leading-5">
					<p className="md:font-bold md:text-5xl text-base md:mt-0 mt-4">
						Become a Payifi Retailer <br />
						<span className="md:font-bold md:text-3xl text-sm">
							Be a Part of Revolution and Earn More
						</span>
					</p>

					<button
						onClick={() => setModalShow1(true)}
						className=" btn-style focus:outline-none md:h-10 h-5 w-32 text-xs md:w-64 md:text-base rounded-lg  "
					>
						Create a Account Now
					</button>
					<RetailerSignup
						show={modalShow1}
						onHide={() => setModalShow1(false)}
					/>
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
				<p className="text-center text-xl font-medium flex-wrap md:text-4xl">
					Become a Payifi Partner and Earn 50,000 per Month
				</p>
				<p className="text-center text-lg font-medium flex-wrap md:text-2xl">
					Become a India Ka Digital Dukandar
				</p>

				<div className="flex flex-wrap w-full">
					<div style={{ width: "5%" }}></div>
					<div className="md:w-2/5 w-full flex-wrap m-4">
						<p className=" md:text-lg text-base">
							Payifi empowers local dukandars to become part of the country’s
							digital revolution. Partner with Payifi to earn more and Increase
							customer Footfall.
						</p>
						<p>
							• Become a Part of Digital revolution and Earn Upto Rs.30,000 Per
							Month
						</p>
						<p>• Use Payifi Portal without Investment</p>
						<p>
							• Earn Commission on every Transaction and Boost your earnings
						</p>
						<p>• Secure, Safe and Reliable Services</p>
						<p>• All in One Application to earn More</p>
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
			<div className="flex-wrap w-full bg-gray-100 h-auto pt-2 pb-2">
				<p className="text-center text-xl font-medium flex-wrap text-3xl md:text-4xl">
					Become a Payifi retailer Now
				</p>
				<div className="flex justify-center flex-wrap ">
					<div className="md:w-1/5 w-full p-4">
						<div className="flex justify-center">
							{/* <AiOutlineDownload size={50} className="text-color-main" /> */}
							<img src={img1} width="60" />
						</div>
						<p className="font-semibold text-2xl pt-3 text-center">Step 1</p>
						<p className="flex-wrap text-center text-xl">Download the App</p>
					</div>
					<div className="md:w-1/5 w-full p-4">
						<div className="flex justify-center">
							{/* <FaRegistered size={50} className="text-color-main" /> */}
							<img src={img2} width="60" />
						</div>
						<p className="font-semibold text-2xl pt-3 text-center">Step 2</p>
						<p className="flex-wrap text-center text-xl">
							Register as free plan
						</p>
					</div>
					<div className="md:w-1/5 w-full p-4">
						<div className="flex justify-center">
							{/* <FaFileUpload size={50} className="text-color-main" /> */}
							<img src={img3} width="60" />
						</div>
						<p className="font-semibold text-2xl pt-3 text-center">Step 3</p>
						<p className="flex-wrap text-center text-xl">
							Upload the KYC Details
						</p>
					</div>
					<div className="md:w-1/5 w-full p-4">
						<div className="flex justify-center">
							{/* <GoVerified size={50} className="text-color-main" /> */}
							<img src={img4} width="60" />
						</div>
						<p className="font-semibold text-2xl pt-3 text-center">Step 4</p>
						<p className="flex-wrap text-center text-xl">
							Get it Verified and Start earning Right Now!
						</p>
					</div>
				</div>
			</div>
			<div className="flex-wrap w-full  h-auto pt-2 pb-2">
				<p className="text-center text-xl font-medium flex-wrap text-3xl md:text-4xl">
					Access to Free Services
				</p>
				<div className="flex justify-center flex-wrap ">
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<BiCalculator size={50} className="text-color-main" />
						</div>
						<p className="font-medium text-xl pt-3 text-center">
							No rental Devices
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<FaMoneyCheckAlt size={50} className="text-color-main" />
						</div>
						<p className="font-medium text-xl pt-3 text-center">
							Instant Settlement
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<FaGifts size={50} className="text-color-main" />
						</div>
						<p className="font-medium text-xl pt-3 text-center">
							Access to Gift Coupons
						</p>
					</div>
				</div>
			</div>
			<div className="h-auto pb-4">
				<p className="text-center text-4xl font-medium">
					Become a Part of Payifi network
				</p>
				<p className="text-center font-light">
					Note:A OTP will complete the Registration
				</p>
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
	);
};

export default Retailer;
