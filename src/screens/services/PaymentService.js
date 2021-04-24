import React from 'react'
import Header from "../../components/Navbar";
import Recharge from "../../assets/Content/1.jpeg";
import P1 from "../../assets/Payment/1.png";
import P2 from "../../assets/Payment/2.png";
import P4 from "../../assets/Payment/4.png";
import { RetailerSignup } from '../../components/ModalComponent';

const PaymentService = () => {
	const [modalShow1, setModalShow1] = React.useState(false);
    return (
			<div className="h-full">
				<div className="h-16">
					<Header />
				</div>
				<div>
					<div className="h-auto bg-gray-100 flex-wrap flex justify-around w-full">
						<div className="md:w-2/5 w-full p-5">
							<label className="md:font-bold md:text-4xl text-3xl font-medium">
								Payment Services
							</label>

							<label className="md:font-medium">
								Now Accept Payments Through various Modes Like MPOS,
							</label>
							<label className="md:font-medium">
								Payment Links and UPI QR and enrich your Shop
							</label>
							<br />
							<label className="md:font-medium">
								and Customers smartly and securely.
							</label>
							<br />
							<button
								onClick={() => setModalShow1(true)}
								className="btn-style focus:outline-none h-10 font-medium md:w-48 w-full text-base rounded-xl mt-2 "
							>
								Create Account for Free
							</button>
							<RetailerSignup
								show={modalShow1}
								onHide={() => setModalShow1(false)}
							/>
						</div>
						<div className="md:w-2/5 p-5 ">
							<img src={P1} width="380" />
						</div>
					</div>
					<div className="w-full h-auto bg-white p-5 flex-wrap">
						<p className="text-lg font-medium text-center">
							Payifi wide range of services aims at making transactions safe and
							secure for consumers and also add new revenue stream for both
							retailers and distributors. Our Banking Services Include AEPS,
							Micro ATM and DMT services, which effectively serve the purpose of
							Financial Inclusion.
						</p>
					</div>
					<div className="h-auto bg-gray-100 flex-wrap flex w-full">
						<div className="md:w-1/2 p-4 ">
							<img src={P2} width="400" />
						</div>
						<div className="md:w-1/2 w-full p-5">
							<label className="md:font-bold md:text-5xl">mPOS</label>
							<br />
							<label className="md:font-medium flex-wrap">
								With Payifi M-POS device, you can accept money anytime, anywhere
								through debit card or credit card transactions. Why use it?
								Highly compatible with every android phone, Share e-receipt
								through mobile no., Long battery life and standby time, Zero
								Maintenance
							</label>
							<br />
							<button
								onClick={() => setModalShow1(true)}
								className="btn-style focus:outline-none h-10 font-medium md:w-2/5 w-full text-base rounded-xl mt-2 "
							>
								Register here to Know More
							</button>
						</div>
					</div>
					<div className="h-auto flex-wrap flex w-full">
						<div className="md:w-1/2 w-full p-5">
							<label className="md:font-bold md:text-5xl">Payment Link</label>
							<br />
							<label className="md:font-medium flex-wrap">
								Send Payifi payment links via Email, chat, SMS, and accept
								payments from your customers anytime, without a website or an
								app Why use it? Unlimited payment, One Time KYC, Instant
								Settlement
							</label>
							<br />
							<button
								onClick={() => setModalShow1(true)}
								className="btn-style focus:outline-none h-10 font-medium md:w-2/5 w-full text-base rounded-xl mt-2 "
							>
								Register here to Know More
							</button>
						</div>
						<div className="md:w-1/2 p-2 ">
							<img src={Recharge} />
						</div>
					</div>
					<div className="h-auto flex-wrap flex w-full bg-gray-100">
						<div className="md:w-1/2 p-4 ">
							<img src={P4} width="400" />
						</div>
						<div className="md:w-1/2 w-full p-5">
							<label className="md:font-bold md:text-5xl">My QR/UPI</label>
							<br />
							<label className="md:font-medium flex-wrap">
								Payifi brings in the Unique way to Accept Money from the
								Customers. QR code is an easy, secure and a hassle-free way to
								accept payments from your customers without charges. Your
								customers can simply scan and pay! And the transaction is
								Performed Instantly
							</label>
							<br />
							<button
								onClick={() => setModalShow1(true)}
								className="btn-style focus:outline-none h-10 font-medium md:w-2/5 w-full text-base rounded-xl mt-2 "
							>
								Register here to Know More
							</button>
						</div>
					</div>
				</div>
			</div>
		);
}

export default PaymentService