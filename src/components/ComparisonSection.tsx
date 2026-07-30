import React from 'react';
import { Check, X, ShieldCheck, Sparkles, ArrowLeft } from 'lucide-react';

const comparisonItems = [
  {
    feature: 'الهدوء ومستوى الصوت',
    yy203: 'صامت 100% بدون أي ضوضاء',
    generator: 'ضجيج صاخب مزعج للجيران',
    bank: 'صامت ولكن محدود جداً',
  },
  {
    feature: 'المنافذ المتاحة',
    yy203: 'مقبس AC + 3x USB + 3x DC',
    generator: 'مقبس جداري فقط',
    bank: 'منافذ USB صغيرة فقط',
  },
  {
    feature: 'السلامة داخل الغرف',
    yy203: 'صفر انبعاثات وآمن تماماً',
    generator: 'غازات عادم سامة وخطر الحريق',
    bank: 'آمن للغرفة',
  },
  {
    feature: 'التكاليف والصيانة',
    yy203: 'بدون تكاليف صيانة أو بنزين',
    generator: 'تكاليف بنزين وزيوت باستمرار',
    bank: 'بدون صيانة',
  },
  {
    feature: 'راديو FM وكشاف طوارئ',
    yy203: 'راديو FM + هوائي + كشاف LED',
    generator: 'غير متوفر',
    bank: 'غير متوفر',
  },
  {
    feature: 'سهولة الحمل والتنقل',
    yy203: 'مقبض مريح ووزن خفيف',
    generator: 'ثقيل جداً وصعب النقل',
    bank: 'صغير الجيب',
  },
];

export const ComparisonSection: React.FC = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="comparison" className="py-16 md:py-24 scene-comparison border-t border-white/8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#79E000]/7 rounded-full blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#79E000]/10 border border-[#79E000]/30 text-[#79E000] text-xs font-bold mb-5 font-['Cairo']">
            <Sparkles className="w-4 h-4" />
            لماذا يفضل المغاربة هذا المنتج؟
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            مقارنة حاسمة تجعل القرار أسهل
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-medium font-['Cairo']">
            اكتشف السبب الذي يجعل PRO FAST YY-203 الخيار الذكي والأكثر أماناً واقتصاداً.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-card-luxury rounded-3xl p-4 sm:p-8 border border-[#79E000]/20 bg-[#101010]/95 shadow-2xl overflow-x-auto">
          <table className="w-full text-right border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-white/8 font-['Tajawal']">
                <th className="p-4 text-gray-500 text-sm font-bold">وجه المقارنة</th>
                <th className="p-4 bg-[#79E000]/12 text-[#79E000] rounded-t-2xl border-t border-x border-[#79E000]/30 text-base font-black">
                  ⚡ PRO FAST YY-203
                </th>
                <th className="p-4 text-gray-400 text-sm font-bold">المولدات القديمة</th>
                <th className="p-4 text-gray-400 text-sm font-bold">الباور بنك العادية</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs sm:text-sm font-medium font-['Cairo']">
              {comparisonItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/[0.015] transition-colors">
                  <td className="p-4 font-bold text-white font-['Tajawal'] text-sm">{item.feature}</td>
                  <td className="p-4 bg-[#79E000]/8 border-x border-[#79E000]/20 text-[#79E000] font-bold">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#79E000] shrink-0 stroke-[3]" />
                      <span>{item.yy203}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-500">
                    <div className="flex items-center gap-1.5 text-red-400">
                      <X className="w-4 h-4 shrink-0" />
                      <span>{item.generator}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-500">{item.bank}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Bottom CTA row */}
          <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#79E000] font-semibold font-['Cairo']">
              <ShieldCheck className="w-4 h-4" />
              <span>خيار مستدام واقتصادي يوفر عليك مصاريف الوقود اليومية.</span>
            </div>
            <button
              onClick={scrollToCheckout}
              className="btn-lime-glow font-black text-xs md:text-sm py-3 px-6 rounded-xl inline-flex items-center gap-2 cursor-pointer shrink-0 font-['Tajawal']"
            >
              <span>اطلب محطتك الفاخرة الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
