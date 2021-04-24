import React from 'react'
import Header from '../../components/Navbar';
import Recharge from '../../assets/Content/Bill.png'
import Mrecharge from '../../assets/Content/Mrecharge.png'
import Utility from "../../assets/Content/Utility.png";
import Dth from "../../assets/Content/Dth.png";


const BillPayment = () => {
    return (
			<div className="h-full">
				<div className="h-16">
					<Header />
				</div>
				<div>
					<div className="h-auto bg-gray-100 flex-wrap flex justify-around w-full">
						<div className="md:w-2/5 w-full p-5">
							<label className="md:font-bold md:text-4xl text-3xl font-medium">
								Bill Payments & <br />
								Recharges
							</label>

							<label className="md:font-medium">
								Offer customers the options to recharge mobile, DTH services,
								data cards and Utility
							</label>
							<label className="md:font-medium">
								bill Payment from 150+ partners. Recharge and Bill Payments
								transactions
							</label>
							<br />
							<label className="md:font-medium">
								are frequent in nature and will ensure recurring income.
							</label>
							<br />
							<button className="btn-style focus:outline-none h-10 font-medium w-48 text-base rounded-xl mt-2 ">
								Register here for Free
							</button>
						</div>
						<div className="md:w-2/5 p-5 ">
							<img src={Recharge} width="380" />
						</div>
					</div>
					<div className="w-full h-auto bg-white p-5 flex-wrap">
						<p className="text-lg font-medium text-center">
							Payifi offers various utility services such as Recharge, Bill
							Payments and other utility services. Agents can now do mobile and
							DTH recharge using our advanced portal and earn commission per
							transaction. Pay bills of more than 150 billers in India including
							all the major electricity, gas, water and telecom operators all
							through our all in one recharge portal which uses Bharat Bill Pay
							(BBPS) at the click of a button, using a single wallet.
						</p>
					</div>
					<div className="h-auto bg-gray-100 flex-wrap flex w-full">
						<div className="md:w-1/2 p-5 ">
							<img src={Mrecharge} width="380" />
						</div>
						<div className="md:w-1/2 w-full p-5">
							<label className="md:font-bold md:text-5xl">
								Mobile Recharge
							</label>
							<br />
							<label className="md:font-medium flex-wrap">
								With Payifi recharge can be very easy, its not only simply but
								safe and secure with retailers app you can easily complete
								transactions for your customer. With Payifi all the operators
								are covered for both Prepaid and Postpaid services and Earn with
								every transaction.
							</label>
							<br />
							<button className="btn-style focus:outline-none h-10 font-medium md:w-2/5 w-full text-base rounded-xl mt-2 ">
								Register here to Know More
							</button>
						</div>
					</div>
					<div className="h-auto flex-wrap flex w-full">
						<div className="md:w-1/2 w-full p-5">
							<label className="md:font-bold md:text-5xl">DTH Recharge</label>
							<br />
							<label className="md:font-medium flex-wrap">
								With Payifi DTH Recharge customers can recharge their DTH
								packages and can get uninterrupted services at their homes. With
								Payifi you can choose from variety of Operators like Tata Sky,
								Airtel, Videocon etc. and earn with every transaction.
							</label>
							<br />
							<button className="btn-style focus:outline-none h-10 font-medium md:w-2/5 w-full text-base rounded-xl mt-2 ">
								Register here to Know More
							</button>
						</div>
						<div className="md:w-1/2 pl-4 pt-4 ">
							<img src={Dth} width="380" />
						</div>
					</div>
					<div className="h-auto flex-wrap flex w-full bg-gray-100">
						<div className="md:w-1/2 pt-4 pl-4 ">
							<img src={Utility} width="380" />
						</div>
						<div className="md:w-1/2 w-full p-5">
							<label className="md:font-bold md:text-5xl">
								Utility Recharge
							</label>
							<br />
							<label className="md:font-medium flex-wrap">
								Increased Footfalls is the desire of every Business owner,
								Utility Bill Payments are recurring in nature which enables
								footfall for every Month right from Electricity Bill Payments,
								Gas Bills to Loan and Insurance Payments, all the Payments can
								be done through the Mobile app and helps you to earn on every
								transaction.
							</label>
							<br />
							<button className="btn-style focus:outline-none h-10 font-medium md:w-2/5 w-full text-base rounded-xl mt-2 ">
								Register here to Know More
							</button>
						</div>
					</div>
				</div>
			</div>
		);
}

export default BillPayment
