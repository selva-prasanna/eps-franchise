// Footer.jsx (React Version)

import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-[#1877F2]" },
    { icon: Twitter, href: "#", color: "hover:bg-[#1DA1F2]" },
    { icon: Instagram, href: "#", color: "hover:bg-[#E4405F]" },
    { icon: Linkedin, href: "#", color: "hover:bg-[#0A66C2]" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "ATM Franchise", href: "/atm-franchise" },
    { name: "Cost & Requirements", href: "/cost-requirements" },
    { name: "Apply Now", href: "/apply-now" },
  ];

  const resourceLinks = [
    { name: "Blog", href: "/resources/blog" },
    { name: "FAQs", href: "/resources/faqs" },
    { name: "Guides", href: "/resources/guides" },
    { name: "Help & Support", href: "/resources/support" },
  ];

  return (
    <footer className="bg-[#1d134c] text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d134c] via-[#2a1c7a] to-[#1d134c] z-0"></div>

      {/* Background Motion Blurs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND INFO */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/img/logo.webp"
                alt="EPS ATM Franchise Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-extrabold tracking-wide">
                EPS ATM
              </span>
            </Link>

            <p className="text-blue-100/80 text-sm leading-relaxed max-w-xs">
              India’s trusted partner for White Label ATM deployment. We empower
              entrepreneurs with secure and profitable ATM opportunities.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`p-2.5 rounded-lg bg-white/5 border border-white/10 text-white transition-all hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-400 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-blue-100/70 hover:text-yellow-400 transition"
                  >
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-yellow-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-400 rounded-full"></span>
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-blue-100/70 hover:text-yellow-400 transition"
                  >
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-yellow-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-400 rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Our Connection</p>
                  <p className="text-sm text-blue-100/70 mt-1">
                    PAN-India Franchise Support <br /> ATM Network Solutions
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Mail className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Email Us</p>
                  <a
                    href="mailto:littlemelody0000@gmail.com"
                    className="text-sm text-blue-100/70 hover:text-white"
                  >
                    littlemelody0000@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Phone className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Call Support</p>
                  <a
                    href="tel:+918883335553"
                    className="text-sm text-blue-100/70 hover:text-white"
                  >
                    +91 88833 35553
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200/50">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">EPS ATM Franchise</span>.
            All rights reserved by MAKT.
          </p>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <p>
              Made by{" "}
              <span className="text-yellow-400 font-medium">Makt Solution</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
