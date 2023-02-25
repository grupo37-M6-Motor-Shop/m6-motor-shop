import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
	const token = window.localStorage.getItem("@motors-shop:token");

	return token ? <Outlet /> : <Navigate to={"/homepage"} replace />;
};

export default ProtectedRoutes;
