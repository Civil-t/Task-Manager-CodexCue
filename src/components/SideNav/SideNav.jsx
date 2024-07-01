import { Link } from "react-router-dom";
import "./SideNav.css";

function SideNav() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/aboutus">About</Link>
    </>
  );
}

export default SideNav;
