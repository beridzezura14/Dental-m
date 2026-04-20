"use client";
import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

export default function GlobalLoader() {
  const { active } = useProgress(); // active ხდება false, როცა მოდელი მზადაა
  const [displayProgress, setDisplayProgress] = useState(0);
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // ავტომატური ათვლა 0-დან 100-მდე
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev < 85) {
          // 85%-მდე მიდის ჩვეულებრივი სისწრაფით
          return prev + 1;
        } else if (prev < 99) {
          // 85-დან 99-მდე ნელდება, რომ რეალურ ჩატვირთვას დაელოდოს
          return prev + 0.5;
        }
        return prev;
      });
    }, 20);

    // თუ მოდელი ჩაიტვირთა (active === false), პირდაპირ გადავიდეს 100-ზე
    if (!active && displayProgress > 10) {
      setDisplayProgress(100);
    }

    return () => clearInterval(interval);
  }, [active, displayProgress]);

  useEffect(() => {
    // როცა 100-ზე ავალთ, გავაქროთ ლოადერი
    if (displayProgress >= 100) {
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setShow(false), 800);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [displayProgress]);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-all duration-1000 ${
        fadeOut ? "opacity-0 invisible scale-110" : "opacity-100 visible"
      }`}
    >
      <div className="flex flex-col items-center">
        
        {/* წრიული ინდიკატორი */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="56"
              cy="56"
              r="50"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              className="text-slate-100"
            />
            <circle
              cx="56"
              cy="56"
              r="50"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={314}
              strokeDashoffset={314 - (314 * Math.floor(displayProgress)) / 100}
              strokeLinecap="round"
              className="text-emerald-500 transition-all duration-150 ease-linear"
            />
          </svg>
          <span className="absolute text-emerald-600 font-black text-2xl tabular-nums">
            {Math.floor(displayProgress)}%
          </span>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">
            Dental <span className="text-emerald-500 not-italic">M</span>
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></span>
            <p className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.4em]">
              იტვირთება
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}