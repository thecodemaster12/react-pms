import React from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon, ClockIcon, BuildingApartmentIcon, ClipboardIcon } from "@phosphor-icons/react";

const Home = () => {
  return (
    <main>
      <div className="container mx-auto py-6">
        <h2 className="mb-2 text-xl">Overviews</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/tasks">
            <div className="flex bg-indigo-200 p-4 rounded-md gap-5">
              <div className="p-2 bg-indigo-100 rounded-md">
                <CheckCircleIcon className="text-indigo-400" size={32} />
              </div>
              <div className="">
                <h5>My Tasks</h5>
                <span>0</span>
              </div>
            </div>
          </Link>
          <Link to="/workspaces">
            <div className="flex bg-blue-200 p-4 rounded-md gap-5">
              <div className="p-2 bg-blue-100 rounded-md">
                <BuildingApartmentIcon className="text-blue-400" size={32} />
              </div>
              <div className="">
                <h5>Workspace</h5>
                <span>0</span>
              </div>
            </div>
          </Link>
          <Link to="/tickets">
            <div className="flex bg-purple-200 p-4 rounded-md gap-5">
              <div className="p-2 bg-purple-100 rounded-md">
                <ClipboardIcon className="text-purple-400" size={32} />
              </div>
              <div className="">
                <h5>All Tickets</h5>
                <span>0</span>
              </div>
            </div>
          </Link>
          <Link to="/overdue">
            <div className="flex bg-red-200 p-4 rounded-md gap-5">
              <div className="p-2 bg-red-100 rounded-md">
                <ClockIcon className="text-red-400" size={32} />
              </div>
              <div className="">
                <h5>Overdue</h5>
                <span>0</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
