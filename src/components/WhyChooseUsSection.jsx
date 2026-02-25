import React from 'react';
import { FiArrowRight, FiCheck, FiUsers } from 'react-icons/fi';
import { PiShieldCheckLight, PiClockLight, PiCurrencyDollarLight, PiWrenchLight } from 'react-icons/pi';
import { useBooking } from '../context/BookingContext';

const WhyChooseUsSection = () => {
  const { openBookingModal } = useBooking();

  const benefits = [
    {
      icon: <PiShieldCheckLight className="text-amber-500" />,
      title: "45-day warranty",
      desc: "Every repair we perform is backed by our personal 45-day parts and labor guarantee. We stand behind our work.",
      accent: "bg-amber-50"
    },
    {
      icon: <PiClockLight className="text-blue-500" />,
      title: "Same-day service",
      desc: "We prioritize your comfort. Our team works hard to provide professional repair services on the same day you reach out.",
      accent: "bg-blue-50"
    },
    {
      icon: <PiCurrencyDollarLight className="text-emerald-500" />,
      title: "Honest pricing",
      desc: "No hidden fees or unexpected costs. We provide clear, upfront quotes before any work begins on your appliance.",
      accent: "bg-emerald-50"
    },
    {
      icon: <PiWrenchLight className="text-purple-500" />,
      title: "Certified experts",
      desc: "Our specialists are background-checked and factory-trained, ensuring your essential home devices are in safe hands.",
      accent: "bg-purple-50"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Clean Centered Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
          <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 font-bold text-[10px] uppercase tracking-[0.2em] rounded-full">
            Why choose our team
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            We're building a simpler way to <br/>
            handle your home appliance repairs.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mx-auto max-w-2xl">
            We focus on providing honest advice and quality repairs without the hidden fees or complex processes of larger companies.
          </p>
        </div>

        {/* Clean 4-Column Benefit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group space-y-8">
              {/* Soft Icon Circle */}
              <div className={`w-16 h-16 ${benefit.accent} rounded-3xl flex items-center justify-center text-4xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                {benefit.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-slate-900">
                  {benefit.title}
                </h4>
                <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              {/* Subtle Progress Indicator */}
              <div className="w-10 h-[2px] bg-slate-100 rounded-full group-hover:w-full group-hover:bg-amber-400 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Authentic Bottom Trust Bar */}
        <div className="mt-24 p-8 md:p-12 bg-slate-50 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm">
                 <FiUsers size={24} />
              </div>
              <div>
                 <p className="text-lg font-bold text-slate-900 leading-tight">We're a growing local team.</p>
                 <p className="text-slate-500 text-sm font-medium">Supporting homeowners with honest, quality fixes.</p>
              </div>
           </div>
           
           <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest">
                 <FiCheck className="text-lg" /> Satisfaction Guaranteed
              </div>
              <button 
                onClick={() => openBookingModal()}
                className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-sm tracking-wide hover:bg-amber-400 hover:text-black transition-all active:scale-95 flex items-center gap-3"
              >
                Schedule repair now <FiArrowRight />
              </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
