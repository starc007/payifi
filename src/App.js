import "./App.css";
import React from 'react'
import {BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom'
import Home from "./screens/Home";
import Footer from "./components/Footer";
import BillPayment from "./screens/BillPayment";
import Float from "./screens/Float";
import AboutUs from "./screens/AboutUs";

function App() {
	return (
		<Router>
			{/* <Header /> */}
			<Float />
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Route path="/services/bill-payment-recharge" exact={true} component={BillPayment} />
				<Route path="/about-us" exact={true} component={AboutUs} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
