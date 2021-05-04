import React from "react";
import Header from "../../components/Navbar";
import Recharge from "../../assets/Content/1.jpeg";
import B3 from "../../assets/Banking/3.png";
import B4 from "../../assets/Banking/4.png";
import B1 from "../../assets/Banking/1.png";
import B2 from "../../assets/Banking/2.png";
import { RetailerSignup } from "../../components/ModalComponent";



const BillPayment = () => {
	const [modalShow1, setModalShow1] = React.useState(false);
	return (
		<div className="h-full">
			<div className="h-16">
				<Header />
			</div>
			<div>
				<div className="h-auto bg-gray-100 flex-wrap justify-around flex w-full">
					<div className="md:w-2/5 w-full p-5">
						<label className="md:font-bold md:text-4xl text-3xl font-medium">
							Banking Services
						</label>

						<label className="md:font-medium">
							Offer uninterrupted banking services like cash withdrawal, money
							transfer,
						</label>
						<label className="md:font-medium">
							cash deposits, savings etc. through AEPS, Micro ATM and Domestic
							Money
						</label>
						<br />
						<label className="md:font-medium">
							Transfer facility and convert your Shop into Small Digital Bank.
						</label>
						<br />
						<button
							onClick={() => setModalShow1(true)}
							className="btn-style focus:outline-none h-10 font-medium md:w-1/2 w-full text-base rounded-xl mt-2 "
						>
							Register here to Know More
						</button>
						<RetailerSignup
							show={modalShow1}
							onHide={() => setModalShow1(false)}
						/>
					</div>
					<div className="md:w-2/5 p-5 ">
						<img src={B1} width="400" />
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
					<div className="md:w-1/2 p-5 ">
						<img src={B2} width="400" />
					</div>
					<div className="md:w-1/2 w-full p-5">
						<label className="md:font-bold md:text-5xl">Aadhar ATM</label>
						<br />
						<label className="md:font-medium flex-wrap">
							AEPS, is an Aadhaar based payment solution which empowers bank
							users to carry out financial transactions (without any debit
							card/credit card/ cheque book) using only their Aadhaar card,
							registered with their bank account, and biometric authentication.
							Cash withdrawal and Mini Statement are the two basic features of
							the AEPS , with Payifi Retailer App you can earn on every
							transaction.
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
						<label className="md:font-bold md:text-5xl">Micro ATM</label>
						<br />
						<label className="md:font-medium flex-wrap">
							With ATM at every nook and Corner of town, cash and banking
							services reaches to the doorstep and serves the purpose of
							Financial Inclusion. Micro ATM is a small POS device where in
							Customer can Chip in his Card and use ATM services like Bank
							Balance and cash Withdrawl, retailer can earn on every
							transaction.
						</label>
						<br />
						<button
							onClick={() => setModalShow1(true)}
							className="btn-style focus:outline-none h-10 font-medium md:w-2/5 w-full text-base rounded-xl mt-2 "
						>
							Register here to Know More
						</button>
					</div>
					<div className="md:w-1/2 p-5 ">
						<img src={B3} width="400" />
					</div>
				</div>
				<div className="h-auto flex-wrap flex w-full bg-gray-100">
					<div className="md:w-1/2 p-5 ">
						<img src={B4} width="400" />
					</div>
					<div className="md:w-1/2 w-full p-5">
						<label className="md:font-bold md:text-5xl">Money Transfer</label>
						<br />
						<label className="md:font-medium flex-wrap">
							Payifi wide range of services aims at making transactions safe and
							secure for consumers and also add new revenue stream for both
							retailers and distributors. We made Funds remittance easy with
							just few clicks one can transfer money from One place to other and
							avoid long ques at the bank or at ATMs, With Retailers now can
							earn on every Transaction.
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
};

export default BillPayment;
