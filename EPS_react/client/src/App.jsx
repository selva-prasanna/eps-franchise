import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./component/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AtmFranchise from "./pages/AtmFranchise";
import CostRequirements from "./pages/CostRequirements";
import Blog from "./resources/Blog";
import Faq from "./resources/Faq";
import BlogPostContent from "./resources/BlogPostContent";
import ApplyNow from "./ApplyNow";

import Newsletter from "./component/Newsletter";
// import Footer from "./components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      {/* PAGE CONTENT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/atm-franchise" element={<AtmFranchise />} />
        <Route path="/cost-requirements" element={<CostRequirements />} />
        <Route path="/apply-now" element={<ApplyNow />} />

        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/faq" element={<Faq />} />
        <Route path="/resources/blog/:slug" element={<BlogPostContent />} />
      </Routes>

      {/* GLOBAL NEWSLETTER */}
      <Newsletter />

      {/* <Footer /> */}
    </Router>
  );
}
