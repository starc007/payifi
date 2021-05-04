import React from "react";
import Logo from "../assets/logo/logo-white.png";
import {
	FaFacebookSquare,
	FaLinkedin,
	FaWhatsapp,
	FaYoutube,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div
			className="h-auto w-full flex flex-wrap pt-4 pl-5 pb-4"
			style={{ backgroundColor: "#212121" }}
		>
			<div className="md:w-1/4 w-full mt-4 pl-4 ">
				<img src={Logo} style={{ height: 40, width: 100 }} />
				<p className="text-white pt-4">India’s Digital Network of Retailers</p>
				<p className="text-white ">
					2021 DOT COM LABS LLP © All rights reserved.
				</p>
				<p className="text-white pt-4">Get in touch.</p>
				<a
					href="#"
					className="text-white "
					style={{ textDecorationLine: "none" }}
				>
					xyz@payifi.com
				</a>
				<br />
				<a
					href="#"
					className="text-white "
					style={{ textDecorationLine: "none" }}
				>
					info@payifi.com
				</a>
				<br />
				<a
					href="#"
					className="text-white"
					style={{ textDecorationLine: "none" }}
				>
					customer@payifi.com
				</a>
			</div>
			<div className="md:w-1/4 w-full mt-4 pl-4">
				<p className="text-white text-xl">Payifi</p>
				<ul className="ul-styling">
					<li>
						<a
							href="/about-us"
							className="text-white"
							style={{ textDecorationLine: "none" }}
						>
							About
						</a>
					</li>
					<li>
						<a
							href="/partner-with-us/retailer"
							className="text-white"
							style={{ textDecorationLine: "none" }}
						>
							Retailer
						</a>
					</li>
					<li>
						<a
							href="/partner-with-us/distributor"
							className="text-white"
							style={{ textDecorationLine: "none" }}
						>
							Distributor
						</a>
					</li>

					<li>
						<a
							href="/contact-us"
							className="text-white"
							style={{ textDecorationLine: "none" }}
						>
							Contact Us
						</a>
					</li>
				</ul>
			</div>
			<div className="md:w-1/4 w-full mt-4 pl-4">
				<p className="text-white text-xl">Payifi Services</p>
				<ul className="ul-styling">
					<li>
						<a
							href="/services/bill-payment-recharge"
							className="text-white"
							style={{ textDecorationLine: "none" }}
						>
							Bill Payment and Recharges
						</a>
					</li>
					<li>
						<a
							href="/services/banking-services"
							className="text-white"
							style={{ textDecorationLine: "none" }}
						>
							Banking Services
						</a>
					</li>
					<li>
						<a
							href="/services/payment-services"
							className="text-white"
							style={{ textDecorationLine: "none" }}
						>
							Payment Services
						</a>
					</li>
					<li>
						<a
							href="/services/gift-cards"
							className="text-white"
							style={{ textDecorationLine: "none" }}
						>
							Gift Cards
						</a>
					</li>
					<li>
						<a
							href="/services/whitelabel"
							className="text-white"
							style={{ textDecorationLine: "none" }}
						>
							Whitelabel
						</a>
					</li>
					<li>
						<a
							href="/services/api"
							className="text-white"
							style={{ textDecorationLine: "none" }}
						>
							API Services
						</a>
					</li>
				</ul>
			</div>
			<div className="md:w-1/4 w-full mt-4 pl-4">
				<p className="text-white text-xl">Social Presence</p>
				<div className="flex mb-2">
					<a href="#">
						<FaFacebookSquare size={24} color="#3B5998" />
					</a>
					<a href="#">
						<FaLinkedin size={24} color="#007BB5" className="mx-2" />
					</a>
					<a href="#">
						<FaYoutube size={24} color="#BB0000" />
					</a>
					<a href="#">
						<FaWhatsapp size={24} color="#4FCE5D" className="mx-2" />
					</a>
				</div>
				<ul className="ul-styling">
					<li>
						<a
							href="/terms-and-conditions"
							className="text-white"
							style={{ textDecorationLine: "none" }}
						>
							Terms & Conditions
						</a>
					</li>
					<li>
						<a
							href="/privacy-policy"
							className="text-white"
							style={{ textDecorationLine: "none" }}
						>
							Privacy Policy
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
