import React from 'react';
import { Mail, Linkedin, Globe, Twitter, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              I'm always open to discussing new research opportunities, educational collaborations, or speaking engagements regarding AI in Healthcare.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="font-medium text-lg">{PERSONAL_INFO.email}</div>
                </div>
              </a>
              
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-400">LinkedIn</div>
                  <div className="font-medium text-lg">Dr. Atul Tiwari</div>
                </div>
              </a>

              <a href={PERSONAL_INFO.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <Globe size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Website</div>
                  <div className="font-medium text-lg">atultiwari.in</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-slate-800">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="Dr. John Doe" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none" placeholder="I'd like to discuss..."></textarea>
              </div>
              
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};