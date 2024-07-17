import { Suspense } from "react";
import SubNavBarItem from "./SubNavBarItem";

export default function SubNavBar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
      <Suspense fallback={<div>Loading...</div>}>
        <SubNavBarItem title="Trending" param="trending" />
        <SubNavBarItem title="Top Rated" param="top_rated" />
      </Suspense>
    </div>
  );
}
