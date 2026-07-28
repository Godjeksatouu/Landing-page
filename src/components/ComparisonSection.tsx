import React from 'react';
import { Check, X, ShieldCheck, Zap, Sparkles, ArrowLeft } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const scrollToCheckout = () => {
    const checkoutEl = document.getElementById('checkout');
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const comparisonItems = [
    {
      feature: 'الهدوء ومستوى الصوت',
      yy203: 'صامت 100% بدون أي ضوضاء',
      generator: 'ضجيج صاخب مزعج للجيران',
      bank: 'صامت ولكن طاقته محدودة جداً'
    },
    {
      feature: 'المنافذ المتاحة',
      yy203: 'مقبس AC + 3x USB + 3x DC',
      generator: 'مقبس جداري فقط',
      bank: 'منافذ USB صغيرة فقط'
    },
    {
      feature: 'الانبعاثات والسلامة داخل الغرف',
      yy203: 'صفر انبعاثات وآمن تماماً داخل الغرفة',
      generator: 'غازات عادم سامة وخطر الحريق',
      bank: 'آمن للغرفة'
    },
    {
      feature: 'التكاليف والصيانة المستمرة',
      yy203: 'بدون أي تكاليف صيانة أو بنزين',
      generator: 'تكاليف شراء البنزين والزيوت باستمرار',
      bank: 'بدون صيانة'
    },
    {
      feature: 'راديو FM وكشاف طوارئ مدمج',
      yy203: 'راديو FM مدمج + هوائي + كشاف LED',
      generator: 'غير متوفر',
      bank: 'غير متوفر غالباً'
    },
    {
      feature: 'سهولة الحمل والتنقل',
      yy203: 'مقبض مدمج مريح ووزن خفيف',
      generator: 'ثقيل جداً وصعب النقل',
      bank: 'صغير الجيب'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-section-comparison border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33FF55]/10 border border-[#33FF55]/30 text-[#33FF55] text-xs font-bold mb-4 font-['Tajawal']">
            <Sparkles className="w-4 h-4" />
            لماذا يفضل المغاربة هذا المنتج؟
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            مقارنة حاسمة تجعل القرار أسهل وأوضح
          </h2>

          <p className="text-base md:text-lg text-gray-300 font-medium">
            اكتشف السبب الذي يجعل محطة PRO FAST YY-203 الخيار الذكي والأكثر أماناً واقتصاداً للمنزل والسفر.
          </p>
        </div>

        {/* Comparison Table Glass Box */}
        <div className="glass-card-premium rounded-3xl p-4 sm:p-8 border border-[#33FF55]/30 bg-[#090d16]/95 shadow-2xl overflow-x-auto">
          <table className="w-full text-right border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-white/15 text-sm font-bold font-['Tajawal']">
                <th className="p-4 text-gray-400">وجه المقارنة</th>
                <th className="p-4 bg-[#33FF55]/15 text-[#33FF55] rounded-t-2xl border-t border-x border-[#33FF55]/40 text-base font-black">
                  ⚡ PRO FAST YY-203
                </th>
                <th className="p-4 text-gray-300">المولدات القديمة بالبنزين</th>
                <th className="p-4 text-gray-300">شواحن الباور بنك العادية</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs sm:text-sm font-medium">
              {comparisonItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-bold text-white font-['Tajawal']">{item.feature}</td>
                  <td className="p-4 bg-[#33FF55]/10 border-x border-[#33FF55]/30 text-[#33FF55] font-bold">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#33FF55] shrink-0 stroke-[3]" />
                      <span>{item.yy203}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-400">
                    <div className="flex items-center gap-1.5 text-red-400">
                      <X className="w-4 h-4 shrink-0" />
                      <span>{item.generator}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-400">{item.bank}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#33FF55] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>خيار مستدام واقتصادي يوفر عليك مصاريف الوقود اليومية.</span>
            </div>

            <button
              onClick={scrollToCheckout}
              className="green-button-glow bg-[#33FF55] text-[#050505] font-black text-xs md:text-sm py-3 px-6 rounded-xl inline-flex items-center gap-2 cursor-pointer shrink-0"
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
