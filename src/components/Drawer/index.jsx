import { useState } from "react";
import Star from "../svg/Star";
import { categories } from "../constants";
import { submenuItems } from "../constants";
import { submenuItemsForShop } from "../constants";

export default function Drawer({
  className,
  open,
  action,
  w = "18",
  h = "17",
}) {
  //function used to call svgs.
  function svg() {
    return (
      <svg
        width={w}
        height={h}
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
          fill="#FFA800"
        />
      </svg>
    );
  }

  //created a mapping array to reduce the code of categories of mobile view drawer.
  const categoryItems = categories.map((category, index) => (
    <li key={index} className="category-item">
      <a to="/all-products">
        <div className="flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
          <div className="flex items-center space-x-6">
            <span>{svg()}</span>
            <span className="text-sm font-400">{category}</span>
          </div>
          <div>
            <span>{svg()}</span>
          </div>
        </div>
      </a>
    </li>
  ));

  //created mapping for subcategories of homepage
  const submenuList = submenuItems.map((item, index) => (
    <li key={index} className="category-item">
      <a to={item.to}>
        <div className="flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
          <div className="flex items-center space-x-6">
            <span className="text-sm font-400">{item.text}</span>
          </div>
          <div>
            <span>{svg()}</span>
          </div>
        </div>
      </a>
    </li>
  ));

  //mapping the array for shop categories
  const submenuListForShop = submenuItemsForShop.map((item, index) => (
    <li key={index} className="category-item">
      <a to={item.to}>
        <div className="flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
          <div className="flex items-center space-x-6">
            <span className="text-sm font-400">{item.text}</span>
          </div>
          <div>
            <span>{svg()}</span>
          </div>
        </div>
      </a>
    </li>
  ));

  const [tab, setTab] = useState("category");
  return (
    <>
      <div
        className={`drawer-wrapper w-full  h-full relative block lg:hidden  ${
          className || ""
        }`}
      >
        {open && (
          <div
            onClick={action}
            className="w-full h-screen bg-black bg-opacity-40 z-40 left-0 top-0 fixed"
          ></div>
        )}
        <div
          className={`w-[280px] transition-all duration-300 ease-in-out h-screen overflow-y-auto overflow-x-hidden overflow-style-none bg-white fixed top-0 z-50 ${
            open ? "left-0" : "-left-[280px]"
          }`}
        >
          <div className="w-full px-5 mt-5 mb-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x-5 items-center">
                <div className="compaire relative">
                  <span>
                    <Star />
                  </span>
                  <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                    2
                  </span>
                </div>
                <div className="favorite relative">
                  <span>
                    <Star />
                  </span>
                  <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                    1
                  </span>
                </div>
              </div>
              <button onClick={action} type="button">
                {svg()}
              </button>
            </div>
          </div>
          <div className="w-full mt-5 px-5">
            <div className="search-bar w-full h-[34px]  flex ">
              <div className="flex-1 bg-white h-full border border-r-0 border-[#E9E9E9]">
                <input
                  type="text"
                  className="w-full text-xs h-full focus:outline-none foucus:ring-0 placeholder:text-qgraytwo pl-2.5 "
                  placeholder="Search Product..."
                />
              </div>
              <div className="w-[40px] h-full bg-qyellow flex justify-center items-center">
                <span>{svg()}</span>
              </div>
            </div>
          </div>
          <div className="w-full mt-5 px-5 flex items-center space-x-3">
            <span
              onClick={() => setTab("category")}
              className={`text-base font-semibold  ${
                tab === "category" ? "text-qblack" : "text-qgray"
              }`}
            >
              Categories
            </span>
            <span className="w-[1px] h-[14px] bg-qgray"></span>
            <span
              onClick={() => setTab("menu")}
              className={`text-base font-semibold ${
                tab === "menu" ? "text-qblack" : "text-qgray "
              }`}
            >
              Main Menu
            </span>
          </div>
          {tab === "category" ? (
            <div className="category-item mt-5 w-full">
              <ul className="categories-list">{categoryItems}</ul>
            </div>
          ) : (
            <div className="menu-item mt-5 w-full">
              <ul className="categories-list">
                <li className="category-item">
                  <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                    <div className="flex items-center space-x-6">
                      <span className="text-sm font-400">Home</span>
                    </div>
                    <div>
                      <span>{svg()}</span>
                    </div>
                  </div>
                  <ul className="submenu-list ml-5">{submenuList}</ul>
                </li>
                <li className="category-item">
                  <div className="flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                    <div className="flex items-center space-x-6">
                      <span className="text-sm font-400">Shop</span>
                    </div>
                    <div>
                      <span>{svg()}</span>
                    </div>
                  </div>
                  <ul className="submenu-list ml-5">{submenuListForShop}</ul>
                </li>

                <li className="category-item">
                  <div className="flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                    <div className="flex items-center space-x-6">
                      <span className="text-sm font-400">About</span>
                    </div>
                    <div>
                      <span>{svg()}</span>
                    </div>
                  </div>
                </li>
                <li className="category-item">
                  <div className="flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                    <div className="flex items-center space-x-6">
                      <span className="text-sm font-400">Blogs</span>
                    </div>
                    <div>
                      <span>{svg()}</span>
                    </div>
                  </div>
                </li>
                <li className="category-item">
                  <div className="flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                    <div className="flex items-center space-x-6">
                      <span className="text-sm font-400">Contact</span>
                    </div>
                    <div>
                      <span>{svg()}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
