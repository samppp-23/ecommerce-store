import ProductCard from "./ProductCard";
import { productData } from "../utils/productData";
import { useEffect, useState } from "react";
import ProductCardShimmer from "./ProductCardshimmer";
const Body = () => {
  const [topRatedProducts, setTopRatedProducts] = useState([]); //20
  const [allProducts, setAllProducts] = useState([]); //20
  const [searchText, setSearchText] = useState("");
  const [clearfilter, setclearfilter] = useState("");
  const changeText = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const json = await result.json();
    setTopRatedProducts(json);
    setAllProducts(json);
  };

  const topRatedProductsData = () => {
    setTopRatedProducts(
      productData.filter((product) => product.rating.rate >= 4)
    );
    console.log(topRatedProducts);
  };

  const onClickClearFilter = () => {
    setTopRatedProducts(allProducts);
    setSearchText("");
  };

  const searchProducts = () => {
    const filterProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setTopRatedProducts(filterProducts);
  };

  if (topRatedProducts.length === 0) {
    return (
      <div className="flex flex-wrap justify-centered gap-10 product-items">
        {Array.from({ length: 14 }).map((_, index) => (
          <ProductCardShimmer key={index} />
        ))}
      </div>
    );
  }
  return (
    <section className="flex flex-col gap-4 px-2 py-2 ">
      <div className="flex gap-10 items-center">
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Search..."
            value={searchText}
            onChange={changeText}
          />

          <button
            className="px-4 py-2 text sm font-medium text-white bg-blue-500 rounded-lg
      hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={searchProducts}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-2 text sm font-medium text-white bg-blue-500 rounded-lg
      hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={topRatedProductsData}
        >
          Top Rated Products
        </button>
        <button
          className="px-4 py-2 text sm font-medium text-white bg-blue-500 rounded-lg
      hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={onClickClearFilter}
        >
          Clear Filter
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4 product-items">
        {topRatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
};
export default Body;
