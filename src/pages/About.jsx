import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiCheckCircle, FiPlay, FiTarget, FiHeart, FiShield } from 'react-icons/fi';
import { PiWrenchLight, PiShieldCheckLight, PiClockLight, PiHandHeartLight, PiUsersThreeLight, PiLightbulbLight } from 'react-icons/pi';
import { useBooking } from '../context/BookingContext';

const About = () => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>About Us | Mister Appliance - Our Mission & Team</title>
        <meta name="description" content="Learn more about Mister Appliance. We are a dedicated local team providing honest and professional home appliance repair services." />
      </Helmet>

      {/* Clean & Light Hero Section */}
      <section className="relative pt-44 pb-32 bg-slate-50/50 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[4px]">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tighter">
            We're on a mission to <br />
            make home repair <span className="text-amber-500 underline decoration-slate-200 underline-offset-8 italic">Honest.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Mister Appliance was founded on a simple belief: getting your home appliances fixed shouldn't be a source of stress. We're here to provide clarity, quality, and speed.
          </p>
        </div>
      </section>

      {/* Mission & Vision - Split Layout */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-50 rounded-[3rem] -z-10 transform -rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <img src="/banner/about.jpg" className="w-full h-[600px] object-cover" alt="Our Mission" />
                <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 shadow-xl">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-amber-400 flex items-center justify-center text-black">
                      <PiHandHeartLight size={32} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Local Promise</p>
                      <p className="text-lg font-bold text-slate-900 italic">"Trust in every repair."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tighter">
                  A small team with <br /> big values.
                </h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  As a locally-owned business, we understand the importance of a functional home. When your fridge stops cooling or your washer leaks, it disrupts your entire life. That's why we built Mister Appliance—to be the reliable neighbor you contact when things go wrong.
                </p>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  Our journey started with a small group of certified specialists who were tired of seeing homeowners overcharged for sub-par work. We decided to set a new standard.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <PiShieldCheckLight className="text-amber-500" />, title: "Quality First", text: "We never cut corners on parts or labor. If it's not perfect, it's not finished." },
                  { icon: <PiClockLight className="text-blue-500" />, title: "Time Matters", text: "We value your schedule. Same-day service is our goal for every request." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-[2rem] space-y-4 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                    <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deep Values Section - Bento Style */}
          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter">The pillars of our service.</h2>
              <p className="text-slate-500 text-lg">These aren't just words to us; they are the rules we live by every single day.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <PiUsersThreeLight />,
                  title: "Community Focused",
                  desc: "We live and work right here in your community. Every customer is a neighbor, and we treat you like one.",
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  icon: <PiLightbulbLight />,
                  title: "Diagnostic Clarity",
                  desc: "We don't guess. We use professional diagnostic tools to find the root cause and explain it to you simply.",
                  color: "bg-amber-50 text-amber-600"
                },
                {
                  icon: <PiWrenchLight />,
                  title: "Factory Standards",
                  desc: "Our repairs follow the exact specifications of the original manufacturer to ensure long-term reliability.",
                  color: "bg-emerald-50 text-emerald-600"
                }
              ].map((val, idx) => (
                <div key={idx} className="p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center space-y-6 hover:shadow-2xl hover:shadow-slate-100 transition-all group">
                  <div className={`w-20 h-20 rounded-3xl ${val.color} flex items-center justify-center text-4xl group-hover:rotate-6 transition-transform`}>
                    {val.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">{val.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different - Big Banner */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
              A commitment to <span className="text-amber-400 italic">Excellence</span> that <br className="hidden md:block" /> never wavers.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-amber-400 font-bold uppercase tracking-widest text-xs">
                  <FiTarget /> Our Vision
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  To become the most trusted home service provider in the region by delivering unmatched technical expertise and transparent customer communication.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-amber-400 font-bold uppercase tracking-widest text-xs">
                  <FiHeart /> Our Mission
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  To extend the lifecycle of your household investments through precision repairs and proactive maintenance, saving you money and reducing waste.
                </p>
              </div>
            </div>
            <div className="pt-10">
              <button
                onClick={() => openBookingModal()}
                className="px-12 py-6 bg-amber-400 text-black rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-2xl active:scale-95 flex items-center gap-4 mx-auto"
              >
                Schedule your repair <FiArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full"></div>
            <p className="text-2xl md:text-4xl font-bold text-slate-900 leading-snug italic">
              "We don't just want to fix your appliance; we want to earn your trust so you never have to worry about home repairs again."
            </p>
            <div>
              <p className="text-lg font-black text-slate-900">The Mister Appliance Team</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
