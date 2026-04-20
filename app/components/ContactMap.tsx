"use client";
import React, { useState } from 'react';
import { Phone, Navigation, Send, ChevronDown, CheckCircle2 } from 'lucide-react';

const doctors = [
  "დრ. ელენე დავითაძე",
  "დრ. გიორგი ბერიძე",
  "დრ. ნინო კაპანაძე"
];

const services = [
  "3D ციფრული სკანირება",
  "ესთეტიკური რესტავრაცია",
  "იმპლანტოლოგია",
  "მიკროსკოპული ენდოდონტია",
  "კბილების დაბჟენა (პლომბი)",
  "პროფესიული წმენდა",
  "კბილის ექსტრაქცია",
  "კონსულტაცია & დიაგნოსტიკა"
];

const ContactMap = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // აქ შეგიძლიათ დაამატოთ მონაცემების გაგზავნის ლოგიკა
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* სათაური */}
        <div className="mb-16">
          <h3 className="text-emerald-600 font-mono text-[10px] uppercase tracking-[0.5em] font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-emerald-600"></span> 
            ლოკაცია და ჯავშანი
          </h3>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">
            ჩაეწერეთ <span className="text-emerald-500 italic text-stroke-slate">ვიზიტზე</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* მარცხენა მხარე: რუკა */}
          <div className="lg:col-span-6 relative group min-h-[500px] lg:min-h-full">
            <div className="absolute inset-0 bg-emerald-500 rounded-[3rem] rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl z-10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.128447477615!2d44.73177697655543!3d41.71775797135898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447313835697d1%3A0xc4a1168f6368a4!2z4YOV4YOQ4Y4YOQLeGDpOGDpOGDqOGDleGD4YOa4YQuIOGDkuGDkOGDm-GDluGDmOGDqOGDmCwg4YOX4YOR4Y4YO4Ym4G!5e0!3m2!1ska!2sge!4v1713620000000!5m2!1ska!2sge" 
                className="w-full h-full border-0 contrast-110 brightness-100 transition-all duration-700 group-hover:scale-105"
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl flex items-center justify-between shadow-xl">
                <div>
                  <p className="text-slate-900 font-black uppercase tracking-tighter italic">Vaja-Pshavela Ave.</p>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">თბილისი, საქართველო</p>
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank"
                  className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-emerald-500 transition-colors"
                >
                  <Navigation size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* მარჯვენა მხარე: ფორმა */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl shadow-slate-200/50 flex-1 border border-slate-100 flex flex-col justify-center min-h-[500px]">
              
              {!isSubmitted ? (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* სახელი და ნომერი */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-[0.2em] text-emerald-600 ml-2">სახელი გვარი</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold text-slate-900 text-sm"
                        placeholder="ზურა ბერიძე"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-[0.2em] text-emerald-600 ml-2">ტელეფონი</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold text-slate-900 text-sm"
                        placeholder="5-- -- -- --"
                      />
                    </div>
                  </div>

                  {/* ექიმის და სერვისის არჩევა */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 relative">
                      <label className="text-[10px] uppercase font-black tracking-[0.2em] text-emerald-600 ml-2">აირჩიეთ ექიმი</label>
                      <div className="relative group">
                        <select 
                          required
                          defaultValue=""
                          className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold text-slate-900 text-sm appearance-none cursor-pointer"
                        >
                          <option value="" disabled hidden>ექიმი</option>
                          {doctors.map(doc => <option key={doc} value={doc}>{doc}</option>)}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-emerald-500 transition-colors" size={18} />
                      </div>
                    </div>

                    <div className="space-y-2 relative">
                      <label className="text-[10px] uppercase font-black tracking-[0.2em] text-emerald-600 ml-2">მომსახურება</label>
                      <div className="relative group">
                        <select 
                          required
                          defaultValue=""
                          className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold text-slate-900 text-sm appearance-none cursor-pointer"
                        >
                          <option value="" disabled hidden>სერვისი</option>
                          {services.map(ser => <option key={ser} value={ser}>{ser}</option>)}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-emerald-500 transition-colors" size={18} />
                      </div>
                    </div>
                  </div>

                  {/* შეტყობინება */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-[0.2em] text-emerald-600 ml-2">დამატებითი ინფორმაცია</label>
                    <textarea 
                      rows={2}
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold text-slate-900 text-sm resize-none"
                      placeholder="მაგ: სასურველი დრო..."
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-[0.1em] py-5 rounded-2xl transition-all shadow-xl shadow-emerald-200 flex items-center justify-center gap-3 group active:scale-95">
                    ვიზიტის დაჯავშნა
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              ) : (
                /* წარმატების შეტყობინება */
                <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 leading-none">მადლობა!</h3>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-4">თქვენი მოთხოვნა მიღებულია</p>
                    <p className="text-slate-400 text-sm mt-2">ჩვენი ადმინისტრატორი მალე დაგიკავშირდებათ</p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-emerald-600 font-black uppercase tracking-widest text-[10px] hover:text-emerald-700 transition-colors pt-4"
                  >
                    ← ახალი ჯავშანი
                  </button>
                </div>
              )}
            </div>

            {/* სწრაფი კონტაქტი */}
            <div className="bg-slate-900 p-8 rounded-[2.5rem] flex items-center justify-between group cursor-pointer hover:bg-emerald-500 transition-all duration-500 shadow-xl shadow-slate-900/10">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:text-white group-hover:bg-white/20 transition-all">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-white font-black uppercase tracking-tighter text-xl leading-none italic">+995 588 11 22 33</p>
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-1 group-hover:text-white/80 transition-colors">დაგვირეკეთ კონსულტაციისთვის</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;