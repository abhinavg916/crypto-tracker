import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import { Homepage, Cryptocurrencies, CryptoDetails, Navbar } from "./components";
import "./App.css";

const App = () => (
	<div className="app">
		<div className="navbar">
			<Navbar />
		</div>
		<div className="main">
			<Layout>
				<div className="routes">
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
						<Route path="/crypto/:coinId" element={<CryptoDetails />} />
					</Routes>
				</div>
			</Layout>
		</div>
	</div>
);

export default App;
