import React from 'react';
import { BookOpen, FileText, ScrollText } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

export const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Selected Publications</h2>
          <div className="w-20 h-1.5 bg-teal-600 rounded-full"></div>
        </div>

        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-teal-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-full bg-teal-50 text-teal-600">
                  {pub.type === 'book_chapter' ? <BookOpen size={20} /> : <FileText size={20} />}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {pub.title}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 whitespace-nowrap">
                      {pub.year}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wide text-teal-600 bg-teal-50 px-2 py-1 rounded">
                      {pub.type.replace('_', ' ')}
                    </span>
                  </div>

                  {pub.details && (
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pub.details}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};