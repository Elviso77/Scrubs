import React from "react";
import { FaStar } from "react-icons/fa";
import { TOP_TRENDING_STYLES } from "../../data/productsData";

const TopProducts = ({ handleOrderPopup }) => {
    return (
        <div>
            <div className="container">
                <div id="trendingproducts" className="text-left mb-24">
                    <p data-aos="fade-up" className="text-sm text-primary">
                        Top Rated Products for you
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">
                        Where Style Meets Substance. Introducing the Athleisure Scrub.
                    </h1>
                    <p data-aos="fade-up" className="text-sm text-gray-400">
                        From Joggers to Tailored V-Necks, the hottest styles are here. Experience the ultimate blend of street-style comfort and clinical functionality, now featuring eco-friendly and antimicrobial-enhanced fabrics.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                    {TOP_TRENDING_STYLES.map((data) => (
                        <div
                            key={data.id}
                            data-aos="zoom-in"
                            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                        >
                            <div className="h-[100px]">
                                <img
                                    src={data.img}
                                    alt=""
                                    className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <div className="w-full flex items-center justify-center gap-1">
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                </div>
                                <h1 className="text-xl font-bold">{data.title}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                    {data.description}
                                </p>
                                <button
                                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                                    onClick={handleOrderPopup}
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* New: View All Top Styles Button */}
                <div className="text-center mt-10">
                    <button
                        onClick={() => console.log('Navigate to dedicated Top Styles page or anchor')} // You can replace this with navigation logic
                        className="bg-secondary hover:bg-primary transition-all duration-300 text-white font-medium py-2 px-6 rounded-full"
                    >
                        View All Top Styles →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopProducts;