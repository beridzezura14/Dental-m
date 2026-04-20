"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { 
    q: "მტკივნეულია თუ არა იმპლანტაცია?", 
    a: "თანამედროვე ანესთეზიის პირობებში პროცედურა სრულიად უმტკივნეულოა. პაციენტების უმრავლესობა მხოლოდ მცირე დისკომფორტს გრძნობს, რაც ჩვეულებრივ ექსტრაქციაზე ნაკლებია." 
  },
  { 
    q: "რა დრო სჭირდება კბილების გათეთრებას?", 
    a: "კლინიკური გათეთრება საშუალოდ 45-60 წუთს გრძელდება. ჩვენ ვიყენებთ უსაფრთხო ტექნოლოგიებს, რომლებიც არ აზიანებს ემალს და შედეგი მომენტალურად ჩანს." 
  },
  { 
    q: "მოქმედებს თუ არა განვადება?", 
    a: "დიახ, ჩვენ ვთანამშრომლობთ წამყვან ქართულ ბანკებთან (საქართველოს ბანკი, თიბისი) და გთავაზობთ მოქნილ, თქვენზე მორგებულ განვადების პირობებს." 
  },
  { 
    q: "რა ასაკიდან არის რეკომენდებული ბრეკეტების გაკეთება?", 
    a: "კონსულტაცია სასურველია 7-8 წლის ასაკიდან, თუმცა ორთოდონტიული მკურნალობა (ბრეკეტები ან ელაინერები) ეფექტურია ნებისმიერ ასაკში, როგორც ბავშვებისთვის, ისე მოზრდილებისთვის." 
  },
  { 
    q: "რამდენად ხშირად არის საჭირო პროფესიული წმენდა?", 
    a: "იდეალური ღიმილისა და ჯანმრთელობის შესანარჩუნებლად, პროფესიული ჰიგიენური წმენდა (Air-Flow და სკალერი) რეკომენდებულია 6 თვეში ერთხელ." 
  },
  { 
    q: "რა განსხვავებაა ვინირებსა და ლუმინირებს შორის?", 
    a: "ვინირები მოითხოვს კბილის მცირე პრეპარირებას, ხოლო ლუმინირები უფრო თხელია და ხშირ შემთხვევაში კბილის დამუშავების გარეშეც მაგრდება. შერჩევა ხდება ინდივიდუალურად." 
  },
  { 
    q: "გაქვთ თუ არა უფასო კონსულტაცია?", 
    a: "ჩვენს კლინიკაში პირველადი კონსულტაცია და მკურნალობის გეგმის შედგენა ხდება მაღალკვალიფიციური ექიმების მიერ. დეტალებისთვის გთხოვთ დაგვიკავშირდეთ." 
  },
  { 
    q: "რამდენი წელი ძლებს კბილის იმპლანტი?", 
    a: "სწორი მოვლისა და ჰიგიენის პირობებში, თანამედროვე ტიტანის იმპლანტები გათვლილია მთელი ცხოვრების მანძილზე გამოსაყენებლად." 
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9] mb-8">
            ხშირად დასმული <br /> 
            <span className="text-emerald-500 italic">შეკითხვები</span>
        </h2>
          <p className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.4em] mt-4">ხშირად დასმული კითხვები</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <span className="text-lg font-bold text-slate-900 uppercase tracking-tighter leading-tight">{faq.q}</span>
                <div className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  {openIndex === i ? <Minus className="text-emerald-500" /> : <Plus className="text-emerald-500" />}
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="p-8 pt-0 text-slate-500 font-medium leading-relaxed border-t border-slate-50">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
