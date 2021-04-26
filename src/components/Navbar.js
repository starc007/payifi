import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo/logo.png";

const Header = () => {
	return (
		<Navbar fixed="top" expand="lg" className="bg-white">
			<Navbar.Brand href="/" className="pl-2">
				<img src={logo} style={{ height: 40, width: 100 }} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />

			<Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
				<Nav>
					<Nav.Link href="/about-us">About Us</Nav.Link>

					<NavDropdown
						renderMenuOnMount={true}
						title="Services"
						id="basic-nav-dropdown"
					>
						<NavDropdown.Item href="/services/bill-payment-recharge">
							Bill Payment & Recharges
						</NavDropdown.Item>
						<NavDropdown.Item href="/services/banking-services">
							Banking Services
						</NavDropdown.Item>
						<NavDropdown.Item href="/services/payment-services">
							Payment Services
						</NavDropdown.Item>
						<NavDropdown.Item href="/services/gift-cards">
							Gift Cards
						</NavDropdown.Item>
						<NavDropdown.Item href="/services/whitelabel">
							Whitelabel
						</NavDropdown.Item>
						<NavDropdown.Item href="/services/api">
							API Services
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown
						renderMenuOnMount={true}
						title="Partner with us"
						id="basic-nav-dropdown"
					>
						<NavDropdown.Item href="/partner-with-us/retailer">
							Retailer
						</NavDropdown.Item>
						<NavDropdown.Item href="/partner-with-us/distributor">
							Distributor
						</NavDropdown.Item>
						<NavDropdown.Item href="/services/whitelabel">
							Whitelabel
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">
							Developer API
						</NavDropdown.Item>
					</NavDropdown>

					<NavDropdown
						renderMenuOnMount={true}
						title="Login"
						id="basic-nav-dropdown"
					>
						<NavDropdown.Item href="#action/3.1">
							Retailer Login
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">
							Distributor Login
						</NavDropdown.Item>
					</NavDropdown>

					<Nav.Link href="/contact-us">Contact Us</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
