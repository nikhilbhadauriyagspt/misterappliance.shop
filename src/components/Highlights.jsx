import React from 'react';
import { FiShield, FiClock, FiCheck, FiArrowRight, FiSmile, FiPackage } from 'react-icons/fi';
import { PiWrenchLight, PiShieldCheckLight, PiClockLight, PiUserCheckLight } from 'react-icons/pi';

const Highlights = () => {
  const values = [
    {
      icon: <PiClockLight className="text-amber-500" />,
      title: "On-time arrival",
      desc: "Our specialists arrive as scheduled. We value your time and aim for same-day service whenever possible.",
      color: "bg-amber-50"
    },
    {
      icon: <PiShieldCheckLight className="text-blue-500" />,
      title: "45-day warranty",
      desc: "We stand by our work. Every repair comes with a simple 45-day guarantee on parts and labor.",
      color: "bg-blue-50"
    },
    {
      icon: <PiWrenchLight className="text-emerald-500" />,
      title: "Genuine parts",
      desc: "We use only manufacturer-approved spare parts to ensure your appliance lasts longer and runs better.",
      color: "bg-emerald-50"
    },
    {
      icon: <PiUserCheckLight className="text-purple-500" />,
      title: "Certified experts",
      desc: "Our small team of skilled professionals is background-checked and factory-trained for all major brands.",
      color: "bg-purple-50"
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden font-sans">
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Simplified Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-md mb-6">
            Our promise to you
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
            Simple, reliable repair services <br/>
            for your everyday home appliances.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We focus on providing honest advice and quality repairs without the hidden fees or complex processes.
          </p>
        </div>

        {/* Clean Value Grid - Not Heavy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {values.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-start transition-all duration-300"
            >
              {/* Soft Icon Box */}
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>

              {/* Minimalist Content */}
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Simple Divider */}
              <div className="mt-8 w-12 h-[2px] bg-slate-100 group-hover:w-full group-hover:bg-slate-200 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Authentic Bottom Note */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                 {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Team Member" />
                    </div>
                 ))}
              </div>
              <p className="text-sm text-slate-600 font-medium italic">
                "We're a growing team of local repair specialists."
              </p>
           </div>
           
           <div className="flex items-center gap-2 text-amber-600 font-bold text-sm group cursor-pointer">
              <span>See how we work</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
           </div>
        </div>

      </div>

    </section>
  );
};

export default Highlights;
