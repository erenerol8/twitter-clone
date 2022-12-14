import { React, useState } from "react";
import twitterIcon from "../images/icon-twitter.svg";

import {
  ProfileIcon,
  ExploreIcon,
  HomeIcon,
  MoreIcon,
  MessagesIcon,
  NotificationIcon,
  ListsIcon,
  BookmarksIcon,
} from "../icon/Icon";
import SideLink from "../components/SideLink";
import UserBox from "../components/UserBox";
const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const Siderbar = () => {
  const [active, setActive] = useState("home");
  const handleMenuItemClick = (name) => {
    setActive(name);
  };
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between w-72 px-2">
      <div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest transform transition-colors duration-200 mt-1  mb-4 ml-l ">
          <img src={twitterIcon} alt="Twitter Logo" className="w-9 h-9"></img>
        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <nav>
          <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200">
            Tweet
          </button>
        </nav>
      </div>
      <div>
        <UserBox />
      </div>
    </div>
  );
};

export default Siderbar;
