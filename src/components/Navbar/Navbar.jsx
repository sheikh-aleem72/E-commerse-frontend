import React, { useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [textInput, setTextInput] = useState("");
  const [searchVisibility, setSearchVisibility] = useState("hidden");
  const navigate = useNavigate();
  function handleTextChage(event) {
    console.log(event.target.value);
    setTextInput(event.target.value);
  }

  function handleSearchVisibility() {
    console.log("clicked");
    setSearchVisibility(searchVisibility == "hidden" ? "block" : "hidden");
  }

  function goToAllProduct() {}
  return (
    <>
      <div className="bg-black backdrop-blur-sm fixed px-2 w-full z-30 ">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a
                    className="cursor-pointer font-bold hover:text-[#d5cfcfa9]"
                    onClick={() => navigate("/All-Products")}
                  >
                    All Products
                  </a>
                </li>

                <li>
                  <a
                    className="cursor-pointer font-bold hover:text-[#d5cfcfa9]"
                    onClick={() => navigate("/Collections")}
                  >
                    Collections
                  </a>
                </li>
              </ul>
            </div>
            <a
              className="sm:text-lg text-[5vw] ml-2 cursor-pointer font-extrabold"
              onClick={() => navigate("/")}
            >
              FAKE STORE
            </a>
          </div>
          <div className="md:w-[30vw] hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="md:w-[30vw] rounded-xl p-3 bg-transparent border"
              onChange={handleTextChage}
            />
          </div>
          <div className="navbar-end flex gap-2">
            <a
              className="cursor-pointer font-bold hover:text-[#d5cfcfa9] hidden md:block"
              onClick={() => navigate("/all")}
            >
              All Products
            </a>
            <a
              className="cursor-pointer font-bold hover:text-[#d5cfcfa9] hidden md:block"
              onClick={() => navigate("/collections")}
            >
              Collections
            </a>
            <div className="sm:hidden flex">
              <button
                className="px-4 py-3 rounded-md hover:opacity-80"
                onClick={handleSearchVisibility}
              >
                <FaSearch />
              </button>
            </div>
            <button
              className="bg-[#7735EF] px-4 py-3 rounded-md hover:bg-[#5a3a97c6]"
              onClick={() => navigate("/cart")}
            >
              <LuShoppingBag />
            </button>
          </div>
        </div>
        <div className={`${searchVisibility} sm:hidden w-full px-2 pb-2`}>
          <input
            type="text"
            placeholder="Search"
            className="rounded-xl p-3 bg-transparent border w-full"
            onChange={handleTextChage}
          />
        </div>
      </div>
    </>
  );
}
