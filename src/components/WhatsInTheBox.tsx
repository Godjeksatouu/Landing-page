import React from 'react';
import { Package, Cable, BookOpen, ShieldCheck } from 'lucide-react';
import { VERIFIED_BOX_CONTENTS } from '../data/productData';

const iconMap: Record<string, React.ElementType> = {
  '1': Package,
  '2': Cable,
  '3': BookOpen,
};

export const WhatsInTheBox: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden border-t border-white/8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#79E000]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#79E000]/10 border border-[#79E000]/30 text-[#79E000] text-xs font-bold mb-5 font-['Cairo']">
            محتويات الشحنة المعتمدة
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            ماذا ستستلم عند وصول الموزع؟
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-medium font-['Cairo']">
            تصلك الشحنة في علبة فاخرة مغلفة ومحمية بالكامل تحتوي على جميع الملحقات.
          </p>
        </div>

        {/* Box Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {VERIFIED_BOX_CONTENTS.map((item, idx) => {
            const Icon = iconMap[item.id] ?? Package;
            return (
              <div
                key={item.id}
                className="glass-card-luxury p-7 rounded-3xl border border-white/8 bg-[#151515]/80 hover:border-[#79E000]/35 transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Icon with number */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#79E000]/12 border border-[#79E000]/25 flex items-center justify-center text-[#79E000] group-hover:bg-[#79E000]/20 group-hover:shadow-[0_0_20px_rgba(121,224,0,0.2)] transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#79E000] flex items-center justify-center text-[#050505] text-xs font-black">
                    {idx + 1}
                  </div>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#79E000]/12 text-[#79E000] text-[10px] font-bold mb-3 font-['Cairo']">
                  عنصر أصلي موثوق
                </div>

                <h3 className="text-base font-black text-white mb-2 font-['Tajawal'] leading-snug">
                  {item.titleAr}
                </h3>

                <p className="text-xs text-gray-500 font-medium leading-relaxed font-['Cairo']">
                  {item.subtitleAr}
                </p>
              </div>
            );
          })}
        </div>

        {/* Inspection Guarantee */}
        <div className="glass-card-luxury p-4 rounded-2xl border border-[#79E000]/20 bg-[#151515]/60 flex flex-wrap items-center justify-between gap-4 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 text-sm text-gray-300 font-['Cairo'] text-right">
            <ShieldCheck className="w-5 h-5 text-[#79E000] shrink-0" />
            <span>يمكنكم فتح الطرد وتفقد المحتويات قبل تسليم المبلغ للموزع.</span>
          </div>
          <span className="text-xs font-bold text-[#79E000] bg-[#79E000]/10 px-3 py-1.5 rounded-full border border-[#79E000]/25 font-['Cairo']">
            ضمان الشحنة 100%
          </span>
        </div>

      </div>
    </section>
  );
};
