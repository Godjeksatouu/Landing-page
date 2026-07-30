import React from 'react';
import { ShieldCheck, Truck, Zap, ArrowDown, CheckCircle2, Plug, Radio, Lightbulb, Sparkles } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';
import { heroImg } from '../assets/images';

export const Hero: React.FC = () => {
  const scrollToCheckout = () => {
    const checkoutEl = document.getElementById('checkout');
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-6 pb-16 md:pt-16 md:pb-32 overflow-hidden scene-hero border-b border-white/8">
      {/* Ambient Radial Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#79E000]/14 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#79E000]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#79E000]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Moroccan Exclusivity Badge */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 md:px-5 md:py-2.5 rounded-full bg-[#151515]/90 border border-[#79E000]/40 backdrop-blur-md shadow-[0_0_30px_rgba(121,224,0,0.1)] max-w-[90vw] text-center">
            <span className="flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#79E000] animate-ping shrink-0" />
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#79E000] shrink-0" />
            <span className="text-[11px] md:text-sm font-bold text-[#79E000] font-['Tajawal'] tracking-wide leading-tight">
              العرض الحصري الأكثر طلباً في المغرب 🇲🇦
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] mb-6 font-['Tajawal'] tracking-tight">
            لا تخلي انقطاع الكهرباء يوقف حياتك
            <span className="block lime-text-gradient mt-2">
              ⚡ PRO FAST YY-203
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-medium max-w-3xl mx-auto mb-8 font-['Cairo']">
            محطة طاقة محمولة عمليّة — تشغيل الراوتر، شحن الهواتف، إنارة البيت والمكتب في أي وقت تشاء بدون أي ضوضاء أو بنزين.
          </p>

          {/* Instant Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-10 font-['Cairo'] px-2">
            {[
              { icon: CheckCircle2, text: 'الدفع عند الاستلام' },
              { icon: Truck, text: 'توصيل مجاني 24-48 ساعة' },
              { icon: ShieldCheck, text: 'معاينة قبل الدفع' },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 bg-[#151515]/90 px-3 py-2 rounded-xl border border-[#79E000]/20 text-xs font-semibold text-gray-100 shadow-lg whitespace-nowrap">
                <Icon className="w-3.5 h-3.5 text-[#79E000] shrink-0" />
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Product Showcase */}
        <div className="relative w-full max-w-3xl mx-auto my-8 group">
          {/* Product Aura Backlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#79E000]/25 via-[#79E000]/10 to-transparent rounded-full filter blur-[100px] group-hover:blur-[130px] transition-all duration-700 pointer-events-none" />

          {/* Main Product Card */}
          <div className="relative glass-scene-lime rounded-[2.5rem] p-6 md:p-10 text-center shadow-2xl overflow-hidden">
            {/* Model Tag */}
            <div className="absolute top-4 right-6 z-20">
              <div className="bg-[#050505]/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#79E000]/50 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#79E000]" />
                <span className="text-xs font-black text-[#79E000] font-['Tajawal']">PRO FAST YY-203</span>
              </div>
            </div>

            {/* Rating Badge */}
            <div className="absolute top-4 left-6 z-20 bg-[#050505]/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-yellow-500/30">
              <span className="text-xs font-black text-yellow-400 font-['Cairo']">⭐ 4.9 (384 تقييم)</span>
            </div>

            {/* Product Image */}
            <img
              src={heroImg}
              alt="محطة الطاقة المحمولة PRO FAST YY-203 – المغرب"
              className="w-full max-h-[280px] sm:max-h-[380px] md:max-h-[460px] object-contain rounded-3xl animate-float-product filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.95)] mx-auto"
            />

            {/* Feature Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6 font-['Cairo']">
              {[
                { icon: Plug, label: 'مقبس عام', sub: 'Universal AC' },
                { icon: Zap, label: '3 منافذ USB', sub: 'شحن الهواتف' },
                { icon: Radio, label: 'راديو FM', sub: 'هوائي معدني' },
                { icon: Lightbulb, label: 'كشاف LED', sub: 'طوارئ مدمج' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-[#151515]/80 p-2.5 rounded-xl border border-white/8 flex items-center gap-2 text-right hover:border-[#79E000]/30 transition-colors duration-300">
                  <Icon className="w-4 h-4 text-[#79E000] shrink-0" />
                  <div>
                    <p className="text-[11px] font-bold text-white leading-tight">{label}</p>
                    <p className="text-[10px] text-gray-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price Block Bento */}
        <div className="max-w-2xl mx-auto glass-card-luxury rounded-3xl border border-white/10 bg-[#151515]/90 shadow-2xl mb-8 overflow-hidden">
          {/* Discount Ribbon */}
          <div className="bg-gradient-to-r from-[#79E000] to-[#99F21D] text-[#050505] text-xs font-black px-5 py-2 flex items-center justify-between font-['Tajawal']">
            <span>🎉 توفير 700 درهم مغربي ({PRODUCT_INFO.discountPercent}% خصم)</span>
            <span className="flex items-center gap-1.5 bg-[#050505]/20 px-2.5 py-0.5 rounded-full text-[#050505]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#050505] animate-ping" />
              متبقي 9 قطع
            </span>
          </div>

          <div className="p-5 md:p-8">
            {/* Price Display */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between gap-3 mb-5 text-right font-['Tajawal']">
              <div className="flex items-baseline gap-2.5">
                <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[#79E000] tabular-nums">
                  {PRODUCT_INFO.price}
                </span>
                <span className="text-xl md:text-2xl font-bold text-gray-200">{PRODUCT_INFO.currency}</span>
                <span className="text-base md:text-lg text-gray-500 line-through font-semibold">
                  {PRODUCT_INFO.oldPrice} {PRODUCT_INFO.currency}
                </span>
              </div>
              <div className="text-xs font-bold text-[#79E000] bg-[#79E000]/10 px-3 py-1.5 rounded-full border border-[#79E000]/25 self-start sm:self-auto">
                السعر المخفّض حصري اليوم
              </div>
            </div>

            {/* Micro Trust Row */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/8 text-xs font-semibold font-['Cairo']">
              {[
                { icon: Truck, text: 'توصيل مجاني', color: 'text-[#79E000]' },
                { icon: ShieldCheck, text: 'دفع عند الاستلام', color: 'text-[#79E000]' },
                { icon: CheckCircle2, text: 'ضمان 30 يوم', color: 'text-gray-300' },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className={`flex items-center gap-1.5 ${color}`}>
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="max-w-xl mx-auto text-center space-y-4">
          <button
            id="hero-cta"
            onClick={scrollToCheckout}
            className="w-full btn-lime-glow font-black text-xl py-5 px-8 rounded-2xl flex items-center justify-center gap-3 cursor-pointer font-['Tajawal'] group"
          >
            <Zap className="w-6 h-6 fill-current shrink-0" />
            <span>اطلب الآن — الدفع عند الاستلام</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>

          <p className="text-xs text-gray-500 font-medium flex items-center justify-center gap-2 font-['Cairo']">
            <ShieldCheck className="w-4 h-4 text-[#79E000]" />
            تتأكد وتتفحص طردك بنفسك قبل الدفع للموزع
          </p>
        </div>

      </div>
    </section>
  );
};
