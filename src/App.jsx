import React from "react";
import { Route } from "react-router-dom";
import { Navbar } from "./Components";
import { RiskMangment1, RiskMangment2 } from "./Pages";

const App = () => {
	return (
		<>
			<Navbar />
			<Route path="/" component={RiskMangment1} exact />
			<Route path="/risk" component={RiskMangment2} exact />
		</>
	);
};

export default App;
