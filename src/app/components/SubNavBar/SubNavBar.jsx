import SubNavBarItem from "./SubNavBarItem";

export default function SubNavBar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
      <SubNavBarItem title="Trending" param="trending" />
      <SubNavBarItem title="Top Rated" param="top_rated" />
    </div>
  );
}
