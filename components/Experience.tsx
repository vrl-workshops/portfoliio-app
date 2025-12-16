import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1.5 bg-teal-600 rounded-full mx-auto"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A journey through academic leadership, clinical diagnostics, and artificial intelligence advocacy.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2 ml-6 md:ml-0"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((item, index) => (
              <div key={item.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 top-0 w-4 h-4 rounded-full border-4 border-white bg-teal-600 shadow-md transform -translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="flex flex-col gap-2 mb-3">
                      <div className="flex items-center gap-2 text-teal-600 font-semibold">
                        <Briefcase size={16} />
                        <span>{item.title}</span>
                      </div>
                      <div className="text-slate-900 font-bold text-lg">
                        {item.organization}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                      {item.location && (
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                    {item.description && (
                      <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-3">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};