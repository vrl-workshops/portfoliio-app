import React from 'react';
import { User, Award, BookOpen } from 'lucide-react';
import { ABOUT_TEXT } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Section Header */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <User className="text-teal-600" size={32} />
              About Me
            </h2>
            <div className="w-20 h-1.5 bg-teal-600 rounded-full mb-6"></div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <div className="mt-1 p-1 bg-teal-100 text-teal-700 rounded-full">
                    <Award size={14} />
                  </div>
                  <span>Assistant Professor & Dept In-Charge</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <div className="mt-1 p-1 bg-teal-100 text-teal-700 rounded-full">
                    <BookOpen size={14} />
                  </div>
                  <span>MD Pathology + MS Machine Learning</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <div className="mt-1 p-1 bg-teal-100 text-teal-700 rounded-full">
                    <Award size={14} />
                  </div>
                  <span>Expert in No-Code AI for Healthcare</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed">
              {ABOUT_TEXT.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-4 text-justify">
                    {paragraph.trim()}
                  </p>
                )
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-teal-50 rounded-xl border border-teal-100 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-teal-800 text-lg mb-1">Pathologist</h4>
                <p className="text-sm text-teal-600">Expert in Diagnostics & Hematopathology</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-blue-800 text-lg mb-1">AI Researcher</h4>
                <p className="text-sm text-blue-600">Bridging ML & Clinical Medicine</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-purple-800 text-lg mb-1">Educator</h4>
                <p className="text-sm text-purple-600">Teaching AI to Medical Professionals</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};