import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Info,
  Landmark,
  Wallet,
  BookOpen,
  FileText,
  HelpCircle,
  Rocket,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  const dropdownRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setMobileDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.2 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } },
  };

  const isActive = (path) => pathname === path;

  const desktopLinkClass = (path) =>
    `relative py-2 px-1 text-base font-medium transition 
     ${isActive(path) ? "text-[#3f2aa3]" : "text-gray-700 hover:text-[#3f2aa3]"}
     after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 
     after:bg-[#3f2aa3] after:transition-all hover:after:w-full
     ${isActive(path) ? "after:w-full" : ""}`;

  const mobileLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about-us", label: "About Us", icon: Info }, 
    { href: "/atm-franchise", label: "ATM Franchise", icon: Landmark },
    { href: "/cost-requirements", label: "Cost & Requirements", icon: Wallet },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`w-full sticky top-0 z-[50] transition-all ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b"
            : "bg-white/90 backdrop-blur-lg shadow-md"
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/img/logo.webp"
              alt="EPS Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#1d134c] to-[#3f2aa3] bg-clip-text text-transparent">
              EPS ATM Franchise
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={desktopLinkClass("/")}>
              Home
            </Link>
            <Link to="/about-us" className={desktopLinkClass("/about-us")}>
              About Us
            </Link>
            <Link to="/atm-franchise" className={desktopLinkClass("/atm-franchise")}>
              ATM Franchise
            </Link>
            <Link
              to="/cost-requirements"
              className={desktopLinkClass("/cost-requirements")}
            >
              Cost & Requirements
            </Link>

            {/* DROPDOWN */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                className={`flex items-center gap-1 ${
                  desktopDropdownOpen ? "text-[#3f2aa3]" : "text-gray-700"
                }`}
              >
                Resources <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {desktopDropdownOpen && (
                  <motion.div
                    className="absolute left-0 mt-3 bg-white rounded-xl shadow-xl w-56 border"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Link
                      to="/resources/blog"
                      className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50"
                      onClick={() => setDesktopDropdownOpen(false)}
                    >
                      <BookOpen size={16} /> Blog
                    </Link>
                    <Link
                      to="/resources/faq" // Standardized to /resources/faq
                      className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50"
                      onClick={() => setDesktopDropdownOpen(false)}
                    >
                      <HelpCircle size={16} /> FAQs
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/apply-now" // FIX: Standardized desktop link
              className="bg-gradient-to-r from-[#1d134c] to-[#3f2aa3] text-white px-6 py-2 rounded-full shadow hover:scale-105 transition"
            >
              Apply Now
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2 text-[#1d134c]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/60 md:hidden z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* PANEL */}
            <motion.div
              className="fixed top-0 right-0 w-[80vw] max-w-[320px] h-full bg-white shadow-xl z-[9999] md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-5 border-b flex justify-between items-center bg-gray-50">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={() => setMobileOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* LINKS */}
              <div className="p-5 space-y-2">
                {mobileLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    to={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                      isActive(href)
                        ? "bg-indigo-50 text-[#3f2aa3]"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <Icon size={20} /> {label}
                  </Link>
                ))}

                {/* MOBILE DROPDOWN */}
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700"
                >
                  <span className="flex items-center gap-3">
                    <BookOpen size={20} /> Resources
                  </span>
                  <ChevronDown
                    size={18}
                    className={`${mobileDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileDropdownOpen && (
                    <motion.div
                      className="pl-6 mt-2 space-y-2 border-l border-gray-200"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <Link
                        to="/resources/blog"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                      >
                        <FileText size={16} /> Blog
                      </Link>
                      <Link
                        to="/resources/faq" // Standardized to /resources/faq
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                      >
                        <HelpCircle size={16} /> FAQs
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  to="/apply-now" // FIX: Standardized mobile link
                  onClick={() => setMobileOpen(false)}
                  className="block w-full bg-[#3f2aa3] text-white text-center py-4 rounded-xl font-bold mt-6"
                >
                  <Rocket size={18} className="inline mr-2" />
                  Apply Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}