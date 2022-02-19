import React from "react";
import { Route } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { RiskMangment1, RiskMangment2 } from "./Pages";

const App = () => {
	return (
		<>
			<Navbar />
			<Route path="/" component={RiskMangment1} exact />
			<Route path="/risk" component={RiskMangment2} />
			<Footer />
		</>
	);
};

export default App;
