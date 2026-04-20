"use client";
import React from 'react';
import { ShieldCheck, Zap, HeartPulse, Sparkles } from 'lucide-react';

const features = [
  {
    title: "უახლესი ტექნოლოგიები",
    desc: "ჩვენ ვიყენებთ მსოფლიო დონის ციფრულ სკანერებს და 3D მოდელირების სისტემებს მაქსიმალური სიზუსტისთვის.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "გარანტირებული ხარისხი",
    desc: "ყველა პროცედურაზე მოქმედებს ხარისხის გარანტია. ჩვენ ვიყენებთ მხოლოდ სერტიფიცირებულ ევროპულ მასალებს.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "უატკივნეულო მკურნალობა",
    desc: "თანამედროვე ანესთეზიის მეთოდები საშუალებას გვაძლევს ნებისმიერი მანიპულაცია ჩავატაროთ სრულიად უმტკივნეულოდ.",
    icon: <HeartPulse className="w-8 h-8" />,
  },
  {
    title: "ინდივიდუალური მიდგომა",
    desc: "თითოეული პაციენტისთვის იქმნება მკურნალობის პერსონალური გეგმა, რომელიც მორგებულია მათ საჭიროებებსა და ბიუჯეტზე.",
    icon: <Sparkles className="w-8 h-8" />,
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* მარცხენა მხარე: ტექსტი */}
          <div>
            <h3 className="text-emerald-600 font-mono text-[10px] uppercase tracking-[0.5em] font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-emerald-600"></span> 
              ჩვენი უპირატესობები
            </h3>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9] mb-8">
              რატომ ირჩევენ <br /> 
              <span className="text-emerald-500 italic">Dental M</span>-ს?
            </h2>
            <p className="text-slate-500 text-lg max-w-md font-medium leading-relaxed mb-10">
              ჩვენ ვქმნით გარემოს, სადაც ინოვაციური სტომატოლოგია და პაციენტზე ზრუნვა ერთმანეთს ხვდება.
            </p>
            
            {/* პატარა სტატისტიკა */}
            <div className="flex gap-10">
              <div>
                <p className="text-4xl font-black text-slate-900 tracking-tighter italic">99%</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">კმაყოფილი <br/> პაციენტი</p>
              </div>
              <div>
                <p className="text-4xl font-black text-slate-900 tracking-tighter italic">10+</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">წლიანი <br/> გამოცდილება</p>
              </div>
            </div>
          </div>

          {/* მარჯვენა მხარე: ბარათების Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-[2.5rem] transition-all duration-500 group ${
                  index % 2 !== 0 ? 'md:translate-y-12 bg-white shadow-xl shadow-slate-200/50' : 'bg-emerald-500 text-white shadow-xl shadow-emerald-200/20'
                }`}
              >
                <div className={`mb-6 p-3 inline-block rounded-2xl ${
                  index % 2 !== 0 ? 'bg-emerald-50 text-emerald-500' : 'bg-white/20 text-white'
                }`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic leading-tight">
                  {item.title}
                </h4>
                <p className={`text-sm leading-relaxed font-medium ${
                  index % 2 !== 0 ? 'text-slate-500' : 'text-emerald-50/80'
                }`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;