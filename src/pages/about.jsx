import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import hook

const About = () => {
  const navigate = useNavigate(); // ✅ Initialize hook

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen" id="about">
      {/* Hero/Banner */}
      <div className="bg-primary/20 dark:bg-gray-800 py-20 text-center">
        <h1 className="text-5xl font-bold mb-3">About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Learn more about His & Hers Scrubs and our mission to provide high-quality scrubs.
        </p>

        {/* ✅ Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:scale-105 transition"
        >
          Back to Home
        </button>
      </div>

      {/* Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To be the leading provider of modern and functional scrubs worldwide, 
              ensuring every healthcare worker feels confident and comfortable at work.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Quality, comfort, and customer satisfaction are at the heart of everything we do.
              We believe in sustainable practices and delivering scrubs that healthcare 
              professionals love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
