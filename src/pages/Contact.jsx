import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiSend, FiMail, FiMapPin, FiPhone, FiCheckCircle } from 'react-icons/fi';
import { PiEnvelopeLight, PiMapPinLight, PiClockLight, PiPhoneCallLight } from 'react-icons/pi';
import { API_ENDPOINTS } from '../config/api';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.status === 'success') {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitted(true); // Fallback
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Contact Us | Mister Appliance - Fast & Reliable Support</title>
        <meta name="description" content="Have a broken appliance? Get in touch with our team today. We provide quick and honest support for all your home repair needs." />
      </Helmet>

      {/* Clean & Light Hero Section */}
      <section className="relative pt-44 pb-32 bg-slate-50/50 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[4px]">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tighter">
            We're here to help you <br/>
            with Your <span className="text-amber-500 underline decoration-slate-200 underline-offset-8 italic">Next Fix.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Send us a message or email our support hub. Our friendly local team will get back to you in under 2 hours.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Info Cards */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tighter">
                    Ready to schedule <br/>
                    a specialist visit?
                 </h2>
                 <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                    We know your home appliances are important. Our local team will respond to your inquiry as quickly as possible.
                 </p>
              </div>

              <div className="grid gap-6">
                {[
                  { icon: <PiEnvelopeLight size={32} />, label: "Email support", info: "info@misterappliance.shop" },
                  { icon: <PiEnvelopeLight size={32} />, label: "Email hub", info: "info@misterappliance.shop" },
                  { icon: <PiMapPinLight size={32} />, label: "Service area", info: "North Little Rock, AR, USA" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-8 rounded-[2rem] border border-slate-50 bg-slate-50/50 group hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-white text-slate-400 flex items-center justify-center shadow-sm group-hover:bg-amber-400 group-hover:text-black transition-all">
                       {item.icon}
                    </div>
                    <div>
                       <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">{item.label}</p>
                       <p className="text-lg font-bold text-slate-900 italic tracking-tight">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Premium Form */}
            <div className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-[80px] pointer-events-none"></div>
              
              {isSubmitted ? (
                <div className="relative z-10 text-center py-20 text-slate-900">
                  <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <FiCheckCircle size={48} className="text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message sent successfully!</h3>
                  <p className="text-slate-500 text-lg font-medium mb-12 max-w-sm mx-auto">Thank you for reaching out. Our team is already reviewing your request and will contact you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold text-sm tracking-wide hover:bg-amber-400 hover:text-black transition-all shadow-xl active:scale-95">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-slate-600 text-[11px] font-bold uppercase tracking-widest ml-2">Full name</label>
                      <input name="name" required onChange={handleChange} type="text" placeholder="Jane Doe" className="w-full bg-slate-50 border border-slate-100 outline-none rounded-2xl px-6 py-5 text-slate-900 font-medium focus:border-amber-400 focus:bg-white transition-all shadow-sm" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-slate-600 text-[11px] font-bold uppercase tracking-widest ml-2">Email address</label>
                      <input name="email" required onChange={handleChange} type="email" placeholder="jane@example.com" className="w-full bg-slate-50 border border-slate-100 outline-none rounded-2xl px-6 py-5 text-slate-900 font-medium focus:border-amber-400 focus:bg-white transition-all shadow-sm" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-slate-600 text-[11px] font-bold uppercase tracking-widest ml-2">Appliance issue</label>
                      <input name="subject" required onChange={handleChange} type="text" placeholder="e.g., Fridge not cooling" className="w-full bg-slate-50 border border-slate-100 outline-none rounded-2xl px-6 py-5 text-slate-900 font-medium focus:border-amber-400 focus:bg-white transition-all shadow-sm" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-slate-600 text-[11px] font-bold uppercase tracking-widest ml-2">Phone number</label>
                      <input name="phone" required onChange={handleChange} type="text" placeholder="(555) 000-0000" className="w-full bg-slate-50 border border-slate-100 outline-none rounded-2xl px-6 py-5 text-slate-900 font-medium focus:border-amber-400 focus:bg-white transition-all shadow-sm" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-slate-600 text-[11px] font-bold uppercase tracking-widest ml-2">Your message</label>
                    <textarea name="message" required onChange={handleChange} placeholder="Tell us about the issue..." rows="5" className="w-full bg-slate-50 border border-slate-100 outline-none rounded-[2rem] px-6 py-6 text-slate-900 font-medium focus:border-amber-400 focus:bg-white transition-all resize-none shadow-sm"></textarea>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full bg-slate-900 text-white hover:bg-amber-400 hover:text-black py-6 rounded-[2rem] font-bold text-sm tracking-widest shadow-xl shadow-slate-900/10 transition-all duration-500 flex items-center justify-center gap-3 group active:scale-95">
                      Send message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
