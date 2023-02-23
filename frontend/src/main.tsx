import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MotorShopProvider from "./context";
import Global from "./style/Global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MotorShopProvider>
			<BrowserRouter>
				<Global />
				<App />
			</BrowserRouter>
		</MotorShopProvider>
	</React.StrictMode>
);
