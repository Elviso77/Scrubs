import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menproducts from "./components/Products/Menproducts";
import Womenproducts from "./components/Products/Womenproducts";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import BackToTop from "./components/BackToTop/BackToTop";

import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Success from "./pages/Success";

import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Home page-only content component
const HomePageContent = ({ handleOrderPopup, addToCart, cart }) => (
    <>
        <Hero handleOrderPopup={handleOrderPopup} />
        <Menproducts addToCart={addToCart} cart={cart} />
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Subscribe />
        <Womenproducts addToCart={addToCart} cart={cart} />
        <Testimonials />
    </>
);

const App = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);
    const [cart, setCart] = React.useState([]);
    const [cartOpen, setCartOpen] = React.useState(false);

    // ✅ Cart handlers
    const handleOrderPopup = () => setOrderPopup(!orderPopup);
    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    const addToCart = (product) => {
        setCart((prevCart) => {
            if (prevCart.some((item) => item.id === product.id)) return prevCart;
            return [...prevCart, product];
        });
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => setCart([]);

    // ✅ AOS Animation Initialization
    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 400,
            easing: "ease-in-sine",
            delay: 50,
        });
        AOS.refresh();
    }, []);

    return (
        <SearchProvider>
            <Router>
                <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 min-h-screen">
                    {/* ✅ Navbar always visible */}
                    <Navbar
                        handleOrderPopup={handleOrderPopup}
                        cartCount={cart.length}
                        cart={cart}
                        openCart={openCart}
                        closeCart={closeCart}
                        cartOpen={cartOpen}
                        removeFromCart={removeFromCart}
                    />

                    {/* ✅ Page Routes */}
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <HomePageContent
                                    handleOrderPopup={handleOrderPopup}
                                    addToCart={addToCart}
                                    cart={cart}
                                />
                            }
                        />
                        <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/success" element={<Success />} />
                    </Routes>

                    {/* ✅ Global Components (always render) */}
                    <Footer />
                    <BackToTop />
                    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
                </div>
            </Router>
        </SearchProvider>
    );
};

export default App;
