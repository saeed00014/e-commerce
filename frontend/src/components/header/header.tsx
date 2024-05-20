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
    <header className="fixed top-0 left-0 right-0 flex items-center justify-center w-full md:h-[48px] h-[40px] border-b bg-ship z-[100]">
      <nav className="relative flex justify-between items-center md:px-4 px-2 w-full max-w-[1400px] h-full ">
        <Logo />
        <div className="md:flex hidden h-full">
          <NavLink path="/" text={header.home} />
          <NavLink path="/products" text={header.products} />
          <NavLink path="/card" text={header.card} />
        </div>
        <div className="fixed bottom-0 right-0 left-0 md:hidden flex justify-between items-center px-2 h-[40px] border-t [&>a]:w-full [&>a]:px-0 bg-ship">
          <NavLink path="/" text={header.home} />
          <NavLink path="/products" text={header.products} />
          <NavLink path="/card" text={header.card} />
        </div>
        <div className="h-full" onClick={() => setIsSearch(!isSearch)}>
          <div
            id="searchproductcon"
            className="flex items-center justify-center md:w-[85px] w-[70px] h-full cursor-pointer"
          >
            <FaMagnifyingGlass id="searchproductcon" />
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
