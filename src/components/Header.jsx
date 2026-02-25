import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FiMenu, 
  FiX, 
  FiSearch, 
  FiMail, 
  FiGrid, 
  FiZap, 
  FiShield, 
  FiChevronRight,
  FiLayout,
  FiPlus
} from "react-icons/fi";
import { 
  PiWrenchDuotone, 
  PiClockDuotone, 
  PiEnvelopeDuotone, 
  PiCalendarPlusDuotone,
  PiHouseLineDuotone,
  PiInfoDuotone,
  PiNewspaperClippingDuotone,
  PiChatCenteredTextDuotone
} from "react-icons/pi";
import { useBooking } from "../context/BookingContext";
import { servicesData } from "../data/services.js";

const Header = () => {
  const { openBookingModal } = useBooking();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [location, mobileMenuOpen]);

  const navItems = [
    { name: "Home", path: "/", icon: <PiHouseLineDuotone /> },
    { name: "About", path: "/about", icon: <PiInfoDuotone /> },
    { name: "Services", path: "/services", hasMega: true, icon: <FiGrid /> },
    { name: "Journal", path: "/blog", icon: <PiNewspaperClippingDuotone /> },
    { name: "Contact", path: "/contact", icon: <PiChatCenteredTextDuotone /> },
  ];

  return (
    <div className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 pointer-events-none ${scrolled ? 'pt-0 px-0' : 'pt-4 md:pt-6 px-4 md:px-10'}`}>
      <div className={`mx-auto pointer-events-auto transition-all duration-500 ${scrolled ? 'max-w-full' : 'max-w-[1400px]'}`}>
        
        {/* The Floating Bento Island */}
        <header 
          className={`flex items-center justify-between transition-all duration-500 border ${
            scrolled 
              ? "bg-slate-900/95 backdrop-blur-2xl border-slate-800 shadow-xl px-6 py-3 rounded-none" 
              : "bg-white/70 backdrop-blur-md border-slate-200/50 shadow-2xl shadow-slate-200/20 px-5 py-3 md:px-8 md:py-4 rounded-[2rem] md:rounded-[3rem]"
          }`}
        >
          {/* Brand - Creative Layout */}
          <Link to="/" className="flex items-center gap-2 group relative">
            <img
              src="/logo/logo.png"
              alt="Mister Appliance"
              className={`h-10 md:h-12 lg:h-14 object-contain transition-all duration-500 ${scrolled ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Nav - Minimal Bento Feel */}
          <nav className="hidden lg:flex items-center gap-1 bg-transparent">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group py-2"
                onMouseEnter={() => item.hasMega && setServicesOpen(true)}
                onMouseLeave={() => item.hasMega && setServicesOpen(false)}
              >
                <Link
                  to={item.path}
                  className={`px-5 py-2.5 rounded-2xl text-[14px] font-bold transition-all duration-300 flex items-center gap-2 ${
                    location.pathname === item.path 
                      ? (scrolled ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20" : "bg-slate-900 text-white") 
                      : (scrolled ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100")
                  }`}
                >
                  <span className="text-lg opacity-70 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                  {item.name}
                </Link>

                {/* Modern Grid Dropdown */}
                {item.hasMega && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[650px] transition-all duration-300 transform origin-top ${servicesOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-4 scale-95'}`}>
                    <div className="bg-white rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.25)] border border-slate-100 overflow-hidden flex h-[380px]">
                      {/* Left Promo Area */}
                      <div className="w-1/3 bg-slate-950 p-10 flex flex-col justify-between text-white relative">
                        <div>
                          <FiZap className="text-amber-400 text-3xl mb-6" />
                          <h4 className="text-2xl font-black leading-tight mb-4">Fastest<br/>Repairs.</h4>
                          <p className="text-slate-400 text-xs leading-relaxed">Certified specialists ready to fix any appliance in 24 hours.</p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-400">
                                                         <FiShield /> 45-Day Warranty                          </div>
                        </div>
                        <div className="absolute -bottom-8 -right-8 opacity-10">
                          <FiLayout size={180} />
                        </div>
                      </div>
                      {/* Services Grid */}
                      <div className="w-2/3 p-10 grid grid-cols-2 gap-x-6 gap-y-1 bg-white items-center">
                        {servicesData.slice(0, 10).map((s) => (
                          <Link 
                            key={s.id} 
                            to={`/service/${s.slug}`}
                            className="group/item py-2 flex items-center justify-between border-b border-slate-50 hover:border-amber-400 transition-all"
                          >
                            <span className="text-[13px] font-bold text-slate-600 group-hover/item:text-slate-950">{s.title}</span>
                            <FiPlus className="text-slate-200 group-hover/item:text-amber-500 transition-all rotate-0 group-hover/item:rotate-90" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Hub - High Contrast */}
          <div className="hidden lg:flex items-center gap-4">
            <div className={`flex items-center gap-3 px-5 py-2.5 rounded-2xl border ${scrolled ? 'border-white/10 bg-white/5 text-white' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
              <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-black">
                <FiMail size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Emergency</span>
                <a href="mailto:info@misterappliance.shop" className="text-[13px] font-black">info@misterappliance.shop</a>
              </div>
            </div>
            <button 
              onClick={() => openBookingModal()}
              className={`px-8 py-3 rounded-2xl font-black text-[12px] uppercase tracking-widest transition-all duration-300 active:scale-95 ${
                scrolled 
                  ? "bg-amber-400 text-black hover:bg-white shadow-lg shadow-amber-400/20" 
                  : "bg-slate-900 text-white hover:bg-amber-400 hover:text-black shadow-xl shadow-slate-900/10"
              }`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
              scrolled ? 'bg-amber-400 text-black' : 'bg-slate-900 text-white shadow-lg'
            }`}
          >
            <FiMenu size={24} />
          </button>
        </header>
      </div>

      {/* Modern Sidebar (Mobile) - Different Entry Animation */}
      <div className={`fixed inset-0 z-[500] lg:hidden transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute top-4 bottom-4 right-4 w-[90%] max-w-sm bg-white rounded-[2.5rem] shadow-2xl transition-all duration-500 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full opacity-0 scale-95'}`}>
          <div className="flex flex-col h-full p-8">
            <div className="flex items-center justify-between mb-12">
              <img src="/logo/logo.png" alt="Logo" className="h-10" />
              <button onClick={() => setMobileMenuOpen(false)} className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center">
                <FiX size={24} />
              </button>
            </div>

            <nav className="flex-1 space-y-3 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={`mob-${item.name}`}
                  to={item.path}
                  className={`group flex items-center justify-between p-5 rounded-3xl transition-all border ${location.pathname === item.path ? 'bg-amber-400 border-transparent text-black' : 'bg-slate-50 border-slate-100 text-slate-600'}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl opacity-70">{item.icon}</span>
                    <span className="text-xl font-black">{item.name}</span>
                  </div>
                  <FiChevronRight className={`transition-transform duration-300 ${location.pathname === item.path ? 'translate-x-2' : ''}`} />
                </Link>
              ))}
            </nav>

            <div className="mt-8 space-y-4">
              <div className="p-6 bg-slate-950 rounded-[2rem] text-white flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-400 mb-1">Emergency Service</p>
                  <a href="mailto:info@misterappliance.shop" className="text-xl font-black tracking-tighter">info@misterappliance.shop</a>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center text-black">
                  <FiMail size={20} />
                </div>
              </div>
              <button 
                onClick={() => { setMobileMenuOpen(false); openBookingModal(); }}
                className="w-full bg-amber-400 text-black py-6 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:shadow-2xl hover:shadow-amber-400/20 active:scale-95 transition-all"
              >
                Schedule Repair
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
