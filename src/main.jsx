import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideNav from "./components/SideNav/SideNav";
import Home from "./components/routes/Home";
import AboutUs from "./components/routes/AboutUs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/sidenav" element={<SideNav />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/aboutus" element={<AboutUs />}></Route>
    </Routes>
  </BrowserRouter>
);

