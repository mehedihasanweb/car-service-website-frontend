import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative min-h-screen md:flex">
      {/* toggle button for the screen */}
      <button
        onClick={toggleDrawer}
        className="md:hidden fixed bottom-4 z-50 bg-gray-300 p-2 rounded"
      >
        {isDrawerOpen ? "Close" : "Open"}
      </button>

      {/* sidebar / Drawer */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isDrawerOpen ? "translate-x-0" : " -translate-x-full"
        } md:translate-x-0 md:static md:w-2/12 transition-transform duration-300 ease-in-out bg-gray-300 p-4 lg:p-12 z-40 h-screen flex-col bottom-0`}
      >
        <ul>
          <li className="border border-black p-4 w-full">
            <Link to={""}>Dashboard</Link>
          </li>
          <li className="border border-black p-4 w-full">
            <Link to={"all-service"}>All Services</Link>
          </li>
          <li className="border border-black p-4 w-full">
            <Link to={"add-service"}>Add Service</Link>
          </li>
          <li className="border border-black p-4 w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      {/* main content */}
      <div className="flex-1 p-4 md:p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
