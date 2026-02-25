import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { useBooking } from '../context/BookingContext';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { PiWrenchLight, PiSealCheckLight, PiClockLight } from 'react-icons/pi';

const Services = () => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Our Services | Mister Appliance - Simple & Fast Repair</title>
        <meta name="description" content="View our full range of professional appliance repair services. We fix washing machines, fridges, ACs and more with honesty." />
        <link rel="canonical" href="https://misterappliance.shop/services" />
      </Helmet>

      {/* Clean & Light Hero Section */}
      <section className="relative pt-44 pb-32 bg-slate-50/50 overflow-hidden text-center">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[4px]">Full Directory</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tighter">
            Professional Repair Solutions <br/>
            For Your <span className="text-amber-500 underline decoration-slate-200 underline-offset-8">Every Need.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            From essential kitchen gadgets to complex laundry systems, we provide honest, fast, and reliable repair services for all your home appliances.
          </p>
        </div>
      </section>

      {/* Services Grid Section - Clean & Light Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {servicesData.map((service, index) => (
              <Link 
                to={`/service/${service.slug}`} 
                key={service.id} 
                className="group relative bg-white rounded-[2.5rem] overflow-hidden p-8 flex flex-col h-[480px] transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 border border-slate-100 hover:border-amber-400"
              >
                {/* Subtle Image Background - Reveal on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-1000 bg-black">
                  <img src={service.image} className="w-full h-full object-cover" alt="" />
                </div>

                <div className="relative z-10 flex-1">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-10 group-hover:bg-amber-400 group-hover:text-black transition-all duration-500 shadow-sm group-hover:shadow-amber-400/20">
                    <PiWrenchLight size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-[15px] font-medium leading-relaxed group-hover:text-slate-600 transition-colors mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <FiCheckCircle className="text-amber-500" /> Genuine Parts
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <FiCheckCircle className="text-amber-500" /> Warranty
                    </span>
                  </div>
                </div>

                <div className="relative z-10 pt-8 mt-auto flex items-center justify-between border-t border-slate-50">
                  <span className="text-[12px] font-bold text-slate-900 group-hover:text-amber-600 transition-all border-b-2 border-transparent group-hover:border-amber-400 pb-0.5">
                    View service details
                  </span>
                  <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-all">
                    <FiArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Call to Action */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 space-y-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Is Your Appliance Not <br />
                <span className="text-amber-400 italic">Working Right?</span>
              </h2>

              <div className="flex justify-center">
                <button
                  onClick={() => openBookingModal()}
                  className="group inline-flex items-center gap-4 px-12 py-5 bg-amber-400 text-black rounded-2xl font-black uppercase tracking-widest text-[12px] hover:bg-white transition-all duration-500 shadow-xl shadow-amber-400/20 active:scale-95"
                >
                  Schedule Your Repair Now <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[4px]">Emergency Repair Specialists</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
