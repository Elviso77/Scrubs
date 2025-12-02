// src/components/BackToTopButton.js
import React, { useState, useEffect } from 'react';
// Using the 'ArrowUp' icon from react-icons/hi2 (or use FaArrowUp from fa)
import { HiArrowUp } from "react-icons/hi2"; 

const BackToTopButton = () => {
  // State to control button visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll the page back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For a smooth scrolling effect
    });
  };

  // Function to check scroll position and update visibility state
  const handleScroll = () => {
    // Show button if user has scrolled down more than 300 pixels
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures it runs only on mount/unmount

  // Render nothing if the button is not visible
  if (!isVisible) {
    return null;
  }

  return (
    // Tailwind CSS classes for styling and fixed positioning
    <button
      onClick={scrollToTop}
      // Fixed position, bottom right corner, rounded, primary color
      className="fixed bottom-20 right-5 z-50 p-3 
                 bg-primary text-white rounded-full shadow-lg 
                 hover:bg-primary-dark transition-all duration-300 
                 focus:outline-none transform hover:scale-110"
      aria-label="Back to top"
    >
      {/* The Arrow Icon */}
      <HiArrowUp className="w-6 h-6" /> 
      {/* To use a Rocket icon, you could use <FaRocket className="w-6 h-6" /> 
          if you install react-icons/fa and import FaRocket */}
    </button>
  );
};

export default BackToTopButton;