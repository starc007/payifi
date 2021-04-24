import "./App.css";
import React from 'react'
import {BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom'
import Home from "./screens/Home";
import Footer from "./components/Footer";
import BillPayment from "./screens/services/BillPayment";
import BankingService from "./screens/services/BankingService";
import Float from "./screens/Float";
import AboutUs from "./screens/AboutUs";
import Distributor from "./screens/Distributor";
import PaymentService from "./screens/services/PaymentService";
import GiftCard from "./screens/services/GiftCard";
import WhiteLabel from "./screens/services/WhiteLabel";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Api from "./screens/services/Api";
import ContactUs from "./screens/ContactUs";

function App() {
	return (
		<Router>
			{/* <Header /> */}
			{/* <Float /> */}
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Route
					path="/services/bill-payment-recharge"
					exact={true}
					component={BillPayment}
				/>
				<Route
					path="/services/banking-services"
					exact={true}
					component={BankingService}
				/>
				<Route
					path="/services/payment-services"
					exact={true}
					component={PaymentService}
				/>
				<Route path="/services/gift-cards" exact={true} component={GiftCard} />
				<Route
					path="/services/whitelabel"
					exact={true}
					component={WhiteLabel}
				/>
				<Route path="/services/api" exact={true} component={Api} />
				<Route path="/privacy-policy" exact={true} component={PrivacyPolicy} />
				<Route path="/about-us" exact={true} component={AboutUs} />
				<Route path="/contact-us" exact={true} component={ContactUs} />
				<Route
					path="/partner-with-us/distributor"
					exact={true}
					component={Distributor}
				/>
				<Redirect to="/" />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
