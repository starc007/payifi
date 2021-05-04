import React, { useState } from "react";
import {
	AiFillThunderbolt,
	AiOutlineTransaction,
	AiFillReconciliation,
	AiFillApi,
} from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BiCustomize } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { GiWallet, GiTakeMyMoney } from "react-icons/gi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Header from "../../components/Navbar";

import Whitelabel from "../../assets/label.png";
import Logo1 from "../../assets/WhiteLabel/aadhaar-enabled-payment-system-services-500x500-1-e1612885750134.png";
import Logo2 from "../../assets/WhiteLabel/BBPS_Logo-1024x340.png";
import Logo3 from "../../assets/WhiteLabel/Group-40.png";
import Logo4 from "../../assets/WhiteLabel/Group-38.png";
import Logo5 from "../../assets/WhiteLabel/Group-41.png";
import Logo6 from "../../assets/WhiteLabel/Group-39.png";
import Logo7 from "../../assets/WhiteLabel/Group-53.png";
import Logo8 from "../../assets/WhiteLabel/Group-43.png";
import Logo9 from "../../assets/WhiteLabel/Group-52.png";
import { Form } from "react-bootstrap";

const WhiteLabel = () => {
	const [phone, setPhone] = useState();
	return (
		<div className="h-full">
			<div className="h-16">
				<Header />
			</div>

			<div className="h-auto bg-gray-100 flex-wrap flex justify-around w-full">
				<div className="md:w-2/5 w-full p-5">
					<label className="md:text-4xl text-3xl font-medium">Whitelabel</label>

					<label>
						It is a unique opportunity to start working for your own brand.
						Complete
					</label>
					<label>
						solution to create your own brand in the market and enhance its
						brand visibility.
					</label>
					<br />
					<label>Business model with unlimited earning potential</label>
					<br />
					<button className="btn-style focus:outline-none h-10 font-medium md:w-1/2 w-full text-base rounded-xl mt-2 ">
						Register here to know More
					</button>
				</div>
				<div className="md:w-2/5 p-5 ">
					<img src={Whitelabel} width="380" />
				</div>
			</div>
			<div className="h-auto bg-white flex-wrap w-full pt-4 pb-4">
				<p className="text-xl font-medium text-center">
					Ready to deploy B2B Payment & Banking Portal Launch your B2B Portal in
					just 10 days with unlimited merchants.{" "}
				</p>
				<div className="flex justify-center flex-wrap">
					<div className="md:w-1/4 w-full p-4">
						<div>
							<AiFillThunderbolt size={40} className="text-color-main" />
						</div>
						<label className="font-semibold text-xl pt-3">
							Tailor-made Solution
						</label>
						<p className="flex-wrap">
							Custom fintech + payment solution loaded with all the business
							functions, modules and channels to help you scale up.
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div>
							<BsFillBookmarkFill size={40} className="text-color-main" />
						</div>
						<label className="font-semibold text-xl pt-3">
							Scalable Solution
						</label>
						<p className="flex-wrap">
							Developed using 3-tier architecture and latest & advance
							technologies and can be hosted on local data center or AWS
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div>
							<BiCustomize size={40} className="text-color-main" />
						</div>
						<label className="font-semibold text-xl pt-3">
							Highly Customizable
						</label>
						<p className="flex-wrap">
							<p className="flex-wrap">
								From your business branding to your internal processes, any
								customization is as easy as integrating an API
							</p>
						</p>
					</div>
				</div>
			</div>
			<div className="h-auto bg-gray-100 flex-wrap w-full pt-4 pb-4">
				<p className="text-4xl font-bold text-center">
					Become a Payifi Whitelabel Partner
				</p>
				<p className="text-2xl font-semibold md:pl-4 text-center ">
					Features and functions That’ll grow your Brand.
				</p>
				<p className="text-lg md:pl-4 text-center ">
					Power packed with all the features & functions to help you grow faster
				</p>
				<div className="flex flex-wrap justify-center">
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<HiUserGroup size={40} className="text-color-main" />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							Member Management
						</p>
						<p className="flex-wrap text-center">
							Manage merchants, retailers, distributors, master distributor and
							your staff.
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<GiWallet size={40} className="text-color-main" />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							Wallet Management
						</p>
						<p className="flex-wrap text-center">
							Manage your wallets, auto wallet update, virtual wallet, limit
							management etc.
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<AiOutlineTransaction size={40} className="text-color-main" />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							Transaction Switching
						</p>
						<p className="flex-wrap text-center">
							Switch your transactions to other API if one is down. Switch
							between the API providers.
						</p>
					</div>
				</div>
				<div className="flex flex-wrap justify-center">
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<AiFillReconciliation size={40} className="text-color-main" />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							Auto Reconciliation
						</p>
						<p className="flex-wrap text-center">
							Auto Reconciliation of wallet update request, all your
							transactions to avoid any fraud activities.
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<GiTakeMyMoney size={40} className="text-color-main" />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							Auto Settlements
						</p>
						<p className="flex-wrap text-center">
							Settle all AEPS business to your merchants automatically using our
							PayOut Function pre integrated on your platform.
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<AiFillApi size={40} className="text-color-main" />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							3rd Party APIs & Plugins
						</p>
						<p className="flex-wrap text-center">
							Integrate any 3rd Party API on this platform, we will help you
							integrate that to expand your offerings
						</p>
					</div>
				</div>
			</div>
			<div className="flex-wrap h-auto flex-wrap pt-4 pb-4  bg-gray-200">
				<p className="font-bold text-3xl text-center">
					Pre-Integrated Products & Services
				</p>
				<p className=" text-lg text-center">
					The solution comes with per-integrated products & services like
					banking, insurance,
					<br /> bill payments, eGovernance and Government services.
				</p>
				<div className="flex justify-center flex-wrap div-marg">
					<div className="shadow-xl fixed-width flex justify-center  p-2 rounded bg-white">
						<img src={Logo1} width="150" />
					</div>
					<div className="shadow-xl fixed-width flex justify-center p-2 bg-white rounded ">
						<img src={Logo2} width="120" />
					</div>
					<div className="shadow-xl flex fixed-width rounded bg-white items-center justify-center">
						<div>
							<img src={Logo3} width="35" />
						</div>
						<div>
							<label className="font-semibold text-2xl pl-2 pt-2">
								AadhaarPay
							</label>
						</div>
					</div>
					<div className="shadow-xl flex fixed-width rounded bg-white items-center justify-center ">
						<div>
							<img src={Logo4} width="35" />
						</div>
						<div>
							<label className="font-semibold text-2xl pl-2 pt-2">
								MicroATM
							</label>
						</div>
					</div>
				</div>
				<div className="flex justify-center flex-wrap div-marg">
					<div className="shadow-xl fixed-width flex rounded bg-white items-center justify-center ">
						<div>
							<img src={Logo3} width="35" />
						</div>
						<div>
							<label className="font-semibold text-2xl pl-2 pt-2">
								Money Transfer
							</label>
						</div>
					</div>
					<div className="shadow-xl flex fixed-width rounded bg-white items-center justify-center  ">
						<div>
							<img src={Logo5} width="35" />
						</div>
						<div>
							<label className="font-semibold text-2xl pl-2 pt-2">
								PAN Enrollment
							</label>
						</div>
					</div>
					<div className="shadow-xl fixed-width flex rounded bg-white items-center justify-center ">
						<div>
							<img src={Logo6} width="35" />
						</div>
						<div>
							<label className="font-semibold text-2xl pl-2 pt-2">
								GST & ITR
							</label>
						</div>
					</div>
				</div>
				<div className="flex justify-center  flex-wrap div-marg">
					<div className="shadow-xl w-32 flex rounded bg-white items-center justify-center ">
						<div>
							<img src={Logo7} width="35" />
						</div>
						<div>
							<label className="font-semibold text-2xl pl-1 pt-2">SMS</label>
						</div>
					</div>
					<div className="shadow-xl flex fixed-width rounded bg-white items-center justify-center ">
						<div>
							<img src={Logo5} width="35" />
						</div>
						<div>
							<label className="font-semibold text-xl pl-2 pt-2">
								Aadhaar Verification
							</label>
						</div>
					</div>
					<div className="shadow-xl fixed-width flex rounded bg-white items-center justify-center ">
						<div>
							<img src={Logo8} width="35" />
						</div>
						<div>
							<label className="font-semibold text-2xl pl-2 pt-2">
								Insurance
							</label>
						</div>
					</div>
				</div>
				<div className="flex justify-center div-marg">
					<div className="shadow-xl fixed-width flex rounded bg-white items-center justify-center">
						<div>
							<img src={Logo9} width="35" />
						</div>
						<div>
							<label className="font-semibold text-2xl pl-2 pt-2">
								Mobile Recharges
							</label>
						</div>
					</div>
				</div>
			</div>
			<div className="h-auto pb-4">
				<p className="text-center text-4xl font-medium">
					Become Payifi Whitelabel Partner
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
									Submit
								</button>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhiteLabel;
