import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Bell, Loader2, FileCheck, ZoomIn } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showCert, setShowCert] = useState(false); // State to control certificate view

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem("newsletterDismissed");
      if (!hasSeen) {
        setIsVisible(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("newsletterDismissed", "true");
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return setStatus("Please enter your email");

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:7000/api/newsletter/subscribe", { email });
      setStatus("Successfully subscribed!");
      setTimeout(handleClose, 2000);
    } catch (err) {
      setStatus(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-[#1d134c]/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-20"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>

              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Bell className="w-8 h-8 text-[#3f2aa3]" />
                </div>

                <h2 className="text-2xl font-bold text-[#1d134c] mb-2">Exclusive Updates</h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to get the latest news on ATM franchise opportunities and financial trends.
                </p>

                {/* --- UPDATED CERTIFICATE BUTTON (Friendly In-Page View) --- */}
                <div className="mb-8 p-4 bg-blue-50/50 rounded-2xl border border-dashed border-blue-200">
                  <p className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">Verified RBI Authorization</p>
                  <button 
                    onClick={() => setShowCert(true)} // Open certificate modal
                    className="inline-flex items-center gap-2 text-[#3f2aa3] font-bold hover:text-blue-700 transition-colors text-sm cursor-pointer"
                  >
                    <FileCheck className="w-4 h-4" />
                    Click here
                  </button>
                </div>

                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3f2aa3] outline-none transition-all"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#3f2aa3] text-white font-bold rounded-xl shadow-lg hover:bg-[#1d134c] transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : "Subscribe Now"}
                  </button>
                </form>

                {status && (
                  <p className={`mt-4 text-sm font-semibold ${status.includes("Success") ? "text-green-600" : "text-red-500"}`}>
                    {status}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- CERTIFICATE OVERLAY (Friendly Pop-up) --- */}
      <AnimatePresence>
        {showCert && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCert(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-auto p-2"
            >
              <button 
                onClick={() => setShowCert(false)}
                className="fixed top-6 right-6 p-3 bg-white rounded-full shadow-xl hover:bg-gray-100 transition-all z-[120]"
              >
                <X className="w-6 h-6 text-black" />
              </button>
              
              <img 
                src="/img/certificate.jpg" // Place your high-res certificate here
                alt="Certificate of Authorization"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Newsletter;