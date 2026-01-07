import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useSpring } from "framer-motion";
import { Helmet } from 'react-helmet'; 
import { 
  ArrowRight, TrendingUp, Shield, Network, MapPin, CheckCircle2, 
  Banknote, Wallet, Headset, Landmark, Map, Building2, Star, Quote, 
  PhoneCall, 
  CheckCircle 
} from "lucide-react";

// --- 1. ANIMATION VARIANTS (Consolidated) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fromLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fromRight = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// --- 2. HELPER COMPONENT (Animated Counter for Stats) ---
function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, { bounce: 0, duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, springValue, numericValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {value.includes("+") ? "+" : ""}
    </span>
  );
}

// --- 3. DATA ARRAYS (Consolidated) ---
const benefitsData = [
  {
    id: 1,
    title: "High Monthly Income",
    icon: Banknote,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "hover:border-blue-500",
    shadow: "hover:shadow-blue-100",
    content: (
      <>
        Earn through <span className="font-semibold text-gray-900">cash withdrawals</span>,{" "}
        <span className="font-semibold text-gray-900">balance enquiries</span>, and{" "}
        <span className="font-semibold text-gray-900">transaction surcharges</span>.
        Locations with good footfall can generate{" "}
        <span className="font-bold text-[#1d134c] bg-blue-50 px-1 rounded">
          ₹25,000 – ₹60,000+ per month
        </span>.
      </>
    ),
  },
  {
    id: 2,
    title: "Low Investment & Returns",
    icon: Wallet,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "hover:border-purple-500",
    shadow: "hover:shadow-purple-100",
    content: (
      <>
        EPS offers one of the most <span className="font-semibold text-gray-900">affordable ATM franchise</span>{" "}
        models in India. With a refundable security deposit and no cash-handling responsibility, the business is{" "}
        <span className="font-bold text-[#1d134c] bg-purple-50 px-1 rounded">
          safe, secure, and hassle-free
        </span>.
      </>
    ),
  },
  {
    id: 3,
    title: "Full Nationwide Support",
    icon: Headset,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "hover:border-indigo-500",
    shadow: "hover:shadow-indigo-100",
    content: (
      <>
        Enjoy <span className="font-semibold text-gray-900">24/7 ATM monitoring</span>,{" "}
        <span className="font-semibold text-gray-900">cash management</span>, technical
        maintenance, and prompt service. You earn passively while EPS handles the{" "}
        <span className="font-bold text-[#1d134c] bg-indigo-50 px-1 rounded">
          entire operation
        </span>.
      </>
    ),
  },
];

const statsData = [
  {
    id: 1,
    value: "5000+",
    label: "White Label ATMs",
    icon: Landmark,
  },
  {
    id: 2,
    value: "3500+",
    label: "Towns & Villages Covered",
    icon: Map,
  },
  {
    id: 3,
    value: "27",
    label: "States in India",
    icon: MapPin,
  },
  {
    id: 4,
    value: "10000+",
    label: "Brown Label ATMs",
    icon: Building2,
  },
];
const reviews = [
  {
    id: 1,
    name: "Priya",
    role: "Retail Shop Owner – Trichy, Tamil Nadu", // Updated role and location for specificity
    // Updated text to reflect specific business growth and a fixed income source
    text: "Before EPS, my shop traffic was low. Now, the ATM draws 150+ footfalls daily, and my passive income hit ₹42,000 last month. Their 24/7 remote monitoring is fantastic.",
    theme: "from-[#1d134c] to-[#3f2aa3]",
    shadow: "shadow-indigo-200",
  },
  {
    id: 2,
    name: "Saravanan",
    role:"Property Owner – Coimbatore", // Updated role and location for specificity
    // Updated text to focus on secure, hassle-free investment and timely earnings
    text:"The installation was completed within due day, exactly as promised. I don't touch the machine or the cash—EPS handles the entire cash logistics. It’s truly effortless passive income.",
    theme: "from-[#059669] to-[#10b981]",
    shadow: "shadow-emerald-200",
  },
  {
    id: 3,
    name: "Sobana Chitra",
    role: "Entrepreneur – Madurai", // Updated role and location for specificity
    // Updated text to focus on the reliable support and the ability to scale (suggesting confidence)
    text: "I was worried about technical issues, but the BANCS network uptime has been flawless (99%+). Approval, documentation, and training were handled by their transparent support team.",
    theme: "from-[#4f46e5] to-[#7c3aed]",
    shadow: "shadow-violet-200",
  },
];

// --- 4. MAIN HOME COMPONENT ---

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return a minimal structure during the initial mount phase
  if (!isMounted) {
    return <div className="min-h-screen bg-gray-50"></div>;
  }

  return (
    <main>
      <Helmet>
        <title>EPS ATM Franchise India | White Label ATM Partnership & Passive Income</title>
        <meta 
          name="description" 
          content="Become a profitable EPS ATM franchise partner in India. Low investment, 24/7 technical support, and secure BANCS network. Apply now for stable income."
        />
        <meta 
          name="keywords" 
          content="ATM franchise India, EPS ATM, White Label ATM, passive income India, low investment business, WLA operator, BANCS network, ATM business profit"
        />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Helmet>
      
      {/* -------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* -------------------------------------------------- */}
      <section 
        className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/img/hero1.webp"
            alt="Professional businessman presenting EPS ATM franchise opportunity"
            className="absolute inset-0 w-full h-full object-cover object-[center_32%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d134c]/90 via-[#1d134c]/60 to-[#1d134c]/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full py-12 sm:py-16 lg:py-20">
          <motion.div
            className="text-left max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
              variants={badgeVariants}
            >
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-white">Trusted by 150+ Partners Across India</span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] drop-shadow-2xl"
              variants={itemVariants}
            >
              Become an Official{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                EPS ATM Franchise
              </span>{" "}
              Partner
            </motion.h1>
          
            <motion.div 
              className="mt-6 flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">₹20K-₹50K Monthly</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">100% Support</span>
              </div>
            </motion.div>

            <motion.p
              className="mt-6 text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              EPS handles cash loading, monitoring, maintenance, and support — you earn{" "}
              <span className="font-semibold text-white">effortlessly every month</span>.
            </motion.p>

            <motion.p
              className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed"
              variants={itemVariants}
            >
              💼 Ideal for shop owners, property owners, and entrepreneurs looking for a{" "}
              <span className="font-medium text-white">long-term passive income opportunity</span> in India.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              variants={itemVariants}
            >
              <Link
                to="/apply-now"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white to-gray-100 text-[#1d134c] font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to="/cost-requirements"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/40 px-8 py-4 rounded-xl font-bold hover:bg-white/20 hover:border-white hover:scale-105 active:scale-95 transition-all duration-300"
              >
                View Cost & Requirements
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8"
              variants={itemVariants}
            >
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-300 mt-1">Active Partners</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20"></div>
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-white">₹3-5L</div>
                <div className="text-sm text-gray-300 mt-1">Starting Investment</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20"></div>
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-300 mt-1">Support Available</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      

      {/* -------------------------------------------------- */}
      {/* 2. ABOUT SECTION (Integrated SEO Content) */}
      {/* -------------------------------------------------- */}
      <section 
        id="about" 
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/40 relative overflow-hidden"
        aria-labelledby="about-heading"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl -z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 rounded-full px-4 py-2 mb-4"
              variants={fadeInUp}
            >
              <Shield className="w-4 h-4 text-[#3f2aa3]" />
              <span className="text-sm font-semibold text-[#1d134c]">Trusted Infrastructure</span>
            </motion.div>

            <motion.h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#1d134c]"
              variants={fadeInUp}
            >
              About{" "}
              <span className="bg-gradient-to-r from-[#1d134c] via-[#3f2aa3] to-[#5b41d6] bg-clip-text text-transparent">
                EPS
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-[#1d134c] via-[#3f2aa3] to-[#5b41d6] bg-clip-text text-transparent">
                BANCS
              </span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              EPS (Electronic Payment Services) is one of India's most reliable
              White Label ATM Operators. Its ATMs are powered by the highly secure{" "}
              <span className="font-bold text-[#1d134c]">
                BANCS Switching Network
              </span>. We are committed to RBI's vision of{" "}
              <span className="font-bold text-[#3f2aa3]">financial inclusion</span>,
              primarily targeting high-demand *Tier 2 and Tier 3 cities* and rural markets. 
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              variants={fromLeft}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/50 bg-white">
                <img
                  src="/img/home-sub1.webp"
                  alt="EPS ATM Network infrastructure showing secure BANCS switching system"
                  width={600}
                  height={450}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>

            <motion.div 
              variants={fromRight}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-lg px-3 py-1.5">
                <Network className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-900">Infrastructure & Performance</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1d134c]">
                Ultra-Fast & Secure BANCS Switching
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                EPS machines leverage the robust{" "}
                <span className="font-bold text-[#3f2aa3]">BANCS switching system</span>, 
                known for delivering transactions in under **0.5 seconds**. This high-speed,
                low-latency architecture minimizes timeouts and ensures optimal customer
                experience, critical for high transaction volume.
              </p>

              <motion.ul 
                className="space-y-4 pt-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: TrendingUp, text: "99% Uptime SLA (Service Level Agreement)" }, // Added SLA Detail
                  { icon: Shield, text: "PCI DSS & ISO 27001 Certified Security" }, // Added specific certifications
                  { icon: Network, text: "Low-Latency, High-Throughput Transaction Core" }, // Added technical specifics
                  { icon: MapPin, text: "Dedicated VSAT for Stable Rural Connectivity" },
                  { icon: CheckCircle2, text: "Centralized 24/7 Remote Monitoring (RMS)" }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3 group"
                    variants={fadeInUp}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform shadow-sm">
                      <item.icon className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 text-base sm:text-lg font-medium group-hover:text-blue-700 transition-colors">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              variants={fromRight}
              className="relative group lg:order-2"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/50 bg-white">
                <img
                  src="/img/home-sub2.webp"
                  alt="Map showing EPS ATM expansion across 27+ states and 3500+ towns in India"
                  width={600}
                  height={450}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>

            <motion.div 
              variants={fromLeft}
              className="space-y-6 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-lg px-3 py-1.5">
                <MapPin className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-900">Market Coverage & Demand</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1d134c]">
                Targeting High-Demand White Space Markets
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Our network strategy focuses on "white space" areas where the{" "}
                <span className="font-bold text-[#3f2aa3]">cash-to-ATM ratio is high</span>, 
                maximizing profitability for our partners. We cover
                major cities, commercial zones, and remote regions.
              </p>

              <motion.ul 
                className="space-y-4 pt-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { number: "10,000+", text: "ATMs Operating Nationwide (WLA + BLA)" },
                  { number: "27+", text: "States & 3,500+ Towns Covered" },
                  { number: "High Density", text: "In Tier 2 and Tier 3 Cities" }, // Added city tier info
                  { number: "Consistent", text: "Volume from Underserved Regions" }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3 group"
                    variants={fadeInUp}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 text-base sm:text-lg">
                      <span className="font-bold text-[#1d134c]">{item.number}</span>{" "}
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

        </div>
      </section>

  

      {/* -------------------------------------------------- */}
      {/* 3. STATS SECTION */}
      {/* -------------------------------------------------- */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <span className="inline-block bg-[#1d134c] text-white px-6 py-2 rounded-full shadow-xl font-semibold tracking-wide text-sm md:text-base">
              🚀 India’s Fastest Growing ATM Network
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {statsData.map((stat) => (
              <motion.div
                key={stat.id}
                className="group bg-white border border-gray-100 rounded-2xl shadow-sm p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="mb-4 p-4 bg-indigo-50 rounded-full group-hover:bg-indigo-100 transition-colors">
                  <stat.icon 
                    className="w-8 h-8 text-[#1d134c] group-hover:text-[#3f2aa3] transition-colors duration-300" 
                    strokeWidth={2}
                  />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#1d134c] mb-2">
                  <Counter value={stat.value} />
                </h3>
                
                <p className="text-gray-600 font-medium text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      ---

      {/* -------------------------------------------------- */}
      {/* 4. BENEFITS SECTION */}
      {/* -------------------------------------------------- */}
      <section 
        id="benefits" 
        className="py-20 lg:py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-[0.03]"></div>
        
        <motion.div
          className="max-w-7xl mx-auto px-6 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
              variants={itemVariants}
            >
              Why Choose <span className="text-[#3f2aa3]">EPS ATM Franchise</span>?
            </motion.h2>

            <motion.p
              className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              The <span className="font-semibold text-[#1d134c]">EPS White Label ATM Franchise</span> model 
              is one of India’s most trusted opportunities.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {benefitsData.map((benefit) => (
              <motion.div
                key={benefit.id}
                className={`p-8 border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 group bg-white ${benefit.border} hover:shadow-xl ${benefit.shadow} hover:-translate-y-1`}
                variants={fadeInUp} 
              >
                <div className={`w-14 h-14 rounded-xl ${benefit.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} strokeWidth={2} />
                </div>

                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#1d134c] group-hover:text-[#3f2aa3] transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-base lg:text-[17px]">
                  {benefit.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

  

      {/* -------------------------------------------------- */}
      {/* 5. TESTIMONIALS SECTION */}
      {/* -------------------------------------------------- */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute right-0 top-0 bg-blue-50 w-96 h-96 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 bg-emerald-50 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-6 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#1d134c]"
            variants={fadeInUp} 
          >
            What Our <span className="text-[#3f2aa3]">Franchise Partners</span> Say
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                className={`relative p-8 rounded-2xl shadow-xl bg-gradient-to-br ${review.theme} text-white flex flex-col h-full`}
                variants={fadeInUp} 
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-white/10 rotate-180" />

                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-lg border border-white/20">
                      <span className="text-xl font-bold text-white px-1">G</span>
                  </div>
                  <div>
                      <div className="flex gap-0.5 mb-0.5">
                          {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                          ))}
                      </div>
                      <p className="text-xs font-medium text-white/80 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Verified Partner
                      </p>
                  </div>
                </div>

                <p className="leading-relaxed mb-6 text-lg font-medium text-white/95 flex-grow italic">
                  "{review.text}"
                </p>

                <div className="mt-auto pt-6 border-t border-white/20">
                  <h4 className="font-bold text-lg tracking-wide">{review.name}</h4>
                  <p className="text-sm text-white/80 font-medium">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

  

      {/* -------------------------------------------------- */}
      {/* 6. CTA SECTION */}
      {/* -------------------------------------------------- */}
      <section className="relative py-20 lg:py-28 bg-[#1d134c] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3f2aa3] opacity-30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-5 pointer-events-none"></div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg"
            variants={itemVariants}
          >
            Ready to Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              EPS ATM Franchise?
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Take the first step towards building a stable, long-term income
            source.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            variants={itemVariants}
          >
            <Link
              to="/apply-now"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#1d134c] px-8 py-4 rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Apply Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              to="/contact"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/20 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5" />
              Contact Support
            </Link>
          </motion.div>
          
          <motion.p 
              className="mt-8 text-sm text-blue-200/60"
              variants={itemVariants}
          >
              No hidden charges • 100% Transparent Process
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}