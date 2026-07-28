import React from 'react';
import { Truck, ShieldCheck, Award, Headphones, CheckCircle2, Zap } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    {
      icon: Truck,
      title: 'توصيل سريع ومجاني 100%',
      subtitle: 'لكافة المدن المغربية (24-48 ساعة)'
    },
    {
      icon: ShieldCheck,
      title: 'الدفع عند الاستلام (COD)',
      subtitle: 'لا تدفع درهماً حتى تتفقد الطرد'
    },
    {
      icon: Award,
      title: 'منتج أصلي مضمون',
      subtitle: 'اختبار المعايير والجودة اليابانية'
    },
    {
      icon: Headphones,
      title: 'خدمة زبناء مغربية 7/7',
      subtitle: 'متابعة مباشرة عبر الهاتف والواتساب'
    },
    {
      icon: CheckCircle2,
      title: 'طلب سريع في 20 ثانية',
      subtitle: '3 بيانات بسيطة بدون تعقيد'
    }
  ];

  // Duplicate for seamless looping
  const marqueeItems = [...trustPoints, ...trustPoints];

  return (
    <section className="py-6 bg-scene-trust border-b border-white/10 overflow-hidden relative">
      <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
        {marqueeItems.map((point, idx) => {
          const Icon = point.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl glass-scene-card border border-white/10 bg-[#080d16]/90 shrink-0 text-right hover:border-[#33FF55]/40 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#33FF55]/15 border border-[#33FF55]/30 flex items-center justify-center text-[#33FF55] shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-white font-['Tajawal']">
                  {point.title}
                </h3>
                <p className="text-[10px] text-gray-400 font-medium">
                  {point.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
