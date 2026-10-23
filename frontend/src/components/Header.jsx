import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import MenuComponent from "./Menu";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="border-b border-b-gray-200 relative">
      <div className="container mx-auto px-4 lg:px-0 py-3 flex justify-between items-center">
        <div>
          <Logo to="/" />
        </div>
        <div className="flex justify-center items-center lg:hidden">
          <Menu
            className={`${openMenu ? "hidden" : "block"} cursor-pointer`}
            onClick={() => setOpenMenu(!openMenu)}
          />
          <X
            className={`${openMenu ? "block" : "hidden"} cursor-pointer`}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>

        <MenuComponent menu={openMenu} />
      </div>
    </header>
  );
};

export default Header;
