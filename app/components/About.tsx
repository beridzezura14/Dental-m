"use client";
import React from 'react';
import { ShieldCheck, Activity, Award, HeartPulse, ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative bg-white py-32 px-6 md:px-12 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* ზედა ნაწილი: სათაური და მოკლე ტექსტი */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
            <h3 className="text-emerald-600 font-mono text-[10px] uppercase tracking-[0.5em] font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-emerald-600"></span> 
                პრემიუმ სტომატოლოგია
            </h3>
            <h2 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tighter uppercase italic text-slate-900">
                ციფრული <br /> 
                <span className="text-emerald-500 not-italic">სიზუსტე</span>
            </h2>
            </div>
          <p className="text-slate-500 text-lg max-w-sm font-medium leading-tight">
            ჩვენ ვიყენებთ უახლეს 3D ტექნოლოგიებს, რათა თქვენი ღიმილი იყოს იდეალურად სიმეტრიული და ბუნებრივი.
          </p>
        </div>

        {/* Bento Grid სტილის სექცია */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          
          {/* დიდი ბლოკი: მთავარი ვიზუალი */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-[3rem] bg-slate-100 border border-slate-200/50">
             {/* აქ იგულისხმება მაღალი ხარისხის ფოტო */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-xs uppercase tracking-widest opacity-70 mb-2">Our Philosophy</p>
              <h4 className="text-3xl font-bold max-w-xs leading-tight">სადაც ტექნოლოგია ხვდება ხელოვნებას.</h4>
            </div>
          </div>

          {/* პატარა ბლოკები (მარჯვენა მხარე) */}
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            
            {/* ბლოკი 1: სტატისტიკა */}
            <div className="bg-emerald-500 rounded-[3rem] p-10 text-white flex flex-col justify-between hover:bg-emerald-600 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start">
                <Award size={40} strokeWidth={1.5} />
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <span className="text-6xl font-black block leading-none">25+</span>
                <p className="text-xs uppercase tracking-widest font-bold opacity-80 mt-2">საერთაშორისო ჯილდო</p>
              </div>
            </div>

            {/* ბლოკი 2: მცირე ინფორმაცია */}
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col justify-between overflow-hidden relative">
              <Activity className="absolute -right-4 -top-4 text-white/5" size={150} />
              <div className="relative z-10">
                <p className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest mb-4">Quality First</p>
                <h4 className="text-xl font-bold leading-tight">ISO სერტიფიცირებული სტანდარტები</h4>
              </div>
              <button className="relative z-10 w-fit text-[10px] uppercase tracking-widest font-bold border-b border-emerald-500 pb-1 hover:text-emerald-500 transition-colors">
                დეტალები
              </button>
            </div>

          </div>
        </div>

        {/* ქვედა "Floating" სტატისტიკა */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-slate-100">
          {[
            { lab: "Experience", val: "12 Years" },
            { lab: "Patients", val: "15,000+" },
            { lab: "Doctors", val: "8 Expert" },
            { lab: "Labs", val: "2 Modern" },
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">{item.lab}</p>
              <p className="text-2xl font-black text-slate-900">{item.val}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;