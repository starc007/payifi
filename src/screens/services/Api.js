import React from "react";
import { RiRouteFill } from "react-icons/ri";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

import Header from "../../components/Navbar";

// import API from "../../assets/API.png";
import API from "../../assets/apiban.png";
import ApiPage from "../../assets/ApiPage.png";
import Logo4 from "../../assets/WhiteLabel/Group-38.png";
import Logo6 from "../../assets/WhiteLabel/Group-39.png";
import Logo3 from "../../assets/WhiteLabel/Group-40.png";
import Logo5 from "../../assets/WhiteLabel/Group-41.png";
import Logo8 from "../../assets/WhiteLabel/Group-43.png";
import Logo9 from "../../assets/WhiteLabel/Group-42.png";

const Api = () => {
	return (
		<div className="h-auto">
			<div className="h-16">
				<Header />
			</div>
			<div className="h-auto bg-gray-100 flex-wrap flex justify-around w-full">
				<div className="md:w-2/5 w-full p-5">
					<label className="md:text-4xl text-3xl font-medium">API</label>
					<br />

					<label>
						Payifi provides numerous REST APIs to enhance the various business
					</label>
					<label>
						transactions. It aims to enable smooth and hassle-free integration
						with any
					</label>
					<br />
					<label>B2B or B2C portal at minimum time</label>
					<br />
					<button className="btn-style focus:outline-none h-10 font-medium md:w-1/2 w-full text-base rounded-xl mt-2 ">
						Register here to know More
					</button>
				</div>
				<div className="md:w-2/5 p-5 w-full ">
					<img src={API} width="380" />
				</div>
			</div>
			<div className="h-auto pb-4 pt-4 flex-wrap">
				<p className="text-center text-3xl font-semibold">
					Banking Payments and Utilities APIs for Your Business application
				</p>
				<p className="text-center">
					Simple & modular APIs, libraries & SDKs. Go live instantly with our
					plug & play UI flows. Leverage our large technology & distribution
					network to grow your business
				</p>
			</div>
			<div className="h-auto  flex-wrap flex bg-white justify-center">
				<div className="md:w-2/5 w-full p-4">
					<img src={ApiPage} width="350" />
				</div>
				<div className="md:w-2/5 w-full p-4 flex-wrap">
					<p className="font-bold text-4xl pl-4">
						AePS, DMT & Payments APIs for Your Business Application
					</p>
					<div className="flex p-4 w-full">
						<div className="">
							<RiRouteFill size={50} className="text-color-main" />
						</div>
						<div className="pl-4">
							<label className="font-medium text-2xl">
								Payments [BillPay, UPI, DMT, Utilities]
							</label>
							<p>
								Build awesome payment product using mahagram's payments APIs
								sandbox.
							</p>
						</div>
					</div>
					<div className="flex pl-4 w-full">
						<div className="">
							<BsReverseLayoutTextSidebarReverse
								size={50}
								className="text-color-main"
							/>
						</div>
						<div className="pl-4">
							<label className="font-medium text-2xl">
								Banking [Accounts, AePS, Prepaid Card]
							</label>
							<p>
								Build your NEO Banking Platform using our Open banking APIs.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="h-auto ">
				<p className="md:text-5xl text-3xl font-bold text-center flex-wrap">
					Build Payments or Banking App
				</p>
				<div className="h-auto flex-wrap flex justify-center">
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<img src={Logo4} />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							AePS & MicroATM API
						</p>
						<p className="flex-wrap text-center">
							Cash Withdrawal, Balance Enquiry, Deposit, Mini Statement.
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<img src={Logo6} />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							Bill Pay APIs
						</p>
						<p className="flex-wrap text-center">
							Fetch & Pay bills for Electricity, Gas, Water, Mobile, Postpaid,
							FastTag, Credit Card, etc.
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<img src={Logo3} />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							DMT & PayOut APIs
						</p>
						<p className="flex-wrap text-center">
							Send money using our payout APIs via UPI, IMPS, NEFT, RTGS etc.
						</p>
					</div>
				</div>
				<div className="h-auto flex-wrap flex justify-center">
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<img src={Logo5} />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							PAN & Aadhaar Verification API
						</p>
						<p className="flex-wrap text-center">
							Fetch PAN card holder details using PAN Verification APIs
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<img src={Logo9} />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							eCollection API
						</p>
						<p className="flex-wrap text-center">
							Collect Money using our Virtual Account Solution, to auto
							reconcile the incoming payments.
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<img src={Logo8} />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							PM-JAY Enrollment
						</p>
						<p className="flex-wrap text-center">
							Enroll Citizens under GOI’s PM-JAY schemes to offer 5 lakh FREE
							worth health insurance.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Api;
