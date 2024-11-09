import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import store from "./app/store";

// Ant Design 5 uses a different way of handling CSS, so no need to import `reset.css` anymore
// You can import specific components or use the default styles as per your needs
// import 'antd/dist/reset.css'; // This is no longer necessary in Ant Design 5.x

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	</React.StrictMode>
);
