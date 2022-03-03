import React from "react";
import { Route } from "react-router-dom";
import { Navbar } from "./Components";
import { RiskMangment1 } from "./Pages";

const App = () => {
	return (
		<>
			<Navbar />
			<Route path="/" component={RiskMangment1} exact />
		</>
	);
};

export default App;
