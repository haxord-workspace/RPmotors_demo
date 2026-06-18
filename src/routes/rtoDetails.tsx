import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { rtoOffices, RtoOffice } from "@/data/rtoOffices";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  Compass,
  FileCheck,
  CreditCard,
  Users,
  FolderOpen,
  Car,
  ShieldAlert,
  Award,
} from "lucide-react";

export function RtoDetails() {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const [office, setOffice] = useState<RtoOffice | null>(null);

  // Find office based on URL parameter
  useEffect(() => {
    if (code) {
      const foundOffice = rtoOffices.find((o) => o.code.toLowerCase() === code.toLowerCase());
      setOffice(foundOffice || null);
    }
    window.scrollTo(0, 0);
  }, [code]);

  if (!office) {
    return (
      <div className="bg-[#000000] text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-32 pb-20 flex flex-col items-center justify-center">
          <div className="bg-[#151822] rounded-3xl p-12 text-center max-w-md mx-auto border border-white/5 shadow-xl">
            <ShieldAlert className="w-16 h-16 text-[#E53935] mx-auto mb-6" />
            <h2 className="font-display text-2xl font-bold mb-4">RTO Office Not Found</h2>
            <p className="text-white/60 mb-8 text-sm">
              The RTO office code you are trying to view does not exist in our directory.
            </p>
            <Link
              to="/rto"
              className="inline-flex items-center gap-2 rounded-full bg-[#E53935] hover:bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors"
            >
              Back to Directory
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Available RTO Services to list
  const services = [
    {
      title: "Vehicle Registration",
      desc: "New vehicle registration, permanent registration number issuance.",
      icon: Car,
    },
    {
      title: "Driving Licence",
      desc: "Learners license, permanent DL issuance, renewal and duplicate DL.",
      icon: Award,
    },
    {
      title: "Ownership Transfer",
      desc: "Transfer of vehicle ownership from seller to buyer.",
      icon: Users,
    },
    {
      title: "No Objection Certificate",
      desc: "NOC issuance for interstate vehicle transfer or sales.",
      icon: FolderOpen,
    },
    {
      title: "Permit Services",
      desc: "Issuance of national permits, state permits, and tourist permits.",
      icon: FileCheck,
    },
    {
      title: "Road Tax Services",
      desc: "Payment of life-time tax, annual road tax, and green tax.",
      icon: CreditCard,
    },
    {
      title: "Hypothecation Services",
      desc: "Addition, continuation, or termination of loan HP details.",
      icon: Compass,
    },
  ];

  return (
    <div className="bg-[#000000] text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Back Navigation */}
          <button
            onClick={() => navigate("/rto")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
            to Directory
          </button>

          {/* Page Banner Title */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <span className="px-3 py-1 rounded-full bg-[#E53935]/15 text-[#E53935] text-xs font-semibold uppercase tracking-wider border border-[#E53935]/30">
                {office.code}
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-extrabold text-white mt-3">
                {office.office}
              </h1>
              <p className="text-white/60 text-sm mt-1.5 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E53935]" /> {office.district} District, Kerala
                State
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-4 md:mt-0">
              <a
                href={`tel:${office.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition-colors text-sm shadow-lg shadow-red-900/20 w-full sm:w-auto text-center cursor-pointer"
              >
                <Phone className="w-4 h-4" /> Call Office
              </a>
              <a
                href={office.location}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#151822] hover:bg-white/5 text-white/90 border border-white/10 font-semibold py-3 px-6 rounded-full transition-all text-sm w-full sm:w-auto text-center cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#E53935]" /> Directions
              </a>
            </div>
          </div>

          {/* Details Columns */}
          <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
            {/* Left/Middle Column - Office & Contact Details */}
            <div className="md:col-span-2 flex flex-col gap-8">
              {/* Office Details Card */}
              <div className="bg-[#151822] border border-white/5 rounded-3xl p-6 md:p-8 shadow-md">
                <h2 className="font-display text-xl font-bold mb-6 text-white border-b border-white/5 pb-3">
                  Office Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider font-semibold">
                      RTO Code
                    </div>
                    <div className="text-white font-semibold text-base mt-1">{office.code}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider font-semibold">
                      Office Name
                    </div>
                    <div className="text-white font-semibold text-base mt-1">{office.office}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider font-semibold">
                      District
                    </div>
                    <div className="text-white font-semibold text-base mt-1">{office.district}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider font-semibold">
                      State
                    </div>
                    <div className="text-white font-semibold text-base mt-1">Kerala</div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="text-white/40 text-xs uppercase tracking-wider font-semibold">
                      Office Address
                    </div>
                    <div className="text-white font-semibold leading-relaxed mt-1">
                      {office.address}
                    </div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider font-semibold">
                      Pincode
                    </div>
                    <div className="text-white font-semibold text-base mt-1">{office.pincode}</div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-[#151822] border border-white/5 rounded-3xl p-6 md:p-8 shadow-md">
                <h2 className="font-display text-xl font-bold mb-6 text-white border-b border-white/5 pb-3">
                  Contact Information
                </h2>
                <div className="flex flex-col gap-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#E53935]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider font-semibold">
                        Phone Number
                      </div>
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, "")}`}
                        className="text-white font-semibold hover:text-[#E53935] transition-colors mt-1 block"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#E53935]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider font-semibold">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-white font-semibold hover:text-[#E53935] transition-colors mt-1 block"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#E53935]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider font-semibold">
                        Working Hours
                      </div>
                      <div className="text-white font-semibold mt-1">
                        {office.workingHours} (Mon - Sat)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Map Section */}
            <div className="bg-[#151822] border border-white/5 rounded-3xl p-6 md:p-8 shadow-md flex flex-col gap-6 h-full justify-between">
              <div>
                <h2 className="font-display text-xl font-bold mb-4 text-white">Office Location</h2>
                <p className="text-white/60 text-xs leading-relaxed mb-4">
                  Find this transport office on the map or query directions directly to it.
                </p>
                {/* Embedded Maps Iframe */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black">
                  <iframe
                    title={`${office.office} Map`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(office.office + ", " + office.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  ></iframe>
                </div>
              </div>

              <a
                href={office.location}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-red-600 hover:text-white py-3.5 rounded-full font-semibold transition-all text-sm shadow-md"
              >
                <Compass className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </div>

          {/* Services Offered Section */}
          <div className="bg-[#151822] border border-white/5 rounded-3xl p-6 md:p-8 shadow-md">
            <h2 className="font-display text-2xl font-bold mb-6 text-white text-center md:text-left">
              Services Available
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, idx) => {
                const IconComponent = svc.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-[#E53935]/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E53935]/10 flex items-center justify-center text-[#E53935] mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-white text-sm mb-1.5">{svc.title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed">{svc.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
