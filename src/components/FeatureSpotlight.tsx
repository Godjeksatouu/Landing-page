import React from 'react';
import { Plug, Radio, Lightbulb, Zap, ArrowLeft, Tv } from 'lucide-react';

const spotlights = [
  {
    badge: 'ميزة تسليط الضوء الأولى',
    badgeIcon: Plug,
    title: 'مقبس كهربائي AC عالمي',
    titleHighlight: 'يشغّل جميع أجهزتك المنزلية بسهولة',
    body: 'لا داعي للقلق بشأن شواحن اللابتوب، أجهزة التلفاز الصغيرة، أو مراوح التهوية. المقبس العالمي AC يوفر تياراً مستقراً وآمناً يتوافق مع كافة المعايير الكهربائية المغربية.',
    bullets: [
      'شحن لابتوب العمل أثناء ساعات الانقطاع',
      'تشغيل مراوح التهوية في الليالي الحارة',
      'توصيل الراوتر والإنترنت بدون توقف',
    ],
    img: '/src/assets/images/power_station_ports_1785257272780.jpg',
    imgAlt: 'مقبس AC لمحطة PRO FAST YY-203',
    imgTag: '⚡ منفذ تيار متردد AC عالمي',
    floatingTitle: 'تشغيل اللابتوب والمروحة',
    floatingBody: 'طاقة مستقرة 100% بدون انقطاع',
    cta: 'احصل على طاقتك المستقلة الآن',
    reverse: false,
  },
  {
    badge: 'ميزة تسليط الضوء الثانية',
    badgeIcon: Radio,
    title: 'راديو FM مدمج مع هوائي معدني',
    titleHighlight: 'صوت نقي ومتابعة للأخبار في أي مكان',
    body: 'استمتع بالتقاط الإذاعات الوطنية والبرامج الإخبارية أثناء رحلات التخييم وفي أوقات الطوارئ. الهوائي المعدني التليسكوبي يضمن استقبالاً فائق النقاء حتى في المناطق النائية.',
    bullets: [
      'هوائي معدني قابل للتمديد',
      'مكبر صوت مدمج عالي النقاء',
      'التقاط إذاعات الأخبار والبرامج بدون انقطاع',
    ],
    img: '/src/assets/images/power_station_hero_1785257257475.jpg',
    imgAlt: 'راديو FM لمحطة PRO FAST YY-203',
    imgTag: '📻 راديو عالي الحساسية',
    floatingTitle: 'التقاط إذاعات المغرب',
    floatingBody: 'استقبال نقي حتى في الخلاء',
    cta: 'اطلب الآن مع التوصيل المجاني',
    reverse: true,
  },
];

export const FeatureSpotlight: React.FC = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-28 scene-spotlight border-t border-white/8 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#79E000]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {spotlights.map((item, idx) => {
          const BadgeIcon = item.badgeIcon;
          return (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 relative ${item.reverse ? 'order-1 lg:order-2' : ''}`}>
                <div className="relative glass-scene-lime rounded-3xl p-5 border border-[#79E000]/35 overflow-hidden text-center group">
                  {/* Top Tag */}
                  <div className="absolute top-4 right-4 bg-[#79E000]/20 text-[#79E000] px-3.5 py-1 rounded-full text-xs font-bold border border-[#79E000]/40 z-20 font-['Cairo']">
                    {item.imgTag}
                  </div>

                  <img
                    src={item.img}
                    alt={item.imgAlt}
                    className="w-full h-64 sm:h-80 object-cover rounded-2xl group-hover:scale-105 transition-all duration-700 shadow-2xl"
                  />

                  {/* Floating Badge */}
                  <div className="absolute -bottom-3 right-4 glass-card-luxury p-3.5 rounded-2xl border border-[#79E000]/30 bg-[#101010]/95 hidden sm:flex items-center gap-3 shadow-2xl">
                    <div className="w-9 h-9 rounded-xl bg-[#79E000]/15 flex items-center justify-center text-[#79E000]">
                      <BadgeIcon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-white font-['Tajawal']">{item.floatingTitle}</p>
                      <p className="text-[10px] text-gray-500 font-['Cairo']">{item.floatingBody}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-6 text-right space-y-5 ${item.reverse ? 'order-2 lg:order-1' : ''}`}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#79E000]/10 border border-[#79E000]/30 text-[#79E000] text-xs font-bold font-['Cairo']">
                  <BadgeIcon className="w-4 h-4" />
                  {item.badge}
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white font-['Tajawal'] leading-tight">
                  {item.title}<br />
                  <span className="lime-text-gradient">{item.titleHighlight}</span>
                </h3>

                <p className="text-base text-gray-400 leading-relaxed font-medium font-['Cairo']">
                  {item.body}
                </p>

                <ul className="space-y-2.5 font-['Cairo']">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-gray-300 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#79E000] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToCheckout}
                  className="btn-lime-glow font-black text-sm py-3.5 px-7 rounded-xl inline-flex items-center gap-2 cursor-pointer font-['Tajawal']"
                >
                  <span>{item.cta}</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
