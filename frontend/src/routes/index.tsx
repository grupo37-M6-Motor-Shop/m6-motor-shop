import { Routes, Route, Navigate } from "react-router";
import AdvertiverProfile from "../pages/AdvertiverProfile";
import DetailAd from "../pages/DetailAd";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = () => {
	return (
		<Routes>
			<Route path="*" element={<Navigate to="/homepage" />} />
			<Route path="/homepage" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/register" element={<Register />} />
			<Route path="/profile/:id" element={<AdvertiverProfile />} />
			<Route path="/detail-ad/:id" element={<DetailAd />} />
		</Routes>
	);
};

export default RoutesMain;
