import React, { useState } from 'react';
import { Sparkles, Shield } from 'lucide-react';
import { heroImg, portsImg, useCaseImg } from '../assets/images';

const galleryImages = [
  {
    id: 'hero',
    title: 'الواجهة الرئيسية ومقبض الحمل',
    subtitle: 'عرض الاستوديو لمحطة PRO FAST YY-203 مع الواجهة الخضراء والهوائي المعدني',
    url: heroImg,
    tag: 'عرض شامل 360°',
  },
  {
    id: 'ports',
    title: 'تفاصيل الواجهة ومنافذ الطاقة',
    subtitle: 'مقبس AC عالمي، 3 منافذ USB، 3 منافذ DC، شاشة LCD وكشاف LED مدمج',
    url: portsImg,
    tag: 'لوحة التحكم الكاملة',
  },
  {
    id: 'usecase',
    title: 'استخدام فعلي أثناء الإنارة المنزلية',
    subtitle: 'إضاءة قوية وهادئة للغرفة أثناء انقطاع التيار الكهربائي بالليل',
    url: useCaseImg,
    tag: 'استخدام واقعي',
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
            معرض الصور والجودة
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            معاينة دقيقة ومطابقة للمنتج المعتمد 100%
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-medium font-['Cairo']">
            تصفح الصور الحقيقية للواجهة ومنافذ الطاقة وتفاصيل الجودة العالية.
          </p>
        </div>

        {/* Gallery Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Main View */}
          <div className="lg:col-span-8">
            <div className="glass-card-luxury rounded-3xl p-4 md:p-6 border border-[#79E000]/25 bg-[#101010]/90 relative overflow-hidden group">
              {/* Tag Overlay */}
              <div className="absolute top-6 right-6 bg-[#050505]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#79E000]/40 text-xs font-bold text-[#79E000] z-10 flex items-center gap-2 font-['Cairo']">
                <Sparkles className="w-3.5 h-3.5" />
                {currentImg.tag}
              </div>

              {/* Image */}
              <div className="relative w-full h-72 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden bg-[#0d0d0d] flex items-center justify-center">
                <img
                  src={currentImg.url}
                  alt={currentImg.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700"
                />
                {/* Subtle bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0d0d0d] to-transparent pointer-events-none" />
              </div>

              {/* Caption */}
              <div className="mt-4 p-4 bg-[#151515] rounded-2xl border border-white/6 text-right">
                <h3 className="text-base font-bold text-white mb-1 font-['Tajawal']">{currentImg.title}</h3>
                <p className="text-xs text-gray-500 font-['Cairo']">{currentImg.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Thumbnails + Trust Card */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-gray-500 mb-1 font-['Cairo'] text-right">اختر الزاوية للمعاينة:</h4>

            {galleryImages.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setSelectedIndex(idx)}
                className={`p-3 rounded-2xl border text-right transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                  selectedIndex === idx
                    ? 'border-[#79E000] bg-[#79E000]/10 shadow-[0_0_15px_rgba(121,224,0,0.2)]'
                    : 'glass-card-luxury border-white/8 hover:border-[#79E000]/35'
                }`}
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#050505] shrink-0 border border-white/8">
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#79E000] block mb-0.5 font-['Cairo']">
                    {img.tag}
                  </span>
                  <p className="text-xs font-bold text-white font-['Tajawal'] leading-snug">
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
