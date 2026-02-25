import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiArrowLeft, FiPlus, FiCheckCircle } from 'react-icons/fi';
import { PiWrenchLight, PiShieldCheckLight, PiClockLight, PiThermometerLight, PiGearLight, PiLightningLight, PiFan, PiWind } from 'react-icons/pi';
import { useBooking } from '../../context/BookingContext';

const KitchenChimneyRepair = () => {
  const { openBookingModal } = useBooking();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { title: "Suction Fix", desc: "Repairing or replacing motors to restore powerful smoke extraction.", icon: <PiWind /> },
    { title: "Deep Clean", desc: "Professional baffle and charcoal filter cleaning for better air flow.", icon: <PiFan /> },
    { title: "PCB Repair", desc: "Expert fix for touch controls and digital sensor issues.", icon: <PiLightningLight /> },
    { title: "Light Fix", desc: "Repairing or replacing LED lamps and wiring for better visibility.", icon: <PiShieldCheckLight /> }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Kitchen Chimney Repair | Fast & Honest Service | Mister Appliance</title>
        <meta name="description" content="Get your kitchen chimney fixed today. We repair all auto-clean, baffle filter and island chimney brands with original parts and honesty." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 bg-slate-50/50 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-amber-50 text-amber-600 text-[10px] font-bold uppercase tracking-[3px] hover:bg-amber-100 transition-all shadow-sm">
            <FiArrowLeft className="text-amber-500" /> Back to All Services
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tighter">
            Kitchen Chimney <span className="text-amber-500 underline decoration-slate-200 underline-offset-8 italic">Repair.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            From suction issues to motor failure, we provide quick and honest repair for all chimney types at your home.
          </p>
        </div>
      </section>

      {/* Main Detail Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-50 rounded-[3rem] -z-10 transform -rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <img src="/service-12.jpg" className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105" alt="Chimney Repair" />
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 text-slate-400 rounded-full mb-4">
                   <span className="text-[10px] font-bold uppercase tracking-widest">Expert Care</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tighter">
                  Fresh Air for <br/>
                  <span className="text-amber-500 italic">Every Meal.</span>
                </h2>
              </div>
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                We handle motor issues, filter clogs, and control errors with ease. We only use original factory parts to make sure your chimney works perfectly for a long time.
              </p>
              <div className="grid gap-5">
                {["Same-day visits for urgent repairs", "Original parts with 100% guarantee", "Fair and honest pricing always", "Friendly workers you can trust"].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group/list">
                    <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0 group-hover/list:bg-amber-400 group-hover/list:text-black transition-all">
                      <FiCheckCircle size={18} strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-bold text-base">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-8">
                <button onClick={() => openBookingModal('Kitchen Chimney')} className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 px-12 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-amber-400 hover:text-black transition-all shadow-xl active:scale-95">
                  Book Repair Now <FiPlus size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 font-bold text-[10px] uppercase tracking-[0.2em] rounded-full">Why we're better</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Chimney specialists.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:border-amber-400 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
                <div className="w-16 h-16 rounded-3xl bg-slate-50 text-slate-400 flex items-center justify-center text-3xl mb-8 group-hover:bg-amber-400 group-hover:text-black transition-all duration-500 shadow-sm">{v.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-amber-600 transition-colors">{v.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
            <div className="relative z-10 space-y-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">Is Your Chimney Choked? <br /><span className="text-amber-400 italic">Let Us Fix It Fast.</span></h2>
              <div className="flex justify-center relative z-10">
                <button onClick={() => openBookingModal('Kitchen Chimney')} className="group inline-flex items-center gap-4 px-12 py-5 bg-amber-400 text-black rounded-2xl font-black uppercase tracking-widest text-[12px] hover:bg-white transition-all duration-500 shadow-xl shadow-amber-400/20 active:scale-95">Schedule Repair Now <FiArrowLeft className="group-hover:-translate-x-2 transition-transform rotate-180" /></button>
              </div>
              <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[4px]">Expert Local Repair Service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitchenChimneyRepair;
