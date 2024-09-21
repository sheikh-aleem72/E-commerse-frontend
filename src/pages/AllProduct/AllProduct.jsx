import React from "react";
import { fetchAllProducts } from "../../services/fetchAllProducts";
import { useQuery } from "react-query";
import Card from "../../components/Card/Card";

export default function AllProduct() {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery(["products"], () => fetchAllProducts(), {
    cacheTime: 5 * 1000 * 60,
    staleTime: 5 * 1000 * 60,
  });

  return (
    <>
      <div className=" w-full pt-20">
        {isLoading && <div>Loading...</div>}

        <div className="flex flex-wrap gap-2 md:gap-4 p-2 justify-center sm:justify-normal ">
          {products &&
            products.map((product) => {
              return (
                <Card
                  key={product.id}
                  id={product.id}
                  name={product.title}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
