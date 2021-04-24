import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const DistributorSignup = (props) => {
	const [phone, setPhone] = useState();
	return (
		<Modal {...props}>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Become a Payifi Distributor
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group>
						<Form.Label className="text-base font-medium">
							Mobile Number
						</Form.Label>
						<PhoneInput
							country={"in"}
							value={phone}
							onChange={setPhone}
							className="focus:outline-none focus:shadow:none focus:ring-2 focus:ring-blue-600 w-11/12"
							inputStyle={{ width: "100%" }}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label className="text-base font-medium">Name</Form.Label>
						<Form.Control placeholder="Full Name" type="text" />
					</Form.Group>
					<Form.Group className="text-base font-medium">
						<Form.Label>Email</Form.Label>
						<Form.Control placeholder="Enter email" type="email" />
					</Form.Group>
					<Form.Group className="text-base font-medium">
						<Form.Label>Shop Name</Form.Label>
						<Form.Control placeholder="Enter Shop Name" type="text" />
					</Form.Group>
					<Form.Group>
						<Form.Label className="text-base font-medium">
							Select your Current Business
						</Form.Label>
						<Form.Control as="select">
							<option>Select</option>
							<option>Kirana Shop/Grocery</option>
							<option>Mobile/Mobile Accessories</option>
							<option>Stationary Shop</option>
							<option>Medical Store</option>
							<option>General Store</option>
							<option>Tours and Travels</option>
							<option>Paan Shop</option>
							<option>others</option>
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label className="text-base font-medium">Pincode</Form.Label>
						<Form.Control placeholder="Enter Pincode" type="text" />
					</Form.Group>
					<div className="flex justify-center">
						<button
							className="btn-style focus:outline-none h-10 font-medium w-32 text-base rounded"
							type="submit"
						>
							Generate OTP
						</button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export const RetailerSignup = (props) => {
    const [phone, setPhone] = useState();
    return (
			<Modal {...props}>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Become a Payifi Retailer
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group>
							<Form.Label className="text-base font-medium">
								Mobile Number
							</Form.Label>
							<PhoneInput
								country={"in"}
								value={phone}
								onChange={setPhone}
								className="focus:outline-none focus:shadow:none focus:ring-2 focus:ring-blue-600 w-11/12"
								inputStyle={{ width: "100%" }}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label className="text-base font-medium">Name</Form.Label>
							<Form.Control placeholder="Full Name" type="text" />
						</Form.Group>
						<Form.Group className="text-base font-medium">
							<Form.Label>Email</Form.Label>
							<Form.Control placeholder="Enter email" type="email" />
						</Form.Group>
						<Form.Group className="text-base font-medium">
							<Form.Label>Shop Name</Form.Label>
							<Form.Control placeholder="Enter Shop Name" type="text" />
						</Form.Group>

						<Form.Group>
							<Form.Label className="text-base font-medium">Pincode</Form.Label>
							<Form.Control placeholder="Enter Pincode" type="text" />
						</Form.Group>
						<div className="flex justify-center">
							<button
								className="btn-style focus:outline-none h-10 font-medium w-32 text-base rounded"
								type="submit"
							>
								Generate OTP
							</button>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		);
}

