import React from "react";
import { Link } from "react-router-dom";
import { AiFillBank, AiOutlineMenu } from "react-icons/ai";
import { RiBankCardFill } from "react-icons/ri";
import { FaPiggyBank } from "react-icons/fa";
import { GiBanknote } from "react-icons/gi";
import "../Float.css";
const Float = () => {
	return (
		<div>
			{/* <div className="menu-btn">
				<AiOutlineMenu size={40} color="#000" className="ham-btn" />
			</div> */}
			<div className="col-3 menu1">
				<div className="menu-btn">
					<AiOutlineMenu size={30}  className="ham-btn" />
				</div>
				<ul>
					<Link to="/services/bill-payment-recharge">
						<li>
							<FaPiggyBank size={32} className="ml-4 mb-1" />
							Bill Payment & Recharges
						</li>
					</Link>
					<br />
					<a href="/services/bill-payment-recharge">
						<li>
							<FaPiggyBank size={32} className="ml-4 mb-1" />
							Banking Services
						</li>
					</a>
					<br />
					<a href="#">
						<li>
							<GiBanknote size={32} className="ml-4 mb-1" />
							Payment Services
						</li>
					</a>
					<br />
					<a href="#">
						<li>
							<AiFillBank size={32} className="ml-4 mb-1" />
							Gift Cards
						</li>
					</a>
					<br />
					<a href="#">
						<li>
							<RiBankCardFill size={32} className="ml-4 mb-1" />
							Whitelabel
						</li>
					</a>
					<br />
					<a href="#">
						<li>
							<RiBankCardFill size={32} className="ml-4 mb-1" />
							API Services
						</li>
					</a>
					<br />
				</ul>
			</div>
		</div>
	);
};

export default Float;
