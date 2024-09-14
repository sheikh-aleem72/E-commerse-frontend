import React from "react";
import homeContent from "../../assets/home-content.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[90vh] p-4 ">
        <img
          src={homeContent}
          className="w-[100%] h-[100%] object-cover rounded-md mt-16 relative"
        />
        <button
          className="absolute left-8 bottom-8 font-bold cursor-pointer bg-[#7735EF] px-4 text-[5vw] sm:text-2xl py-2 rounded shadow-xl hover:bg-[#3b167e]"
          onClick={() => navigate("/all")}
        >
          VIEW THE COLLECTION
        </button>
      </div>
    </>
  );
}
