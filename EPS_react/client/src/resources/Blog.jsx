import React, { useState } from "react";
import { Link } from "react-router-dom"; // Changed from "next/link"
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";

// --- START: Blog Data (Replaces import from "./data") ---
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
    id: 3,
    slug: "cost-breakdown-starting-atm-franchise",
    title: "Complete Cost Breakdown of Starting an ATM Franchise",
    excerpt: "No hidden fees. We reveal exactly how much you need for security deposit, installation, and setup.",
    category: "Investment",
    date: "Oct 20, 2023",
    readTime: "4 min read",
    image: "/img/blog/cost.webp",
    content: `
      <p>Transparency is key. Here is exactly where your money goes when you apply for an EPS ATM Franchise.</p>
      <ul>
        <li><strong>Security Deposit:</strong> ₹50,000 - ₹1,00,000 (Refundable)</li>
        <li><strong>ATM Machine Cost:</strong> Covered in the franchise fee depending on the model.</li>
        <li><strong>VSAT/CCTV Setup:</strong> ₹25,000 approx.</li>
        <li><strong>Civil Work & Branding:</strong> ₹30,000 - ₹50,000.</li>
      </ul>
      <p>Total estimated cost ranges from ₹2 Lakh to ₹4 Lakh depending on the site conditions.</p>
    `
  },
  {
    id: 4,
    slug: "how-to-choose-best-atm-location",
    title: "How to Choose the Best Location for Maximum ATM Transactions",
    excerpt: "Location is everything. Here are the top 5 factors to consider before finalizing your ATM site.",
    category: "Tips & Tricks",
    date: "Oct 25, 2023",
    readTime: "7 min read",
    image: "/img/blog/location.webp",
    content: `
      <p>An ATM is only as good as its location. You could have the best machine, but without footfall, earnings will be low.</p>
      <h3>Top Locations</h3>
      <ol>
        <li><strong>Marketplaces:</strong> High cash usage areas.</li>
        <li><strong>Bus/Railway Stations:</strong> Transit points always need cash.</li>
        <li><strong>Hospitals:</strong> Emergency cash requirements are frequent.</li>
      </ol>
      <p>Avoid secluded areas. Visibility and safety are paramount for customer trust.</p>
    `
  },
  {
    id: 5,
    slug: "passive-income-ideas-2024-india",
    title: "Top Passive Income Ideas in India for 2024",
    excerpt: "Why ATM Franchises rank higher than real estate and stocks for steady, low-risk monthly income.",
    category: "Financial Guide",
    date: "Nov 01, 2023",
    readTime: "5 min read",
    image: "/img/blog/passive-income.webp",
    content: `
      <p>Looking for income that doesn't require a 9-to-5 grind? Here is why ATMs beat other options.</p>
      <p>Unlike Real Estate, the entry cost is low (under ₹5 Lakhs). Unlike Stocks, the income is not volatile; it's steady based on transactions. An ATM works 24/7 for you, even while you sleep.</p>
    `
  },
  {
    id: 6,
    slug: "rbi-guidelines-white-label-atms",
    title: "RBI Guidelines for White Label ATMs Explained",
    excerpt: "Stay compliant. A simplified guide to what the Reserve Bank of India says about WLA operations.",
    category: "Legal & Compliance",
    date: "Nov 05, 2023",
    readTime: "8 min read",
    image: "/img/blog/rbi.webp",
    content: `
      <p>The RBI has set strict guidelines to ensure the safety and reliability of White Label ATMs.</p>
      <p>Key mandates include:</p>
      <ul>
        <li>Entities must have a net worth of ₹100 Crore to apply for a license (EPS meets this).</li>
        <li>ATMs must provide services to cards issued by all banks.</li>
        <li>Grievance redressal mechanisms must be displayed clearly at the ATM site.</li>
      </ul>
    `
  },
  {
    id: 7,
    slug: "how-eps-bancs-ensure-uptime",
    title: "Technology Deep Dive: How EPS & BANCS Ensure 99% Uptime",
    excerpt: "What happens when you swipe a card? A look at the secure technology powering our network.",
    category: "Technology",
    date: "Nov 12, 2023",
    readTime: "6 min read",
    image: "/img/blog/tech.webp",
    content: `
      <p>Uptime is money. If your ATM is down, you lose transactions. That's why EPS uses the BANCS switching network.</p>
      <p>This network handles high volumes of data with low latency. Combined with our 24/7 remote monitoring center (RMS) that tracks cash levels and hardware health, we ensure your machine is always ready to serve.</p>
    `
  },
  {
    id: 8,
    slug: "myths-about-atm-franchise",
    title: "5 Common Myths About ATM Franchises Busted",
    excerpt: "Do I have to load cash myself? Is it unsafe? We debunk the biggest misconceptions.",
    category: "Myths vs Reality",
    date: "Nov 18, 2023",
    readTime: "4 min read",
    image: "/img/blog/myths.webp",
    content: `
      <p><strong>Myth 1:</strong> I have to carry cash to the ATM.<br/><strong>Fact:</strong> No! Cash loading is done by secure logistics agencies (CMS) authorized by EPS.</p>
      <p><strong>Myth 2:</strong> It requires technical knowledge.<br/><strong>Fact:</strong> EPS handles all maintenance. You just need to provide the space and electricity.</p>
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
];
// --- END: Blog Data ---

export default function BlogListing() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-[#1d134c] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-repeat opacity-10 pointer-events-none" style={{ backgroundImage: "url('/img/grid-pattern.svg')" }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              📚 Knowledge Hub
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              EPS ATM <span className="text-yellow-400">Franchise Insights</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
              Expert guides, industry news, and financial tips to help you maximize your passive income journey.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <input
                type="text"
                placeholder="Search articles (e.g., 'profit', 'cost')..."
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 bg-white shadow-xl focus:ring-4 focus:ring-blue-500/30 focus:outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {filteredPosts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Image Placeholder - Using <img> instead of next/image */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                   {/* In a real app, use <img src={post.image} alt={post.title} className="w-full h-full object-cover" /> here */}
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover" /> 
                   <div className="absolute inset-0 bg-[#1d134c]/5 group-hover:bg-[#1d134c]/0 transition-colors"></div>
                   <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-[#1d134c] shadow-sm uppercase tracking-wide">
                      {post.category}
                   </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1d134c] mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/resources/blog/${post.slug}`} // Changed href to to
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1d134c] group-hover:text-blue-600 transition-colors mt-auto"
                  >
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-400">No articles found</h3>
            <p className="text-gray-500">Try searching for something else.</p>
          </div>
        )}
      </section>
    </div>
  );
}