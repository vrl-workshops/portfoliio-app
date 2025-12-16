import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Dr. Atul Tiwari. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-teal-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-teal-400 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};