"use client";
// import ToothScene from "./ToothModel";

export default function Hero() {
  return (
    <section 
      // *** გრადიენტი: შავი -> მუქი მწვანე -> შავი ***
      className="relative w-full h-[100dvh] lg:h-screen bg-gradient-to-tl from-black via-[#052c1e] to-black overflow-hidden"
    >
      {/* 3D სცენა */}
      {/* <ToothScene /> */}

      {/* Hero ტექსტი ფონზე (დიდი და გამჭვირვალე) */}
      {/* <div className="hidden 2xl:flex absolute inset-0 items-center justify-center pointer-events-none z-20">
        <h1 className="text-white text-[8vw] font-black uppercase tracking-tighter opacity-10 select-none text-center leading-none">
          იდეალური <br /> ღიმილი
        </h1>
      </div> */}

      {/* წინა პლანზე არსებული ტექსტური კონტენტი */}
      <div className="absolute inset-0 flex flex-col justify-between mt-20 p-8 md:p-16 z-30 pointer-events-none">
        
        {/* ზედა მარცხენა ბლოკი */}
        <div className="max-w-xl">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-extrabold leading-[1.2] tracking-tighter uppercase italic mt-10 lg:mt-0 l">
            იგრძენი თავი! <br /> 
            <span className="not-italic text-emerald-500">თავდაჯერებულად</span>
          </h2>
          <p className="text-white/70 mt-6 max-w-sm text-sm md:text-base leading-relaxed font-medium">
            თქვენი სტომატოლოგიური ჯანმრთელობა ჩვენი პრიორიტეტია. 
            გამოსცადეთ თანამედროვე ტექნოლოგიები Dental M-ში.
          </p>
        </div>
        
        {/* ქვედა ბლოკი - ექიმის ბარათი */}
        <div className="flex justify-between items-end">
          <div className="bg-white/5 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/10 text-white min-w-[280px] shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <p className="text-[10px] uppercase opacity-60 tracking-[0.3em] font-bold">გამოცდილი ექიმები</p>
            </div>
            <p className="text-2xl font-black tracking-tight">დრ. ნინო კაპანაძე</p>
            <p className="text-xs opacity-80 mt-1 w-[250px] font-medium text-emerald-400">კბილების მხატვრული რესტავრაციისა და ენდოდონტიის ექსპერტი.</p>
          </div>
          
          {/* აქ შეიძლება დაემატოს სოციალური ქსელები ან სხვა პატარა ელემენტი */}
        </div>
      </div>
    </section>
  );
}