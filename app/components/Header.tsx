"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // სქროლის კონტროლი
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // მობაილზე სქროლის დაბლოკვა, როცა მენიუ ღიაა
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { name: 'ჩვენს შესახებ', href: '#about' },
    { name: 'მომსახურება', href: '#services' },
    { name: 'ექიმები', href: '#doctors' },
    { name: 'კონტაქტი', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 lg:px-16 ${
        scrolled 
          ? "py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-lg" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-white transform group-hover:rotate-12 transition-all duration-300">
            D
          </div>
          <span className="text-white font-bold tracking-tighter text-2xl uppercase">
            Dental<span className="text-emerald-500 italic">M</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                scrolled ? "text-slate-200" : "text-white"
              } hover:text-emerald-500`}
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Button & Menu */}
        <div className="flex items-center gap-6">
          <a 
            href="#contact"
            className={`hidden sm:block font-black uppercase tracking-widest text-[10px] px-8 py-3 rounded-xl transition-all duration-300 active:scale-95 ${
              scrolled 
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400" 
                : "bg-white text-slate-950 hover:bg-emerald-500 hover:text-white"
            }`}
          >
            ვიზიტის დაჯავშნა
          </a>

          {/* Hamburger Menu Icon */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-all z-[110]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 bg-slate-950/98 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-8 z-[105] ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 invisible"
      }`}>
        {navItems.map((item, i) => (
          <a 
            key={item.name} 
            href={item.href} 
            onClick={() => setIsOpen(false)}
            className="text-white text-4xl font-black uppercase tracking-tighter hover:text-emerald-500 transition-all transform hover:scale-110"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {item.name}
          </a>
        ))}
        <a 
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="mt-8 bg-emerald-500 text-white px-14 py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-emerald-500/40 active:scale-95"
        >
          ვიზიტის დაჯავშნა
        </a>
      </div>
    </header>
  );
};

export default Header;