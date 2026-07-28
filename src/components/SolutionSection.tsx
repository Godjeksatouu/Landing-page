import React from 'react';
import { Zap, ShieldCheck, BatteryCharging, Radio, Lightbulb, Plug, Sparkles, ArrowLeft } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const scrollToCheckout = () => {
    const checkoutEl = document.getElementById('checkout');
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-scene-solution border-t border-white/10 relative overflow-hidden">
      {/* Background Lighting Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#33FF55]/15 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#33FF55]/15 border border-[#33FF55]/40 text-[#33FF55] text-xs font-bold mb-4 font-['Tajawal']">
            <Sparkles className="w-4 h-4 text-[#33FF55]" />
            الهندسة المتكاملة للطاقة النظيفة
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-['Tajawal'] leading-tight mb-6">
            حل واحد متكامل يحل كافة المشاكل: <br />
            <span className="green-text-gradient">محطة PRO FAST YY-203</span>
          </h2>

          <p className="text-base md:text-xl text-gray-200 leading-relaxed font-medium">
            مصممة لتوفر لك الطاقة الصامتة والنظيفة بدون أي أدخنة، روائح بترول، أو ضوضاء مزعجة.
          </p>
        </div>

        {/* MASSIVE FULL-BLEED FRONT PANEL VISUAL SCENE */}
        <div className="relative max-w-5xl mx-auto rounded-[2.5rem] p-6 md:p-12 glass-scene-emerald border border-[#33FF55]/40 shadow-2xl overflow-hidden mb-16 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Panel Image */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
                <img
                  src="/src/assets/images/power_station_ports_1785257272780.jpg"
                  alt="PRO FAST YY-203 Panel Details"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[420px] object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-3 right-3 bg-[#03070E]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#33FF55]/40 text-xs font-bold text-[#33FF55]">
                  واجهة التشغيل الشاملة
                </div>
              </div>
            </div>

            {/* Spec Highlights List */}
            <div className="lg:col-span-5 text-right space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#33FF55] block font-['Tajawal']">التكنولوجيا المعتمدة</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-['Tajawal']">شاشة إلكترونية LCD ومنافذ متعددة</h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-200 font-semibold">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#060b14] border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-[#33FF55]/20 flex items-center justify-center text-[#33FF55] shrink-0">
                    <Plug className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">مقبس AC عالمي</h4>
                    <p className="text-[11px] text-gray-400 font-medium">تشغيل الأجهزة المنزلية وشواحن اللابتوبات</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#060b14] border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-[#33FF55]/20 flex items-center justify-center text-[#33FF55] shrink-0">
                    <BatteryCharging className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">3x منافذ USB سريعة</h4>
                    <p className="text-[11px] text-gray-400 font-medium">شحن كافة الهواتف والأجهزة الذكية</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#060b14] border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-[#33FF55]/20 flex items-center justify-center text-[#33FF55] shrink-0">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">راديو FM + هوائي معدني</h4>
                    <p className="text-[11px] text-gray-400 font-medium">متابعة الأخبار والإذاعات الوطنية بنقاء ممتاز</p>
                  </div>
                </div>
              </div>

              <button
                onClick={scrollToCheckout}
                className="w-full btn-emerald-glow text-[#020407] font-black text-sm py-4 px-6 rounded-xl inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>احجز محطتك الآن — والدفع عند الاستلام</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
