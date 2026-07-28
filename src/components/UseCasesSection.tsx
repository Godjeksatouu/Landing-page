import React, { useState } from 'react';
import { Home, Tent, Car, AlertOctagon, Briefcase, Trees, Store, Building2, Zap, Check, ArrowLeft } from 'lucide-react';

export const UseCasesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<string>('home');

  const scrollToCheckout = () => {
    const checkoutEl = document.getElementById('checkout');
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const useCases = [
    {
      id: 'home',
      title: 'المنزل والأنشطة العائلية',
      icon: Home,
      image: '/src/assets/images/power_station_use_case_1785257288169.jpg',
      badge: 'الاستخدام المنزلي الأساسي 🏠',
      description: 'إنارة الصالون وغرف الأطفال، تشغيل المروحة والراوتر وشحن جميع هواتف العائلة أثناء انقطاع الكهرباء.',
      benefits: ['إنارة LED فورية للغرف', 'تشغيل الواي فاي والراوتر', 'شحن الهواتف لجميع الأفراد']
    },
    {
      id: 'camping',
      title: 'التخييم والرحلات الجبلية',
      icon: Tent,
      image: '/src/assets/images/power_station_hero_1785257257475.jpg',
      badge: 'مغامرات الطبيعة والرحلات ⛺',
      description: 'الرفيق المثالي للرحلات الجبلية والشاطئية. يوفر الإضاءة الليلية، الاستماع للراديو، وشحن المعدات الذكية.',
      benefits: ['راديو FM مع هوائي معدني ممتاز', 'مصباح كشاف LED عالي السطوع', 'تصميم مدمج مع مقبض متين']
    },
    {
      id: 'travel',
      title: 'السفر والتنقل بالسيارة',
      icon: Car,
      image: '/src/assets/images/power_station_ports_1785257272780.jpg',
      badge: 'الرحلات الطويلة بالسيارة 🚗',
      description: 'سهل الحمل والتخزين في الصندوق الخلفي للسيارة لخوض الرحلات الطويلة بآمان واطمئنان تام.',
      benefits: ['وزن خفيف ومقبض علوي مريح', 'منافذ شحن سريعة متعددة', 'جاهزية عالية للطوارئ']
    },
    {
      id: 'emergency',
      title: 'حالات الطوارئ المفاجئة',
      icon: AlertOctagon,
      image: '/src/assets/images/power_station_use_case_1785257288169.jpg',
      badge: 'استجابة سريعة للطوارئ ⚠️',
      description: 'جاهزية سريعة بضغطة زر واحدة لتزويدك بالإضاءة والأخبار عبر الراديو في الظروف المناخية الاستثنائية.',
      benefits: ['التقاط إذاعات الأخبار عبر FM', 'كشاف طوارئ أمامي قوي', 'شاشة LCD لمراقبة الطاقة']
    },
    {
      id: 'office',
      title: 'المكتب والعمل عن بعد',
      icon: Briefcase,
      image: '/src/assets/images/power_station_ports_1785257272780.jpg',
      badge: 'الاستمرارية المهنية 💼',
      description: 'ضمان عدم ضياع أعمالك وملفاتك الهامة على اللابتوب واستمرار اتصالك بالإنترنت أثناء ساعات العمل.',
      benefits: ['تشغيل شواحن اللابتوب والمكتب', 'الحفاظ على اتصال انترنت الراوتر', 'هدوء تام بدون أي صوت']
    },
    {
      id: 'farm',
      title: 'الضيعة والمزرعة',
      icon: Trees,
      image: '/src/assets/images/power_station_hero_1785257257475.jpg',
      badge: 'الضيعات والمناطق النائية 🌾',
      description: 'حل عملي وموثوق للمناطق النائية في الضيعات والمزارع لشحن الأجهزة والإنارة المباشرة.',
      benefits: ['منافذ DC لتوصيل مصابيح 12V', 'تحمل الهيكل الخارجي للصدمات', 'إضاءة قوية في الخلاء']
    },
    {
      id: 'shop',
      title: 'المحل التجاري والكاميرات',
      icon: Store,
      image: '/src/assets/images/power_station_ports_1785257272780.jpg',
      badge: 'حماية نشاطك التجاري 🏪',
      description: 'استمرار تشغيل أجهزة آلات الحساب، الإضاءة الأساسية، وكاميرات المراقبة بدون توقف للنشاط التجاري.',
      benefits: ['حماية الأعمال التجارية', 'تشغيل أجهزة الدفع والراوتر', 'مظهر أنيق وفاخر']
    },
    {
      id: 'apartment',
      title: 'الشقق والمباني السكنية',
      icon: Building2,
      image: '/src/assets/images/power_station_use_case_1785257288169.jpg',
      badge: 'آمن 100% داخل الغرف 🏢',
      description: 'آمن تماماً للاستخدام داخل الغرف المغلقة والشقق لأنه لا يطلق أي أدخنة أو غازات أو ضوضاء.',
      benefits: ['صفر انبعاثات حرارية أو غازية', 'صامت 100% بدون أي ضجيج', 'سهل التخزين في أي زاوية']
    }
  ];

  const currentCase = useCases.find((c) => c.id === selectedCase) || useCases[0];

  return (
    <section className="py-16 md:py-24 bg-section-usecases border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33FF55]/10 border border-[#33FF55]/30 text-[#33FF55] text-xs font-bold mb-4">
            استخدامات متنوعة في الواقع المغربي
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            مصدر طاقتك الموثوق في كل مكان وزمان
          </h2>

          <p className="text-base md:text-lg text-gray-300 font-medium">
            سواء كنت في المنزل، في العمل، أو تخوض مغامرة في الطبيعة المغربية — YY-203 يلبي كافة تطلعاتك.
          </p>
        </div>

        {/* Use Case Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
          {useCases.map((c) => {
            const Icon = c.icon;
            const isSelected = c.id === selectedCase;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCase(c.id)}
                className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#33FF55] text-[#050505] font-black shadow-xl scale-105'
                    : 'glass-card text-gray-300 hover:text-white hover:border-[#33FF55]/40'
                }`}
              >
                <Icon className={`w-5 h-5 mb-1.5 ${isSelected ? 'text-[#050505]' : 'text-[#33FF55]'}`} />
                <span className="text-xs font-bold font-['Tajawal'] leading-tight">{c.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Use Case Details Composition Card */}
        <div className="glass-card-premium p-6 md:p-10 rounded-3xl border border-[#33FF55]/40 bg-[#090d16] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33FF55]/15 text-[#33FF55] text-xs font-bold border border-[#33FF55]/30">
              <Zap className="w-3.5 h-3.5" />
              {currentCase.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-['Tajawal']">
              {currentCase.title}
            </h3>

            <p className="text-base text-gray-200 leading-relaxed font-medium">
              {currentCase.description}
            </p>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <p className="text-xs font-bold text-[#33FF55]">أبرز المزايا في هذا الاستخدام:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentCase.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#121824] p-3 rounded-xl border border-white/10 text-xs font-semibold text-gray-200">
                    <Check className="w-4 h-4 text-[#33FF55] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToCheckout}
                className="green-button-glow bg-[#33FF55] text-[#050505] font-black text-xs md:text-sm py-3 px-6 rounded-xl inline-flex items-center gap-2 cursor-pointer"
              >
                <span>احجز محطتك لهذا الاستخدام</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative group">
              <img
                src={currentCase.image}
                alt={currentCase.title}
                referrerPolicy="no-referrer"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 right-4 bg-[#030508]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#33FF55]/40 text-xs font-bold text-[#33FF55] flex items-center gap-2">
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
