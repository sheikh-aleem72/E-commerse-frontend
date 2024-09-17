import React from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import fetchProduct from "../../services/fetchProduct.js";
import { IoIosStar } from "react-icons/io";

export default function Product() {
  const { id } = useParams();

  const {
    data: product,
    isError,
    isLoading,
  } = useQuery(["id", id], () => fetchProduct(id), {
    catchTime: 2 * 1000 * 60,
    staleTime: 2 * 1000 * 60,
  });
  return (
    <>
      <div className="pt-20 w-full h-screen px-4 flex">
        {isLoading && <div>Loading...</div>}
        {product && (
          <div className="flex md:flex-row flex-col w-full gap-2 py-2">
            <div className="h-full md:w-[40%] w-full gap-2 rounded-md  bg-white px-4 py-2 flex flex-col justify-center">
              <img
                src={product.image}
                className="h-[80%] rounded self-center"
                loading="lazy"
              />
              <div className="flex items-center mt-4 gap-2 text-white">
                <button className="text-[4.5vw] md:text-lg font-bold bg-yellow-600 p-2 w-[50%] cursor-pointer hover:bg-yellow-700 ">
                  ADD TO CART
                </button>
                <button className="text-[4.5vw] md:text-lg font-bold bg-[#7735EF] p-2 w-[50%] cursor-pointer hover:bg-[#5a3a97c6]">
                  BUY NOW
                </button>
              </div>
            </div>
            <div className="h-full md:w-[60%] w-full rounded-md gap-2  bg-white px-4 py-2 flex flex-col text-black overflow-auto">
              <h1 className="mt-4 text-xl font-semibold">{product.title}</h1>
              <p>{product.category.toUpperCase()}</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-green-700 px-1 rounded font-semibold text-white text-sm">
                  {product.rating.rate} <IoIosStar />
                </div>
                <p>{`${product.rating.count} ratings & reviews`}</p>
              </div>
              <p className="font-bold text-xl">${product.price}</p>
              <div className="">
                <h1 className="font-semibold text-3xl">Product Description</h1>
                <p className="py-4 text-lg">{product.description} </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
