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
					<NavDropdown
						title="About"
						id="basic-nav-dropdown"
						renderMenuOnMount={true}
					>
						<NavDropdown.Item href="about-us">About us</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">
							Career Culture
						</NavDropdown.Item>
					</NavDropdown>

					<NavDropdown
						renderMenuOnMount={true}
						title="Partner with us"
						id="basic-nav-dropdown"
					>
						<NavDropdown.Item href="#action/3.1">Retailer</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Distributor</NavDropdown.Item>
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

					<Nav.Link href="#link">Contact Us</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
