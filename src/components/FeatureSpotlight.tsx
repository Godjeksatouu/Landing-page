import React from 'react';
import { Plug, Radio, Lightbulb, Zap, ShieldCheck, ArrowLeft } from 'lucide-react';

export const FeatureSpotlight: React.FC = () => {
  const scrollToCheckout = () => {
    const checkoutEl = document.getElementById('checkout');
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-section-feature relative overflow-hidden border-t border-white/10">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#33FF55]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* SPOTLIGHT 1: Universal AC Socket */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Render Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative glass-card-premium rounded-3xl p-6 border border-[#33FF55]/40 overflow-hidden text-center group">
              <div className="absolute top-4 right-4 bg-[#33FF55]/20 text-[#33FF55] px-3.5 py-1 rounded-full text-xs font-bold border border-[#33FF55]/40 z-20">
                ⚡ منفذ تيار متردد AC عالمي
              </div>

              <img
                src="/src/assets/images/power_station_ports_1785257272780.jpg"
                alt="Universal AC Power Socket PRO FAST YY-203"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 object-cover rounded-2xl group-hover:scale-105 transition-all duration-700 shadow-2xl"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-3 -left-3 glass-card p-3.5 rounded-2xl border border-[#33FF55]/40 bg-[#070b12]/95 hidden sm:flex items-center gap-3 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#33FF55]/20 flex items-center justify-center text-[#33FF55]">
                  <Plug className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-white">تشغيل اللابتوب والمروحة</p>
                  <p className="text-[10px] text-gray-400">طاقة مستقرة 100% بدون انقطاع</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 text-right space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33FF55]/10 border border-[#33FF55]/30 text-[#33FF55] text-xs font-bold">
              <Plug className="w-4 h-4" />
              ميزة تسليط الضوء الأولى
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white font-['Tajawal'] leading-tight">
              مقبس كهربائي AC عالمي <br />
              <span className="green-text-gradient">يشغل جميع أجهزتك المنزلية بسهولة</span>
            </h3>

            <p className="text-base text-gray-300 leading-relaxed font-medium">
              لا داعي للقلق بشأن شواحن اللابتوب، أجهزة التلفزيون الصغيرة، أو مراوح التهوية عند انقطاع الكهرباء. يوفر المقبس العالمي AC تياراً مستقراً وآمناً يتوافق مع كافة المعايير الكهربائية بالمغرب.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200 font-semibold">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#33FF55]"></span>
                شحن لابتوب العمل والماكبوك أثناء ساعات الانقطاع.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#33FF55]"></span>
                تشغيل مراوح التهوية للتبريد في الليالي الحارة.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#33FF55]"></span>
                توصيل الراوتر والإنترنت دون توقف أعمالك.
              </li>
            </ul>

            <button
              onClick={scrollToCheckout}
              className="green-button-glow bg-[#33FF55] text-[#050505] font-black text-sm py-3.5 px-7 rounded-xl inline-flex items-center gap-2 cursor-pointer mt-2"
            >
              <span>احصل على طاقتك المستقلة الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* SPOTLIGHT 2: FM Radio & Antenna */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 text-right space-y-5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33FF55]/10 border border-[#33FF55]/30 text-[#33FF55] text-xs font-bold">
              <Radio className="w-4 h-4" />
              ميزة تسليط الضوء الثانية
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white font-['Tajawal'] leading-tight">
              راديو FM مدمج مع هوائي معدني <br />
              <span className="green-text-gradient">صوت نقي ومتابعة للأخبار في أي مكان</span>
            </h3>

            <p className="text-base text-gray-300 leading-relaxed font-medium">
              استمتع بالتقاط الإذاعات الوطنية والبرامج الإخبارية أثناء رحلات التخييم وفي أوقات الطوارئ. الهوائي المعدني التليسكوبي يضمن استقبالاً فائق النقاء حتى في المناطق النائية والجبلية.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold text-gray-200">
              <div className="glass-card p-3 rounded-xl border border-white/10 flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#33FF55]" />
                <span>هوائي معدني قابل للتمديد</span>
              </div>
              <div className="glass-card p-3 rounded-xl border border-white/10 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#9CFF3A]" />
                <span>مكبر صوت مدمج عالي النقاء</span>
              </div>
            </div>

            <button
              onClick={scrollToCheckout}
              className="green-button-glow bg-[#33FF55] text-[#050505] font-black text-sm py-3.5 px-7 rounded-xl inline-flex items-center gap-2 cursor-pointer mt-2"
            >
              <span>اطلب الآن مع التوصيل المجاني</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Right Render Column */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative glass-card-premium rounded-3xl p-6 border border-[#33FF55]/40 overflow-hidden text-center group">
              <div className="absolute top-4 left-4 bg-[#101010]/90 text-white px-3.5 py-1 rounded-full text-xs font-bold border border-white/20 z-20">
                📻 راديو عالي الحساسية
              </div>

              <img
                src="/src/assets/images/power_station_hero_1785257257475.jpg"
                alt="FM Radio & Antenna PRO FAST YY-203"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 object-cover rounded-2xl group-hover:scale-105 transition-all duration-700 shadow-2xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
