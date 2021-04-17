import React from 'react'
import Header from '../components/Navbar';
import Recharge from '../assets/Card/522x357.png'

const BillPayment = () => {
    return (
			<div className="h-full">
				<div className="h-16">
					<Header />
				</div>
				<div>
					<div className="h-auto bg-gray-100 flex-wrap flex w-full">
						<div className="md:w-1/2 w-full p-5">
							<label className="md:font-bold md:text-5xl">
								Bill Payments & <br />
								Recharges
							</label>

							<label className="md:font-medium">
								Earn more by doing DTH/ Mobile recharges, Utility bill
							</label>
							<label className="md:font-medium">
								payments, for your customers easily and quickly of
							</label>
							<br />
							<label className="md:font-medium">more than 150 companies</label>
							<br />
							<button className="btn-style focus:outline-none h-10 font-medium w-40 text-base rounded-xl mt-2 ">
								CREATE ACCOUNT
							</button>
						</div>
						<div className="md:w-1/2 ">
							<img src={Recharge} />
						</div>
					</div>
					<div className="w-full h-auto bg-white p-5 flex-wrap">
						<p className="text-lg font-medium text-center">
							Now help your customers by making bill payments and recharge at
							the snap of your fingertips with the help of the Pay1 Merchant
							App. Pay1 enables any retailer to make any recharge and bill
							payments associated with Electricity, Water, Gas, DTH, and
							Telecomm to name a few. Thereby, Pay1 converts any shop into a
							one-stop solution for any of the customer needs associating with
							bill payment and recharge
						</p>
					</div>
					<div className="h-auto bg-gray-100 flex-wrap flex w-full">
						<div className="md:w-1/2 p-2 ">
							<img src={Recharge} />
						</div>
						<div className="md:w-1/2 w-full p-5">
							<label className="md:font-bold md:text-5xl">
								Mobile Recharge
							</label>
							<br />
							<label className="md:font-medium flex-wrap">
								With the Pay1 merchant app in your hands, mobile recharge could
								not have become easier. It not only is simple, fast, and
								convenient but equally hassle-free too.Pay1 merchant app enables
								you to complete every transaction request of your customers. We
								support almost every mobile operator and covers options from
								both ends of the spectrum namely Prepaid and Postpaid
							</label>
							<br />
							<button className="btn-style focus:outline-none h-10 font-medium w-32 text-base rounded-xl mt-2 ">
								KNOW MORE
							</button>
						</div>
					</div>
					<div className="h-auto flex-wrap flex w-full">
						<div className="md:w-1/2 w-full p-5">
							<label className="md:font-bold md:text-5xl">DTH Recharge</label>
							<br />
							<label className="md:font-medium flex-wrap">
								Now, don’t let anything come in between your customer and their
								entertainment. With the Pay1 merchant app, choose from a variety
								of operators like Airtel DTH, Dish TV, Videocon D2h, and Tata
								sky to name a few, and select the best package for your customer
								depending on your customer’s needs. So choose Pay1 for doing DTH
								recharge anytime and anywhere
							</label>
							<br />
							<button className="btn-style focus:outline-none h-10 font-medium w-32 text-base rounded-xl mt-2 ">
								KNOW MORE
							</button>
						</div>
						<div className="md:w-1/2 p-2 ">
							<img src={Recharge} />
						</div>
					</div>
					<div className="h-auto flex-wrap flex w-full bg-gray-100">
						<div className="md:w-1/2 p-2 ">
							<img src={Recharge} />
						</div>
						<div className="md:w-1/2 w-full p-5">
							<label className="md:font-bold md:text-5xl">
								Utility Recharge
							</label>
							<br />
							<label className="md:font-medium flex-wrap">
								Gone are the days when anyone used to stand in a long queue,
								waiting for hours just for filling their monthly bills namely
								Electricity, Water, and Gas. With the Pay1 merchant app in your
								mobile, you can ease your customer’s life and save their time by
								giving them the option of filling their monthly bill/ dues
								through your smartphone, Pay1 merchant app, and most importantly
								through you !
							</label>
							<br />
							<button className="btn-style focus:outline-none h-10 font-medium w-32 text-base rounded-xl mt-2 ">
								KNOW MORE
							</button>
						</div>
					</div>
				</div>
			</div>
		);
}

export default BillPayment
