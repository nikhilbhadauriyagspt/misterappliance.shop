import React from 'react';
import { servicesData } from '../data/services';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { PiWrenchLight, PiShieldCheckLight, PiClockLight } from 'react-icons/pi';

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 font-sans" id="services">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Clean & Light Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 font-bold text-[10px] uppercase tracking-[0.2em] rounded-full mb-6">
              Our service expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              We provide reliable repairs <br/>
              for your essential appliances.
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-slate-500 font-medium text-lg max-w-sm leading-relaxed">
              From kitchen gadgets to laundry systems, our experts handle it all with care and precision.
            </p>
          </div>
        </div>

        {/* Clean 3-Column Service Grid - Not Heavy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {servicesData.map((service, index) => (
            <Link 
              key={service.id}
              to={`/service/${service.slug}`}
              className="group bg-white rounded-[2rem] p-8 border border-slate-100 transition-all duration-500 hover:border-amber-400 hover:shadow-2xl hover:shadow-slate-200/50 flex flex-col h-full"
            >
              {/* Service Icon Box */}
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-500 mb-8 shadow-sm group-hover:shadow-amber-400/20">
                 <PiWrenchLight size={28} />
              </div>

              {/* Service Content */}
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors capitalize">
                  {service.title}
                </h3>
                <p className="text-[15px] text-slate-500 font-medium leading-relaxed line-clamp-2">
                  {service.shortDesc}
                </p>
                
                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                   <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <FiCheckCircle className="text-amber-500" /> Genuine Parts
                   </span>
                   <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <FiCheckCircle className="text-amber-500" /> Warranty
                   </span>
                </div>
              </div>

              {/* View More Link */}
              <div className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between text-slate-900 font-bold group-hover:text-amber-600 transition-all">
                 <span className="text-sm border-b-2 border-transparent group-hover:border-amber-400 transition-all pb-0.5">
                   View service details
                 </span>
                 <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Simple & Light Call to Action */}
        <div className="mt-20 p-10 md:p-16 bg-slate-900 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
           {/* Decorative Background Glow */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
           
           <div className="relative z-10 text-center md:text-left space-y-4">
              <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">
                 Need help with <br className="hidden md:block" /> a different appliance?
              </h3>
              <p className="text-slate-400 font-medium text-lg">
                 We fix almost any household device. Just ask us!
              </p>
           </div>
           
           <Link 
             to="/contact" 
             className="relative z-10 px-10 py-5 bg-amber-400 text-black font-black uppercase tracking-widest text-[12px] rounded-2xl hover:bg-white transition-all shadow-xl active:scale-95"
           >
             Message our team
           </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
