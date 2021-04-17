import React from "react";
import { Card} from "react-bootstrap";
import {CardData} from "./CardData";

const Cards = () => {
	return (
		<>
			{CardData.map((item, i) => {
				return (
					<Card
						style={{ width: "20rem", margin: 20 }}
						className="text-center shadow-lg rounded"
					>
						<Card.Img variant="top" src={item.image} />
						<Card.Body className="relative">
							<Card.Title className="text-color-main">{item.title}</Card.Title>
							<Card.Text>{item.text}</Card.Text>
							
						</Card.Body>
						<Card.Footer className="bg-white">
							<button className="btn-style focus:outline-none h-10 font-medium w-32 rounded-xl pt-1 ">
								KNOW MORE
							</button>
						</Card.Footer>
					</Card>
				);
		})}
		</>
	);
};

export default Cards;
