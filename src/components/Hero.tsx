import React from 'react';
import { ShieldCheck, Truck, Star, Zap, Radio, Plug, Lightbulb, Clock, ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

export const Hero: React.FC = () => {
  const scrollToCheckout = () => {
    const checkoutEl = document.getElementById('checkout');
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden scene-hero border-b border-white/10">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#33FF55]/18 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-5 w-[400px] h-[400px] bg-[#9CFF3A]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Morocco Exclusive Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#06120b]/90 border border-[#33FF55]/40 green-glow-subtle backdrop-blur-md">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#33FF55] animate-ping" />
            <span className="text-xs md:text-sm font-bold text-[#33FF55] flex items-center gap-2 font-['Tajawal'] tracking-wide">
              <Sparkles className="w-4 h-4 text-[#33FF55]" />
              العرض الحصري الأكثر طلباً في المغرب 🇲🇦
            </span>
          </div>
        </div>

        {/* Headline & Headline Copy */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.2] mb-6 font-['Tajawal'] tracking-tight">
            ⚡ لا تخلي انقطاع الكهرباء يوقف حياتك <br />
            <span className="green-text-gradient inline-block mt-2">
              محطة PRO FAST YY-203
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-medium max-w-3xl mx-auto mb-6">
            محطة طاقة محمولة لتشغيل الراوتر، شحن الهواتف، إنارة البيت والمكتب في أي وقت — مصدر طاقة احتياطي عملي وموثوق.
          </p>

          {/* 3 Core Immediate Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-gray-100 mb-8 font-['Tajawal']">
            <span className="flex items-center gap-2 bg-[#0a141e]/90 px-3.5 py-2 rounded-xl border border-[#33FF55]/30">
              <CheckCircle2 className="w-4 h-4 text-[#33FF55] shrink-0" />
              الدفع عند الاستلام
            </span>
            <span className="flex items-center gap-2 bg-[#0a141e]/90 px-3.5 py-2 rounded-xl border border-[#33FF55]/30">
              <Truck className="w-4 h-4 text-[#33FF55] shrink-0" />
              توصيل مجاني 24-48 ساعة
            </span>
            <span className="flex items-center gap-2 bg-[#0a141e]/90 px-3.5 py-2 rounded-xl border border-[#33FF55]/30">
              <ShieldCheck className="w-4 h-4 text-[#33FF55] shrink-0" />
              معاينة المنتج قبل الدفع
            </span>
          </div>
        </div>

        {/* HERO PRODUCT IMAGE SHOWCASE */}
        <div className="relative w-full max-w-3xl mx-auto my-8 group">
          {/* Backlight Glow Aura */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#33FF55]/30 via-[#9CFF3A]/15 to-transparent rounded-full filter blur-[90px] group-hover:blur-[120px] transition-all duration-700"></div>

          {/* Main Product Frame */}
          <div className="relative glass-scene-emerald rounded-[2.5rem] p-6 md:p-10 border border-[#33FF55]/40 text-center shadow-2xl overflow-hidden">
            <div className="absolute top-4 right-6 bg-[#040a12]/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#33FF55]/50 text-xs font-black text-[#33FF55] z-20 font-['Tajawal']">
              PRO FAST YY-203
            </div>

            <img
              src="/src/assets/images/power_station_hero_1785257257475.jpg"
              alt="PRO FAST YY-203 Portable Power Station Morocco"
              referrerPolicy="no-referrer"
              className="w-full max-h-[420px] sm:max-h-[500px] object-contain rounded-3xl animate-float-product filter drop-shadow-[0_30px_45px_rgba(0,0,0,0.95)]"
            />

            {/* Micro Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-6 text-right font-['Tajawal']">
              <div className="glass-card p-2.5 rounded-xl border border-white/10 flex items-center gap-2">
                <Plug className="w-4 h-4 text-[#33FF55] shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-400">مقبس عام</p>
                  <p className="text-xs font-bold text-white">AC Outlet</p>
                </div>
              </div>

              <div className="glass-card p-2.5 rounded-xl border border-white/10 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#9CFF3A] shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-400">منافذ شحن</p>
                  <p className="text-xs font-bold text-white">3x USB</p>
                </div>
              </div>

              <div className="glass-card p-2.5 rounded-xl border border-white/10 flex items-center gap-2 col-span-2 sm:col-span-1">
                <Radio className="w-4 h-4 text-[#33FF55] shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-400">راديو FM</p>
                  <p className="text-xs font-bold text-white">هوائي معدني</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRICING & OFFER BENTO BOX */}
        <div className="max-w-2xl mx-auto glass-scene-card p-6 md:p-8 rounded-3xl border border-white/15 bg-[#060a12]/95 shadow-2xl mb-8 text-right relative overflow-hidden">
          <div className="absolute top-0 left-0 bg-gradient-to-r from-[#33FF55] to-[#9CFF3A] text-[#020407] text-xs font-black px-5 py-1.5 rounded-br-2xl shadow-lg font-['Tajawal']">
            توفير 700 درهم مغربي ({PRODUCT_INFO.discountPercent}% OFF)
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-4 mt-3 mb-4">
            <div className="flex items-baseline gap-2 font-['Tajawal']">
              <span className="text-5xl sm:text-6xl font-black text-[#33FF55]">
                {PRODUCT_INFO.price}
              </span>
              <span className="text-2xl font-bold text-gray-200">
                {PRODUCT_INFO.currency}
              </span>
              <span className="text-xl text-gray-400 line-through mr-3 font-semibold">
                {PRODUCT_INFO.oldPrice} {PRODUCT_INFO.currency}
              </span>
            </div>

            <div className="text-xs font-bold text-[#33FF55] bg-[#33FF55]/10 px-3.5 py-1.5 rounded-full border border-[#33FF55]/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#33FF55] animate-ping"></span>
              <span>متوفر حالياً بالثمن المخفض</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-gray-200 font-medium font-['Tajawal']">
            <div className="flex items-center gap-2 text-[#33FF55]">
              <Truck className="w-4 h-4 shrink-0" />
              <span>توصيل مجاني 100%</span>
            </div>
            <div className="flex items-center gap-2 text-[#9CFF3A]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>الدفع عند الاستلام</span>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
              <Clock className="w-4 h-4 text-[#33FF55] shrink-0" />
              <span>تسليم خلال 24-48 ساعة</span>
            </div>
          </div>
        </div>

        {/* PRIMARY CALL TO ACTION BUTTON */}
        <div className="max-w-xl mx-auto text-center space-y-4">
          <button
            onClick={scrollToCheckout}
            className="w-full btn-emerald-glow text-[#020407] font-black text-xl py-5 px-8 rounded-2xl flex items-center justify-center gap-3 cursor-pointer shadow-2xl font-['Tajawal']"
          >
            <Zap className="w-6 h-6 fill-current text-[#020407]" />
            <span>اطلب الآن — الدفع عند الاستلام</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>

          <p className="text-xs text-gray-400 font-medium flex items-center justify-center gap-2 font-['Tajawal']">
            <ShieldCheck className="w-4 h-4 text-[#33FF55]" />
            تتأكد وتتفحص طردك بنفسك قبل الدفع للموزع
          </p>
        </div>

      </div>
    </section>
  );
};
