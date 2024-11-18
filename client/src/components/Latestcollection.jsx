import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Productitem from "./Productitem";
// import { productLists } from "@/assets/assets";
import { ShopContext } from "@/context/ShopContext";

const Latestcollection = () => {
  const { products } = useContext(ShopContext);
  const [latestproduct, setLatestproduct] = useState([]);

  useEffect(() => {
    // console.log(products); // Check the content of products
    console.log(products);
    setLatestproduct(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi qui
          dolore nihil
        </p>
      </div>

      {/* Render products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestproduct.map((item, index) => (
          <Productitem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            inStock={item.inStock}
            rating={item.rating}
            freeShipping={item.freeShipping}
          />
        ))}
      </div>
    </div>
  );
};

export default Latestcollection;
