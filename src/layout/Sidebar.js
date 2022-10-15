import React from "react";
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

const Siderbar = () => {
  return (
    <div className="flex flex-col justify-between w-72 px-2">
      <div>
        <div className="mt-1  mb-4 ml-l flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest transform transition-colors duration-200">
          <img src={twitterIcon} alt="Twitter Logo" className="w-9 h-9"></img>
        </div>
        <nav className="mb-4">
          <ul>
            <li>Home</li>
            <li>Explore</li>
          </ul>
        </nav>
        <nav>
          <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200">
            Tweet
          </button>
        </nav>
      </div>
      <div>Alt taraf</div>
    </div>
  );
};

export default Siderbar;
