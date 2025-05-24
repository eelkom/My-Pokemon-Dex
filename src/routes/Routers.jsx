import Detail from "../pages/detail";
import Dex from "../pages/dex";
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dex" element={<Dex />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}
