/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

function ProductsList({ data }) {
  return (
    <>
      {data?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </>
  );
}

export default ProductsList;
