import React from "react";
import { Link } from "react-router-dom"; // Changed from "next/link"
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet'; // <--- Helmet Import
import { CheckCircle2, ShieldCheck, Zap, MapPin, FileText, Server, ArrowRight, XCircle, Info } from "lucide-react";

// Optimization: Move variants outside to prevent re-creation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function CostRequirementsContent() {
  return (
    <div className="overflow-hidden bg-white">
      
      {/* ---------------- SEO METADATA START ---------------- */}
      <Helmet>
        <title>EPS ATM Franchise Cost, Investment & Requirements 2025</title>
        <meta 
          name="description" 
          content="Get the transparent cost breakdown (₹1.5L-4L), space, power, and document requirements needed to start your EPS ATM franchise today. Zero hidden fees."
        />
        <meta // <--- ADDED: Meta Keywords Tag
          name="keywords" 
          content="ATM franchise cost, EPS ATM franchise requirements, White Label ATM investment, ATM passive income India, low investment ATM business, BANCS ATM"
        />
        <link rel="canonical" href="https://yourwebsite.com/cost-requirements" />
      </Helmet>
      {/* ---------------- SEO METADATA END ---------------- */}
      
      {/* ========================================= */}
      {/* 1. HERO SECTION                           */}
      {/* ========================================= */}
      <section className="relative w-full py-24 md:py-32 bg-[#1d134c] text-white overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        {/* Note: Replaced Next.js static asset CSS with a simpler background to maintain styling */}
        <div className="absolute inset-0 bg-repeat opacity-10 pointer-events-none" style={{ backgroundImage: "url('/img/grid-pattern.svg')" }}></div>
        
        <div className="relative w-full max-w-5xl mx-auto px-6 text-center z-10">
          <motion.div
             initial="hidden"
             animate="visible"
             variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium mb-8 text-blue-100">
              <Info className="w-4 h-4" />
              <span>Transparent Pricing • Zero Hidden Fees</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              EPS ATM Cost &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                Requirements
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
              Get complete clarity on investment, documents, and eligibility to start your <strong className="text-white">EPS ATM Franchise</strong>. 
              We believe in 100% transparency.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a // Used <a> tag for hash link navigation
                href="#cost-breakdown"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#1d134c] font-bold shadow-xl hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                View Cost Breakdown
              </a>
              <Link
                to="/apply-now" // Changed href to to
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/30 bg-white/5 text-white font-bold backdrop-blur-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                Apply for Franchise <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            {[
              { value: "₹1.2L – 4.0L", label: "Setup Cost Range" },
              { value: "7 – 15 Days", label: "Fast Installation" },
              { value: "₹25K – ₹60K+", label: "Monthly Earnings" },
            ].map((metric, i) => (
              <motion.div key={i} variants={fadeUp} className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">{metric.value}</h3>
                <p className="text-blue-200 text-sm mt-1 font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. REQUIREMENTS SECTION                   */}
      {/* ========================================= */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d134c] mb-6">
              Requirements to Start
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To ensure high transactions and safety, your location must meet these simple RBI-compliant standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                icon: MapPin, 
                title: "Space Requirement", 
                points: ["Full Shop: 8 ft × 10 ft", "Shop-in-Shop: 6 ft × 6 ft", "Ground floor preferred for visibility"],
                color: "text-red-500",
                bg: "bg-red-50"
              },
              { 
                icon: FileText, 
                title: "Documents Required", 
                points: ["Aadhaar + PAN Card", "Electricity Bill (Location Proof)", "Rent Agreement or Ownership Proof"],
                color: "text-blue-500",
                bg: "bg-blue-50"
              },
              { 
                icon: Zap, 
                title: "Electricity & Power", 
                points: ["Single Phase Supply (Min 1 KVA)", "24×7 power availability", "Earthing connection is mandatory"],
                color: "text-yellow-600",
                bg: "bg-yellow-50"
              },
              { 
                icon: Server, 
                title: "Connectivity", 
                points: ["VSAT Space (Rooftop 6x6 ft)", "Stable network area", "Permission for antenna installation"],
                color: "text-purple-500",
                bg: "bg-purple-50"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                    <item.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1d134c] mb-4">{item.title}</h3>
                    <ul className="space-y-3">
                      {item.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1d134c] flex-shrink-0" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. FRANCHISE PACKAGES (COST)              */}
      {/* ========================================= */}
      <section id="cost-breakdown" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1d134c] mb-6">
              Franchise Investment Models
            </h2>
            <p className="text-lg text-gray-600">
              Choose the model that fits your budget and space. All packages include installation support, branding, and training.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 items-start"
          >
            {/* Package 1: Shop-in-Shop */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300 to-orange-500 rounded-t-3xl"></div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-bold uppercase rounded-full">Entry Level</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1d134c] mb-2">Shop-in-Shop</h3>
              <p className="text-gray-500 text-sm mb-6">Perfect for existing shop owners with limited space.</p>
              
              <div className="mb-8 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Total Investment</p>
                <span className="text-3xl font-extrabold text-[#1d134c]">₹1.2L - 1.8L</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                    "Space: 6x6 ft Only",
                    "Increases Shop Footfall",
                    "Ideal for Kirana/Medical Shops",
                    "Basic Branding Included"
                ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-700 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" /> {item}
                    </li>
                ))}
              </ul>
              
              <Link to="/apply-now?plan=shop-in-shop" className="block w-full py-3.5 text-center rounded-xl border border-gray-200 text-gray-700 font-bold hover:border-[#1d134c] hover:text-[#1d134c] transition-colors">
                Choose Plan
              </Link>
            </motion.div>

            {/* Package 2: Cabin Setup (Highlight) */}
            <motion.div variants={fadeUp} className="bg-[#1d134c] p-8 rounded-3xl shadow-2xl relative transform md:-translate-y-4 ring-4 ring-[#1d134c]/10 z-10">
              <div className="absolute top-4 right-4">
                 <ShieldCheck className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold uppercase rounded-full">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Cabin Setup</h3>
              <p className="text-blue-200 text-sm mb-6">Ideal for dedicated ATM cabins in market areas.</p>
              
              <div className="mb-8 p-4 bg-white/10 rounded-xl border border-white/10">
                <p className="text-sm text-blue-200 mb-1">Total Investment</p>
                <span className="text-3xl font-extrabold text-white">₹2.5L - 3.5L</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                    "Cabin Structure Included",
                    "Full Glow Sign Board Branding",
                    "Higher Customer Trust",
                    "VSAT + CCTV Installation",
                    "Dedicated Lobby Area"
                ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-blue-50 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" /> {item}
                    </li>
                ))}
              </ul>
              
              <Link to="/apply-now?plan=cabin" className="block w-full py-3.5 text-center rounded-xl bg-white text-[#1d134c] font-bold hover:bg-blue-50 transition-colors shadow-lg">
                Choose Best Value
              </Link>
            </motion.div>

            {/* Package 3: Premium */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-t-3xl"></div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold uppercase rounded-full">Premium</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1d134c] mb-2">Full Franchise</h3>
              <p className="text-gray-500 text-sm mb-6">Best for high-traffic, standalone locations.</p>
              
              <div className="mb-8 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Total Investment</p>
                <span className="text-3xl font-extrabold text-[#1d134c]">₹4.0L+</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                    "Maximum Monthly Earnings",
                    "Priority Technical Support",
                    "Multiple ATM Machines",
                    "Premium Interior Branding"
                ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-700 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" /> {item}
                    </li>
                ))}
              </ul>
              
              <Link to="/apply-now?plan=premium" className="block w-full py-3.5 text-center rounded-xl border border-gray-200 text-gray-700 font-bold hover:border-[#1d134c] hover:text-[#1d134c] transition-colors">
                Choose Plan
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. ELIGIBILITY SECTION                    */}
      {/* ========================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d134c] mb-5">
              Who Can Apply?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
              We welcome applications from diverse backgrounds. Whether you are an individual or a business owner, you are eligible if you meet these criteria:
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: "🎯", title: "Minimum Age 18+", desc: "The applicant must be legally eligible to sign the franchise agreement." },
              { icon: "🏠", title: "Property Ownership", desc: "Must own the space or have a valid rental agreement (NOC required)." },
              { icon: "🛡️", title: "Clean Background", desc: "Must have no criminal record or history of financial fraud." },
              { icon: "💡", title: "Willing to Invest", desc: "Must have the capacity to invest the setup cost (₹1.5L - ₹3.5L)." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors text-left flex gap-4"
              >
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                    <h3 className="text-lg font-bold text-[#1d134c] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 5. MISCONCEPTIONS SECTION                 */}
      {/* ========================================= */}
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1d134c] mb-4">
              Common Myths vs Reality
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Don't let misinformation stop you. Here is the truth about the EPS ATM Franchise.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { title: "Myth: I have to load cash myself", desc: "Reality: Franchise owners NEVER handle cash. EPS manages cash loading through authorized CMS partners.", correct: true },
              { title: "Myth: Higher cost means more income", desc: "Reality: Income depends on daily transactions (footfall), not the package amount. Shop-in-shop models can earn just as much.", correct: true },
              { title: "Myth: Rural areas won’t earn", desc: "Reality: Rural areas often have higher withdrawal rates because fewer ATMs are available — meaning consistent volume for you.", correct: true },
              { title: "Myth: ATM ownership is risky", desc: "Reality: EPS handles security, monitoring, cash, and maintenance. Your role is purely location management.", correct: true },
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                    <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-[#1d134c] mb-2">{item.title}</h3>
                    <div className="flex gap-2 items-start mt-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 6. PREMIUM CTA SECTION                    */}
      {/* ========================================= */}
      <section className="py-24 text-center relative overflow-hidden bg-white">
         <div className="absolute inset-0 w-full h-full bg-repeat [background-size:16px_16px] opacity-50 pointer-events-none" style={{ backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)" }}></div>
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative max-w-3xl mx-auto px-6 z-10"
         >
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#1d134c] mb-6">
              Ready to Invest in Your Future?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Get expert guidance, fast approval, and complete support from India’s trusted ATM deployment partner.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                to="/apply-now" // Changed href to to
                className="inline-flex items-center justify-center gap-2 bg-[#1d134c] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-[#3b2aa3] hover:scale-105 transition-all duration-200"
                >
                Apply Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                to="/contact" // Changed href to to
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl border-2 border-gray-200 text-[#1d134c] font-bold text-lg hover:border-[#1d134c] transition-all duration-200"
                >
                Talk to Expert
                </Link>
            </div>
         </motion.div>
      </section>

    </div>
  );
}