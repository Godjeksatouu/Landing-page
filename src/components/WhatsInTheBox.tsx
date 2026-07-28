import React from 'react';
import { Package, Cable, BookOpen, CheckCircle2, ShieldCheck } from 'lucide-react';
import { VERIFIED_BOX_CONTENTS } from '../data/productData';

export const WhatsInTheBox: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33FF55]/10 border border-[#33FF55]/30 text-[#33FF55] text-xs font-bold mb-4">
            محتويات الشحنة المعتمدة
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            ماذا ستستلم عند وصول الموزع إليك؟
          </h2>

          <p className="text-base md:text-lg text-gray-300 font-medium">
            تصلك شحنة محطة PRO FAST YY-203 في علبة فاخرة مغلفة ومحمية بالكامل تحتوي على جميع الملحقات الموثوقة.
          </p>
        </div>

        {/* Box Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {VERIFIED_BOX_CONTENTS.map((item) => {
            let Icon = Package;
            if (item.id === '2') Icon = Cable;
            if (item.id === '3') Icon = BookOpen;

            return (
              <div
                key={item.id}
                className="glass-card p-6 rounded-2xl border border-white/10 bg-[#0e0e0e] hover:border-[#33FF55]/40 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#161616] border border-[#33FF55]/30 flex items-center justify-center text-[#33FF55] mb-4 group-hover:scale-110 transition-all green-glow-subtle">
                  <Icon className="w-8 h-8" />
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#33FF55]/15 text-[#33FF55] text-[11px] font-bold mb-2">
                  عنصر أصلي {item.id}#
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-['Tajawal']">
                  {item.titleAr}
                </h3>

                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                  {item.subtitleAr}
                </p>
              </div>
            );
          })}

        </div>

        <div className="mt-10 glass-card p-4 rounded-2xl border border-white/10 bg-[#0d0d0d] flex flex-wrap items-center justify-between gap-4 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 text-sm text-gray-200">
            <ShieldCheck className="w-5 h-5 text-[#33FF55]" />
            <span>يمكنكم فتح الطرد وتفقد المحتويات قبل تسليم المبلغ للموزع.</span>
          </div>
          <span className="text-xs font-bold text-[#33FF55] bg-[#33FF55]/10 px-3 py-1 rounded-full border border-[#33FF55]/30">
            ضمان الشحنة 100%
          </span>
        </div>

      </div>
    </section>
  );
};
