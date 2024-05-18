import { useState } from "react";
import { header } from "../../assets/data";
import Logo from "./logo";
import NavLink from "./navLink";
import SearchContainer from "./searchContainer";
import UseOutClick from "../../hooks/useOutClick";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between w-full h-[3rem] border-b bg-ship">
      <nav className="flex justify-between items-center px-4 w-full h-full ">
        <Logo />
        <div className="flex h-full">
          <NavLink path="/" text={header.home} />
          <NavLink path="/products" text={header.products} />
          <NavLink path="/category" text={header.category} />
          <NavLink path="/card" text={header.card} />
        </div>
        <div className="h-full" onClick={() => setIsSearch(!isSearch)}>
          <div
            id="searchproductcon"
            className="flex items-center justify-center w-[85px] h-full cursor-pointer"
          >
            <FaMagnifyingGlass />
          </div>
        </div>
        {isSearch && (
          <UseOutClick setEvent={setIsSearch} id="searchproductcon">
            <SearchContainer setIsSearch={setIsSearch} />
          </UseOutClick>
        )}
      </nav>
    </header>
  );
};

export default Header;
