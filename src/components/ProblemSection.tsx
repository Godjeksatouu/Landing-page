import React from 'react';
import { X, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import { useCaseImg } from '../assets/images';

const before = [
  { title: 'الظلام التام في البيت', body: 'الأطفال خايفين، المذاكرة واقفة، الراحة محال.' },
  { title: 'الهاتف نفد والراوتر مات', body: 'انقطعت عن العمل والعائلة في اللحظات الأصعب.' },
  { title: 'المولد القديم يزعج الجيران', body: 'بنزين + صيانة + خطر حريق + روائح داخل البيت.' },
];

const after = [
  { title: 'إضاءة فورية بلمسة زر', body: 'LED قوي ينير الغرفة — بلا مخاطر، بلا دخان.' },
  { title: 'الهاتف واللابتوب والراوتر شغالين', body: '3 USB + مقبس AC = كل أجهزتك محمية دائماً.' },
  { title: 'صمت تام + راديو أخبار FM', body: 'لا ضجيج، لا بنزين — تابع الأخبار بهدوء.' },
];

export const ProblemSection: React.FC = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-14 md:py-24 scene-problem relative overflow-hidden border-t border-white/8">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[350px] h-[350px] bg-[#79E000]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/12 border border-red-500/25 text-red-400 text-xs font-bold mb-5 font-['Cairo']">
            <AlertTriangle className="w-4 h-4" />
            تحديات انقطاع التيار الكهربائي
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            كم مرة وجدت نفسك هكذا؟
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium font-['Cairo'] max-w-xl mx-auto">
            في المغرب — الانقطاع يأتي فجأة. ولحظاتٍ كثيرة، لا الضوء، لا الإنترنت، لا الراحة.
            هذا يكفي.
          </p>
        </div>

        {/* ── Always-Visible Split Panel ── Peak-End Rule: show both states simultaneously */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-10">

          {/* BEFORE — Dark, scary */}
          <div className="rounded-3xl overflow-hidden border border-red-500/25 bg-[#120808]/90">
            {/* Header */}
            <div className="px-5 py-3.5 bg-red-500/12 border-b border-red-500/20 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-red-500/30" />
                <span className="w-3 h-3 rounded-full bg-red-500/20" />
              </div>
              <span className="text-red-400 text-xs font-black font-['Tajawal'] mr-2">⚡ قبل YY-203 — الوضع المؤلم</span>
            </div>

            {/* Image with dark overlay */}
            <div className="relative h-44 md:h-52 overflow-hidden">
              <img src={useCaseImg} alt="قبل YY-203" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120808] via-[#120808]/60 to-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌑</div>
                  <span className="text-red-300 font-black text-lg font-['Tajawal']">انقطع الضوء...</span>
                </div>
              </div>
            </div>

            {/* Before items */}
            <div className="p-5 space-y-3">
              {before.map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-red-500/6 border border-red-500/15">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="text-right">
                    <h4 className="text-sm font-bold text-white font-['Tajawal']">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5 font-['Cairo']">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER — Bright, safe */}
          <div className="rounded-3xl overflow-hidden border border-[#79E000]/30 bg-[#0a130a]/90">
            {/* Header */}
            <div className="px-5 py-3.5 bg-[#79E000]/10 border-b border-[#79E000]/20 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#79E000]/70" />
                <span className="w-3 h-3 rounded-full bg-[#79E000]/40" />
                <span className="w-3 h-3 rounded-full bg-[#79E000]/25" />
              </div>
              <span className="text-[#79E000] text-xs font-black font-['Tajawal'] mr-2">✅ مع YY-203 — طاقة دائمة</span>
            </div>

            {/* Image — bright */}
            <div className="relative h-44 md:h-52 overflow-hidden">
              <img src={useCaseImg} alt="مع YY-203" className="w-full h-full object-cover brightness-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a130a] via-[#0a130a]/40 to-transparent" />
              <div className="absolute bottom-4 right-4 bg-[#050505]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#79E000]/40 text-xs font-bold text-[#79E000] font-['Cairo']">
                ⚡ طاقة مستمرة 100%
              </div>
            </div>

            {/* After items */}
            <div className="p-5 space-y-3">
              {after.map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-[#79E000]/6 border border-[#79E000]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#79E000] shrink-0 mt-0.5" />
                  <div className="text-right">
                    <h4 className="text-sm font-bold text-white font-['Tajawal']">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5 font-['Cairo']">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToCheckout}
            className="btn-lime-glow font-black text-sm md:text-base py-4 px-8 rounded-2xl inline-flex items-center gap-2 cursor-pointer font-['Tajawal']"
          >
            <Sparkles className="w-4 h-4" />
            اختر الحماية الدائمة — الدفع عند الاستلام
          </button>
        </div>

      </div>
    </section>
  );
};
