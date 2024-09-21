import React from "react";
import { LuShoppingBag } from "react-icons/lu";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Card({ name, id, image, price, rating }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex w-[140px] h-[300px] md:w-[200px] md:h-[360px] flex-col bg-white text-black rounded py-2 cursor-pointer hover:scale-105 transition-all delay-200 justify-between"
        onClick={() => navigate(`/all/${id}`)}
      >
        <img
          src={image}
          loading="lazy"
          className="h-[62%] md:h-[70%]  p-2 rounded"
        />
        <div className="px-2">
          <h4 className="text-sm line-clamp-2 mb-1">{name}</h4>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-green-700 px-1 rounded font-semibold text-white text-sm">
              {rating.rate} <IoIosStar />
            </div>
            <p>{`(${rating.count})`}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">${price}</p>
            <button
              className="bg-[#7735EF] px-4 py-3 rounded-md hover:bg-[#5a3a97c6] h-[10%] flex justify-center items-center"
              onClick={() => console.log("Added to cart")}
            >
              <LuShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
