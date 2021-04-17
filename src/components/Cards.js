import React from "react";
import { Card, Row, Col } from "react-bootstrap";
// import { CardData } from "./CardData";

import Card1 from '../assets/Card/Card1.jpeg'
import Card2 from '../assets/Card/Card2.png'
import Card3 from '../assets/Card/Card3.png'
import Card4 from '../assets/Card/Card4.png'
import Card5 from '../assets/Card/Card5.png'
import Card6 from '../assets/Card/Card6.png'

const Cards = () => {
	return (
		<div>
			<Row>
				<Col>
					<Card
						style={{ width: "20rem", margin: 20 }}
						className="text-center shadow-lg rounded"
					>
						<Card.Img variant="top" src={Card1} />
						<Card.Body className="relative">
							<Card.Title className="text-color-main">
								Bill Payments & Recharge
							</Card.Title>
							<Card.Text>
								Offer customers the options to recharge mobile, DTH services,
								data cards and Utility bill Payment from 150+ partners. Recharge
								and Bill Payments transactions are frequent in nature and will
								ensure recurring income.
							</Card.Text>
						</Card.Body>
						<Card.Footer className="bg-white">
							<button className="btn-style focus:outline-none h-10 font-medium w-32 rounded-xl pt-1 ">
								KNOW MORE
							</button>
						</Card.Footer>
					</Card>
				</Col>
				<Col>
					<Card
						style={{ width: "20rem", margin: 20 }}
						className="text-center shadow-lg rounded"
					>
						<Card.Img variant="top" src={Card2} />
						<Card.Body className="relative">
							<Card.Title className="text-color-main">
								Banking Services
							</Card.Title>
							<Card.Text>
								Offer uninterrupted banking services like cash withdrawal, money
								transfer, cash deposits, savings etc. through AEPS, Micro ATM
								and Domestic Money Transfer facility and convert your Shop into
								Small Digital Bank.
							</Card.Text>
						</Card.Body>
						<Card.Footer className="bg-white">
							<button className="btn-style focus:outline-none h-10 font-medium w-32 rounded-xl pt-1 ">
								KNOW MORE
							</button>
						</Card.Footer>
					</Card>
				</Col>
				<Col>
					<Card
						style={{ width: "20rem", margin: 20 }}
						className="text-center shadow-lg rounded"
					>
						<Card.Img variant="top" src={Card3} />
						<Card.Body className="relative">
							<Card.Title className="text-color-main">
								Payment Services
							</Card.Title>
							<Card.Text>
								Now Accept Payments Through various Modes Like MPOS, Payment
								Links and UPI QR and enrich your Shop and Customers smartly and
								securely.
								<br />
								<br />
								<br />
							</Card.Text>
						</Card.Body>
						<Card.Footer className="bg-white">
							<button className="btn-style focus:outline-none h-10 font-medium w-32 rounded-xl pt-1 ">
								KNOW MORE
							</button>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card
						style={{ width: "20rem", margin: 20 }}
						className="text-center shadow-lg rounded"
					>
						<Card.Img variant="top" src={Card4} />
						<Card.Body className="relative">
							<Card.Title className="text-color-main">Gift Cards</Card.Title>
							<Card.Text>
								Payifi Corporate Gifting service enables you to gift your
								employees something special, which they want to buy form more
								than 250+ brands store.
								<br />
								<br />
								<br />
							</Card.Text>
						</Card.Body>
						<Card.Footer className="bg-white">
							<button className="btn-style focus:outline-none h-10 font-medium w-32 rounded-xl pt-1 ">
								KNOW MORE
							</button>
						</Card.Footer>
					</Card>
				</Col>
				<Col>
					<Card
						style={{ width: "20rem", margin: 20 }}
						className="text-center shadow-lg rounded"
					>
						<Card.Img variant="top" src={Card5} />
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
							<button className="btn-style focus:outline-none h-10 font-medium w-32 rounded-xl pt-1 ">
								KNOW MORE
							</button>
						</Card.Footer>
					</Card>
				</Col>
				<Col>
					<Card
						style={{ width: "20rem", margin: 20 }}
						className="text-center shadow-lg rounded"
					>
						<Card.Img variant="top" src={Card6} />
						<Card.Body className="relative">
							<Card.Title className="text-color-main">API Services</Card.Title>
							<Card.Text>
								Payifi provides numerous REST APIs to enhance the various
								business transactions. It aims to enable smooth and hassle-free
								integration with any B2B or B2C portal at minimum time.
								<br />
								<br />
							</Card.Text>
						</Card.Body>
						<Card.Footer className="bg-white">
							<button className="btn-style focus:outline-none h-10 font-medium w-32 rounded-xl pt-1 ">
								KNOW MORE
							</button>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Cards;
