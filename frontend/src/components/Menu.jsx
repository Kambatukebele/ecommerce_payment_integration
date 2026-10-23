import { ShoppingCart, Search, Heart } from "lucide-react";
import List from "./List";

const MenuComponent = ({ menu }) => {
  return (
    <ul
      className={`${menu ? "translate-x-0" : "-translate-x-full"} absolute top-13 left-0 right-0 h-screen px-4 z-10 bg-gray-50 transition duration-700 ease-in-out lg:top-0 lg:h-0 lg:static lg:translate-x-0 lg:bg-transparent lg:flex lg:justify-center lg:items-center lg:gap-4`}
    >
      <div className="flex flex-col justify-center gap-4 py-5 lg:flex-row lg:justify-center lg:items-center lg:gap-4">
        <List list="Shop" />
        <List list="Collections" />
        <List list="About us" />
      </div>
      <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-4">
        <Search />
        <Heart />
        <span className="block w-8 relative">
          <small className="w-4 h-4 flex justify-center items-center rounded-full bg-black text-white text-xs absolute top-0 right-0">
            0
          </small>
          <ShoppingCart />
        </span>
      </div>
    </ul>
  );
};

export default MenuComponent;
