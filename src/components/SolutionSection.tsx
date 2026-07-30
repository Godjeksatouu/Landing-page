import React from 'react';
import { Zap, BatteryCharging, Radio, Plug, Sparkles, ArrowLeft } from 'lucide-react';
import { portsImg } from '../assets/images';

const highlights = [
  {
    icon: Plug,
    title: 'مقبس AC عالمي',
    body: 'تشغيل الأجهزة المنزلية وشواحن اللابتوبات والراوتر بسهولة',
  },
  {
    icon: BatteryCharging,
    title: '3x منافذ USB سريعة',
    body: 'شحن كافة الهواتف والأجهزة الذكية في آنٍ واحد',
  },
  {
    icon: Radio,
    title: 'راديو FM + هوائي معدني',
    body: 'متابعة الأخبار والإذاعات الوطنية بنقاء ممتاز في أي مكان',
  },
];

export const SolutionSection: React.FC = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="features" className="py-20 md:py-28 scene-solution border-t border-white/8 relative overflow-hidden">
      {/* Background Orb */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#79E000]/12 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#79E000]/12 border border-[#79E000]/35 text-[#79E000] text-xs font-bold mb-5 font-['Cairo']">
            <Sparkles className="w-4 h-4" />
            الهندسة المتكاملة للطاقة النظيفة
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-['Tajawal'] leading-tight mb-6">
            حل واحد يحل كل المشاكل<br />
            <span className="lime-text-gradient">محطة PRO FAST YY-203</span>
          </h2>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed font-medium font-['Cairo']">
            مصممة لتوفير الطاقة الصامتة والنظيفة بدون أي أدخنة أو روائح بترول أو ضوضاء مزعجة لأسرتك وجيرانك.
          </p>
        </div>

        {/* Main Feature Card */}
        <div className="relative max-w-5xl mx-auto rounded-[2.5rem] p-6 md:p-12 glass-scene-lime border border-[#79E000]/40 shadow-2xl overflow-hidden mb-12 group">
          {/* Inner ambient light */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#79E000]/6 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">

            {/* Ports Image */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/12 shadow-2xl">
                <img
                  src={portsImg}
                  alt="واجهة منافذ محطة PRO FAST YY-203"
                  className="w-full h-auto max-h-[420px] object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 bg-[#050505]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#79E000]/40 text-xs font-bold text-[#79E000] font-['Cairo']">
                  واجهة التشغيل الشاملة
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="lg:col-span-5 text-right space-y-6">
              <div>
                <span className="text-xs font-bold text-[#79E000] block font-['Cairo'] mb-1">التكنولوجيا المعتمدة</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-['Tajawal'] leading-snug">
                  شاشة LCD رقمية ومنافذ متعددة في جهاز واحد
                </h3>
              </div>

              <div className="space-y-3">
                {highlights.map(({ icon: Icon, title, body }) => (
                  <div
                    key={title}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-[#0f0f0f]/80 border border-white/8 hover:border-[#79E000]/30 transition-all duration-300 group/item"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#79E000]/15 flex items-center justify-center text-[#79E000] shrink-0 group-hover/item:bg-[#79E000]/25 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm font-['Tajawal']">{title}</h4>
                      <p className="text-[11px] text-gray-500 font-medium font-['Cairo']">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToCheckout}
                className="w-full btn-lime-glow font-black text-sm py-4 px-6 rounded-xl inline-flex items-center justify-center gap-2 cursor-pointer font-['Tajawal']"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>احجز محطتك الآن — الدفع عند الاستلام</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
