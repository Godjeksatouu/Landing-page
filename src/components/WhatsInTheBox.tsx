import React from 'react';
import { Package, Cable, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { VERIFIED_BOX_CONTENTS } from '../data/productData';
import { boxUnboxingImg } from '../assets/images';

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
            محتويات الشحنة المعتمدة بالصورة الحقيقية
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            ماذا ستستلم عند وصول الموزع؟
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-medium font-['Cairo']">
            تصلك الشحنة في علبة فاخرة مغلفة ومحمية بالكامل تحتوي على جميع الملحقات الأصلية.
          </p>
        </div>

        {/* Main Unboxing Realistic Photograph Showcase */}
        <div className="max-w-4xl mx-auto mb-10 rounded-3xl overflow-hidden border border-[#79E000]/30 glass-card-luxury p-4 sm:p-6 bg-[#111]/90 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Real Unboxing Commercial Photo */}
            <div className="md:col-span-7 relative rounded-2xl overflow-hidden border border-white/10 group shadow-xl">
              <img
                src={boxUnboxingImg}
                alt="محتويات الصندوق الحقيقية - محطة الطاقة كابل الشحن والكتيب"
                className="w-full h-56 sm:h-72 object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between bg-[#050505]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#79E000]/40 text-xs font-bold text-[#79E000] font-['Cairo']">
                <span>📦 صورة حقيقية للشحنة والعلبة الرسمية</span>
                <span className="text-[10px] text-white/80">3 عناصر داخلية</span>
              </div>
            </div>

            {/* Included Items Checklist */}
            <div className="md:col-span-5 text-right space-y-4 font-['Cairo'] p-2">
              <h3 className="text-lg font-black text-white font-['Tajawal'] border-b border-white/8 pb-3">
                المحتويات داخل الصندوق:
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#79E000] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white text-xs block">1. محطة PRO FAST YY-203</strong>
                    <span className="text-[11px] text-gray-400">الوحدة الرئيسية بمقبض الحمل والتغليف الأصلي</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#79E000] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white text-xs block">2. كابل الشحن المباشر (AC Cable)</strong>
                    <span className="text-[11px] text-gray-400">كابل معتمد لشحن المحطة من المقبس الجداري</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#79E000] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white text-xs block">3. كتيب التعليمات والدليل الإرشادي</strong>
                    <span className="text-[11px] text-gray-400">دليل مبسط لكيفية التشغيل والمحافظة على الجهاز</span>
                  </div>
                </li>
              </ul>

              <div className="pt-2 border-t border-white/8">
                <span className="inline-block text-[11px] font-bold text-[#79E000] bg-[#79E000]/12 px-3 py-1 rounded-full border border-[#79E000]/25">
                  ✓ كل العنصر مفحوص ومختبر قبل التغليف
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Box Items Cards - 2 columns on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mb-8 items-stretch">
          {VERIFIED_BOX_CONTENTS.map((item, idx) => {
            const Icon = iconMap[item.id] ?? Package;
            return (
              <div
                key={item.id}
                className="glass-card-luxury p-3.5 sm:p-6 rounded-2xl md:rounded-3xl border border-white/8 bg-[#151515]/80 hover:border-[#79E000]/35 transition-all duration-300 flex flex-col items-center text-center justify-between group h-full"
              >
                <div>
                  {/* Icon with number */}
                  <div className="relative mb-3 sm:mb-4 inline-block">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#79E000]/12 border border-[#79E000]/25 flex items-center justify-center text-[#79E000] group-hover:bg-[#79E000]/20 group-hover:shadow-[0_0_20px_rgba(121,224,0,0.2)] transition-all duration-300">
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <div className="absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#79E000] flex items-center justify-center text-[#050505] text-[9px] sm:text-[11px] font-black">
                      {idx + 1}
                    </div>
                  </div>

                  <div className="inline-block px-2 py-0.5 rounded-full bg-[#79E000]/12 text-[#79E000] text-[9px] sm:text-[10px] font-bold mb-1.5 font-['Cairo']">
                    مكون موثوق
                  </div>

                  <h3 className="text-xs sm:text-sm font-black text-white mb-1 font-['Tajawal'] leading-snug">
                    {item.titleAr}
                  </h3>

                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium leading-relaxed font-['Cairo']">
                    {item.subtitleAr}
                  </p>
                </div>
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
