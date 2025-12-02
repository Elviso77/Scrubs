import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import { form } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 text-gray-700"
      style={BannerImg}
    >
      <form action="https://formsubmit.co/enyielvis7@gmail.com" method="POST">
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            name="email"
            type="text"
            required
            placeholder="Enter your email"
            className="w-full p-3 border rounded-md"
          />

          <textarea
            name="message"
            required
            placeholder="Message Us"
            className="w-full px-4 py-2 border rounded-md"
          ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-full font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Subscribe;
