"use client";
import React from 'react';

const Lab = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" 
              className="rounded-[3rem] relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Digital Lab" 
            />
            <div className="absolute bottom-8 right-8 bg-emerald-500 text-white p-8 rounded-3xl z-20 shadow-xl max-w-[200px]">
              <p className="text-3xl font-black italic leading-none">100%</p>
              <p className="text-[10px] uppercase font-bold tracking-widest mt-2 leading-tight">ციფრული სიზუსტე</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-emerald-600 font-mono text-[10px] uppercase tracking-[0.5em] font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-emerald-600"></span> 
              Dental M Lab
            </h3>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9] mb-8">
              საკუთარი <br /> 
              <span className="text-emerald-500 italic">ციფრული ლაბორატორია</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-6">
              ჩვენი კლინიკის ბაზაზე მოქმედი ულტრათანამედროვე ლაბორატორია საშუალებას გვაძლევს შევამციროთ მკურნალობის დრო და მივიღოთ უპრეცედენტო სიზუსტე.
            </p>
            <ul className="space-y-4">
              {["CAD/CAM ტექნოლოგია", "3D ბეჭდვა", "ინტრაორალური სკანირება"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-900 font-black uppercase tracking-tighter italic text-xl">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lab;
