import React, { useState } from 'react';
import { Sparkles, Shield } from 'lucide-react';
import {
  heroImg,
  portsImg,
  useCaseImg,
  heroLifestyleImg,
  boxUnboxingImg,
  deliveryCashImg,
  laptopOfficeImg,
  campingNightImg,
  phonesChargingImg,
} from '../assets/images';

const galleryImages = [
  {
    id: 'hero',
    title: 'الواجهة الرئيسية والمقبض علوي',
    subtitle: 'تصوير استوديو احترافي لمحطة PRO FAST YY-203 مع الواجهة الخضراء والهوائي المعدني',
    url: heroImg,
    tag: 'تصوير استوديو 360°',
  },
  {
    id: 'ports',
    title: 'تفاصيل الواجهة ومنافذ الطاقة',
    subtitle: 'صورة ماكرو قريبة: مقبس AC عالمي، 3 منافذ USB، 3 منافذ DC، شاشة LCD وكشاف LED',
    url: portsImg,
    tag: 'ماكرو المنافذ واللوحة',
  },
  {
    id: 'lifestyle-camp',
    title: 'استخدام التخييم وفي الخلاء',
    subtitle: 'تصوير واقعي لمحطة الطاقة أثناء الرحلات الجبلية والشاطئية لتشغيل اللابتوب والإضاءة',
    url: heroLifestyleImg,
    tag: 'تخييم ورحلات خارجية',
  },
  {
    id: 'usb-charging',
    title: '3 منافذ USB لشحن الهواتف',
    subtitle: 'صورة ماكرو لوجهة YY-203 تظهر 3 منافذ USB سريعة لشحن أجهزة آيفون وأندرويد وشاشة LCD',
    url: portsImg,
    tag: 'منافذ USB شحن سريع',
  },
  {
    id: 'night-tent',
    title: 'إضاءة الليل والتخييم في الخيمة',
    subtitle: 'إنارة قوية ودافئة عبر كشاف LED المدمج لإضاءة الخيمة والمساحات المظلمة',
    url: campingNightImg,
    tag: 'إضاءة طوارئ ليلية',
  },
  {
    id: 'home-office',
    title: 'تشغيل اللابتوب والراوتر بالبيت',
    subtitle: 'حل عملي جداً للاستمرار بالعمل وتوصيل الواي فاي أثناء انقطاع التيار الكهربائي',
    url: laptopOfficeImg,
    tag: 'استمرار العمل والدراسة',
  },
  {
    id: 'unboxing',
    title: 'محتويات الصندوق والشحنة الأصليّة',
    subtitle: 'العلبة الرسمية المحمية، محطة YY-203، كابل الشحن المباشر، وكتيب التعليمات',
    url: boxUnboxingImg,
    tag: 'الشحنة والمكونات',
  },
  {
    id: 'delivery',
    title: 'التسليم والمعاينة عند باب المنزل',
    subtitle: 'تصلكم الشحنة مغلفة وتتأكدون من المحتويات وتفحصونها بنفسكم قبل دفع أي مبلغ للموزع',
    url: deliveryCashImg,
    tag: 'تسليم ومعاينة COD',
  },
];

export const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const currentImg = galleryImages[selectedIndex];

  return (
    <section className="py-16 md:py-24 scene-gallery relative overflow-hidden border-t border-white/8">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#79E000]/7 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#79E000]/10 border border-[#79E000]/30 text-[#79E000] text-xs font-bold mb-5 font-['Cairo']">
            <Sparkles className="w-4 h-4" />
            معرض الصور الفوتوغرافية الحقيقية (8 زوايا)
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            معاينة دقيقة ومطابقة للمنتج المعتمد 100%
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-medium font-['Cairo']">
            تصفح الصور الحقيقية التجارية للواجهة ومنافذ الطاقة، التخييم، والمكونات داخل العلبة.
          </p>
        </div>

        {/* Gallery Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Main View */}
          <div className="lg:col-span-8">
            <div className="glass-card-luxury rounded-3xl p-4 md:p-6 border border-[#79E000]/25 bg-[#101010]/90 relative overflow-hidden group shadow-2xl">
              {/* Tag Overlay */}
              <div className="absolute top-6 right-6 bg-[#050505]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#79E000]/40 text-xs font-bold text-[#79E000] z-10 flex items-center gap-2 font-['Cairo']">
                <Sparkles className="w-3.5 h-3.5" />
                {currentImg.tag}
              </div>

              {/* Image */}
              <div className="relative w-full h-72 sm:h-96 md:h-[460px] rounded-2xl overflow-hidden bg-[#0d0d0d] flex items-center justify-center">
                <img
                  src={currentImg.url}
                  alt={currentImg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0d0d0d] to-transparent pointer-events-none" />
              </div>

              {/* Caption */}
              <div className="mt-4 p-4 bg-[#151515] rounded-2xl border border-white/6 text-right">
                <h3 className="text-base font-bold text-white mb-1 font-['Tajawal']">{currentImg.title}</h3>
                <p className="text-xs text-gray-400 font-['Cairo'] leading-relaxed">{currentImg.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Thumbnails + Trust Card */}
          <div className="lg:col-span-4 flex flex-col gap-2.5 max-h-[580px] overflow-y-auto pr-1">
            <h4 className="text-xs font-bold text-gray-400 mb-1 font-['Cairo'] text-right">اختر الزاوية للمعاينة (8 صور):</h4>

            {galleryImages.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setSelectedIndex(idx)}
                className={`p-2.5 rounded-2xl border text-right transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                  selectedIndex === idx
                    ? 'border-[#79E000] bg-[#79E000]/12 shadow-[0_0_15px_rgba(121,224,0,0.2)]'
                    : 'glass-card-luxury border-white/8 hover:border-[#79E000]/35 bg-[#111]/80'
                }`}
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#050505] shrink-0 border border-white/8">
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-[#79E000] block mb-0.5 font-['Cairo']">
                    {img.tag}
                  </span>
                  <p className="text-xs font-bold text-white font-['Tajawal'] leading-snug truncate">
                    {img.title}
                  </p>
                </div>
              </button>
            ))}

            {/* Quality Guarantee */}
            <div className="p-4 rounded-2xl bg-[#151515] border border-[#79E000]/20 text-xs text-gray-400 space-y-2 mt-1 font-['Cairo']">
              <div className="flex items-center gap-2 text-white font-bold text-right">
                <Shield className="w-4 h-4 text-[#79E000] shrink-0" />
                <span>ضمان الجودة في المغرب</span>
              </div>
              <p className="text-right leading-relaxed">تتوصلون بنفس المنتج الموضح بالصور تماماً، والدفع بعد المعاينة عند الموزع.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
