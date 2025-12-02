// src/components/Navbar/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import DarkMode from "./DarkMode";
import CartSidebar from "../CartSidebar/CartSidebar";
import { useSearch } from "../../context/SearchContext";

const Menu = [
  { id: 1, name: "Men's Scrubs", link: "#menproducts" },
  { id: 2, name: "Women's Scrubs", link: "#womenproducts" },
  { id: 3, name: "Trending Products", link: "#trendingproducts" },
  { id: 4, name: "Testimonials", link: "#testimonials" },
];

const DropdownLinks = [
  { id: 1, name: "About", link: "/about" },
  { id: 2, name: "Contact Us", link: "/contact" },
  { id: 3, name: "Newsletter", link: "/" },
];

const Navbar = ({
  cartCount = 0,
  cart = [],
  openCart,
  closeCart,
  cartOpen = false,
  removeFromCart,
}) => {
  const [open, setOpen] = useState(false);
  const [cartLocalOpen, setCartLocalOpen] = useState(false);

  const { searchTerm, setSearchTerm, handleSmartSearch } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  const isCartOpen = cartOpen || cartLocalOpen;

  const openCartHandler = () => {
    if (openCart) openCart();
    else setCartLocalOpen(true);
  };

  const closeCartHandler = () => {
    if (closeCart) closeCart();
    else setCartLocalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    handleSmartSearch(searchTerm);
  };

  const handleAnchorClick = (e, anchor) => {
    e.preventDefault();
    const id = anchor.replace("#", "");
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div className="sticky top-0 shadow-md bg-white dark:bg-gray-900 dark:text-white z-40">
        {/* Top section */}
        <div className="bg-primary/40 py-2">
          <div className="container flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold"
              onClick={() => setSearchTerm("")}
            >
              <img src={logo1} alt="Logo" className="w-12 rounded-md" />
              HisandHersScrubs
            </Link>

            {/* Right side icons */}
            <div className="flex items-center gap-4">
              {/* Desktop Search */}
              <form
                onSubmit={handleSubmit}
                className="hidden sm:flex relative group"
              >
                <input
                  type="text"
                  placeholder="Search scrubs, color, category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border px-3 py-1 dark:bg-gray-800"
                />
                <button className="absolute right-0 h-full px-3">
                  <IoMdSearch />
                </button>
              </form>

              {/* Cart Button with Clickable Count */}
              <button
                onClick={openCartHandler}
                className="relative bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-2"
              >
                <FaCartShopping />
                {cartCount > 0 && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      openCartHandler();
                    }}
                    className="cursor-pointer bg-red-500 text-xs px-1 rounded-full absolute -top-2 -right-2"
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              <DarkMode />

              {/* Mobile Menu Toggle */}
              <button
                className="sm:hidden text-3xl"
                onClick={() => setOpen(!open)}
              >
                {open ? <IoClose /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="flex justify-center">
          <ul className="hidden sm:flex gap-4 items-center">
            {Menu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={(e) => handleAnchorClick(e, item.link)}
                  className="px-4 hover:text-primary"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="relative group">
              <span className="flex items-center gap-1 cursor-pointer">
                More <FaCaretDown />
              </span>
              <div className="absolute hidden group-hover:block bg-white text-black shadow-md rounded-md w-40 p-2">
                {DropdownLinks.map((d) => (
                  <Link
                    key={d.id}
                    to={d.link}
                    className="block px-2 py-1 hover:bg-primary/20 rounded"
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="sm:hidden bg-white dark:bg-gray-900 border-t">
            <ul className="flex flex-col items-center py-4 gap-4">
              {/* Mobile Search */}
              <form onSubmit={handleSubmit} className="flex px-4 w-full gap-2">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="flex-1 border px-3 py-2 rounded-full dark:bg-gray-800"
                />
                <button className="bg-primary text-white px-3 py-2 rounded-full">
                  <IoMdSearch />
                </button>
              </form>

              {/* ✅ Cart with bounce animation */}
              <button
                onClick={openCartHandler}
                className="relative bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-2"
              >
                <FaCartShopping className="text-xl" />
                {cartCount > 0 && (
                  <span
                    className={`absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full ${
                      animateCart ? "animate-bounce" : ""
                    }`}
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {Menu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={(e) => handleAnchorClick(e, item.link)}
                    className="block text-center px-4 py-2 hover:text-primary"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        closeCart={closeCartHandler}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default Navbar;
