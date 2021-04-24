import React from "react";
import { FiTruck } from "react-icons/fi";
import { Ri24HoursFill } from "react-icons/ri";
import { FaBullhorn } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";

import Header from "../../components/Navbar";
import giftcard from "../../assets/giftcard.png";

const PaymentService = () => {
	return (
		<div className="h-full">
			<div className="h-16">
				<Header />
			</div>
			<div>
				<div className="h-auto bg-gray-100 flex-wrap flex justify-around w-full">
					<div className="md:w-2/5 w-full p-5">
						<label className="md:text-4xl text-3xl font-medium">
							Gift Cards
						</label>

						<label>
							Payifi Corporate Gifting service enables you to gift your
							employees
						</label>
						<label>
							something special, which they want to buy form more than 250+
						</label>
						<br />
						<label> brands store.</label>
						<br />
						<button className="btn-style focus:outline-none h-10 font-medium md:w-48 w-full text-base rounded-xl mt-2 ">
							Create Account for Free
						</button>
					</div>
					<div className="md:w-2/5 p-5 ">
						<img src={giftcard} width="380" />
					</div>
				</div>
				<div className="w-full h-auto bg-white p-5 flex-wrap">
					<p className="text-lg font-medium text-center">
						Payifi wide range of services aims at making transactions safe and
						secure for consumers and also add new revenue stream for both
						retailers and distributors. Our Banking Services Include AEPS, Micro
						ATM and DMT services, which effectively serve the purpose of
						Financial Inclusion.
					</p>
				</div>
				<div className="h-auto bg-gray-100 flex-wrap flex w-full">
					<div className="md:w-1/2 p-2 ">
						<img src={giftcard} width="380" />
					</div>
					<div className="md:w-1/2 w-full p-5">
						{/* <label className="md:font-bold md:text-5xl">mPOS</label>
						<br /> */}
						<label className="md:font-medium flex-wrap">
							Gift Cards are today’s most often used gift medium. Gift cards are
							similar to a prepaid debit card. These prepaid cards are offered
							to our loved ones’, friends, co-workers, employees’ etc. The Gift
							cards are used to buy whatever he/she wants from their desired
							brands/ stores or sometimes as an alternative of cash.
						</label>
						<br />
						<button className="btn-style focus:outline-none h-10 font-medium md:w-2/5 w-full text-base rounded-xl mt-2 ">
							Register here to Know More
						</button>
					</div>
				</div>
				<div className="h-auto flex-wrap flex w-full">
					<div className="md:w-1/2 w-full p-5">
						{/* <label className="md:font-bold md:text-5xl">Payment Link</label>
						<br /> */}
						<label className="md:font-medium flex-wrap">
							Gift Cards are today’s most often used gift medium. Gift cards are
							similar to a prepaid debit card. These prepaid cards are offered
							to our loved ones’, friends, co-workers, employees’ etc. The Gift
							cards are used to buy whatever he/she wants from their desired
							brands/ stores or sometimes as an alternative of cash.
						</label>
						<br />
						<button className="btn-style focus:outline-none h-10 font-medium md:w-2/5 w-full text-base rounded-xl mt-2 ">
							Register here to Know More
						</button>
					</div>
					<div className="md:w-1/2 p-2 ">
						<img src={giftcard} width="380" />
					</div>
				</div>
				<div className="h-auto flex justify-center flex-wrap w-full bg-gray-100 pb-4 pt-4">
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<FiTruck size={50} className="text-color-main" />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							FAST E-GIFT CARD DELIVERY
						</p>
						<p className="flex-wrap text-center">
							The e-Gift Cards are delivered to your inbox instantly, courtesy
							our in-house email delivery system.
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<Ri24HoursFill size={50} className="text-color-main" />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							HELP & SUPPORT
						</p>
						<p className="flex-wrap text-center">
							Got a query? We got you covered! Feel free to reach out to us and
							we will be happy to help
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<FaBullhorn size={50} className="text-color-main" />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							SAFE & SECURE
						</p>
						<p className="flex-wrap text-center">
							We make sure your eGift Card purchase is safe and secure. We at
							Payifi use SSL protocol to secure the transactions.
						</p>
					</div>
					<div className="md:w-1/4 w-full p-4">
						<div className="flex justify-center">
							<AiOutlineIdcard size={50} className="text-color-main" />
						</div>
						<p className="font-semibold text-xl pt-3 text-center">
							ONLINE PAYMENT
						</p>
						<p className="flex-wrap text-center">
							We accept payments from All types of debit/credit cards and UPI.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentService;
