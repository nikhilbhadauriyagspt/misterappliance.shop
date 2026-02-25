import React from 'react';
import { FiChevronRight, FiMail, FiSettings, FiCheckCircle, FiSearch } from 'react-icons/fi';
import { PiPhoneCallLight, PiMagnifyingGlassLight, PiWrenchLight, PiSealCheckLight } from 'react-icons/pi';
import { useBooking } from '../context/BookingContext';

const HowItWorksSection = () => {
  const { openBookingModal } = useBooking();
  
  const steps = [
    {
      id: "01",
      icon: <PiPhoneCallLight />,
      title: "Book your service",
      desc: "Schedule your repair online or email us. We'll find a time that works perfectly for your schedule."
    },
    {
      id: "02",
      icon: <PiMagnifyingGlassLight />,
      title: "Expert diagnosis",
      desc: "Our specialist arrives and performs a thorough check to find the exact cause of the issue."
    },
    {
      id: "03",
      icon: <PiWrenchLight />,
      title: "Precision repair",
      desc: "We fix the problem using genuine parts and professional tools, ensuring a long-lasting solution."
    },
    {
      id: "04",
      icon: <PiSealCheckLight />,
      title: "Final testing",
      desc: "We test the appliance rigorously to make sure everything is working perfectly before we leave."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Clean Header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 font-bold text-[10px] uppercase tracking-[0.2em] rounded-full mb-6">
            Our simple process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
            Four simple steps to get your <br/>
            appliance back in action.
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
            We've streamlined our process to ensure you get the fastest and most reliable repair service without any unnecessary complexity.
          </p>
        </div>

        {/* Minimalist Steps Flow */}
        <div className="relative">
          {/* Horizontal Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-slate-100 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group space-y-8">
                
                {/* Icon Circle */}
                <div className="relative">
                  <div className="w-24 h-24 bg-white border-2 border-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:border-amber-400 group-hover:text-amber-500 transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-amber-400/10">
                    <div className="text-4xl">{step.icon}</div>
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -left-1 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px] font-black group-hover:bg-amber-400 group-hover:text-black transition-colors">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Subtle Interactive Element */}
                <div className="w-10 h-1 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-amber-400 transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Bottom Action */}
        <div className="mt-24 pt-12 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-amber-400">
                 <FiMail size={20} />
              </div>
              <div>
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-0.5">Quick Assistance</p>
                 <p className="text-sm font-bold text-slate-900 italic">"We're just an email away for any emergency."</p>
              </div>
           </div>
           
           <button 
             onClick={() => openBookingModal()}
             className="w-full md:w-auto px-10 py-5 bg-amber-400 text-black rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 hover:text-white transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
           >
             Book your appointment now <FiChevronRight size={16} />
           </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
