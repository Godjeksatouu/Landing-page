import React from 'react';
import { Zap, Wifi, Smartphone, Radio, Lightbulb, Moon, Sparkles, ArrowLeft } from 'lucide-react';

// Transformation-focused benefits — NOT feature specs
// Each card answers: "How does this improve MY life?" (Emotional Design)
const benefits = [
  {
    icon: Zap,
    outcome: 'تشغيل اللابتوب والمروحة',
    transformation: 'تشتغل بشكل طبيعي وشغلك لا يتوقف حتى لو انقطع الضوء لساعات.',
    proof: 'مقبس AC عالمي متوافق مع جميع الأجهزة المغربية',
    highlight: true,
  },
  {
    icon: Wifi,
    outcome: 'الراوتر والإنترنت لا يقفان أبداً',
    transformation: 'اجتماعاتك عبر الإنترنت وتواصل عائلتك مستمر — حتى في أطول انقطاع.',
    proof: '3 منافذ DC 12V مخصصة للراوتر والإضاءة',
    highlight: false,
  },
  {
    icon: Smartphone,
    outcome: 'كل هواتف العائلة مشحونة',
    transformation: 'لا أحد يصبح منعزلاً. 3 منافذ USB تشحن الجميع في نفس الوقت.',
    proof: '3 منافذ USB سريعة متوافقة مع آيفون وأندرويد',
    highlight: false,
  },
  {
    icon: Radio,
    outcome: 'متابعة الأخبار عند الطوارئ',
    transformation: 'في الظروف الصعبة، تسمع الأخبار وتبقى على تواصل — بدون هاتف.',
    proof: 'راديو FM بهوائي معدني تليسكوبي ومكبر صوت',
    highlight: false,
  },
  {
    icon: Lightbulb,
    outcome: 'إضاءة فورية في ثانية واحدة',
    transformation: 'الأطفال لا يخافون، البيت لا يظلم — كشاف LED قوي يضيء الغرفة.',
    proof: 'كشاف LED طوارئ مدمج على الواجهة الأمامية',
    highlight: false,
  },
  {
    icon: Moon,
    outcome: 'ليالي هادئة بلا ضجيج',
    transformation: 'لا صوت المولد، لا رائحة البنزين — المحطة صامتة 100% آمنة داخل الغرفة.',
    proof: 'صفر انبعاثات • صفر ضجيج • آمن داخل المنزل',
    highlight: false,
  },
];

export const BenefitsGrid: React.FC = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="features" className="py-14 md:py-24 bg-[#050505] relative overflow-hidden border-t border-white/8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#79E000]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#79E000]/10 border border-[#79E000]/30 text-[#79E000] text-xs font-bold mb-5 font-['Cairo']">
            <Sparkles className="w-4 h-4" />
            كيف يغير YY-203 حياتك يومياً
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            محطة واحدة تحمي كل شيء
            <span className="block lime-text-gradient mt-1">يهمك في بيتك ومحلك</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-medium font-['Cairo']">
            لا مواصفات تقنية جافة — فقط ما تشعر به عند استخدام YY-203 كل يوم.
          </p>
        </div>

        {/* Benefits Grid — 2 cols mobile, 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.outcome}
                className={`p-5 md:p-6 rounded-2xl border flex flex-col justify-between text-right group transition-all duration-300 ${
                  b.highlight
                    ? 'border-[#79E000]/40 bg-gradient-to-br from-[#0d1a06] to-[#070f04] shadow-[0_0_30px_rgba(121,224,0,0.12)]'
                    : 'glass-card-luxury border-white/8 bg-[#111]/80 hover:border-[#79E000]/25'
                }`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    b.highlight
                      ? 'bg-[#79E000]/20 border border-[#79E000]/40 text-[#79E000]'
                      : 'bg-[#79E000]/10 border border-[#79E000]/20 text-[#79E000] group-hover:bg-[#79E000]/18'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Outcome — The transformation, not the feature */}
                  <h3 className="text-base font-black text-white mb-2 font-['Tajawal'] leading-snug">
                    {b.outcome}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed font-medium font-['Cairo']">
                    {b.transformation}
                  </p>
                </div>

                {/* Technical proof — small, secondary */}
                <div className="pt-3 border-t border-white/6">
                  <p className="text-[10px] font-semibold text-gray-600 font-['Cairo']">
                    ✓ {b.proof}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToCheckout}
            className="btn-lime-glow font-black text-sm md:text-base py-4 px-8 rounded-2xl inline-flex items-center gap-2 cursor-pointer font-['Tajawal']"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>اطلب YY-203 الآن — الدفع عند الاستلام</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
          <p className="text-xs text-gray-500 mt-3 font-['Cairo']">
            توصيل مجاني لكافة مدن المغرب خلال 24-48 ساعة
          </p>
        </div>

      </div>
    </section>
  );
};
