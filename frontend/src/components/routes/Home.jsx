import SideNav from "../SideNav/SideNav";
import Dashboard from "../Dashboard/Dashboard";
import "./Project.css";

function Home() {
  return (
    <>
      <div className="main-container">
        <SideNav />
        <Dashboard />
      </div>
    </>
  );
}

export default Home;
