import React, { useState } from 'react';
import { Eye, Sparkles, Zap, Shield, Radio, Lightbulb, Plug } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const galleryImages = [
    {
      id: 'hero',
      title: 'الواجهة الرئيسية ومقبض الحمل العلوى',
      subtitle: 'عرض الاستوديو لمحطة PRO FAST YY-203 مع الواجهة الخضراء الفاخرة والهوائي المعدني',
      url: '/src/assets/images/power_station_hero_1785257257475.jpg',
      tag: 'عرض شامل 360°'
    },
    {
      id: 'ports',
      title: 'تفاصيل الواجهة ومنافذ الطاقة الشاملة',
      subtitle: 'مقبس AC عالمي، 3 منافذ USB، 3 منافذ DC، الشاشة الرقمية LCD وكشاف LED المدمج',
      url: '/src/assets/images/power_station_ports_1785257272780.jpg',
      tag: 'لوحة التحكم واللوحة الرقمية'
    },
    {
      id: 'usecase',
      title: 'استخدام فعلي أثناء الإنارة المنزلية',
      subtitle: 'إضاءة قوية وهادئة للغرفة أثناء انقطاع التيار الكهربائي بالليل',
      url: '/src/assets/images/power_station_use_case_1785257288169.jpg',
      tag: 'استخدام واقعي'
    }
  ];

  const currentImg = galleryImages[selectedImageIndex];

  return (
    <section className="py-16 md:py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33FF55]/10 border border-[#33FF55]/30 text-[#33FF55] text-xs font-bold mb-4">
            معرض الصور والجودة
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            معاينة دقيقة ومطابقة للمنتج المعتمد 100%
          </h2>

          <p className="text-base md:text-lg text-gray-300 font-medium">
            تصفح الصور الحقيقية للواجهة والمنحنيات والجودة العالية لمحطة PRO FAST YY-203.
          </p>
        </div>

        {/* Gallery Showcase Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Main Large Render View */}
          <div className="lg:col-span-8">
            <div className="glass-card rounded-3xl p-4 md:p-6 border border-[#33FF55]/30 bg-[#0d0d0d] relative overflow-hidden group">
              <div className="absolute top-6 right-6 bg-[#050505]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#33FF55]/40 text-xs font-bold text-[#33FF55] z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {currentImg.tag}
              </div>

              <div className="relative w-full h-80 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden bg-[#050505] flex items-center justify-center">
                <img
                  src={currentImg.url}
                  alt={currentImg.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="mt-4 p-4 bg-[#141414] rounded-2xl border border-white/5 text-right">
                <h3 className="text-lg font-bold text-white mb-1 font-['Tajawal']">
                  {currentImg.title}
                </h3>
                <p className="text-xs text-gray-300">
                  {currentImg.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnails Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-gray-300 mb-1">اختر الزاوية للمعاينة:</h4>

            {galleryImages.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setSelectedImageIndex(idx)}
                className={`p-3 rounded-2xl border text-right transition-all cursor-pointer flex items-center gap-4 ${
                  selectedImageIndex === idx
                    ? 'border-[#33FF55] bg-[#33FF55]/10 green-glow-subtle'
                    : 'glass-card border-white/10 hover:border-white/30'
                }`}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#050505] shrink-0 border border-white/10">
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#33FF55] block mb-1">
                    {img.tag}
                  </span>
                  <p className="text-xs font-bold text-white font-['Tajawal'] leading-snug">
                    {img.title}
                  </p>
                </div>
              </button>
            ))}

            <div className="p-4 rounded-2xl bg-[#121212] border border-white/10 text-xs text-gray-400 space-y-2 mt-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <Shield className="w-4 h-4 text-[#33FF55]" />
                <span>ضمان الجودة بالمغرب</span>
              </div>
              <p>تتوصلون بنفس المنتج الموضح بالصور تماماً والدفع بعد المعاينة عند الموزع.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
