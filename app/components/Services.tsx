"use client";
import React from 'react';
import { 
  Scan, Sparkles, ShieldPlus, Microscope, 
  Stethoscope, Syringe, Brush, Layers 
} from 'lucide-react';

const services = [
  {
    title: "3D ციფრული სკანირება",
    desc: "უსწრაფესი 3D სკანირება მაქსიმალური სიზუსტისთვის, ტრადიციული ყალიბების გარეშე.",
    icon: <Scan size={32} />,
    tag: "ტექნოლოგია",
    price: "80 ₾-დან"
  },
  {
    title: "ესთეტიკური რესტავრაცია",
    desc: "ღიმილის ციფრული მოდელირება და ფორმის აღდგენა სახის ნაკვთების მიხედვით.",
    icon: <Sparkles size={32} />,
    tag: "დიზაინი",
    price: "150 ₾-დან"
  },
  {
    title: "იმპლანტოლოგია",
    desc: "უმაღლესი ხარისხის პრემიუმ იმპლანტები, რომლებიც მთელი ცხოვრება მოგემსახურებათ.",
    icon: <ShieldPlus size={32} />,
    tag: "ქირურგია",
    price: "900 ₾-დან"
  },
  {
    title: "მიკროსკოპული ენდოდონტია",
    desc: "არხების მკურნალობა მიკროსკოპის ქვეშ - მაქსიმალური სიზუსტე და გარანტია.",
    icon: <Microscope size={32} />,
    tag: "თერაპია",
    price: "200 ₾-დან"
  },
  {
    title: "კბილების დაბჟენა (პლომბი)",
    desc: "უახლესი ჰელიო-მასალებით კბილის ანატომიური ფორმის იდეალური აღდგენა.",
    icon: <Layers size={32} />,
    tag: "თერაპია",
    price: "100 ₾-დან"
  },
  {
    title: "პროფესიული წმენდა",
    desc: "Air-Flow და ულტრაბგერითი აპარატით ნადებისა და ქვების სრული მოცილება.",
    icon: <Brush size={32} />,
    tag: "ჰიგიენა",
    price: "120 ₾-დან"
  },
  {
    title: "კბილის ექსტრაქცია",
    desc: "რთული და მარტივი კბილის ამოღება უმტკივნეულოდ, სწრაფი რეაბილიტაციით.",
    icon: <Syringe size={32} />,
    tag: "ქირურგია",
    price: "70 ₾-დან"
  },
  {
    title: "კონსულტაცია & დიაგნოსტიკა",
    desc: "სრულყოფილი გამოკვლევა, მკურნალობის გეგმის შედგენა და 3D ვიზუალიზაცია.",
    icon: <Stethoscope size={32} />,
    tag: "დიაგნოსტიკა",
    price: "უფასო"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        
        {/* სათაური */}
        <div className="mb-20">
          <h3 className="text-emerald-600 font-mono text-[10px] uppercase tracking-[0.5em] font-bold mb-4">
            <span className="relative w-8 h-[1px] bg-emerald-600"></span> 
            ჩვენი სერვისები
          </h3>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9]">
            თანამედროვე <br /> 
            <span className="text-emerald-500 italic">სტომატოლოგია</span>
          </h2>
        </div>

        {/* სერვისების ბადე */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group relative bg-white p-8 rounded-[3rem] border border-transparent hover:border-emerald-500/20 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 mb-8 shadow-sm">
                {s.icon}
              </div>
              
              <div className="space-y-4">
                <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  {s.tag}
                </span>

                <h3 className="text-xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                  {s.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {s.desc}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-slate-200/50">
                  <span className="text-sm font-black text-slate-900 italic">{s.price}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                    <span className="text-xs">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;