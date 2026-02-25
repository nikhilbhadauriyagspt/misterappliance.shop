import React from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import { FiArrowRight, FiCalendar, FiBookOpen } from 'react-icons/fi';

const BlogSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 font-sans overflow-hidden" id="blog">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Header - Editorial Style */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 font-bold text-[10px] uppercase tracking-[0.2em] rounded-full">
              News & tips
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              Helpful repair tips and <br/>
              appliance maintenance guides.
            </h2>
          </div>
          <Link 
            to="/blog" 
            className="group flex items-center gap-2 text-slate-900 font-bold hover:text-amber-600 transition-colors"
          >
            <span className="text-sm border-b-2 border-slate-200 group-hover:border-amber-400 transition-all pb-1">
              Read all articles
            </span>
            <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Minimalist Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {blogsData.slice(0, 3).map((blog) => (
            <Link 
              to={`/blog/${blog.id}`} 
              key={blog.id} 
              className="group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden mb-6 aspect-[4/3] shadow-sm bg-white">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 shadow-sm">
                   <span className="text-slate-700 text-[10px] font-bold uppercase tracking-widest">
                     {blog.category || 'Maintenance'}
                   </span>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-4 text-slate-400">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest">
                  <FiCalendar className="text-amber-500" />
                  {blog.date}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest">
                  <FiBookOpen className="text-amber-500" />
                  5 Min Read
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-4 group-hover:text-amber-600 transition-colors duration-300 capitalize">
                {blog.title}
              </h3>

              {/* Read More Link */}
              <div className="mt-auto inline-flex items-center gap-2 text-slate-500 group-hover:text-amber-600 font-bold text-sm transition-all">
                 Read article <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Clean Subscription Box */}
        <div className="mt-24 p-8 md:p-12 bg-white border border-slate-100 rounded-[2.5rem] relative overflow-hidden shadow-sm">
           <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-[80px] -z-0"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Want more home tips?</h3>
                <p className="text-slate-500 font-medium">Join our local newsletter for maintenance guides.</p>
              </div>
              <div className="flex w-full md:w-auto items-center p-2 bg-slate-50 border border-slate-100 rounded-2xl shadow-inner">
                 <input 
                   type="email" 
                   placeholder="Your email address" 
                   className="bg-transparent border-none text-slate-700 text-sm px-4 focus:ring-0 w-full md:w-64 outline-none" 
                 />
                 <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs tracking-wide hover:bg-amber-400 hover:text-black transition-all">
                    Subscribe
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
