import { useEffect, useState } from "react";
import Arrow from "../svg/Arrow";
import {
  categories,
  homeLinks,
  shopLinks,
  linkLabels,
  categories1,
  links1,
} from "../constants";

export default function Navbar({ className }) {
  const [categoryToggle, setToggle] = useState(false);
  const [elementsSize, setSize] = useState("0px");
  // const getItems = document.querySelectorAll(`.categories-list li`).length;
  // if (categoryToggle && getItems > 0) {
  //   setSize(`${40 * getItems}px`);
  // }
  const handler = () => {
    setToggle(!categoryToggle);
  };
  useEffect(() => {
    if (categoryToggle) {
      const getItems = document.querySelectorAll(`.categories-list li`).length;
      if (categoryToggle && getItems > 0) {
        setSize(`${42 * getItems}px`);
      }
    } else {
      setSize(`0px`);
    }
  }, [categoryToggle]);

  const categoryList = categories.map((category, index) => (
    <li className="category-item" key={index}>
      <a href="#">
        <div className="flex justify-between items-center px-5 h-10 bg-white hover:bg-qh2-green transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:text-white">
          <div className="flex items-center space-x-6">
            <Arrow />
            <span className="text-xs font-400">{category}</span>
          </div>
          <div>
            <Arrow />
          </div>
        </div>
      </a>
    </li>
  ));
  const homeLinksList = homeLinks.map((link, index) => (
    <li key={index}>
      <a href={link.to}>
        <span className="text-qgray text-sm font-400 border-b border-transparent hover:text-qyellow hover:border-qyellow">
          {link.label}
        </span>
      </a>
    </li>
  ));
  // Mapping through the array and rendering the list
  const shopLinksList = shopLinks.map((link, index) => (
    <li key={index}>
      <a href="#">
        <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
          {link}
        </span>
      </a>
    </li>
  ));
  const linkList = linkLabels.map((label, index) => (
    <li key={index}>
      <a href="#">
        <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
          {label}
        </span>
      </a>
    </li>
  ));
  // Mapping through the array and rendering the list
  const categoryList1 = categories1.map((category, index) => (
    <li key={index}>
      <a href="#">
        <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
          {category}
        </span>
      </a>
    </li>
  ));
  // Mapping through the array and rendering the list
  const linkList1 = links1.map((link, index) => (
    <li key={index}>
      <a href={link.to}>
        <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
          {link.label}
        </span>
      </a>
    </li>
  ));
  return (
    <div
      className={`nav-widget-wrapper w-full bg-qh2-green h-[60px] relative z-30  ${
        className || ""
      }`}
    >
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex justify-between items-center">
            <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
              <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                <button
                  onClick={handler}
                  type="button"
                  className="w-full h-full flex justify-between items-center"
                >
                  <div className="flex space-x-3 items-center">
                    <span className="text-qblack">
                      <svg
                        className="fill-current"
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="14" height="1" />
                        <rect y="8" width="14" height="1" />
                        <rect y="4" width="10" height="1" />
                      </svg>
                    </span>
                    <span className="text-sm font-600 text-qblacktext">
                      All Categories
                    </span>
                  </div>
                  <div>
                    <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                  </div>
                </button>
                {categoryToggle && (
                  <div
                    className="fixed top-0 left-0 w-full h-full -z-10"
                    onClick={handler}
                  ></div>
                )}
                <div
                  className="category-dropdown w-full absolute left-0 top-[53px] overflow-hidden"
                  style={{ height: `${elementsSize} ` }}
                >
                  <ul className="categories-list">{categoryList}</ul>
                </div>
              </div>
              <div className="nav">
                <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                  <li className="relative">
                    <a to="/">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        <span>Homepage</span>
                        <span className="ml-1.5 ">
                          <Arrow className="fill-current" />
                        </span>
                      </span>
                    </a>
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div
                        className="w-full bg-white flex justify-between items-center "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                {homeLinksList}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="relative">
                    <a to="/">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        <span>Homepage</span>
                        <span className="ml-1.5 ">
                          <Arrow className="fill-current" />
                        </span>
                      </span>
                    </a>
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div
                        className="w-full bg-white flex justify-between items-center "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                {homeLinksList}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                      <span>Shop</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div
                        className="mega-menu-wrapper w-full bg-white p-[30px] flex justify-between items-center "
                        style={{
                          minHeight: "295px",
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper flex-1 h-full flex justify-around -ml-[70px]">
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Shop List
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                {shopLinksList}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Product Layouts
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                {linkList}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                Polular Category
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                {categoryList1}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="thumbnail w-[348px] h-full">
                          <div className="w-full h-[235px]">
                            <img
                              width=""
                              src={`${
                                import.meta.env.VITE_PUBLIC_URL
                              }/src/assets/images/mega-menu-thumb.jpg`}
                              alt=""
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="relative">
                    <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                      <span>Pages</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div
                        className="w-full bg-white flex justify-between items-center "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                {linkList1}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a to="/about">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        <span>About</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a to="/blogs">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        <span>Blog</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a to="/contact">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        <span>Contact</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="become-seller-btn  w-[161px] h-[40px]">
              <a to="/become-saller">
                <div className="yellow-btn flex justify-center items-center cursor-pointer">
                  <div className="flex space-x-2 items-center">
                    <span className="text-sm font-600">Become a Seller</span>
                    <Arrow />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
