import React from "react";
import { Link } from "react-router-dom";
import { AiFillBank, AiOutlineMenu } from "react-icons/ai";
import { RiBankCardFill } from "react-icons/ri";
import { FaPiggyBank } from "react-icons/fa";
import { GiBanknote } from "react-icons/gi";
import "../Float.css";
const Float = () => {
	function myFunction() {
		document.getElementById("myDropdown").classList.toggle("show");
	}

	window.onclick = function (event) {
		if (!event.target.matches(".dropbtn")) {
			var dropdowns = document.getElementsByClassName("dropdown-content");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains("show")) {
					openDropdown.classList.remove("show");
				}
			}
		}
	};
	return (
		<div>
			<div className="col-3 menu1">
				<button className="menu-btn focus:outline-none" onClick={myFunction}>
					<AiOutlineMenu size={19} className="ham-btn" />
				</button>
				<ul id="myDropdown" className="dropdown-menu-content">
					<a href="/services/bill-payment-recharge">
						<li className="li-extra">
							<FaPiggyBank size={32} className="ml-4 mb-1" />
							Bill Payment & Recharges
						</li>
					</a>
					<br />
					<a href="/services/banking-services">
						<li className="li-extra">
							<FaPiggyBank size={32} className="ml-4 mb-1" />
							Banking Services
						</li>
					</a>
					<br />
					<a href="/services/payment-services">
						<li className="li-extra">
							<GiBanknote size={32} className="ml-4 mb-1" />
							Payment Services
						</li>
					</a>
					<br />
					<a href="/services/gift-cards">
						<li className="li-extra1">
							<AiFillBank size={32} className="ml-4 mb-1" />
							Gift Cards
						</li>
					</a>
					<br />
					<a href="/services/whitelabel">
						<li className="li-extra1">
							<RiBankCardFill size={32} className="ml-4 mb-1" />
							Whitelabel
						</li>
					</a>
					<br />
					<a href="/services/api">
						<li className="li-extra1">
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
