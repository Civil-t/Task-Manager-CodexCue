import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideNav from "./components/SideNav/SideNav";
import Home from "./components/routes/Home";
import Settings from "./components/routes/Settings";
import Project from "./components/routes/Project";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/sidenav" element={<SideNav />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
      <Route path="/project" element={<Project />}></Route>
    </Routes>
  </BrowserRouter>
);

