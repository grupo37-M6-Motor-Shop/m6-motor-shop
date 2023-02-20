import { Routes, Route } from "react-router";
import AdvertiverProfile from "../pages/AdvertiverProfile";
import Home from "../pages/Home";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<Home />}/>
      <Route path="/profile" element={<AdvertiverProfile />}/>
    </Routes>
  );
}

export default RoutesMain;
