import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 to-teal-50/30">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 translate-x-1/3 -translate-y-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[800px] h-[800px] fill-teal-500">
          <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.7C91.4,-34.3,98.1,-19.6,95.8,-5.8C93.5,8,82.2,20.9,71.5,32.4C60.8,43.9,50.7,54,39.1,62.6C27.5,71.3,14.4,78.4,0.6,77.3C-13.1,76.3,-27.7,67.1,-39.7,57.5C-51.7,47.9,-61.1,38,-69.3,26.4C-77.5,14.8,-84.5,1.6,-83.4,-11.2C-82.3,-24,-73.1,-36.4,-62.5,-45.8C-51.9,-55.2,-39.9,-61.6,-27.7,-67.7C-15.5,-73.8,-3.1,-79.6,10.1,-81.4C23.3,-83.2,46.6,-81,58,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Available for Collaborations & Speaking
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6">
            {PERSONAL_INFO.name}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-4 leading-relaxed">
            {PERSONAL_INFO.roles}
          </h2>
          
          <p className="text-lg text-slate-500 mb-10 max-w-2xl border-l-4 border-teal-500 pl-4 italic">
            "{PERSONAL_INFO.tagline}"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#experience"
              className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#contact"
              className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-teal-600 transition-all shadow-sm hover:shadow-md"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};