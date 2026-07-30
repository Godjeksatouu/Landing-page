import React from 'react';
import { Zap, ShieldCheck, Truck, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030303] text-gray-400 border-t border-white/8 pt-12 pb-24 lg:pb-12 text-right relative overflow-hidden">
      {/* Subtle ambient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#79E000]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/8">

          {/* Brand Column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#79E000]/12 border border-[#79E000]/35 flex items-center justify-center shadow-[0_0_15px_rgba(121,224,0,0.15)]">
                <Zap className="w-5 h-5 text-[#79E000]" />
              </div>
              <span className="text-xl font-black text-white font-['Tajawal']">
                PRO FAST <span className="text-[#79E000]">YY-203</span>
              </span>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed max-w-sm font-['Cairo']">
              محطة الطاقة المحمولة الفاخرة المعتمدة بالمغرب. مصممة لتوفير الطاقة الآمنة والنظيفة بدون صوت أو انبعاثات لعائلتك وأعمالك.
            </p>

            <div className="flex items-center gap-5 text-xs text-[#79E000] font-semibold font-['Cairo']">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4" />توصيل مجاني
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />الدفع عند الاستلام
              </span>
            </div>
          </div>

          {/* Guarantees Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white font-['Tajawal']">ضمانات الشراء والتسليم:</h4>
            <ul className="space-y-2.5 text-xs text-gray-500 font-['Cairo']">
              {[
                'توصيل سريع خلال 24 إلى 48 ساعة لكافة مدن المغرب.',
                'معاينة المنتج وتفقده قبل دفع أي مبلغ للموزع.',
                'ضمان استرجاع خلال 30 يوم في حالة أي عيب.',
                'خدمة زبناء مغربية متوفرة 7 أيام في الأسبوع.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#79E000] shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cities Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white font-['Tajawal'] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#79E000]" />
              التوصيل لكافة المدن:
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed font-['Cairo']">
              الدار البيضاء، الرباط، مراكش، طنجة، فاس، أكادير، وجدة، القنيطرة، تطوان، مكناس، الناظور، آسفي، سطات، العيون، الداخلة، وجميع مدن المغرب.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-3 font-['Cairo']">
          <p>© 2026 PRO FAST YY-203 المغرب. جميع الحقوق محفوظة.</p>
          <p>صُمم بأعلى معايير تجربة المستخدم لتحقيق أعلى معدلات التحويل 🇲🇦</p>
        </div>

      </div>
    </footer>
  );
};
