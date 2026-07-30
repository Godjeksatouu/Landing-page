import React from 'react';
import { ShieldCheck, Truck, Zap, ArrowDown, Plug, Radio, Lightbulb, CheckCircle2 } from 'lucide-react';
import { PRODUCT_INFO, REVIEWS } from '../data/productData';
import { heroImg } from '../assets/images';

export const Hero: React.FC = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#79E000]/8 rounded-full blur-[250px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5">
            {[
              { icon: CheckCircle2, text: 'الدفع عند الاستلام' },
              { icon: Truck, text: 'توصيل مجاني 24-48h' },
              { icon: ShieldCheck, text: 'معاينة قبل الدفع' },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 bg-[#111]/90 px-3 py-1.5 rounded-full border border-white/8 text-[11px] font-semibold text-gray-300">
                <Icon className="w-3 h-3 text-[#79E000] shrink-0" />
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] mb-5 font-['Tajawal'] tracking-tight">
            طاقة معك...
            <span className="block lime-text-gradient mt-1">
              أينما ذهبت ⚡🏕️
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-medium max-w-2xl mx-auto font-['Cairo']">
            محطة الطاقة المحمولة PRO FAST YY-203 — رفيقك للتخييم، السفر، والمزرعة.
            <br />
            <strong className="text-white">خفيف، صامت، ويشتغل في أي مكان.</strong>
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto my-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#79E000]/25 via-[#79E000]/10 to-transparent rounded-full filter blur-[120px] pointer-events-none" />

          <div className="relative glass-card-luxury rounded-3xl p-6 sm:p-8 border border-[#79E000]/30 bg-[#111]/90 shadow-2xl overflow-hidden text-center">
            {/* Main Studio Product Photo */}
            <div className="relative flex items-center justify-center p-2 mb-4">
              <img
                src={heroImg}
                alt="محطة الطاقة المحمولة PRO FAST YY-203"
                className="w-full max-h-[300px] sm:max-h-[380px] object-contain animate-float-product filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.95)] mx-auto"
              />
            </div>

            {/* Lifestyle Context Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-white/8 font-['Cairo']">
              <span className="text-[11px] text-gray-400 font-medium ml-1">مناسب لـ:</span>
              {['🏕️ تخييم جبال وشواطئ', '🌾 المزارع والضيعات', '🚐 كرافان ورحلات', '🏠 طوارئ المنزل', '💼 العمل عن بُعد'].map((tag) => (
                <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-[#181818] border border-white/8 text-gray-200 font-semibold">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 font-['Cairo']">
              {[
                { icon: Plug, label: 'مقبس AC', sub: 'لابتوب + أجهزة' },
                { icon: Zap, label: '3 USB', sub: 'شحن كل الهواتف' },
                { icon: Radio, label: 'راديو FM', sub: 'أخبار + موسيقى' },
                { icon: Lightbulb, label: 'LED قوي', sub: 'إضاءة + طوارئ' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-2 bg-[#151515] px-3.5 py-2 rounded-xl border border-white/8">
                  <Icon className="w-4 h-4 text-[#79E000] shrink-0" />
                  <div className="text-right">
                    <p className="text-xs font-bold text-white">{label}</p>
                    <p className="text-[10px] text-gray-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Buy — Social Proof + 3 Core Benefits */}
        <div className="max-w-2xl mx-auto mt-6 mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex -space-x-3 rtl:space-x-reverse">
              {REVIEWS.slice(0, 3).map((r, i) => (
                <img key={i} src={r.avatar} alt="" className="w-9 h-9 rounded-full border-2 border-[#050505] object-cover" />
              ))}
            </div>
            <span className="text-sm text-gray-300 font-bold font-['Cairo']">
              <span className="text-[#79E000]">+{PRODUCT_INFO.reviewCount}</span> عميل مؤكد
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { text: 'يشغّل اللابتوب والراوتر' },
              { text: 'يشحن حتى 6 أجهزة معاً' },
              { text: 'صامت 100% بدون بنزين' },
            ].map(({ text }) => (
              <div key={text} className="flex items-center gap-2 bg-[#111]/80 px-3.5 py-2.5 rounded-xl border border-[#79E000]/20">
                <CheckCircle2 className="w-4 h-4 text-[#79E000] shrink-0" />
                <span className="text-xs font-bold text-white font-['Cairo']">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-lg mx-auto text-center mt-6">
          <div className="flex items-baseline justify-center gap-3 mb-6 font-['Tajawal']">
            <span className="text-5xl sm:text-6xl font-black text-[#79E000]">{PRODUCT_INFO.price}</span>
            <span className="text-xl font-bold text-gray-200">{PRODUCT_INFO.currency}</span>
            <span className="text-base text-gray-500 line-through">{PRODUCT_INFO.oldPrice} {PRODUCT_INFO.currency}</span>
            <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#79E000]/15 text-[#79E000] border border-[#79E000]/30">توفير 47%</span>
          </div>

          <button
            onClick={scrollToCheckout}
            className="w-full btn-lime-glow font-black text-lg md:text-xl py-5 px-8 rounded-2xl flex items-center justify-center gap-3 cursor-pointer font-['Tajawal']"
          >
            <Zap className="w-5 h-5 fill-current shrink-0" />
            <span>اطلب محطة الطاقة الآن</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <p className="text-xs text-gray-500 mt-3 flex items-center justify-center gap-2 font-['Cairo']">
            <Truck className="w-4 h-4 text-[#79E000]" />
            توصيل مجاني — الدفع عند الاستلام — معاينة قبل الدفع
          </p>
        </div>

      </div>
    </section>
  );
};
