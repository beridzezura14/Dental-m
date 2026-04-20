"use client";
import React from 'react';
import { Star } from 'lucide-react'; // Star ხატულა ვტოვებთ, რადგან მასზე ერორი არ იყო

const doctors = [
  {
    name: "დრ. ელენე დავითაძე",
    role: "იმპლანტოლოგი",
    desc: "15 წლიანი გამოცდილება ციფრულ იმპლანტოლოგიაში.",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974",
  },
  {
    name: "დრ. გიორგი ბერიძე",
    role: "ორთოდონტი",
    desc: "ესთეტიკური ბრეკეტ-სისტემების და ელაინერების სპეციალისტი.",
    img: "https://images.unsplash.com/photo-1674775372058-c4c8813c6611?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlbnRhbCUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "დრ. ნინო კაპანაძე",
    role: "თერაპევტი",
    desc: "კბილების მხატვრული რესტავრაციისა და ენდოდონტიის ექსპერტი.",
    // განახლებული, უფრო საიმედო ლინკი მესამე ექიმისთვის:
    img: "https://plus.unsplash.com/premium_photo-1702598451347-dbfd581f5041?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGRlbnRhbCUyMGRvY3RvciUyMHdvbWFufGVufDB8fDB8fHww",
  }
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-32 px-6 bg-white overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* სათაური */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h3 className="text-emerald-600 font-mono text-[10px] uppercase tracking-[0.5em] font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-emerald-600"></span> 
              გუნდი
            </h3>
            <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              პროფესიონალი <br /> 
              <span className="text-emerald-500 italic">ექსპერტები</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-xs font-medium leading-tight">
            საუკეთესო სპეციალისტები, რომლებიც ზრუნავენ თქვენს კომფორტზე.
          </p>
        </div>

        {/* ექიმების ბარათები */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {doctors.map((dr, i) => (
            <div key={i} className="group cursor-pointer">
              {/* ფოტოს კონტეინერი */}
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                <img 
                src={dr.img} 
                alt={dr.name} 
                onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1974";
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Social Overlay - Inline SVG-ებით */}
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  
                  {/* Instagram SVG */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-emerald-500 hover:text-white transition-all shadow-xl group/icon">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="group-hover/icon:scale-110 transition-transform"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  
                  {/* Facebook SVG */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-emerald-500 hover:text-white transition-all shadow-xl group/icon">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="group-hover/icon:scale-110 transition-transform"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-3 py-1.5 rounded-2xl flex items-center gap-1 shadow-sm border border-slate-50">
                  <Star size={12} className="fill-emerald-500 text-emerald-500" />
                  <span className="text-[10px] font-black tracking-tighter text-slate-900">5.0</span>
                </div>
              </div>

              {/* ინფორმაცია */}
              <div className="mt-8 text-center md:text-left">
                <p className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest font-bold mb-2">
                  {dr.role}
                </p>
                <h4 className="text-2xl font-black uppercase tracking-tighter italic leading-none">
                  {dr.name}
                </h4>
                <p className="text-slate-500 text-sm mt-4 leading-relaxed max-w-xs mx-auto md:mx-0 font-medium">
                  {dr.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;