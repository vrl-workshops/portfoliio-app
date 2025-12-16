import React from 'react';
import { Mic, Award, MapPin } from 'lucide-react';
import { TALKS, AWARDS } from '../constants';

export const Talks: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Talks Column */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Mic className="text-teal-600" />
              Talks & Workshops
            </h2>
            <div className="space-y-6">
              {TALKS.map((talk) => (
                <div key={talk.id} className="relative pl-6 border-l-2 border-slate-200 pb-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-teal-500"></div>
                  <h3 className="font-bold text-slate-800 text-lg">{talk.event}</h3>
                  <div className="text-teal-600 font-medium text-sm mb-1">{talk.role}</div>
                  <div className="flex items-center text-slate-500 text-sm gap-4">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {talk.location}
                    </span>
                    <span>{talk.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Column */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Award className="text-teal-600" />
              Awards & Honors
            </h2>
            <div className="space-y-4">
              {AWARDS.map((award) => (
                <div key={award.id} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-white border border-amber-100">
                  <div className="mt-1 text-amber-500">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{award.title}</h3>
                    <p className="text-sm text-slate-600">{award.issuer}</p>
                    <span className="text-xs text-slate-400 mt-1 block">{award.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};