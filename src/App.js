import "./App.css";
import React from 'react'
import {BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom'
import Home from "./screens/Home";
import Footer from "./components/Footer";
import BillPayment from "./screens/BillPayment";
import BankingService from "./screens/BankingService";
import Float from "./screens/Float";
import AboutUs from "./screens/AboutUs";
import Distributor from "./screens/Distributor";

function App() {
	return (
		<Router>
			{/* <Header /> */}
			<Float />
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
				<Route path="/about-us" exact={true} component={AboutUs} />
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
