import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { FiClock, FiShield, FiZap, FiArrowRight, FiMail } from 'react-icons/fi';
import { PiWrenchDuotone, PiSealCheckDuotone } from 'react-icons/pi';
import { useBooking } from '../context/BookingContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    tag: "Certified Repair Studio",
    title: "PREMIUM REPAIR.",
    highlight: "ZERO STRESS.",
    desc: "We provide factory-certified repair solutions for all major home appliances with a 45-day peace-of-mind warranty.",
    image: "/banner/hero-1.jpg",
  },
  {
    id: 2,
    tag: "Cooling Experts",
    title: "SMART FIX FOR",
    highlight: "COOLING SYSTEMS.",
    desc: "From smart fridges to industrial cooling, our specialists restore peak performance using only genuine factory parts.",
    image: "/banner/hero-2.jpg",
  },
  {
    id: 3,
    tag: "Laundry Specialists",
    title: "MASTERING THE",
    highlight: "LAUNDRY CARE.",
    desc: "Fast, reliable, and guaranteed repairs for washing machines and dryers of all global luxury brands.",
    image: "/banner/hero-3.jpg",
  }
];

const Hero = () => {
  const { openBookingModal } = useBooking();

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950">
      
      <Swiper
        effect={'fade'}
        speed={1500}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full flex flex-col justify-center items-center text-center px-6">
              
              {/* Background Layers */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-950/30 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80 z-10"></div>
                <img 
                  src={slide.image} 
                  className="w-full h-full object-cover animate-ken-burns" 
                  alt="" 
                />
              </div>

              {/* Content Layer */}
              <div className="relative z-20 max-w-5xl mx-auto">
                <div className="hero-content">
                  
                  {/* Floating Tag */}
                  <div className="reveal-item inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-8">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span className="text-white text-[11px] font-black uppercase tracking-[0.3em]">{slide.tag}</span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="reveal-item delay-100 text-3xl md:text-5xl lg:text-6xl xl:text-[5.5rem] font-extrabold text-white leading-[0.9] tracking-tighter uppercase italic mb-8">
                    {slide.title}<br/>
                    <span className="text-transparent stroke-text">{slide.highlight}</span>
                  </h1>

                  {/* Description */}
                  <p className="reveal-item delay-200 text-slate-300 text-base md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
                    {slide.desc}
                  </p>

                  {/* Actions */}
                  <div className="reveal-item delay-300 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button 
                      onClick={() => openBookingModal()}
                      className="px-12 py-5 bg-amber-400 text-black font-black uppercase tracking-widest text-[13px] rounded-full hover:bg-white transition-all shadow-2xl hover:scale-105 active:scale-95"
                    >
                      Book Repair Now
                    </button>
                    
                    <a href="mailto:info@misterappliance.shop" className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-[12px] group">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all">
                        <FiMail className="text-lg" />
                      </div>
                      <span className="group-hover:text-amber-400 transition-colors">info@misterappliance.shop</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Bar (Desktop Only) */}
              <div className="absolute bottom-16 left-0 w-full hidden lg:block z-30">
                <div className="container mx-auto px-10">
                  <div className="grid grid-cols-4 gap-6">
                    {[
                      { icon: <FiZap />, title: "Same-Day Fix", desc: "Diagnostic in 2hrs" },
                      { icon: <FiShield />, title: "Factory Spares", desc: "Genuine Parts Only" },
                      { icon: <PiSealCheckDuotone />, title: "45-Day Warranty", desc: "Certified Repairs" },
                      { icon: <FiClock />, title: "24/7 Dispatch", desc: "Emergency Support" }
                    ].map((item, i) => (
                      <div key={i} className="reveal-item bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex items-center gap-4 text-left transition-all hover:bg-white/10 hover:-translate-y-2 group" style={{ transitionDelay: `${500 + (i * 100)}ms` }}>
                        <div className="text-amber-400 text-3xl group-hover:scale-110 transition-transform">{item.icon}</div>
                        <div>
                          <h4 className="text-white font-black text-xs uppercase tracking-widest mb-1">{item.title}</h4>
                          <p className="text-slate-500 text-[9px] font-bold uppercase tracking-wider leading-none">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Container */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 md:bottom-32 lg:bottom-12 z-40">
        <div className="hero-pagination flex gap-2"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .animate-ken-burns { animation: ken-burns 20s linear infinite alternate; }
        
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
          color: transparent;
        }
        
        /* Initial state of content */
        .reveal-item {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Active state when swiper slide is active */
        .swiper-slide-active .reveal-item {
          opacity: 1;
          transform: translateY(0);
        }
        
        .delay-100 { transition-delay: 150ms; }
        .delay-200 { transition-delay: 300ms; }
        .delay-300 { transition-delay: 450ms; }
        
        .hero-pagination .swiper-pagination-bullet {
          width: 30px;
          height: 4px;
          background: rgba(255,255,255,0.2) !important;
          border-radius: 2px !important;
          opacity: 1 !important;
          transition: all 0.5s ease !important;
          cursor: pointer;
        }
        .hero-pagination .swiper-pagination-bullet-active {
          background: #fbbf24 !important;
          width: 60px;
        }
      `}} />
    </section>
  );
};

export default Hero;
