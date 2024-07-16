import React from "react";
import SubNavbarItem from "./SubNavbarItem";

const SubNavBar = () => {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
      <SubNavbarItem title="Trending" param="trending" />
      <SubNavbarItem title="Top Rated" param="top_rated" />
    </div>
  );
};

export default SubNavBar;
