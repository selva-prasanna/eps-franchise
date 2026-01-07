import { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MapPin,
} from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData(e.target);
    formData.append("source", "apply-now");

    try {
      // NOTE: This URL points to a Google Script endpoint for form submission.
      const res = await fetch("https://script.google.com/macros/s/AKfycbyqUwN7Z0_cXR6M692ZhMOVsDqr1Ca7T-V7vEzdmB2pTmg6jcLUkLH0pst373QSUky_/exec", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();

      if (res.ok && text.trim().toLowerCase().includes("success")) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* NAME + PHONE */}
      <div className="grid md:grid-cols-2 gap-6">
        <InputField label="Your Name" name="name" icon={User} placeholder="Full Name" required />

        <InputField
          label="Phone Number"
          name="phone"
          icon={Phone}
          placeholder="10-digit Mobile"
          required
          type="tel"
        />
      </div>

      {/* EMAIL + CITY */}
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Email Address"
          name="email"
          type="email"
          icon={Mail}
          placeholder="example@mail.com"
        />

        <InputField
          label="City / Location"
          name="location"
          icon={MapPin}
          placeholder="City Name"
          required
        />
      </div>

      {/* MESSAGE */}
      <TextareaField
        label="Your Message"
        name="message"
        icon={MessageSquare}
        placeholder="Tell us more about your requirements..."
        required
      />

      {/* STATUS + BUTTON */}
      <div className="pt-2 flex flex-col md:flex-row items-center gap-4 justify-between">

        <div className="min-h-[20px]">
          {status === "success" && <SuccessMessage />}
          {status === "error" && <ErrorMessage />}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full md:w-auto min-w-[200px]
            bg-gradient-to-r from-[#1d134c] to-[#3f2aa3]
            text-white px-10 py-4 rounded-2xl font-bold text-lg
            shadow-lg hover:-translate-y-0.5 active:scale-95
            transition-all flex items-center justify-center gap-2
            disabled:opacity-70
          "
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" /> Sending...
            </>
          ) : (
            <>
              Send Inquiry <Send className="w-5 h-5" />
            </>
          )}
        </button>

      </div>
    </form>
  );
}

/* ---------------- COMPONENTS ---------------- */

function InputField({ label, name, placeholder, icon: Icon, ...props }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-gray-600 ml-1">{label}</label>

      <div className="relative">
        <Icon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

        <input
          name={name}
          placeholder={placeholder}
          {...props}
          className="
            w-full pl-11 pr-4 py-3.5
            bg-gray-50 border border-gray-200
            rounded-2xl text-gray-900
            focus:bg-white focus:border-[#3f2aa3]
            focus:ring-4 focus:ring-[#3f2aa3]/10
            transition-all
          "
        />
      </div>
    </div>
  );
}

function TextareaField({ label, name, placeholder, icon: Icon, ...props }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-gray-600 ml-1">{label}</label>

      <div className="relative">
        <Icon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

        <textarea
          name={name}
          placeholder={placeholder}
          {...props}
          className="
            w-full pl-11 pr-4 py-3.5
            bg-gray-50 border border-gray-200
            rounded-2xl text-gray-900
            focus:bg-white focus:border-[#3f2aa3]
            focus:ring-4 focus:ring-[#3f2aa3]/10
            transition-all resize-none
          "
        />
      </div>
    </div>
  );
}

function SuccessMessage() {
  return (
    <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg text-sm font-semibold">
      <CheckCircle2 className="w-4 h-4" /> Message Sent!
    </div>
  );
}

function ErrorMessage() {
  return (
    <div className="flex items-center gap-2 text-red-600 bg-red-50 px-3 py-1.5 rounded-lg text-sm font-semibold">
      <AlertCircle className="w-4 h-4" /> Failed to send.
    </div>
  );
}