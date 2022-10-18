import React from "react";
import TweetBox from "../components/TweetBox";
import { PopularIcon } from "../icon/Icon";

const Content = () => {
  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
        <span className="text-xl font-bold text-gray-900">Home</span>
        <PopularIcon />
      </header>
      <div className="flex px-4 py-3 space-x-4">
        <img
          src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png"
          alt="user profile"
          className="w-11 h-11 rounded-full"
        />
        <TweetBox />
      </div>
    </main>
  );
};

export default Content;
