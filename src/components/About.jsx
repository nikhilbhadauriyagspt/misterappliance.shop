import React from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { PiWrenchLight, PiShieldCheckLight, PiClockLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-20 lg:py-24 bg-white font-sans" id="about">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Simple Two-Column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Visual Side - Clean and Simple */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-[2rem]">
               <img
                 src="/banner/about.jpg"
                 className="w-full h-auto object-cover"
                 alt="Our Service Specialist"
               />
            </div>
            {/* Subtle Overlay Badge */}
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white px-8 py-6 rounded-3xl hidden md:block shadow-xl">
               <p className="text-3xl font-bold text-amber-400 mb-1 leading-none italic">Local</p>
               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Trusted Experts</p>
            </div>
          </div>

          {/* Text Side - Highly Readable & Light */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 font-bold text-[10px] uppercase tracking-[0.2em] rounded-full">
                A little bit about us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                we're building a simpler way <br/>
                to fix your home appliances.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                fixing things shouldn't be a headache. we started our small local shop to provide honest, quality repairs with a focus on your convenience and long-term results.
              </p>
            </div>

            {/* Light Feature List - No Boxes */}
            <div className="space-y-8">
              {[
                { 
                  icon: <PiWrenchLight size={32} className="text-amber-500" />, 
                  title: "honest diagnostics", 
                  text: "we tell you exactly what's wrong and what it will cost before we start. no surprises." 
                },
                { 
                  icon: <PiShieldCheckLight size={32} className="text-amber-500" />, 
                  title: "guaranteed fixes", 
                  text: "every repair is backed by our personal 45-day warranty. we stand behind our work." 
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 pt-1">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Simple CTA */}
            <div className="pt-4">
              <Link
                to="/about"
                className="group flex items-center gap-4 text-slate-900 font-bold hover:text-amber-600 transition-colors"
              >
                <span className="text-lg border-b-2 border-slate-100 group-hover:border-amber-400 transition-all pb-1">
                  Read our full story
                </span>
                <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
