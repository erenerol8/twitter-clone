import React from "react";
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
    <div className="w-72 bg-blue-200 ">
      <h1>Sidebar</h1>
      <HomeIcon />
      <ExploreIcon />
      <NotificationIcon />
      <MessagesIcon />
      <ProfileIcon />
      <MoreIcon />
      <ListsIcon />
      <BookmarksIcon />
    </div>
  );
};

export default Siderbar;
