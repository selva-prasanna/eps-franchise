import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet'; // <--- Helmet Import
import { CheckCircle2, Target, Lightbulb, ArrowRight, Phone } from "lucide-react";

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

export default function AboutContent() {
  return (
    <div className="overflow-hidden bg-white">
      {/* ---------------- SEO METADATA START ---------------- */}
      <Helmet>
        <title>About EPS & BANCS | India's Trusted WLA and Financial Inclusion Network</title>
        <meta 
          name="description" 
          content="Learn about EPS's mission to enhance financial accessibility across India. Our network provides high-uptime, secure ATM solutions for successful franchise partners."
        />
        <meta 
          name="keywords" 
          content="EPS ATM, BANCS network, White Label ATM India, financial inclusion, ATM franchise support, WLA operator, EPS mission"
        />
        <link rel="canonical" href="https://yourwebsite.com/about-us" />
      </Helmet>
      {/* ---------------- SEO METADATA END ---------------- */}

      {/* SECTION 1: INTRO */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Trusted Since 2013
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d134c] mb-6 leading-tight">
              Empowering India with <br />
              <span className="text-[#3f2aa3]">Secure ATM Solutions</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a trusted franchise support platform dedicated to helping
              individuals, shop owners, and property owners across India start
              their own <strong className="text-[#1d134c]">EPS ATM Franchise</strong>{" "}
              with complete confidence.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our objective is simple — to make ATM franchising{" "}
              <strong className="text-[#1d134c]">transparent, profitable, and stress-free</strong>.
              From location approval to installation, monitoring, and ongoing support,
              we guide you through each step of the journey.
            </p>

            {/* Trust Highlights */}
            <div className="space-y-4">
              {[
                "100% Transparent Guidance",
                "Fast Installation & Location Support",
                "Trusted EPS White Label ATM Partner",
                "Thousands of Successful Franchise Owners",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-700 font-medium group-hover:text-[#1d134c] transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE (Replaced next/image with <img>) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-[#3f2aa3] rounded-2xl rotate-3 opacity-10"></div>
            <img
              src="/img/group.webp"
              alt="About EPS ATM Franchise Team"
              className="w-full h-full rounded-2xl shadow-2xl object-cover border-4 border-white absolute inset-0"
              // Removed fill, sizes, and priority props
            />
            
            {/* Floating Stats Card */}
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden sm:block"
            >
                <p className="text-sm text-gray-500 font-medium">Active ATMs</p>
                <p className="text-3xl font-bold text-[#1d134c]">15,000+</p>
                <div className="flex -space-x-2 mt-2">
                    {[1,2,3,4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] text-gray-500">User</div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-[#1d134c] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">+2k</div>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: MISSION & VISION */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1d134c_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-6 space-y-20 relative z-10">
          
          {/* ROW 1 — Mission */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[350px] lg:h-[400px] group"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-2xl -rotate-2 opacity-10 transition-transform group-hover:rotate-0"></div>
              {/* Image Replacement */}
              <img
                src="/img/mission.webp"
                alt="Our Mission - Financial Inclusion"
                className="w-full h-full rounded-2xl shadow-lg object-cover absolute inset-0"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d134c] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our mission is to make ATM accessibility seamless across every{" "}
                <strong className="text-[#1d134c]">city, town, and village in India</strong>.
                EPS is one of the fastest-growing White Label ATM (WLA) operators,
                known for its high uptime and reliable cash management.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-blue-500 pl-4 bg-white/50 py-2">
                We empower business owners by offering a{" "}
                <strong className="text-[#1d134c]">transparent, profitable, and scalable ATM franchise model</strong>.
              </p>
            </motion.div>
          </div>

          {/* ROW 2 — Vision */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              className="order-2 md:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-purple-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d134c] mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our vision is to build India’s largest and most trusted ATM network
                that brings banking convenience to millions, especially in{" "}
                <strong className="text-[#1d134c]">rural and semi-urban regions</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-purple-500 pl-4 bg-white/50 py-2">
                We are committed to supporting entrepreneurship by giving franchise
                partners a secure way to earn <strong className="text-[#1d134c]">stable monthly income</strong>.
              </p>
            </motion.div>

            <motion.div
              className="order-1 md:order-2 relative w-full h-[350px] lg:h-[400px] group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
               <div className="absolute inset-0 bg-purple-600 rounded-2xl rotate-2 opacity-10 transition-transform group-hover:rotate-0"></div>
              {/* Image Replacement */}
              <img
                src="/img/vision.webp"
                alt="Our Vision - Rural Banking"
                className="w-full h-full rounded-2xl shadow-lg object-cover absolute inset-0"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d134c] mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              We help individuals, shop owners, and property owners start their{" "}
              <strong className="text-[#3f2aa3]">EPS ATM Franchise journey</strong>{" "}
              with full confidence and zero hidden terms.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Trusted Support Team",
                desc: "From your first enquiry to installation, our experts provide complete step-by-step assistance.",
                icon: "🤝",
                color: "bg-blue-50 border-blue-100 hover:border-blue-300"
              },
              {
                title: "100% Transparent Info",
                desc: "All details about cost, earnings, requirements, and process are clearly explained — no hidden fees.",
                icon: "💎",
                 color: "bg-green-50 border-green-100 hover:border-green-300"
              },
              {
                title: "Fast & Reliable Response",
                desc: "Our team provides quick support, quick approval, and continuous guidance so you can start earning.",
                icon: "🚀",
                 color: "bg-purple-50 border-purple-100 hover:border-purple-300"
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className={`p-8 border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ${card.color}`}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#1d134c]">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1d134c] to-[#3f2aa3] text-center text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto px-6 relative z-10"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            Ready to Start Your EPS ATM Franchise?
          </h3>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Take the next step toward building a <strong className="text-white">stable monthly income</strong>.
            Get location approval and installation support today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <Link
              to="/apply-now" // Changed href to to
              className="flex items-center gap-2 bg-white text-[#1d134c] px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/contact" // Changed href to to
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold border-2 border-white/20 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <Phone className="w-5 h-5" /> Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}