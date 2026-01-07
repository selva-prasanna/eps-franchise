import React, { useState } from "react";
import { Link } from "react-router-dom"; // Changed from "next/link"
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, HelpCircle, MessageCircle } from "lucide-react";

// --- START: FAQ Data (Replaces import from "./data") ---
export const faqs = [
  {
    id: 1,
    question: "Is the ATM Franchise business profitable in India?",
    answer: "Yes, it is a highly profitable passive income source. Earnings depend on transaction volume. On average, a franchisee earns between ₹25,000 to ₹60,000+ per month depending on footfall and location type (WLA or BLA)."
  },
  {
    id: 2,
    question: "What is the total investment required to start?",
    answer: "The investment ranges from ₹1.5 Lakhs to ₹4 Lakhs depending on the model (Shop-in-Shop vs. Dedicated Cabin). This includes the refundable security deposit, VSAT installation, and civil work."
  },
  {
    id: 3,
    question: "Who is responsible for loading cash into the ATM?",
    answer: "You do NOT have to load cash. Cash loading is handled entirely by EPS and its authorized Cash Logistics agencies (CMS). Franchise owners generally do not touch the cash inside the machine."
  },
  {
    id: 4,
    question: "What are the space requirements for an ATM?",
    answer: "For a dedicated cabin, you need about 60-80 sq. ft. For a Shop-in-Shop model (inside a grocery store or pharmacy), a small 4x4 ft or 6x6 ft corner is sufficient. The location must be on the ground floor with good visibility."
  },
  {
    id: 5,
    question: "Do I need any technical knowledge to operate the ATM?",
    answer: "No. EPS provides complete technical support, maintenance, and 24/7 monitoring. Your role is primarily to ensure the site is clean, has power, and is accessible to customers."
  },
  {
    id: 6,
    question: "What documents are required for the application?",
    answer: "Standard KYC documents are needed: Aadhaar Card, PAN Card, Bank Details (Cancelled Cheque), and Property documents (Ownership proof or Rent Agreement with NOC from the landlord)."
  },
  {
    id: 7,
    question: "How long does the installation process take?",
    answer: "Once the documents are verified and the security deposit is processed, installation typically takes 7 to 15 days. This includes civil work, VSAT connectivity, and machine deployment."
  },
  {
    id: 8,
    question: "Is there a lock-in period for the franchise contract?",
    answer: "Yes, standard contracts usually have a lock-in period of 1 to 3 years to ensure stability. However, exit clauses exist if the site is non-operational due to unavoidable reasons."
  },
  {
    id: 9,
    question: "What happens if the ATM machine breaks down?",
    answer: "Our central monitoring system detects faults instantly. A technician is dispatched to fix software or hardware issues. Most issues are resolved within 4-24 hours depending on the location."
  },
  {
    id: 10,
    question: "Are there any hidden charges?",
    answer: "No. We believe in 100% transparency. The only recurring cost for you is the electricity bill and site rent (if you don't own the shop). All other maintenance costs are often covered under the franchise agreement."
  },
  {
    id: 11,
    question: "Can I shift the ATM to a new location later?",
    answer: "Yes, if a location is not performing well after a certain period, you can request a relocation. This is subject to EPS approval and may incur a small re-installation fee."
  },
  {
    id: 12,
    question: "How do I track my daily earnings?",
    answer: "We provide a franchisee dashboard or portal where you can log in and view daily transaction counts, uptime reports, and estimated monthly payouts."
  }
];
// --- END: FAQ Data ---


export default function FAQPage() {
  const [openId, setOpenId] = useState(null); // Track which ID is open
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* HERO SECTION */}
      <section className="bg-[#1d134c] text-white py-20 relative overflow-hidden">
        {/* Note: Replacing Next.js asset CSS with inline style */}
        <div className="absolute inset-0 bg-repeat opacity-10 pointer-events-none" style={{ backgroundImage: "url('/img/grid-pattern.svg')" }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 text-yellow-300" />
              <span>Support Center</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
              Have questions about the franchise? Find answers about cost, profit, cash loading, and more.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Search questions (e.g., 'cost', 'cash')..."
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 bg-white shadow-xl focus:ring-4 focus:ring-blue-500/30 focus:outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="max-w-3xl mx-auto px-6 -mt-10 relative z-20">
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openId === faq.id 
                    ? "border-blue-500 shadow-lg ring-1 ring-blue-500/20" 
                    : "border-gray-200 shadow-sm hover:border-blue-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-bold transition-colors ${
                    openId === faq.id ? "text-[#1d134c]" : "text-gray-800"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${
                     openId === faq.id ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                  }`}>
                    {openId === faq.id ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">No matching questions found.</p>
            </div>
          )}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-[#1d134c] mb-4">Still have questions?</h3>
            <div className="flex justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition">
                    <MessageCircle className="w-5 h-5" /> Contact Support
                </Link>
                <Link to="/apply-now" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d134c] rounded-lg font-semibold text-white hover:bg-[#2a1c7a] transition shadow-lg">
                    Apply Now
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}