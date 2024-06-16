import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-blue-700 text-md  m-2";

  const normalLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200
     dark:hover:text-black hover:bg-blue-200 hover:text-blue-700 text-md  m-2`;
  return (
    <div className="ml-3 h-screen pb-10 overflow-auto md:overflow-hidden md:hover:overflow-auto">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="justify-between w-full pr-4 items-center gap-3 mt-4 ml-3 flex font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <div>ReYnolds</div>
              <div>
                <IoCloseCircle onClick={() => setActiveMenu(false)} className="text-blue-600 text-2xl" />
              </div>
            </Link>
            
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                //gets prev menu-state to toggle
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl rounded-full p-3 mt-4 block hover:bg-light-gray md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-500 m-3 mt-4 uppercase text-sm">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={`/${link.name}`}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
