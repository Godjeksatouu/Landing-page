import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, XCircle, Flame, Moon, BatteryWarning, Sparkles } from 'lucide-react';
import { useCaseImg } from '../assets/images';

const painPoints = [
  {
    icon: Moon,
    title: 'الظلام والحرارة الشديدة',
    body: 'توقف المصابيح والمراوح في ليلة صيفية يسبب الإزعاج الشديد للأطفال ويوقف الراحة الليلية بالكامل.',
  },
  {
    icon: BatteryWarning,
    title: 'نفاد الهواتف والراوتر',
    body: 'انقطاع التواصل مع العائلة وتوقف اللابتوب والإنترنت في اللحظات الحاسمة مؤلم جداً.',
  },
  {
    icon: Flame,
    title: 'المولدات القديمة المزعجة',
    body: 'ضوضاء، رائحة بنزين، مصاريف صيانة متكررة، وخطر الحريق — كل ذلك بدون حل جذري.',
  },
];

const beforeItems = [
  { title: 'عتمة وظلام تام في البيت والمحل', body: 'الاعتماد على الشموع القابلة للاشتعال — خطير على الأطفال.' },
  { title: 'توقف اللابتوب والواي فاي والإنترنت', body: 'عطل مستمر لأعمالك وتواصلك اليومي مع العائلة.' },
  { title: 'ضوضاء ورائحة المولدات البترولية', body: 'إزعاج الجيران ومصاريف شراء البنزين والصيانة.' },
];

const afterItems = [
  { title: 'إضاءة LED فورية وطاقة ثابتة', body: 'إنارة قوية للغرف والخيام بلمسة زر واحدة — بدون مخاطر.' },
  { title: 'شحن الهواتف وتوصيل المقبس الكهربائي', body: '3 منافذ USB + مقبس AC لجميع الأجهزة واللابتوبات.' },
  { title: 'هدوء تام مع راديو FM مدمج', body: 'محطة صامتة 100% مع راديو بهوائي معدني لمتابعة الأخبار.' },
];

export const ProblemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-28 scene-problem relative overflow-hidden border-t border-white/8">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[350px] h-[350px] bg-[#79E000]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/12 border border-red-500/25 text-red-400 text-xs font-bold mb-5 font-['Cairo']">
            <AlertTriangle className="w-4 h-4" />
            تحديات انقطاع التيار الكهربائي المفاجئ
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-6">
            كم مرة انقطع عنك التيار وتركك في الظلام؟
          </h2>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed font-medium font-['Cairo']">
            في المغرب — سواء في البيت، المحل التجاري، أو الرحلات — تتوقف الأجهزة الحيوية وتتأثر راحة عائلتك وأعمالك.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {painPoints.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="glass-card-luxury p-6 rounded-3xl border border-red-500/20 bg-[#150808]/90 hover:border-red-500/45 transition-all duration-300 text-right group"
            >
              <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-red-500/12 border border-red-500/25 flex items-center justify-center mb-5 text-red-400 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white mb-2.5 font-['Tajawal']">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-['Cairo']">{body}</p>
            </div>
          ))}
        </div>

        {/* Before vs After Interactive Card */}
        <div className="glass-card-luxury rounded-3xl p-6 md:p-10 border border-white/8 bg-[#101010]/95 overflow-hidden shadow-2xl">

          {/* Card Header + Toggle */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8 border-b border-white/8 pb-6 text-right">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-['Tajawal']">
                قبل وبعد اقتناء PRO FAST YY-203
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 font-['Cairo']">
                شاهد الفارق المباشر بين الطرق القديمة والحل الحديث
              </p>
            </div>

            {/* Toggle Tabs */}
            <div className="flex items-center bg-[#0a0a0a] p-1.5 rounded-2xl border border-white/8 font-['Cairo']">
              <button
                onClick={() => setActiveTab('before')}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'before'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/35 shadow-md'
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                بدون YY-203 (قبل)
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'after'
                    ? 'bg-[#79E000]/20 text-[#79E000] border border-[#79E000]/35 shadow-md'
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                مع YY-203 ⚡ (بعد)
              </button>
            </div>
          </div>

          {/* Comparison Body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src={useCaseImg}
                alt="مقارنة قبل وبعد محطة الطاقة PRO FAST"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 bg-[#050505]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#79E000]/40 text-xs font-bold text-[#79E000] font-['Cairo']">
                إضاءة وطاقة مستمرة بدون ضوضاء ⚡
              </div>
            </div>

            {/* Dynamic Comparison Content */}
            <div className="space-y-4 text-right">
              {(activeTab === 'before' ? beforeItems : afterItems).map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3.5 p-4 rounded-2xl transition-all duration-300 ${
                    activeTab === 'before'
                      ? 'bg-red-500/8 border border-red-500/20'
                      : 'bg-[#79E000]/8 border border-[#79E000]/25'
                  }`}
                >
                  {activeTab === 'before' ? (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-[#79E000] shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h4 className="text-sm font-bold text-white font-['Tajawal']">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5 font-['Cairo']">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-white/8 flex justify-center">
            <button
              onClick={scrollToCheckout}
              className="btn-lime-glow font-black text-sm py-3.5 px-8 rounded-xl inline-flex items-center gap-2.5 cursor-pointer font-['Tajawal']"
            >
              <Sparkles className="w-4 h-4" />
              احصل على الحل المتكامل الآن — الدفع عند الاستلام
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
