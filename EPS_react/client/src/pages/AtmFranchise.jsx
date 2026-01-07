import React from "react";
import { Link } from "react-router-dom"; // Changed from "next/link"
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet'; // <--- Helmet Import
import { ShieldCheck, Globe, Clock, Server, CheckCircle2, ArrowRight, Building2, Landmark } from "lucide-react";

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

export default function ATMFranchiseContent() {
  return (
    <div className="overflow-hidden bg-white">
      
      {/* ---------------- SEO METADATA START ---------------- */}
      <Helmet>
        <title>EPS ATM Franchise Models (WLA/BLA) | Cost, Benefits & BANCS Network</title>
        <meta 
          name="description" 
          content="Comprehensive guide to EPS White Label (WLA) and Brown Label (BLA) ATM franchises. Learn about high uptime, RBI compliance, and profitable passive income opportunities in India."
        />
        <meta // <--- ADDED: Meta Keywords Tag
          name="keywords" 
          content="White Label ATM, WLA franchise, Brown Label ATM, BLA model, EPS BANCS network, ATM business cost, passive income ATM, RBI compliant ATM"
        />
        <link rel="canonical" href="https://yourwebsite.com/atm-franchise" />
      </Helmet>
      {/* ---------------- SEO METADATA END ---------------- */}

      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[450px] md:h-[550px]">
        <div className="absolute inset-0">
          {/* Replaced next/image with <img> */}
          <img
            src="/img/atm-hero.webp"
            alt="EPS BANCS ATM Network"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d134c]/95 via-[#1d134c]/80 to-[#1d134c]/40" />
        </div>

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                Official Franchise Partner
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
              EPS & BANCS — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                India’s Trusted ATM Network
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl font-medium">
              EPS is one of India’s leading <strong className="text-white">White Label ATM operators</strong>,
              powered by the secure, high-performance <strong className="text-yellow-400">BANCS Switching Network</strong>.
              Join a network known for exceptional uptime and profitability.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        
        {/* --- 2. WHY CHOOSE EPS (GRID) --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.div variants={fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d134c] mb-6">
              Why Choose EPS BANCS ATM Franchise?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With nationwide deployment, high uptime, and transparent operations, the{" "}
              <strong className="text-[#3f2aa3]">EPS ATM Franchise</strong> is one of
              the safest and most profitable passive income opportunities in India.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "RBI Compliant",
                desc: "Operates under strict RBI rules ensuring complete legal compliance and trusted transactions.",
                color: "text-green-600",
                bg: "bg-green-50"
              },
              {
                icon: Server,
                title: "SSL Security",
                desc: "Protected with 256-bit SSL encryption, ensuring zero data leakage and industry-level protection.",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: Globe,
                title: "BANCS Network",
                desc: "Powered by the BANCS Switching Network for lightning-fast and secure transaction speeds.",
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
              {
                icon: Clock,
                title: "24/7 Monitoring",
                desc: "Round-the-clock technical monitoring with automatic alerts and fast resolution.",
                color: "text-orange-600",
                bg: "bg-orange-50"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="p-8 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`mb-6 p-4 rounded-xl w-fit ${item.bg} group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1d134c]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- 3. ATM NETWORK MODELS (Alternating Layout) --- */}
        <section className="py-10">
          <div className="text-center mb-16">
            <span className="text-[#3f2aa3] font-semibold tracking-wide uppercase text-sm">Our Business Models</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d134c] mt-2 mb-4">
              EPS ATM Network Across India
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering secure, accessible, and reliable banking services across cities, towns, and rural regions.
            </p>
          </div>

          {/* WLA SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24"
          >
            <motion.div variants={fadeUp} className="relative h-[400px] w-full group">
               <div className="absolute inset-0 bg-blue-600 rounded-2xl -rotate-3 opacity-10 transition-transform group-hover:rotate-0"></div>
              {/* Image Replacement */}
              <img
                src="/img/model.webp"
                alt="EPS WLA ATM Network"
                className="w-full h-full rounded-2xl shadow-xl object-cover absolute inset-0"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-blue-100 rounded-lg">
                    <Landmark className="w-6 h-6 text-blue-700" />
                 </div>
                 <span className="text-blue-700 font-bold bg-blue-50 px-3 py-1 rounded-full text-sm">Best for Rural & Semi-Urban</span>
              </div>
              <h3 className="text-3xl font-bold text-[#1d134c] mb-4">
                White Label ATM (WLA)
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                EPS operates thousands of <strong className="text-[#1d134c]">White Label ATMs</strong> across India, bringing convenient cash withdrawal facilities to underserved locations. You own the space, we manage the technology.
              </p>
              <ul className="space-y-4">
                {[
                    "Presence in 3500+ towns",
                    "Active in 27 states",
                    "Steady monthly earnings from Day 1"
                ].map((txt, idx) => (
                    <li key={idx} className="flex gap-3 items-center text-gray-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" /> {txt}
                    </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* BLA SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <motion.div variants={fadeUp} className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-purple-100 rounded-lg">
                    <Building2 className="w-6 h-6 text-purple-700" />
                 </div>
                 <span className="text-purple-700 font-bold bg-purple-50 px-3 py-1 rounded-full text-sm">Best for High-Traffic Zones</span>
              </div>
              <h3 className="text-3xl font-bold text-[#1d134c] mb-4">
                Brown Label ATM (BLA)
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                A co-branded model where the ATM machine hardware is managed by EPS, while cash handling and settlement is done through partner banks. Ideal for busy commercial areas.
              </p>
               <ul className="space-y-4">
                {[
                    "High uptime guarantee (99%)",
                    "Bank-integrated security systems",
                    "Stable revenue with bank credibility"
                ].map((txt, idx) => (
                    <li key={idx} className="flex gap-3 items-center text-gray-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" /> {txt}
                    </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 md:order-2 relative h-[400px] w-full group">
               <div className="absolute inset-0 bg-purple-600 rounded-2xl rotate-3 opacity-10 transition-transform group-hover:rotate-0"></div>
              {/* Image Replacement */}
              <img
                src="/img/image.webp"
                alt="EPS Brown Label ATM Network"
                className="w-full h-full rounded-2xl shadow-xl object-cover absolute inset-0"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* --- 4. COMPARISON TABLE --- */}
        <section className="py-24">
          <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d134c] mb-4">
                BANCS vs Other ATM Switches
              </h2>
              <p className="text-gray-600">See why 150+ partners trust the BANCS network.</p>
          </div>
          
          <div className="overflow-x-auto shadow-2xl rounded-2xl border border-gray-100 bg-white">
            <table className="w-full min-w-[700px] border-collapse">
              <thead className="bg-[#1d134c] text-white">
                <tr>
                  <th className="py-5 px-8 text-left text-lg font-bold w-1/3">Features</th>
                  <th className="py-5 px-8 text-left text-lg font-bold w-1/3 bg-[#3f2aa3] relative">
                    BANCS Network
                    <span className="absolute top-0 right-0 bg-yellow-400 text-[#1d134c] text-[10px] font-bold px-2 py-1 rounded-bl-lg">RECOMMENDED</span>
                  </th>
                  <th className="py-5 px-8 text-left text-lg font-semibold w-1/3 opacity-70 bg-[#2a1c7a]">Other Switches</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  ["Transaction Speed", "Ultra-fast / High Volume", "Slower / Timeouts"],
                  ["Network Uptime", "98% – 99.5%", "90% – 95%"],
                  ["Security", "RBI Compliant / 256-bit SSL", "Basic Encryption"],
                  ["Coverage", "Pan-India (Rural + Urban)", "Mostly Urban"],
                  ["Error Handling", "Auto-Reversal System", "Manual Dispute Handling"],
                ].map(([feature, bancs, others], i) => (
                  <tr key={i} className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="py-5 px-8 font-semibold text-gray-900">{feature}</td>
                    <td className="py-5 px-8 text-[#3f2aa3] font-bold flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" /> {bancs}
                    </td>
                    <td className="py-5 px-8 text-gray-500">{others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- 5. TIMELINE SECTION (Responsive) --- */}
        <section className="py-10 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1d134c] mb-16">
            How It Works
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            {[
              { title: "Choose a Location", desc: "Select a shopfront or commercial spot with good footfall.", step: "1", color: "bg-[#1d134c]" },
              { title: "Submit Documents", desc: "Upload KYC and property documents for verification.", step: "2", color: "bg-[#4c3ad1]" },
              { title: "ATM Installation", desc: "Technicians install ATM, UPS, and branding within 7-15 days.", step: "3", color: "bg-[#ff7b54]" },
              { title: "Start Earning", desc: "ATM goes live. You earn on every cash withdrawal.", step: "4", color: "bg-[#00b57a]" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center w-full mb-12 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Text Side */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <h3 className="text-xl font-bold text-[#1d134c]">{item.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">{item.desc}</p>
                </div>

                {/* Icon Center */}
                <div 
                    className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full text-white font-bold shadow-lg ring-4 ring-white ${item.color}`}
                >
                   {item.step}
                </div>

                {/* Empty Side (for spacing on desktop) */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 6. CTA SECTION --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="py-16 px-6 bg-gradient-to-r from-[#1d134c] to-[#3f2aa3] text-center rounded-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                Ready to Start Your EPS ATM Franchise?
            </h3>
            <p className="text-lg text-blue-100 mb-10">
                Begin your journey toward <strong className="text-white">stable monthly passive income</strong>. 
                Get approved in less than 7 days.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                to="/apply-now" // Changed href to to
                className="flex items-center justify-center gap-2 bg-white text-[#1d134c] px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                >
                Apply Now <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                to="/contact" // Changed href to to
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                >
                Contact Support
                </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}