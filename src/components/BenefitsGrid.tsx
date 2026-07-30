import React from 'react';
import { Package, Zap, Moon, Lightbulb, BatteryCharging, ShieldCheck, Sparkles } from 'lucide-react';
import {
  laptopOfficeImg,
  phonesChargingImg,
  campingNightImg,
  heroImg,
  portsImg,
  useCaseImg,
} from '../assets/images';

const benefits = [
  {
    icon: Zap,
    title: 'تشغيل اللابتوب والعمل',
    desc: 'مقبس AC كهرائي ومنافذ لتشغيل اللابتوب والواي فاي واستمرار أعمالك بدون انقطاع.',
    image: laptopOfficeImg,
    tag: 'عمل مكتبي ومشاريع',
  },
  {
    icon: BatteryCharging,
    title: 'شحن كل الهواتف معاً (3 منافذ USB)',
    desc: '3 منافذ USB سريعة مدمجة بواجهة YY-203 لشحن أجهزة كافة العائلة في آنٍ واحد بأمان تام.',
    image: portsImg,
    tag: 'شحن متزامن لـ 3-6 أجهزة',
  },
  {
    icon: Package,
    title: 'التخييم والرحلات الخارجيّة',
    desc: 'رفيقك المثالي في التخييم والشاطئ والمزارع. مقبض حمل مريح ووزن خفيف.',
    image: campingNightImg,
    tag: 'تخييم ورحلات',
  },
  {
    icon: Lightbulb,
    title: 'إضاءة طوارئ + راديو FM',
    desc: 'كشاف LED عالي السطوع لإنارة الغرف، وراديو FM مع هوائي لمتابعة الإذاعات.',
    image: heroImg,
    tag: 'إضاءة + أخبار',
  },
  {
    icon: ShieldCheck,
    title: 'مراقبة الطاقة بشاشة LCD',
    desc: 'شاشة رقمية إلكترونية تعرض نسبة الشحن المتبقية بدقة وحالة التشغيل.',
    image: portsImg,
    tag: 'لوحة تحكم ذكية',
  },
  {
    icon: Moon,
    title: 'صامت 100% وآمن منزلية',
    desc: 'بدون بنزين، بدون دخان، بدون ضجيج. آمن للاستخدام داخل غرف المنزل والخيمة.',
    image: useCaseImg,
    tag: 'إنارة منزلية هادئة',
  },
];

export const BenefitsGrid: React.FC = () => {
  return (
    <section id="features" className="py-14 md:py-24 bg-[#050505] relative overflow-hidden border-t border-white/8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#79E000]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#79E000]/10 border border-[#79E000]/30 text-[#79E000] text-xs font-bold mb-5 font-['Cairo']">
            <Sparkles className="w-4 h-4" />
            تطبيقات واقعية لمحطة PRO FAST YY-203
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            طاقة موثوقة بالصور الحقيقية
            <span className="block lime-text-gradient mt-1">داخل المنزل وخارجه</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-medium font-['Cairo']">
            استكشف استخدامات المحطة في الحياة اليومية، التخييم، والطوارئ المنزلية.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 items-stretch">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="glass-card-luxury rounded-2xl border border-white/10 bg-[#111]/90 hover:border-[#79E000]/40 text-right group transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl h-full"
              >
                {/* Real Commercial Photo Cover */}
                <div className="relative h-28 sm:h-36 md:h-48 overflow-hidden bg-[#0a0a0a] shrink-0">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-black/30" />
                  
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#050505]/85 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-[#79E000]/40 text-[9px] sm:text-[11px] font-bold text-[#79E000] font-['Cairo']">
                    {b.tag}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2.5 mb-1.5 sm:mb-2.5">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-[#79E000]/12 border border-[#79E000]/25 flex items-center justify-center text-[#79E000] shrink-0">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <h3 className="text-xs sm:text-base font-black text-white font-['Tajawal'] leading-snug">
                        {b.title}
                      </h3>
                    </div>

                    <p className="text-[11px] sm:text-sm text-gray-400 leading-relaxed font-medium font-['Cairo'] line-clamp-3 sm:line-clamp-none">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
