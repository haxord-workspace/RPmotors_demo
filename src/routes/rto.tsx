import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { rtoOffices, RtoOffice } from "@/data/rtoOffices";
import { ArrowLeft, Search, MapPin, Phone, Eye, Map } from "lucide-react";

export function RtoDirectory() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOffices, setFilteredOffices] = useState<RtoOffice[]>(rtoOffices);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter RTOs based on search query
  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setFilteredOffices(rtoOffices);
      return;
    }

    // Strip hyphens for flexible RTO code search (e.g. KL08 matches KL-08)
    const queryClean = query.replace(/[^a-z0-9]/g, "");

    const filtered = rtoOffices.filter((office) => {
      const codeClean = office.code.toLowerCase().replace(/[^a-z0-9]/g, "");
      const matchesCode =
        codeClean.includes(queryClean) || office.code.toLowerCase().includes(query);
      const matchesOffice = office.office.toLowerCase().includes(query);
      const matchesDistrict = office.district.toLowerCase().includes(query);

      return matchesCode || matchesOffice || matchesDistrict;
    });

    setFilteredOffices(filtered);
  }, [searchQuery]);

  return (
    <div className="bg-[#000000] text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate("/")}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
              aria-label="Back to home"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="font-display text-3xl font-bold">RTO Directory</h1>
          </div>

          {/* Search Bar */}
          <div className="relative mb-10">
            <input
              type="text"
              placeholder="Enter RTO code or location (e.g. KL-08, Thrissur)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#151822] text-white pl-14 pr-6 py-4 rounded-full border border-white/10 focus:border-[#E53935] focus:outline-none text-base transition-colors placeholder:text-white/40 shadow-inner"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-white/40" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all"
              >
                Clear
              </button>
            )}
          </div>

          {/* RTO List Title */}
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white/80">
              {searchQuery ? "Search Results" : "All RTO's"}
            </h2>
            <div className="text-xs text-white/50 bg-[#151822] px-3 py-1.5 rounded-full border border-white/5">
              Found: {filteredOffices.length}
            </div>
          </div>

          {/* Empty Search State */}
          {filteredOffices.length === 0 && (
            <div className="bg-[#151822] rounded-3xl p-12 text-center border border-white/5 animate-fade-up">
              <Map className="w-16 h-16 text-[#E53935] mx-auto mb-6 opacity-80" />
              <h3 className="font-display text-xl font-bold mb-2">No RTO Offices Found</h3>
              <p className="text-white/60 text-sm max-w-md mx-auto mb-6">
                We couldn't find any results matching "{searchQuery}". Try searching for another RTO
                code (e.g., KL-08, KL11) or district name (e.g., Kozhikode).
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="rounded-full bg-[#E53935] text-white px-6 py-2.5 text-sm font-semibold hover:bg-red-600 transition-colors shadow-lg"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffices.map((office) => (
              <article
                key={office.code}
                className="bg-[#151822] border border-white/5 hover:border-[#E53935]/30 rounded-[12px] p-5 flex flex-col justify-between transition-all duration-300 shadow-md hover:-translate-y-1"
              >
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E53935]/15 text-[#E53935] text-xs font-semibold uppercase tracking-wider border border-[#E53935]/30">
                    {office.code}
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mt-2.5 line-clamp-1">
                    {office.office.replace(" RTO", "").replace(" ARTO", "")}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/60 text-xs mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-white/40" />
                    <span>District: {office.district}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={office.location}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 text-[11px] text-white/70 hover:text-white transition-colors py-1.5 rounded-full hover:bg-white/5 border border-white/10 bg-white/5 cursor-pointer"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#E53935]" />
                      <span>Location</span>
                    </a>

                    <a
                      href={`tel:${office.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center justify-center gap-1.5 text-[11px] text-white/70 hover:text-white transition-colors py-1.5 rounded-full hover:bg-white/5 border border-white/10 bg-white/5 cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#E53935]" />
                      <span>Call</span>
                    </a>
                  </div>

                  <Link
                    to={`/rto/${office.code}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs bg-[#E53935] hover:bg-red-600 text-white font-semibold py-2 rounded-full transition-colors shadow-md cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
