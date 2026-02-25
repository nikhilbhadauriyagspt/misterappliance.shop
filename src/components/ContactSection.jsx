import React, { useState } from 'react';
import { API_ENDPOINTS } from '../config/api';
import { FiSend, FiArrowRight } from 'react-icons/fi';
import { PiEnvelopeLight, PiMapPinLight, PiCheckCircleLight } from 'react-icons/pi';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

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
    <section className="py-20 lg:py-28 bg-white font-sans overflow-hidden" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Editorial Text & Light Cards */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 font-bold text-[10px] uppercase tracking-[0.2em] rounded-full">
                Get in touch
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                Ready to fix your <br/>
                broken appliance?
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                We're here to help. Send us a quick message, and our local team will get back to you shortly to schedule your repair.
              </p>
            </div>

            {/* Clean Contact Cards */}
            <div className="space-y-6">
               <div className="flex items-center gap-6 p-6 rounded-3xl border border-slate-100 bg-white group hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-all">
                     <PiEnvelopeLight size={28} />
                  </div>
                  <div>
                     <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Email support</p>
                     <p className="text-slate-900 font-bold text-sm">info@misterappliance.shop</p>
                  </div>
               </div>

               <div className="flex items-center gap-6 p-6 rounded-3xl border border-slate-100 bg-white group hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-all">
                     <PiMapPinLight size={28} />
                  </div>
                  <div>
                     <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Service area</p>
                     <p className="text-slate-900 font-bold text-sm">West Ashley, Charleston, SC, USA</p>
                  </div>
               </div>
            </div>

            {/* Subtle Trust Note */}
            <div className="flex items-start gap-4 p-6 rounded-[2rem] bg-slate-50 border border-slate-100">
               <PiCheckCircleLight size={28} className="text-emerald-500 flex-shrink-0" />
               <p className="text-sm font-medium text-slate-600 leading-relaxed">
                 Fast response guaranteed. We aim to reply to all inquiries within a couple of hours during business days.
               </p>
            </div>
          </div>

          {/* Right Side: Clean White Form */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-14 border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden">
            {/* Soft decorative blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-[80px] -z-0 pointer-events-none"></div>
            
            {isSubmitted ? (
              <div className="relative z-10 text-center py-20 text-slate-900">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PiCheckCircleLight size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message sent successfully!</h3>
                <p className="text-slate-500 font-medium mb-10 max-w-sm mx-auto">Thank you for reaching out. Our team is reviewing your request and will contact you shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-amber-400 hover:text-black transition-all">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-slate-600 text-[11px] font-bold uppercase tracking-widest ml-2">Full name</label>
                    <input name="name" required onChange={handleChange} type="text" placeholder="Jane Doe" className="w-full bg-slate-50 border border-slate-100 outline-none rounded-xl px-5 py-4 text-slate-900 font-medium focus:border-amber-400 focus:bg-white transition-all placeholder-slate-400" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-600 text-[11px] font-bold uppercase tracking-widest ml-2">Email address</label>
                    <input name="email" required onChange={handleChange} type="email" placeholder="jane@example.com" className="w-full bg-slate-50 border border-slate-100 outline-none rounded-xl px-5 py-4 text-slate-900 font-medium focus:border-amber-400 focus:bg-white transition-all placeholder-slate-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-slate-600 text-[11px] font-bold uppercase tracking-widest ml-2">Appliance issue</label>
                    <input name="subject" required onChange={handleChange} type="text" placeholder="e.g., Fridge not cooling" className="w-full bg-slate-50 border border-slate-100 outline-none rounded-xl px-5 py-4 text-slate-900 font-medium focus:border-amber-400 focus:bg-white transition-all placeholder-slate-400" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-600 text-[11px] font-bold uppercase tracking-widest ml-2">Phone number</label>
                    <input name="phone" required onChange={handleChange} type="text" placeholder="(555) 123-4567" className="w-full bg-slate-50 border border-slate-100 outline-none rounded-xl px-5 py-4 text-slate-900 font-medium focus:border-amber-400 focus:bg-white transition-all placeholder-slate-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-slate-600 text-[11px] font-bold uppercase tracking-widest ml-2">How can we help?</label>
                  <textarea name="message" required onChange={handleChange} placeholder="Please describe the problem you're experiencing..." rows="4" className="w-full bg-slate-50 border border-slate-100 outline-none rounded-xl px-5 py-4 text-slate-900 font-medium focus:border-amber-400 focus:bg-white transition-all resize-none placeholder-slate-400"></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full md:w-auto bg-slate-900 text-white hover:bg-amber-400 hover:text-black px-10 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-3 group">
                    Send message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
