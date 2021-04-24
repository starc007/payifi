import React from "react";
import { Card } from "react-bootstrap";

import Card1 from "../assets/Card/Card1.png";
import Card2 from "../assets/Card/Card2.png";
import Card3 from "../assets/Card/Card3.png";
import Card4 from "../assets/Card/Card4.png";
import Card5 from "../assets/Card/Card5.png";
import Card6 from "../assets/Card/Card6.png";

const Cards = () => {
	return (
		<div className="flex flex-wrap padd justify-center ">
			<div className="div1">
				<Card
					style={{ width: "23rem" }}
					className="text-center shadow rounded"
				>
					<Card.Img variant="top" src={Card1} className="p-4" />
					<Card.Body className="relative">
						<Card.Title className="text-color-main">
							Bill Payments & Recharge
						</Card.Title>
						<Card.Text>
							Offer customers the options to recharge mobile, DTH services, data
							cards and Utility bill Payment from 150+ partners. Recharge and
							Bill Payments transactions are frequent in nature and will ensure
							recurring income.
						</Card.Text>
					</Card.Body>
					<Card.Footer className="bg-white">
						<a href="/services/bill-payment-recharge">
							<button className="btn-style focus:outline-none h-10 font-medium w-32 rounded-xl pt-1 ">
								KNOW MORE
							</button>
						</a>
					</Card.Footer>
				</Card>
			</div>
			<div className="div1">
				<Card
					style={{ width: "23rem" }}
					className="text-center shadow rounded"
				>
					<Card.Img variant="top" src={Card2} className="p-4" />
					<Card.Body className="relative">
						<Card.Title className="text-color-main">
							Banking Services
						</Card.Title>
						<Card.Text>
							Offer uninterrupted banking services like cash withdrawal, money
							transfer, cash deposits, savings etc. through AEPS, Micro ATM and
							Domestic Money Transfer facility and convert your Shop into Small
							Digital Bank.
						</Card.Text>
					</Card.Body>
					<Card.Footer className="bg-white">
						<a href="/services/banking-services">
							<button className="btn-style focus:outline-none h-10 font-medium w-32 rounded-xl pt-1 ">
								KNOW MORE
							</button>
						</a>
					</Card.Footer>
				</Card>
			</div>
			<div className="div1">
				<Card
					style={{ width: "23rem" }}
					className="text-center shadow rounded"
				>
					<Card.Img variant="top" src={Card3} className="p-4" />
					<Card.Body className="relative">
						<Card.Title className="text-color-main">
							Payment Services
						</Card.Title>
						<Card.Text>
							Now Accept Payments Through various Modes Like MPOS, Payment Links
							and UPI QR and enrich your Shop and Customers smartly and
							securely.
							<br />
							<br />
							<br />
						</Card.Text>
					</Card.Body>
					<Card.Footer className="bg-white">
						<a href="/services/payment-services">
							<button className="btn-style focus:outline-none h-10 font-medium w-32 rounded-xl pt-1 ">
								KNOW MORE
							</button>
						</a>
					</Card.Footer>
				</Card>
			</div>
			<div className="div1">
				<Card
					style={{ width: "23rem" }}
					className="text-center shadow rounded"
				>
					<Card.Img variant="top" src={Card4} className="p-4" />
					<Card.Body className="relative">
						<Card.Title className="text-color-main">Gift Cards</Card.Title>
						<Card.Text>
							Payifi Corporate Gifting service enables you to gift your
							employees something special, which they want to buy form more than
							250+ brands store.
							<br />
							<br />
						</Card.Text>
					</Card.Body>
					<Card.Footer className="bg-white">
						<a href="/services/gift-cards">
							<button className="btn-style focus:outline-none h-10 font-medium w-32 rounded-xl pt-1 ">
								KNOW MORE
							</button>
						</a>
					</Card.Footer>
				</Card>
			</div>
			<div className="div1">
				<Card
					style={{ width: "23rem" }}
					className="text-center shadow rounded"
				>
					<Card.Img variant="top" src={Card5} className="p-4" />
					<Card.Body className="relative">
						<Card.Title className="text-color-main">Whitelabel</Card.Title>
						<Card.Text>
							It is a unique opportunity to start working for your own brand.
							Complete solution to create your own brand in the market and
							enhance its brand visibility. Business model with unlimited
							earning potential
						</Card.Text>
					</Card.Body>
					<Card.Footer className="bg-white">
						<a href="/services/whitelabel">
							<button className="btn-style focus:outline-none h-10 font-medium w-32 rounded-xl pt-1 ">
								KNOW MORE
							</button>
						</a>
					</Card.Footer>
				</Card>
			</div>
			<div className="div1">
				<Card
					style={{ width: "23rem" }}
					className="text-center shadow rounded"
				>
					<Card.Img variant="top" src={Card6} className="p-4" />
					<Card.Body className="relative">
						<Card.Title className="text-color-main">API Services</Card.Title>
						<Card.Text>
							Payifi provides numerous REST APIs to enhance the various business
							transactions. It aims to enable smooth and hassle-free integration
							with any B2B or B2C portal at minimum time.
							<br />
							<br />
						</Card.Text>
					</Card.Body>
					<Card.Footer className="bg-white">
						<a href="/services/api">
							<button className="btn-style focus:outline-none h-10 font-medium w-32 rounded-xl pt-1 ">
								KNOW MORE
							</button>
						</a>
					</Card.Footer>
				</Card>
			</div>
		</div>
	);
};

export default Cards;
