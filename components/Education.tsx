import React from 'react';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <GraduationCap className="text-teal-600" size={36} />
              Education
            </h2>
            <div className="w-20 h-1.5 bg-teal-600 rounded-full"></div>
          </div>
          <p className="text-slate-500 max-w-lg text-right md:text-right text-left">
            Foundational training in Medicine complemented by advanced specializations in Computer Science and Artificial Intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="group bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-200 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <GraduationCap size={24} />
                </div>
                <span className="text-xs font-semibold px-2 py-1 bg-slate-200 text-slate-600 rounded-full">
                  {edu.period}
                </span>
              </div>
              
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-teal-700 transition-colors">
                {edu.title}
              </h3>
              
              <p className="text-slate-600 text-sm">
                {edu.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};