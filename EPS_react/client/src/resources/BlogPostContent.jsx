import React from "react";
import { Link, useParams } from "react-router-dom"; // Use Link and useParams from react-router-dom
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// --- START: Blog Data (Need to include data for a self-contained React file) ---
export const blogPosts = [
  {
    id: 1,
    slug: "is-atm-franchise-profitable-in-india-2024",
    title: "Is ATM Franchise Profitable in India in 2024?",
    excerpt: "Discover the real ROI of starting an ATM business. We break down monthly earnings, transaction fees, and net profit margins.",
    category: "Financial Guide",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    image: "/img/blog/profit.webp",
    content: `
      <p>Starting an ATM franchise is often cited as one of the best passive income ideas in India. But is it really profitable? Let's look at the numbers.</p>
      <h3>The Revenue Model</h3>
      <p>ATM franchise owners earn money on every transaction—both cash withdrawals and non-financial transactions like balance checks. With EPS, you earn ₹8-₹15 per cash transaction depending on the volume.</p>
      <h3>ROI Calculation</h3>
      <p>With an initial investment of roughly ₹2-3 Lakhs, a well-placed ATM seeing 100 transactions a day can recover the investment in 12-14 months, followed by years of pure profit.</p>
      <h3>Conclusion</h3>
      <p>Yes, with the right location and support from a trusted partner like EPS, an ATM franchise remains a highly profitable venture.</p>
    `
  },
  {
    id: 2,
    slug: "white-label-vs-brown-label-atm-difference",
    title: "White Label vs. Brown Label ATM: What's the Difference?",
    excerpt: "Confused between WLA and BLA? Learn which model suits your investment capacity and business goals better.",
    category: "Franchise Models",
    date: "Oct 15, 2023",
    readTime: "6 min read",
    image: "/img/blog/wla-vs-bla.webp",
    content: `
      <p>When entering the ATM business, you will encounter two main terms: White Label ATMs (WLA) and Brown Label ATMs (BLA). Choosing the right one is critical.</p>
      <h3>White Label ATMs (WLA)</h3>
      <p>WLAs are owned and operated by non-banking entities like EPS. They are excellent for rural penetration and offer franchise owners more control over the location.</p>
      <h3>Brown Label ATMs (BLA)</h3>
      <p>In the BLA model, the hardware is often owned by a service provider, but the cash management and banking connectivity are handled by a sponsor bank. This model is common in high-traffic urban centers.</p>
    `
  },
  {
    id: 9,
    slug: "step-by-step-guide-applying-eps-atm",
    title: "Step-by-Step Guide to Applying for an EPS ATM",
    excerpt: "From documentation to installation—here is your roadmap to becoming a franchise partner.",
    category: "Guides",
    date: "Nov 25, 2023",
    readTime: "5 min read",
    image: "/img/blog/guide.webp",
    content: `
      <p>Ready to start? Here is the roadmap:</p>
      <ol>
        <li><strong>Application:</strong> Fill the form on our website.</li>
        <li><strong>KYC:</strong> Submit Aadhaar, PAN, and Property documents.</li>
        <li><strong>Site Verification:</strong> Our field officer visits your shop.</li>
        <li><strong>Agreement:</strong> Sign the franchise deed.</li>
        <li><strong>Installation:</strong> Machine is installed within 7-10 days.</li>
      </ol>
    `
  }
  // ... (Include all other blog posts here for completeness)
];
// --- END: Blog Data ---


// Renamed and modified to handle the data fetching via useParams
export default function BlogPost() {
  const { slug } = useParams(); // Get the slug from the URL parameters

  // Find the post based on the slug
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          {/* Changed href to to */}
          <Link to="/resources/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* HEADER */}
      <div className="bg-[#1d134c] text-white py-16 md:py-24 relative overflow-hidden">
        {/* Note: Replacing Next.js asset CSS with inline style */}
        <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-10 pointer-events-none" style={{ backgroundImage: "url('/img/grid-pattern.svg')" }}></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link
            to="/resources/blog" // Changed href to to
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
              {post.category}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight mb-6"
          >
            {post.title}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-6 text-blue-100/80 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
            <span className="flex items-center gap-2">
              By <span className="text-white font-semibold">EPS Editorial Team</span>
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          {/* Share Sidebar (Desktop) - Note: Share functionality is not implemented, just the UI */}
          <div className="hidden lg:flex flex-col gap-4 absolute -left-20 top-0">
            <div className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-[#1877F2] hover:bg-blue-50 transition cursor-pointer">
              <Facebook className="w-5 h-5" />
            </div>
            <div className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-[#1DA1F2] hover:bg-blue-50 transition cursor-pointer">
              <Twitter className="w-5 h-5" />
            </div>
            <div className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-[#0A66C2] hover:bg-blue-50 transition cursor-pointer">
              <Linkedin className="w-5 h-5" />
            </div>
            <div className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition cursor-pointer">
              <Share2 className="w-5 h-5" />
            </div>
          </div>

          <article className="prose prose-lg max-w-none prose-headings:text-[#1d134c] prose-a:text-blue-600 prose-img:rounded-xl">
            {/* Render HTML content safely */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <h3 className="text-2xl font-bold text-[#1d134c] mb-3">
              Want to start your own Franchise?
            </h3>
            <p className="text-gray-600 mb-6">
              Join 150+ successful partners in the EPS network today.
            </p>
            <Link
              to="/apply-now" // Changed href to to
              className="inline-block bg-[#1d134c] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-900 transition shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}