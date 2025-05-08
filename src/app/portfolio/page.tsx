// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { Search, Filter, ChevronDown, X, ExternalLink } from "lucide-react";
// import Link from "next/link";
// import { openWhatsapp } from "@/lib/config";

// const PortfolioPage = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterMenuOpen, setFilterMenuOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   // Sample portfolio data - replace with your actual data
//   const portfolioItems = [
//     {
//       id: 1,
//       title: "Panchakanya Brand Campaign",
//       category: "branding",
//       image: "/portfolio/panchakanya-1.jpg", // Replace with actual image paths
//       description:
//         "Complete brand overhaul with new visual identity and messaging strategy.",
//       client: "Panchakanya Group",
//       year: "2022",
//     },
//     {
//       id: 2,
//       title: "Balaji Rice Digital Marketing",
//       category: "digital",
//       image: "/portfolio/balaji-1.jpg",
//       description:
//         "Integrated digital marketing campaign resulting in 200% increase in online engagement.",
//       client: "Balaji Rice",
//       year: "2021",
//     },
//     {
//       id: 3,
//       title: "Urban Cafe Interior Graphics",
//       category: "design",
//       image: "/portfolio/urban-cafe-1.jpg",
//       description:
//         "Custom environmental graphics designed for flagship Urban Cafe location.",
//       client: "Urban Cafe",
//       year: "2023",
//     },
//     {
//       id: 4,
//       title: "Harmony Wellness Social Media",
//       category: "social",
//       image: "/portfolio/harmony-1.jpg",
//       description:
//         "Comprehensive social media content strategy and implementation.",
//       client: "Harmony Wellness",
//       year: "2022",
//     },
//     {
//       id: 5,
//       title: "TechSolve Website Redesign",
//       category: "web",
//       image: "/portfolio/techsolve-1.jpg",
//       description:
//         "Complete website overhaul with improved UI/UX and conversion optimization.",
//       client: "TechSolve Inc.",
//       year: "2023",
//     },
//     {
//       id: 6,
//       title: "Green Harvest Packaging",
//       category: "design",
//       image: "/portfolio/green-harvest-1.jpg",
//       description:
//         "Sustainable packaging design with eco-friendly materials and modern aesthetics.",
//       client: "Green Harvest",
//       year: "2021",
//     },
//     {
//       id: 7,
//       title: "Metro Finance Annual Report",
//       category: "print",
//       image: "/portfolio/metro-finance-1.jpg",
//       description:
//         "Award-winning annual report design with custom infographics.",
//       client: "Metro Finance",
//       year: "2023",
//     },
//     {
//       id: 8,
//       title: "Sunrise Hotel Brand Identity",
//       category: "branding",
//       image: "/portfolio/sunrise-1.jpg",
//       description:
//         "Complete brand identity development for luxury hospitality chain.",
//       client: "Sunrise Hotels",
//       year: "2022",
//     },
//     {
//       id: 9,
//       title: "FreshFoods Market Campaign",
//       category: "marketing",
//       image: "/portfolio/freshfoods-1.jpg",
//       description:
//         "Integrated marketing campaign across digital and traditional channels.",
//       client: "FreshFoods Market",
//       year: "2023",
//     },
//     {
//       id: 10,
//       title: "GlobalTech Product Launch",
//       category: "marketing",
//       image: "/portfolio/globaltech-1.jpg",
//       description:
//         "Successful product launch strategy with multi-channel approach.",
//       client: "GlobalTech",
//       year: "2022",
//     },
//     {
//       id: 11,
//       title: "Artisan Coffee Packaging",
//       category: "design",
//       image: "/portfolio/artisan-1.jpg",
//       description: "Premium packaging design for specialty coffee brand.",
//       client: "Artisan Coffee Co.",
//       year: "2021",
//     },
//     {
//       id: 12,
//       title: "Nexus Gym Social Campaign",
//       category: "social",
//       image: "/portfolio/nexus-1.jpg",
//       description:
//         "Engagement-focused social media campaign for fitness brand.",
//       client: "Nexus Gym",
//       year: "2023",
//     },
//     {
//       id: 13,
//       title: "Heritage Tours Website",
//       category: "web",
//       image: "/portfolio/heritage-1.jpg",
//       description:
//         "Responsive website design with booking integration for tourism company.",
//       client: "Heritage Tours",
//       year: "2022",
//     },
//     {
//       id: 14,
//       title: "Cascade Apparel Catalog",
//       category: "print",
//       image: "/portfolio/cascade-1.jpg",
//       description: "Print and digital catalog design for fashion retailer.",
//       client: "Cascade Apparel",
//       year: "2021",
//     },
//     {
//       id: 15,
//       title: "EcoPower Brand Strategy",
//       category: "branding",
//       image: "/portfolio/ecopower-1.jpg",
//       description:
//         "Comprehensive brand strategy for renewable energy provider.",
//       client: "EcoPower Inc.",
//       year: "2023",
//     },
//   ];

//   // Filter categories
//   const categories = [
//     { id: "all", label: "All Work" },
//     { id: "branding", label: "Branding" },
//     { id: "digital", label: "Digital Marketing" },
//     { id: "web", label: "Web Design" },
//     { id: "design", label: "Graphic Design" },
//     { id: "social", label: "Social Media" },
//     { id: "print", label: "Print" },
//     { id: "marketing", label: "Marketing Campaigns" },
//   ];

//   // Filter and search logic
//   const filteredItems = portfolioItems.filter((item) => {
//     const matchesFilter =
//       activeFilter === "all" || item.category === activeFilter;
//     const matchesSearch =
//       item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.description.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesFilter && matchesSearch;
//   });

//   // Modal handling
//   const openModal = (item) => {
//     setSelectedImage(item);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = "auto";
//   };

//   // Intersection observer for animations
//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(sectionRef.current);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     observer.observe(sectionRef.current);

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   // Animation helper class function
//   const animateIn = (delay = 0) => {
//     return `transition-all duration-1000 ease-out ${
//       delay ? `delay-${delay}` : ""
//     } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;
//   };

//   return (
//     <main className="bg-black text-white min-h-screen pt-32 pb-24">
//       <div ref={sectionRef} className="container mx-auto px-4">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${animateIn()}`}>
//             Our <span className="text-cyan-400">Portfolio</span>
//           </h1>
//           <div
//             className={`w-24 h-1 bg-cyan-400 mx-auto mb-8 ${
//               isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
//             } transition-all duration-1000 ease-out delay-200`}
//           />
//           <p
//             className={`text-xl text-gray-300 max-w-2xl mx-auto ${animateIn(
//               300
//             )}`}
//           >
//             Explore our creative journey through the years — a showcase of the
//             brands we've transformed and the results we've delivered.
//           </p>
//         </div>

//         {/* Filter and Search Bar */}
//         <div className={`mb-12 ${animateIn(400)}`}>
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//             {/* Filter Dropdown (Mobile) */}
//             <div className="relative md:hidden w-full">
//               <button
//                 onClick={() => setFilterMenuOpen(!filterMenuOpen)}
//                 className="w-full flex items-center justify-between px-4 py-3 bg-[#101010] border border-gray-800 rounded-lg text-left"
//               >
//                 <span className="flex items-center">
//                   <Filter className="w-4 h-4 mr-2 text-cyan-400" />
//                   {categories.find((c) => c.id === activeFilter)?.label}
//                 </span>
//                 <ChevronDown
//                   className={`w-5 h-5 transition-transform ${
//                     filterMenuOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {filterMenuOpen && (
//                 <div className="absolute z-20 mt-2 w-full bg-[#0a0a0a] border border-gray-800 rounded-lg shadow-xl">
//                   {categories.map((category) => (
//                     <button
//                       key={category.id}
//                       onClick={() => {
//                         setActiveFilter(category.id);
//                         setFilterMenuOpen(false);
//                       }}
//                       className={`block w-full text-left px-4 py-3 hover:bg-gray-900 ${
//                         activeFilter === category.id
//                           ? "text-cyan-400"
//                           : "text-gray-300"
//                       }`}
//                     >
//                       {category.label}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Desktop Filter */}
//             <div className="hidden md:flex items-center space-x-6">
//               {categories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => setActiveFilter(category.id)}
//                   className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
//                     activeFilter === category.id
//                       ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
//                       : "text-gray-300"
//                   }`}
//                 >
//                   {category.label}
//                 </button>
//               ))}
//             </div>

//             {/* Search Bar */}
//             <div className="relative w-full md:w-64">
//               <input
//                 type="text"
//                 placeholder="Search projects..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 bg-[#101010] border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500 text-gray-200"
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//               {searchQuery && (
//                 <button
//                   onClick={() => setSearchQuery("")}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2"
//                 >
//                   <X className="w-4 h-4 text-gray-400 hover:text-gray-200" />
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Gallery Grid */}
//         <div
//           className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${animateIn(
//             500
//           )}`}
//         >
//           {filteredItems.map((item, index) => (
//             <div
//               key={item.id}
//               className="group bg-[#0a0a0a] rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-500/30 transition-all shadow-lg hover:shadow-cyan-500/10"
//             >
//               <div
//                 className="relative h-60 cursor-pointer overflow-hidden"
//                 onClick={() => openModal(item)}
//               >
//                 {/* Replace with actual image component */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <span className="text-white font-medium px-4 py-2 rounded-md bg-cyan-500/50 backdrop-blur-sm">
//                     View Project
//                   </span>
//                 </div>

//                 {/* Placeholder for image - replace with your actual image component */}
//                 <div
//                   className="w-full h-full bg-gray-800 bg-opacity-50"
//                   style={{
//                     backgroundImage: `url('/api/placeholder/600/400')`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 />
//               </div>

//               <div className="p-5">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-lg font-semibold text-white">
//                     {item.title}
//                   </h3>
//                   <span className="text-xs px-2 py-1 bg-[#1a1a1a] text-cyan-400 rounded-md">
//                     {item.year}
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-400 mb-3">{item.client}</p>
//                 <p className="text-sm text-gray-300 mb-4">{item.description}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-xs text-gray-400">
//                     {categories.find((c) => c.id === item.category)?.label}
//                   </span>
//                   <button
//                     onClick={() => openModal(item)}
//                     className="text-cyan-400 text-sm flex items-center hover:text-cyan-300 transition-colors"
//                   >
//                     Details
//                     <ExternalLink className="ml-1 w-3 h-3" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty state */}
//         {filteredItems.length === 0 && (
//           <div className="text-center py-20">
//             <p className="text-xl text-gray-400">
//               No projects match your search criteria.
//             </p>
//             <button
//               onClick={() => {
//                 setActiveFilter("all");
//                 setSearchQuery("");
//               }}
//               className="mt-4 px-4 py-2 text-sm bg-[#101010] border border-gray-700 rounded-md hover:bg-gray-800 transition-colors"
//             >
//               Clear filters
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Project Detail Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//           onClick={closeModal}
//         >
//           <div
//             className="relative bg-[#0a0a0a] max-w-4xl w-full rounded-lg overflow-hidden shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2 hover:bg-black transition-colors"
//               onClick={closeModal}
//             >
//               <X className="w-5 h-5 text-white" />
//             </button>

//             <div className="md:flex">
//               <div className="md:w-1/2 h-72 md:h-auto relative">
//                 {/* Replace with actual image component */}
//                 <div
//                   className="w-full h-full bg-gray-800"
//                   style={{
//                     backgroundImage: `url('/api/placeholder/800/600')`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 />
//               </div>

//               <div className="p-6 md:w-1/2">
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-2xl font-bold text-white">
//                     {selectedImage.title}
//                   </h3>
//                   <span className="text-sm px-2 py-1 bg-[#1a1a1a] text-cyan-400 rounded-md">
//                     {selectedImage.year}
//                   </span>
//                 </div>

//                 <div className="mb-4">
//                   <span className="text-gray-400 text-sm">Client</span>
//                   <p className="text-white font-medium">
//                     {selectedImage.client}
//                   </p>
//                 </div>

//                 <div className="mb-4">
//                   <span className="text-gray-400 text-sm">Category</span>
//                   <p className="text-white font-medium">
//                     {
//                       categories.find((c) => c.id === selectedImage.category)
//                         ?.label
//                     }
//                   </p>
//                 </div>

//                 <div className="mb-6">
//                   <span className="text-gray-400 text-sm">Project Details</span>
//                   <p className="text-gray-300">
//                     {selectedImage.description}
//                     {/* Extended description for modal view */}
//                     {` This project showcased our expertise in ${
//                       categories.find((c) => c.id === selectedImage.category)
//                         ?.label
//                     } while delivering measurable results for ${
//                       selectedImage.client
//                     }. Our strategic approach
//                     led to significant improvements in brand recognition and customer engagement.`}
//                   </p>
//                 </div>

//                 <div className="pt-4 border-t border-gray-800">
//                   <h4 className="text-white font-medium mb-2">Results</h4>
//                   <ul className="text-gray-300 text-sm space-y-1">
//                     <li>• Increased brand awareness by 45%</li>
//                     <li>• Improved conversion rate by 32%</li>
//                     <li>• Enhanced customer engagement across channels</li>
//                   </ul>
//                 </div>

//                 <div className="mt-6">
//                   <Link
//                     href="/contact"
//                     className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded-md transition-colors duration-300 text-sm"
//                   >
//                     Request Similar Project
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CTA Section */}
//       <section className="py-20 mt-24 bg-gradient-to-b from-[#030303] to-black">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Ready to Create Your{" "}
//               <span className="text-cyan-400">Success Story</span>?
//             </h2>
//             <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//               Let's collaborate on your next project and deliver results that
//               exceed expectations. Our team is ready to bring your vision to
//               life.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Link
//                 href="/contact"
//                 className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 px-8 rounded-md transition-colors duration-300"
//               >
//                 Start a Project
//               </Link>
//               <button
//                 onClick={openWhatsapp}
//                 className="inline-block bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-md transition-colors duration-300"
//               >
//                 Chat With Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default PortfolioPage;
export default function Page() {
  return <div>Portfolio</div>;
}
