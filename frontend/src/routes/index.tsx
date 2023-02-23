import { Routes, Route, Navigate } from "react-router";
import AdvertiverProfile from "../pages/AdvertiverProfile";
import DetailAd from "../pages/DetailAd";
import Home from "../pages/Home";
import Login from "../pages/Login";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/profile" element={<AdvertiverProfile />}/>
      <Route path="/detail-ad" element={<DetailAd />}/>
      <Route path="*" element={<Navigate  to="/homepage" />}/>
    </Routes>
  );
}

export default RoutesMain;
