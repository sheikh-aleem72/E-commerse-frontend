import React from "react";
import { fetchAllProducts } from "../../services/fetchAllProducts";
import { useQuery } from "react-query";

export default function AllProduct() {
  const {} = useQuery(["products"], () => fetchAllProducts(), {
    cacheTime: 2 * 1000,
    staleTime: 2 * 1000,
  });
  return <div>AllProduct</div>;
}
