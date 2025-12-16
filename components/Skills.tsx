import React from 'react';
import { Microscope, Brain, Workflow, Code } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const ICON_MAP: Record<string, React.ReactNode> = {
  microscope: <Microscope size={24} />,
  brain: <Brain size={24} />,
  workflow: <Workflow size={24} />,
  code: <Code size={24} />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1.5 bg-teal-500 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A unique blend of clinical pathology expertise and modern technical skills in AI and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-teal-500 transition-colors duration-300">
              <div className="mb-6 inline-flex items-center justify-center p-3 bg-slate-700 rounded-xl text-teal-400">
                {ICON_MAP[category.iconName]}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-slate-100">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-slate-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};