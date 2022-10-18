import React from "react";
import { SearchIcons } from "../icon/Icon";

const Widgets = () => {
  return (
    <aside className="w-80">
      <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark">
        <SearchIcons className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="placeholder-gray-dark outline-none"
        />
      </div>
      <div>Timeline</div>
    </aside>
  );
};

export default Widgets;
