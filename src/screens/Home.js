import React from "react";
import Float from "./Float";

import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Cards from "../components/Cards";
import OurPresence from "../assets/123.jpeg";
import Footer from "../components/Footer";

import razorpayLogo from "../assets/Partners/razorpay-logo.png";
import paisaLogo from "../assets/Partners/99paisa-lohgo.png";
import iciciLogo from "../assets/Partners/icici-logo.png";
import sbmLogo from "../assets/Partners/SBM-logo.png";
import rapipayLogo from "../assets/Partners/rapipay-logo.png";

import '../Testimonial.css'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";



const Home = () => {
	return (
		<div className="h-full">
			<div className="h-16">
				<Navbar />
			</div>
			<div>
				{/* <Float /> */}
				<Slider />
				<div className="flex items-center justify-center h-24">
					<p className="text-color-main text-4xl font-medium">Our Services</p>
				</div>
				<div className="flex flex-wrap justify-center">
					<Cards />
				</div>
				<div className="md:h-screen h-auto bg-gray-200">
					<p className="text-center text-xl font-bold flex-wrap md:text-4xl pt-4">
						Become a Payifi Partner and Earn 50,000 per Month
					</p>
					<p className="text-center text-xl font-medium flex-wrap md:text-2xl">
						Become a India Ka Digital Dukandar
					</p>
					<div className="flex flex-wrap w-full">
						<div style={{width:"10%"}}></div>
						<div className="md:w-2/5 w-full flex-wrap m-4">
							<p className="font-medium md:text-lg text-base">
								Payifi empowers local dukandars to become part of the country’s
								digital revolution. Partner with Payifi to earn more and
								Increase customer Footfall.
							</p>
							<ul
								style={{ listStyle: "unset" }}
								className="pl-4  md:text-lg text-base"
							>
								<li>
									Become a Part of Digital revolution and Earn Upto Rs.30,000
									Per Month
								</li>
								<li>Use Payifi Portal without Investment</li>
								<li>
									Earn Commission on every Transaction and Boost your earnings
								</li>
								<li>Secure, Safe and Reliable Services</li>
								<li>All in One Application to earn More</li>
							</ul>
							<div className="flex">
								<button className="btn-style focus:outline-none h-10 font-medium w-32 text-base rounded-xl mx-4 ">
									DOWNLOAD APP
								</button>
								<button className="btn-style2 focus:outline-none h-10 font-medium w-32 text-base rounded-xl  ">
									READ MORE
								</button>
							</div>
						</div>
						<div className="md:w-2/5 w-full mt-4">
							<iframe
								// width="560"
								height="315"
								className="w-full"
								src="//www.youtube.com/embed/jFGKJBPFdUA"
								//frameborder="0"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</div>
				<div className="h-auto mb-2 bg-white flex-wrap">
					<p className="text-center text-xl font-bold flex-wrap md:text-3xl pt-4">
						Boost your Existing Distributor Business and we have much more
						<br /> for you on our Application
					</p>
					<div className="flex justify-center">
						<button className="btn-style focus:outline-none h-10 font-medium w-40 text-base rounded-xl mx-4 ">
							CREATE ACCOUNT
						</button>
						<button className="btn-style2 focus:outline-none h-10 font-medium w-32 text-base rounded-xl  ">
							READ MORE
						</button>
					</div>
				</div>
				<div className="md:h-auto bg-gray-200 pb-4">
					<p className="text-color-main text-center font-bold text-4xl pt-4">
						Aiming to Provide a Digital Network Across the Nation
					</p>
					<div className="flex flex-wrap w-full">
						<div style={{ width: "10%" }}></div>
						<div className="md:w-2/5 w-full flex-wrap m-4">
							<p className="md:text-lg text-base">
								Payifi aims to provide a Platform which empowers retailers to
								access the various products and services and in return gives
								banking and digital services to their customers and become a
								part of India Digital Revolution.
							</p>
							<p className="md:text-lg text-base pt-4">
								We aims to create a Powerful Intra Network of retailers across
								the nation which provides the Banking and Other Digital Services
								to the Last Mile.
							</p>
						</div>
						<div className="md:w-2/5 w-full">
							<img src={OurPresence} />
						</div>
					</div>
				</div>
				<div className="h-auto bg-white mb-4">
					<p className="text-color-main text-center font-bold md:text-4xl text-2xl pt-2">
						Our Partners
					</p>

					<marquee width="100%" direction="left">
						<div className="track flex items-center justify-center">
							<div>
								<img src={iciciLogo} />
							</div>
							<div>
								<img src={razorpayLogo} className="mx-4" />
							</div>
							<div>
								<img src={sbmLogo} />
							</div>
							<div>
								<img src={rapipayLogo} className="mx-4" />
							</div>
							<div>
								<img src={paisaLogo} style={{ height: 50 }} />
							</div>
						</div>
					</marquee>
				</div>

				<div className="h-auto bg-gray-100 w-full">
					<div
						id="testimonial_095"
						class="carousel slide testimonial_095_indicators testimonial_095_control_button thumb_scroll_x swipe_x ps_easeOutSine"
						data-ride="carousel"
						data-pause="hover"
						data-interval="5000"
						data-duration="2000"
					>
						<div className="testimonial_095_header">
							<h5>Success Stories</h5>
							<label className="font-medium text-2xl">How Payifi helps to Earn More?</label>
						</div>
						<ol className="carousel-indicators">
							<li
								data-target="#testimonial_095"
								data-slide-to="0"
								className="active"
							></li>
							<li data-target="#testimonial_095" data-slide-to="1"></li>
						</ol>
						<div className="mb-2 carousel-inner" role="listbox">
							<div className="carousel-item active">
								<div className="testimonial_095_slide">
									<a href="#">
										<span class="fa fa-twitter"></span>
									</a>
									<p>
										The Various Services Provided by the Payifi are easy to use
										and are Flawless. The all in one services on the single
										platform helps to earn extra money other than my Business.
										The whole system is safe and secure. I do recommend to use
										the services.
									</p>
									<h5>
										<a href="#">Ramesh Kumar </a>
									</h5>
								</div>
							</div>
							<div class="carousel-item">
								<div class="testimonial_095_slide">
									<a href="#">
										<span class="fa fa-twitter"></span>
									</a>
									<p>
										Payifi empowers women like me from the Rural and Sub Urban
										Areas to help us to earn more. Payifi Provides the
										diversified services which help us to serve more to our
										clients.
									</p>
									<h5>
										<a href="#">Surabhi Anand </a>
									</h5>
								</div>
							</div>
						</div>
						<a
							class="carousel-control-prev"
							href="#testimonial_095"
							data-slide="prev"
						>
							<FaAngleLeft size={24} color="#000" />
						</a>
						<a
							class="carousel-control-next"
							href="#testimonial_095"
							data-slide="next"
						>
							<FaAngleRight size={24} color="#000" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
