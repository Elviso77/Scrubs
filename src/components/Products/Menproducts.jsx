import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MEN_SCRUBS } from "../../data/productsData";

// --- Configuration ---
const PRODUCTS_CHUNK_SIZE = 5;

const MenProducts = ({ addToCart, cart, showAll = false }) => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [itemsToShow, setItemsToShow] = useState(PRODUCTS_CHUNK_SIZE);

    const displayedProducts = showAll
        ? MEN_SCRUBS
        : MEN_SCRUBS.slice(0, itemsToShow);

    const handleLoadMore = () => {
        setItemsToShow(prevCount => prevCount + PRODUCTS_CHUNK_SIZE);
    };

    const hasMore = itemsToShow < MEN_SCRUBS.length;

    return (
        <div id="menproducts" className="mt-14 mb-12 relative">
            <div className="container">

                {/* Header */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">
                        Top Selling Men’s Scrubs
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">
                        Men’s Scrubs
                    </h1>
                </div>

                {/* Products Grid:
                    ✅ CHANGED: grid-cols-1 to grid-cols-2 for mobile view
                */}
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
                                {/* 🖼️ Click image to open full view */}
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    className="h-[220px] w-[150px] object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
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

                                {/* Add to Cart button */}
                                <button
                                    onClick={() => addToCart(data)}
                                    disabled={inCart}
                                    className={`w-full font-semibold py-2 rounded-full mt-2 ${
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

                {/* Load More Button */}
                {!showAll && hasMore && (
                    <div className="text-center mt-8">
                        <button
                            onClick={handleLoadMore}
                            className="bg-primary hover:bg-secondary transition-all duration-300 text-white font-medium py-2 px-6 rounded-full"
                        >
                            More Men Scrubs
                        </button>
                    </div>
                )}

                {/* Fullscreen Modal */}
                {selectedImg && (
                    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
                        <div className="relative">
                            <button
                                onClick={() => setSelectedImg(null)}
                                className="absolute -top-10 right-0 text-white text-3xl bg-red-600 rounded-full p-1"
                            >
                                <IoClose />
                            </button>
                            <img
                                src={selectedImg}
                                alt="Product Full View"
                                className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg border-4 border-white"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenProducts;