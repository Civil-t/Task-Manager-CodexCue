import { Link } from "react-router-dom";
import "./SideNav.css";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SideBarData";
import { useState } from "react";
import logo from "../../images/logo.png";

function SideNav() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="navbar">
          <img src={logo} alt="" className="logo" />

          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default SideNav;
