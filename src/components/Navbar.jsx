import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";

import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-sm rounded-full p-3 hover:bg-blue-100 "
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
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();
    return window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        color="blue"
        icon={<AiOutlineMenu />}
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          color="blue"
          icon={<FiShoppingCart />}
          customFunc={() => handleClick("cart")}
        />
        <NavButton
          title="chat"
          color="blue"
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
          customFunc={() => handleClick("chat")}
        />
        <NavButton
          title="Notifications"
          color="blue"
          dotColor="#03C9D7"
          icon={<RiNotification3Fill />}
          customFunc={() => handleClick("notifications")}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              src={avatar}
              alt="user-profile"
              className="h-8 w-8 rounded-full"
            />
            <p>
              <span className="text-14 text-gray-400 ">Hi, </span>{" "}
              <span className="text-gray-400 font-bold text-14">Reynolds</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14 " />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  );
};

export default Navbar;
