"use client";
import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* ბრენდის ნაწილი */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">
              DENTAL <span className="text-emerald-500 italic">M</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-10 font-medium">
              უმაღლესი ხარისხის სტომატოლოგიური მომსახურება, ციფრული სიზუსტე და თქვენზე მორგებული გარემო.
            </p>
            
            {/* სოციალური ქსელები (SVG Icons) */}
            <div className="flex gap-4">
              {[
                { id: 'fb', path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", type: 'fill' },
                { id: 'ig', path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", type: 'stroke', extra: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></> },
                { id: 'in', path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z", type: 'fill' }
              ].map((icon) => (
                <a key={icon.id} href="#" className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all group">
                  <svg 
                    className={`w-4 h-4 ${icon.type === 'fill' ? 'fill-current' : 'stroke-current stroke-2 fill-none'} group-hover:scale-110 transition-transform`} 
                    viewBox="0 0 24 24"
                  >
                    <path d={icon.path} />
                    {icon.extra}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* სწრაფი ლინკები */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-emerald-500 mb-8">ნავიგაცია</h4>
            <ul className="space-y-4">
              {['მთავარი', 'მომსახურება', 'ექიმები', 'გალერეა', 'კონტაქტი'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center justify-between text-slate-300 hover:text-white font-bold transition-colors">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* კონტაქტი */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-emerald-500 mb-8">სწრაფი კონტაქტი</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-emerald-500 shrink-0 mt-1" />
                <p className="text-slate-300 font-bold leading-tight">თბილისი, ვაჟა-ფშაველას გამზირი</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <p className="text-slate-300 font-bold">+995 588 11 22 33</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock size={18} className="text-emerald-500 shrink-0" />
                <p className="text-slate-300 font-bold">10:00 - 20:00 (ყოველდღე)</p>
              </div>
            </div>
          </div>

        </div>

        {/* ქვედა ზოლი */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 DENTAL M. დამზადებულია ANRA Studio-ს მიერ.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 text-[10px] uppercase font-bold tracking-widest hover:text-emerald-500 transition-colors underline decoration-white/5 underline-offset-8">წესები</a>
            <a href="#" className="text-slate-500 text-[10px] uppercase font-bold tracking-widest hover:text-emerald-500 transition-colors underline decoration-white/5 underline-offset-8">კონფიდენციალურობა</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;