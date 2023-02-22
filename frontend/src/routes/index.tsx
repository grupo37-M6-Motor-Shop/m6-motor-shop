import { Routes, Route, Navigate } from "react-router";
import AdvertiverProfile from "../pages/AdvertiverProfile";
import Home from "../pages/Home";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<Home />}/>
      <Route path="/profile" element={<AdvertiverProfile />}/>
      <Route path="*" element={<Navigate  to="/homepage" />}/>
    </Routes>
  );
}

export default RoutesMain;
