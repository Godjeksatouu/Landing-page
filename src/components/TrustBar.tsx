import React from 'react';
import { Truck, ShieldCheck, Award, Headphones, CheckCircle2, Star } from 'lucide-react';

const trustPoints = [
  { icon: Truck, title: 'توصيل سريع ومجاني 100%', subtitle: 'لكافة المدن المغربية (24-48 ساعة)' },
  { icon: ShieldCheck, title: 'الدفع عند الاستلام (COD)', subtitle: 'لا تدفع درهماً حتى تتفقد الطرد' },
  { icon: Star, title: '4.9/5 من 384 زبون', subtitle: 'تقييمات حقيقية من زبناء المغرب' },
  { icon: Award, title: 'منتج أصلي مضمون', subtitle: 'جودة معتمدة ومختبرة' },
  { icon: Headphones, title: 'خدمة زبناء 7/7', subtitle: 'متابعة مباشرة بالهاتف والواتساب' },
  { icon: CheckCircle2, title: 'طلب سريع في 30 ثانية', subtitle: 'بياناتك الأساسية بدون أي تعقيد' },
  { icon: Truck, title: 'الدار البيضاء · الرباط · طنجة', subtitle: 'مراكش · فاس · أكادير · وجدة وأكثر' },
];
const marqueeItems = [...trustPoints, ...trustPoints];

export const TrustBar: React.FC = () => {
  return (
    <section className="py-5 scene-trust border-b border-white/8 overflow-hidden relative">
      {/* Top Edge Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#79E000]/40 to-transparent pointer-events-none" />

      {/* Scrolling Trust Marquee */}
      <div className="flex items-center gap-4 animate-marquee whitespace-nowrap">
        {marqueeItems.map((point, idx) => {
          const Icon = point.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#151515]/80 border border-white/8 shrink-0 text-right hover:border-[#79E000]/35 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#79E000]/12 border border-[#79E000]/25 flex items-center justify-center text-[#79E000] shrink-0 group-hover:bg-[#79E000]/20 transition-colors">
                <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-white font-['Tajawal'] leading-tight">
                  {point.title}
                </h3>
                <p className="text-[10px] text-gray-500 font-medium">
                  {point.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Edge Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#79E000]/25 to-transparent pointer-events-none" />
    </section>
  );
};
