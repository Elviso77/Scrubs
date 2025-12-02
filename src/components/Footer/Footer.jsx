import React from "react";
import footerLogo from "../../assets/logo1.png";
import Banner from "../../assets/website/footer4.jpg";
import { Link } from 'react-router-dom'; // <-- This is correctly imported
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about", // <-- The correct path for React Router
  },
  {
    title: "Contact",
    link: "/contact", // <-- The correct path for React Router
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              HisandHersScrubs
            </h1>
            <p>
              The uniform of the healthcare partnership. We craft durable, comfortable, and stylish scrubs for every professional.
            </p>
          </div>

          {/* Footer Links (FIXED SECTION) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      // The class names for styling the list item can remain here
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      {/* *** THIS IS THE FIX ***
                          Wrap the title in the <Link> component
                          and use link.link for the 'to' prop.
                          The class names from the <li> are moved here for styling. 
                      */}
                      <Link 
                        to={link.link} 
                        className="hover:text-primary duration-300" // Optional: add specific link styling here
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>17056 kenwood Ave, South Holland Illinois, 60473, USA</p>
                </div>

                {/* PHONE NUMBER */}
                    <div className="flex items-center gap-3 mt-3">
                      <FaMobileAlt />
                      <a 
                        href="tel:+91123456789" // The functional dial link
                        className="text-gray-200 hover:text-primary duration-300" 
                      >
                        +91 123456789 
                      </a>
                    </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;