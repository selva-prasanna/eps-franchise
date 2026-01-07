import React from "react";
// Assuming ContactForm is a standard React component
import ContactForm from "./component/ContactForm"; 
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ApplyNow() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[480px] bg-[#1d134c] rounded-b-[60px] z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center text-white mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">Apply Now</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mt-3">
            Submit your information and our Franchise Support Team will contact you within 24 hours.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-3 min-h-[600px]">

          {/* LEFT SIDE — Contact Info */}
          <div className="bg-[#1d134c] text-white p-10 md:p-12 flex flex-col justify-between">

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Phone className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Phone Number</p>
                  <a href="tel:+919791734770" className="text-lg font-semibold hover:text-yellow-400">
                    +91 9791734770
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Mail className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Email</p>
                  <a href="mailto:selvaprasanna2@gmail.com" className="text-lg font-semibold hover:text-yellow-400 break-all">
                    selvaprasanna2k@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Head Office</p>
                  <p>PAN-India Franchise Support<br />ATM Network Solutions</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Working Hours</p>
                  <p>Mon–Sat: 9 AM – 7 PM<br />Support: 24/7</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE — Form */}
          <div className="lg:col-span-2 p-8 md:p-12">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}