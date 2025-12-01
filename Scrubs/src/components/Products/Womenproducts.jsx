import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { WOMEN_SCRUBS } from "../../data/productsData";

const PRODUCTS_CHUNK_SIZE = 5;

const WomenProducts = ({ addToCart, cart, showAll = false }) => {
    const [selectedImg, setSelectedImg] = useState(null);
    // New State for Load More
    const [itemsToShow, setItemsToShow] = useState(PRODUCTS_CHUNK_SIZE);

    // Logic to slice the data
    const displayedProducts = showAll
        ? WOMEN_SCRUBS
        : WOMEN_SCRUBS.slice(0, itemsToShow);

    // Handler to load the next chunk
    const handleLoadMore = () => {
        setItemsToShow(prevCount => prevCount + PRODUCTS_CHUNK_SIZE);
    };

    // Check if there are still more items to load
    const hasMore = itemsToShow < WOMEN_SCRUBS.length;

    return (
        <div id="womenproducts" className="mt-14 mb-12 relative">
            <div className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">
                        Top Selling Women’s Scrubs
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">
                        Women’s Scrubs
                    </h1>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                    {displayedProducts.map((data) => {
                        const inCart = cart.some((item) => item.id === data.id);

                        return (
                            <div
                                key={data.id}
                                className="space-y-3 bg-white dark:bg-gray-800 p-3 rounded-xl shadow hover:shadow-lg transition-all"
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                            >
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    className="h-[220px] w-[150px] object-cover rounded-md cursor-pointer transition-transform duration-200 hover:scale-105"
                                    onClick={() => setSelectedImg(data.img)}
                                />

                                <h3 className="font-semibold text-center">{data.title}</h3>
                                <p className="text-sm text-gray-600 text-center">{data.color}</p>

                                <div className="flex items-center justify-center gap-1">
                                    <FaStar className="text-yellow-400" />
                                    <span>{data.rating}</span>
                                </div>

                                <p className="text-center font-semibold text-primary">
                                    ${data.price.toFixed(2)}
                                </p>

                                <button
                                    onClick={() => addToCart(data)}
                                    disabled={inCart}
                                    className={`w-full font-semibold py-2 rounded-full mt-2 transition-all duration-300 ${
                                        inCart
                                            ? "bg-gray-400 text-white cursor-not-allowed"
                                            : "bg-gradient-to-r from-primary to-secondary text-white hover:scale-105"
                                    }`}
                                >
                                    {inCart ? "Added to Cart ✓" : "Add to Cart"}
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Load More Button for Women's Products */}
                {!showAll && hasMore && (
                    <div className="text-center mt-8">
                        <button
                            onClick={handleLoadMore}
                            className="bg-primary hover:bg-secondary transition-all duration-300 text-white font-medium py-2 px-6 rounded-full"
                        >
                            More Women Scrubs
                        </button>
                    </div>
                )}
            </div>

            {selectedImg && (
                <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
                    <div className="relative">
                        <button
                            onClick={() => setSelectedImg(null)}
                            className="absolute -top-10 right-0 text-white text-3xl bg-red-600 rounded-full p-1 hover:bg-red-700 transition-all"
                        >
                            <IoClose />
                        </button>

                        <img
                            src={selectedImg}
                            alt="Selected Product"
                            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg border-4 border-white"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default WomenProducts;