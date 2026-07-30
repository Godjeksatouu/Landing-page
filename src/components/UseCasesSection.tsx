import React, { useState } from 'react';
import { Home, Tent, Car, AlertOctagon, Briefcase, Trees, Store, Building2, Check, ArrowLeft } from 'lucide-react';
import { heroImg, portsImg, useCaseImg } from '../assets/images';

const useCases = [
  {
    id: 'home',
    title: 'المنزل والعائلة',
    icon: Home,
    image: useCaseImg,
    badge: 'الاستخدام المنزلي الأساسي 🏠',
    description: 'إنارة الصالون وغرف الأطفال، تشغيل المروحة والراوتر وشحن جميع هواتف العائلة أثناء انقطاع الكهرباء.',
    benefits: ['إنارة LED فورية للغرف', 'تشغيل الواي فاي والراوتر', 'شحن هواتف جميع الأفراد'],
  },
  {
    id: 'camping',
    title: 'التخييم والرحلات',
    icon: Tent,
    image: heroImg,
    badge: 'مغامرات الطبيعة ⛺',
    description: 'الرفيق المثالي للرحلات الجبلية والشاطئية. إضاءة ليلية وراديو FM وشحن معداتك الذكية.',
    benefits: ['راديو FM بهوائي ممتاز', 'كشاف LED عالي السطوع', 'مقبض متين وتصميم مدمج'],
  },
  {
    id: 'travel',
    title: 'السفر بالسيارة',
    icon: Car,
    image: portsImg,
    badge: 'الرحلات الطويلة 🚗',
    description: 'سهل الحمل والتخزين في صندوق السيارة للرحلات الطويلة بأمان واطمئنان تام.',
    benefits: ['وزن خفيف ومقبض علوي', 'منافذ شحن متعددة', 'جاهزية عالية للطوارئ'],
  },
  {
    id: 'emergency',
    title: 'حالات الطوارئ',
    icon: AlertOctagon,
    image: useCaseImg,
    badge: 'استجابة سريعة ⚠️',
    description: 'جاهزية بضغطة زر واحدة لتزويدك بالإضاءة والأخبار عبر الراديو في الظروف المناخية الاستثنائية.',
    benefits: ['التقاط إذاعات الأخبار FM', 'كشاف طوارئ أمامي قوي', 'شاشة LCD لمراقبة الطاقة'],
  },
  {
    id: 'office',
    title: 'المكتب والعمل',
    icon: Briefcase,
    image: portsImg,
    badge: 'الاستمرارية المهنية 💼',
    description: 'ضمان عدم ضياع أعمالك الهامة على اللابتوب واستمرار اتصالك بالإنترنت أثناء ساعات العمل.',
    benefits: ['تشغيل شواحن اللابتوب', 'الحفاظ على اتصال الراوتر', 'هدوء تام بدون ضجيج'],
  },
  {
    id: 'farm',
    title: 'الضيعة والمزرعة',
    icon: Trees,
    image: heroImg,
    badge: 'المناطق النائية 🌾',
    description: 'حل عملي للضيعات والمزارع لشحن الأجهزة والإنارة المباشرة في المناطق البعيدة.',
    benefits: ['منافذ DC لمصابيح 12V', 'هيكل متين يتحمل الصدمات', 'إضاءة قوية في الخلاء'],
  },
  {
    id: 'shop',
    title: 'المحل التجاري',
    icon: Store,
    image: portsImg,
    badge: 'حماية نشاطك التجاري 🏪',
    description: 'استمرار تشغيل الإضاءة الأساسية وأجهزة الدفع وكاميرات المراقبة بدون توقف.',
    benefits: ['حماية الأعمال التجارية', 'تشغيل أجهزة الدفع والراوتر', 'مظهر أنيق وفاخر'],
  },
  {
    id: 'apartment',
    title: 'الشقق السكنية',
    icon: Building2,
    image: useCaseImg,
    badge: 'آمن 100% داخل الغرف 🏢',
    description: 'آمن تماماً للاستخدام داخل الغرف والشقق لأنه لا يطلق أي أدخنة أو غازات أو ضوضاء.',
    benefits: ['صفر انبعاثات حرارية', 'صامت 100%', 'سهل التخزين في أي زاوية'],
  },
];

export const UseCasesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<string>('home');

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentCase = useCases.find((c) => c.id === selectedCase) || useCases[0];

  return (
    <section className="py-16 md:py-24 scene-usecases border-t border-white/8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#79E000]/7 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#79E000]/10 border border-[#79E000]/30 text-[#79E000] text-xs font-bold mb-5 font-['Cairo']">
            استخدامات متنوعة في الواقع المغربي
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            مصدر طاقتك الموثوق في كل مكان
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-medium font-['Cairo']">
            في المنزل، العمل، أو مغامرة في الطبيعة — YY-203 يلبي كافة احتياجاتك.
          </p>
        </div>

        {/* Selector Tabs — 4 cols on xs, 8 cols on lg */}
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-1.5 sm:gap-2 mb-8">
          {useCases.map((c) => {
            const Icon = c.icon;
            const isSelected = c.id === selectedCase;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCase(c.id)}
                className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#79E000] text-[#050505] font-black shadow-[0_0_20px_rgba(121,224,0,0.4)] scale-105 border-[#79E000]'
                    : 'glass-card-luxury text-gray-400 hover:text-white hover:border-[#79E000]/30 border-white/8'
                }`}
              >
                <Icon className={`w-4 h-4 mb-1 ${isSelected ? 'text-[#050505]' : 'text-[#79E000]'}`} />
                <span className="text-[10px] sm:text-xs font-bold font-['Tajawal'] leading-tight">{c.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Use Case Card */}
        <div className="glass-card-luxury rounded-3xl p-6 md:p-10 border border-[#79E000]/25 bg-[#101010]/95 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">

          {/* Text Side */}
          <div className="lg:col-span-7 space-y-5 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#79E000]/12 text-[#79E000] text-xs font-bold border border-[#79E000]/25 font-['Cairo']">
              {currentCase.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-['Tajawal']">
              {currentCase.title}
            </h3>

            <p className="text-base text-gray-400 leading-relaxed font-medium font-['Cairo']">
              {currentCase.description}
            </p>

            <div className="pt-4 border-t border-white/8 space-y-3">
              <p className="text-xs font-bold text-[#79E000] font-['Cairo']">أبرز المزايا في هذا الاستخدام:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {currentCase.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#1a1a1a] p-3 rounded-xl border border-white/8 text-xs font-semibold text-gray-300 font-['Cairo']">
                    <Check className="w-4 h-4 text-[#79E000] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToCheckout}
              className="btn-lime-glow font-black text-xs md:text-sm py-3.5 px-7 rounded-xl inline-flex items-center gap-2 cursor-pointer font-['Tajawal']"
            >
              <span>احجز محطتك لهذا الاستخدام</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Image Side */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <img
                src={currentCase.image}
                alt={currentCase.title}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 bg-[#050505]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#79E000]/35 text-xs font-bold text-[#79E000] flex items-center gap-2 font-['Cairo']">
                {React.createElement(currentCase.icon, { className: 'w-4 h-4' })}
                <span>جاهزية كاملة 100%</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
