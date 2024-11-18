import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null); // Initialize as `null` to avoid `.map()` errors.
  const [activeTab, setActiveTab] = useState("description");

  // Find the product using the productId
  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId); // Use `.find()` to locate a single product.
    setProductData(product || null); // Set the product or `null` if not found.
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    // Render a loader or fallback UI if productData is not available yet
    return <div>Loading...</div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full cursor-pointer">
            {productData.images &&
              productData.images.map((item, index) => (
                <img
                  src={`http://localhost:4000${item}`}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0"
                  alt={`Thumbnail ${index + 1}`}
                />
              ))}
          </div> */}
          <div className="w-full sm:w-[80%] cursor-pointer">
            <img
              className="w-full h-auto"
              src={`http://localhost:4000${productData.image}`}
              alt="Product"
            />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-3xl mt-2 text-start">
            {productData.name}
          </h1>

          <p className="mt-5 text-gray-500 md:w-4/5 text-start">
            {productData.description}
          </p>
          <div className="flex items-center justify-between">
            <p className="mt-5 text-xl font-medium">
              {currency}
              {productData.price}
            </p>
            <div className="flex items-center gap-1 mt-2">
              <p className="text-yellow-500">⭐ {productData.rating} / 5</p>
              <p className="pl-2">({productData.reviews?.length || 0})</p>
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-xs text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on Delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description & Review Tab Section */}
      <div className="mt-20">
        {/* Tab Headers */}
        <div className="flex">
          <button
            className={`px-5 py-3 text-sm ${
              activeTab === "description" ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`px-5 py-3 text-sm ${
              activeTab === "reviews" ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Review ({productData.reviews?.length || 0})
          </button>
        </div>

        {/* Tab Content */}
        <div className="border px-6 py-6 text-sm text-gray-500">
          {activeTab === "description" && (
            <p className="mt-5 text-gray-500 md:w-4/5">
              {productData.description}
            </p>
          )}
          {activeTab === "reviews" && (
            <div className="flex flex-col gap-4">
              {productData.reviews &&
                productData.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border-b pb-4 flex flex-col items-start"
                  >
                    <p className="font-semibold">{review.user}</p>
                    <p>{review.comment}</p>
                    <p className="text-yellow-500">⭐ {review.rating} / 5</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
