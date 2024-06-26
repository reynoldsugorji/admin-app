import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    setToggleUserProfile,
    setScreenSize,
    screenSize,
    toggleUserProfile,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const handleUserProfile = () => {
    setToggleUserProfile(!toggleUserProfile);
  };

  return (
    <div
      className={`flex ${
        !activeMenu ? "justify-between" : "justify-end"
      } p-2 md:ml-6 md:mr-6 relative w-full`}
    >
      {!activeMenu && (
        <NavButton
          title="Menu"
          customFunc={handleActiveMenu}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
      )}

      <div className="flex">
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={handleUserProfile}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="dark:text-gray-400 text-gray-900 text-14">Hi,</span>{" "}
              <span className="dark:text-gray-300 text-blue-600 font-medium ml-1 text-14">
                Reynolds
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {toggleUserProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
