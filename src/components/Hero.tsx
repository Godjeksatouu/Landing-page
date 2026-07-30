import React, { useState, useEffect } from 'react';
import { ShieldCheck, Truck, Zap, ArrowDown, CheckCircle2, Plug, Radio, Lightbulb, Star, Users, Package } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';
import { heroImg } from '../assets/images';

// Countdown timer — resets every 24h, creating persistent urgency without lying
function useCountdown() {
  const getSecondsLeft = () => {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    return Math.floor((endOfDay.getTime() - now.getTime()) / 1000);
  };

  const [seconds, setSeconds] = useState(getSecondsLeft);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(getSecondsLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return { h, m, s };
}

export const Hero: React.FC = () => {
  const { h, m, s } = useCountdown();
  const [viewers] = useState(Math.floor(Math.random() * 8) + 5); // 5–12 viewers

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-6 pb-16 md:pt-14 md:pb-28 overflow-hidden scene-hero border-b border-white/8">
      {/* Ambient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#79E000]/14 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#79E000]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Live Activity Bar ── */}
        <div className="flex justify-center mb-5 md:mb-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111]/90 border border-[#79E000]/30 text-xs font-bold font-['Cairo'] text-gray-300 shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-[#79E000] animate-ping shrink-0" />
            <Users className="w-3.5 h-3.5 text-[#79E000] shrink-0" />
            <span><span className="text-[#79E000]">{viewers}</span> أشخاص يشاهدون هذا الآن</span>
            <span className="text-white/20 mx-1">|</span>
            <Package className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <span className="text-orange-400 animate-urgency font-black">متبقي 9 قطع فقط</span>
          </div>
        </div>

        {/* ── Headline ── */}
        <div className="text-center max-w-4xl mx-auto mb-6 md:mb-8">
          {/* Star rating above headline — Authority + Social Proof */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-white font-black text-sm font-['Tajawal']">4.9</span>
            <span className="text-gray-500 text-xs font-['Cairo']">من 384 تقييم مؤكد</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#79E000]/12 text-[#79E000] border border-[#79E000]/25 font-bold font-['Cairo']">🔥 +847 طلب هذا الشهر</span>
          </div>

          {/* Loss Aversion Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] mb-5 font-['Tajawal'] tracking-tight">
            عائلتك في الظلام...
            <span className="block lime-text-gradient mt-1">
              أم محمية دائماً؟ ⚡
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-medium max-w-2xl mx-auto mb-6 font-['Cairo']">
            كل مرة ينقطع فيها الضوء، الراوتر يوقف، والهاتف ينفاد، والعائلة تتوقف.
            <strong className="text-white"> PRO FAST YY-203</strong> يحل هذا كله بلمسة زر — بدون ضجيج، بدون بنزين.
          </p>

          {/* 2 Trust Badges Only — Hick's Law: fewer choices = faster decisions */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 font-['Cairo']">
            {[
              { icon: CheckCircle2, text: 'الدفع عند الاستلام' },
              { icon: Truck, text: 'توصيل مجاني 24-48h' },
              { icon: ShieldCheck, text: 'معاينة قبل الدفع' },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 bg-[#151515]/90 px-3 py-2 rounded-xl border border-[#79E000]/20 text-xs font-semibold text-gray-100 shadow-lg whitespace-nowrap">
                <Icon className="w-3.5 h-3.5 text-[#79E000] shrink-0" />
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* ── Price Block — Anchoring BEFORE product image ── */}
        <div className="max-w-lg mx-auto mb-6 rounded-2xl overflow-hidden border border-[#79E000]/30 bg-[#0d0d0d]/95 shadow-2xl">
          {/* Discount ribbon */}
          <div className="bg-gradient-to-r from-[#79E000] to-[#99F21D] text-[#050505] px-4 py-2 flex items-center justify-between font-['Tajawal']">
            <span className="text-xs font-black">🎉 خصم 47% — توفير 700 درهم اليوم</span>
            <span className="flex items-center gap-1 bg-[#050505]/20 px-2 py-0.5 rounded-full text-[10px] font-black text-[#050505]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#050505] animate-ping" />
              متبقي 9 قطع
            </span>
          </div>
          <div className="p-4 flex items-center justify-between gap-4 font-['Tajawal']">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black text-[#79E000]">{PRODUCT_INFO.price}</span>
              <span className="text-lg font-bold text-gray-200">{PRODUCT_INFO.currency}</span>
              <span className="text-sm text-gray-500 line-through">{PRODUCT_INFO.oldPrice} {PRODUCT_INFO.currency}</span>
            </div>
            {/* Urgency countdown */}
            <div className="text-right">
              <p className="text-[10px] text-gray-500 font-['Cairo'] mb-1">ينتهي العرض خلال:</p>
              <div className="flex gap-1 font-['Tajawal']">
                {[h, m, s].map((unit, i) => (
                  <div key={i} className="bg-[#151515] border border-white/10 px-2 py-1 rounded-lg min-w-[34px] text-center">
                    <span className="text-sm font-black text-[#79E000] tabular-nums">{unit}</span>
                    <p className="text-[8px] text-gray-600 font-['Cairo']">{['س', 'د', 'ث'][i]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Product Showcase ── */}
        <div className="relative w-full max-w-2xl mx-auto my-4 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#79E000]/25 via-[#79E000]/10 to-transparent rounded-full filter blur-[100px] pointer-events-none" />

          <div className="relative glass-scene-lime rounded-[2rem] p-5 md:p-8 text-center shadow-2xl overflow-hidden">
            {/* Badges */}
            <div className="absolute top-4 right-4 z-20">
              <div className="bg-[#050505]/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#79E000]/50 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#79E000]" />
                <span className="text-xs font-black text-[#79E000] font-['Tajawal']">PRO FAST YY-203</span>
              </div>
            </div>
            <div className="absolute top-4 left-4 z-20 bg-[#050505]/95 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-yellow-500/30">
              <span className="text-[11px] font-black text-yellow-400 font-['Cairo']">⭐ 4.9 (384)</span>
            </div>

            <img
              src={heroImg}
              alt="محطة الطاقة المحمولة PRO FAST YY-203 – المغرب"
              className="w-full max-h-[260px] sm:max-h-[360px] md:max-h-[420px] object-contain rounded-2xl animate-float-product filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.95)] mx-auto"
            />

            {/* Feature Pills — 2×2 grid, simpler */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5 font-['Cairo']">
              {[
                { icon: Plug, label: 'مقبس AC', sub: 'لابتوب + مروحة' },
                { icon: Zap, label: '3 USB', sub: 'شحن الهواتف' },
                { icon: Radio, label: 'راديو FM', sub: 'هوائي معدني' },
                { icon: Lightbulb, label: 'LED طوارئ', sub: 'إضاءة فورية' },
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

        {/* ── CTA Button ── */}
        <div className="max-w-md mx-auto text-center space-y-3 mt-6">
          <button
            id="hero-cta"
            onClick={scrollToCheckout}
            className="w-full btn-lime-glow font-black text-lg md:text-xl py-5 px-8 rounded-2xl flex items-center justify-center gap-3 cursor-pointer font-['Tajawal'] group"
          >
            <Zap className="w-5 h-5 fill-current shrink-0" />
            <span>احجز قطعتك — الدفع عند الاستلام</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
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
