import React from "react";
import Header from "../components/Navbar";
import Face from '../assets/Face.png'
import {
	FaLinkedin,

} from "react-icons/fa";

import gif from "../assets/Images/Payifi GIF.gif";
import { Image } from "react-bootstrap";

const AboutUs = () => {
	return (
		<div className="h-full">
			<div className="h-16">
				<Header />
			</div>
			<div>
				<div className="parallax h-auto">
					<div className="md:w-1/2 p-5 w-full">
						<label className="md:text-4xl md:font-bold text-white">
							Our Story
						</label>
						<p className="md:font-medium md:text-base text-white">
							The Primary aims of Formation of Payifi are “Financial Inclusion”
							and “Transparency”. Financial Inclusion aims to provide the
							Banking Services to the Last Mile with Transparency in the System
							completes the mission in true sense. Lakhs of hard working people
							in small towns, Villages or small kirana shops in large towns are
							still unaware to join the Financial Inclusion drive in true sense
							because of various reasons like lack of Knowledge or proper
							Fintech support has lead to fractured implementation of Financial
							Inclusion. This has given rise to the Formation of Payifi. Payifi
							Includes experts from BFSI, IT and Retail Industries with decades
							of Experience to address the above situation. We at payifi aim to
							empower the small business to implement the Financial Inclusion in
							the Right Spirit.
						</p>
					</div>
				</div>
				<div className="bg-white h-auto pt-4">
					<label className="md:text-4xl font-bold pl-4">
						Why Financial Inclusion?
					</label>
					<div className="flex pl-4 flex-wrap w-full">
						<div className="md:w-1/2 w-full p-2">
							<p className="md:font-medium md:text-lg flex-wrap">
								Financial Inclusion doesn’t restrict just to rural or backward
								India, its primary aim to include every Indian to banking
								services irrespective of location. Indian Retail Market in both
								Urban and Rural is unorganized with more than 95% of it consists
								of small kirana stores, brick and mortar establishments which
								has very limited access to the financial services, we hereby
								tries to empower them by giving them transparent system to serve
								their customer and fulfill their banking and financial needs. We
								aims to create these small stores a brand ambassadors of
								Transparent Financial Inclusion and creates their own Digital
								Network to empower themselves and country as a whole.
							</p>
						</div>
						<div className="md:w-1/2 w-full ">
							<img src={gif} alt="Payifi" />
						</div>
					</div>
				</div>
				<div className="bg-gray-100 pb-4 h-auto flex-wrap">
					<p className="text-4xl font-bold pl-4 pt-4 text-center">
						What we offer
					</p>
					<ul
						style={{ listStyle: "unset", marginLeft: 50 }}
						className="text-lg p-2"
					>
						<li>
							A safe and secure technology to the Small Shop Keepers via app or
							Web Portal. The retailers and distributors get access to the
							financial services.
						</li>
						<li>
							Our services are equipped with user friendly safe and secure
							technology to provide the following Services
						</li>
						<li>Bill payments and Recharges</li>
						<li>Banking Services</li>
						<li>Payment and cash Collection Services</li>
					</ul>
					<label className="text-xl font-bold pl-4">We partnered with:</label>
					<p className="text-lg pl-4 pr-2">
						<span className="font-medium">Retailers:</span> to enable them to
						earn more and provide banking facilities at last mile.
					</p>
					<p className="text-lg pl-4 pr-2">
						<span className="font-medium">Distributors:</span> to provide
						training and support in running operations effectively to retailers
						to enable them to provide financial services at last mile.
					</p>
					<p className="text-lg pl-4 pr-2">
						<span className="font-medium">Developers:</span> to provide secure
						and fast APIs to help propagate the Financial Inclusions at last
						mile.
					</p>
				</div>
				<div className="bg-white h-auto flex-wrap">
					<p className="text-4xl font-medium pt-2 text-center">Vision</p>
					<p className="text-base text-center p-2">
						To entrust and Transform Lives, through providing Innovative
						Financial Solutions in Digital Payments.
					</p>
					<p className="text-4xl font-medium text-center">Mission</p>
					<p className="text-base text-center flex-wrap p-2">
						To establish a robust nationwide payment ecosystem, in a seamlessly
						networked environment, using mobile technology to deliver payments
						and remittances in real time.
					</p>
					<p className="text-4xl font-medium text-center ">Values</p>
					<p className="text-base pl-5 flex-wrap p-2">
						<span className="font-bold">SECURITY & TRUST: </span> We strive to
						become the most secure and trusted brand in the market we operate
						<br />
						<span className="font-bold">UNITY & TEAM WORK: </span> When many
						hands join together filled with dedication and motivation to achieve
						a certain goal, it becomes easier and better.
						<br />
						<span className="font-bold">TRANSPARENCY: </span>We are transparent
						in all our dealings with stakeholders in letter and sprits.
						<br />
						<span className="font-bold">PASSION & EXCELLENCE:</span> We are
						passionate about everything we do which includes keeping relations
						with our employees and customers, providing them with the best of
						our services and fulfill their requirements.
						<br />
						<span className="font-bold">ETHICS:</span> We act with honesty,
						integrity and professionalism maintaining high level of moral
						standards, while dealing with all our stakeholders .
					</p>
				</div>
				<div className="bg-gray-100 h-auto text-center flex-wrap pb-2">
					<p className="text-4xl pt-2">Our Partners</p>
					<p className="text-base flex-wrap p-2">
						We at payifi partnered with various banks and other Financial
						Institutions to empower and provide Financial Inclusion services at
						the Last mile, <br />
						through Our Distributors, Whitelabel and API Partners.
					</p>
					<p className="text-4xl">Benefits with Us?</p>
					<p className="text-base font-medium">
						Secure and Safe environment <br />
						Cost Effective
						<br />
						Transparent
						<br />
						Digital Network
					</p>
				</div>
				<div className="bg-white h-auto pb-4">
					<p className="text-4xl font-medium text-center">Our Team</p>
					<div className="flex w-full flex-wrap">
						<div className="md:w-1/3 w-full flex justify-center items-center">
							<div className="img-sir">
								{/* <img src={Face} /> */}
								<Image src={Face} roundedCircle width="121" height="140" />
							</div>
						</div>
						<div className="md:w-2/3 w-full text">
							<label className="text-color-main  text-2xl md:pl-2">
								Abhimanyu Malhotra, CEO,CTO
							</label>
							<div className="icn md:pl-2">
								<FaLinkedin size={26} color="#007BB5" />
							</div>
							<p className="text-base font-semibold p-2">
								Having a vast Experience in various Fields right from Banking to
								Real Estate to Retail Industry, worked with various Reputed
								Organizations, his rich experience brings dynamics to the
								Business. Even his Rich Experience in IT has lead organization
								to develop various products and Expand to Grow Business
							</p>
						</div>
					</div>
					<div className="flex w-full flex-wrap my-4">
						<div className="md:w-1/3 w-full flex justify-center items-center">
							<div className="img-sir"></div>
						</div>
						<div className="md:w-2/3 w-full text">
							<label className="text-color-main  text-2xl md:pl-2">
								Ankita Arora, Co- Founder, COO
							</label>
							<div className="icn md:pl-2">
								<FaLinkedin size={26} color="#007BB5" />
							</div>
							<p className="text-base font-semibold p-2">
								Co- Founded the company and has a vast experience in Tech and
								Retail, Looking after the Operations in the company right from
								Product development Till delivery, her ability to conjugate with
								team makes her Leader in her own work. The prominent works done
								EBOYO in catering to the Local market was her Brain Child.
							</p>
						</div>
					</div>
					<div className="flex w-full flex-wrap">
						<div className="md:w-1/3 w-full flex justify-center items-center">
							<div className="img-sir"></div>
						</div>
						<div className="md:w-2/3 w-full text">
							<label className="text-color-main  text-2xl md:pl-2">
								Sapna Malhotra, Co- Founder, CBO
							</label>
							<div className="icn md:pl-2">
								<FaLinkedin size={26} color="#007BB5" />
							</div>
							<p className="text-base font-semibold p-2">
								Co- Founded the company and has a rich experience in Building
								the Go to Market Strategies along with her right Entrepreneurial
								Skills and in depth understanding of market makes her problem
								solver for every business road block.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
