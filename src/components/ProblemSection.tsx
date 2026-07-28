import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, XCircle, Flame, Moon, BatteryWarning, Sparkles, ArrowDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');

  const scrollToCheckout = () => {
    const checkoutEl = document.getElementById('checkout');
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-section-problem relative overflow-hidden border-t border-white/10">
      {/* Dark Ambient Red & Green Ambient Lighting */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-red-900/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[350px] h-[350px] bg-[#33FF55]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold mb-4">
            <AlertTriangle className="w-4 h-4" />
            تحديات انقطاع التيار الكهربائي المفاجئ
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-6">
            كم مرة انقطع عنك التيار الكهربائي وتركت في الظلام والحرارة؟
          </h2>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium">
            في أوقات انقطاع الكهرباء المفاجئة بالمغرب — سواء في البيت، المحل التجاري، أو أثناء الرحلات والتخييم — تتوقف الأجهزة الحيوية وتتأثر راحة عائلتك وأعمالك.
          </p>
        </div>

        {/* Problem Pain Points Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          <div className="glass-card p-6 rounded-3xl border border-red-500/25 bg-[#12080a]/90 hover:border-red-500/50 transition-all text-right group">
            <div className="w-14 h-14 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center mb-5 text-red-400 group-hover:scale-110 transition-all">
              <Moon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2.5 font-['Tajawal']">الظلام التام والحرارة الشديدة</h3>
            <p className="text-sm text-gray-300 leading-relaxed font-medium">
              توقف المصابيح والمراوح في ليلة صيفية حارة يسبب الإزعاج الشديد للأطفال والوالدين وتوقف الراحة والأنشطة الليلية.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-red-500/25 bg-[#12080a]/90 hover:border-red-500/50 transition-all text-right group">
            <div className="w-14 h-14 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center mb-5 text-red-400 group-hover:scale-110 transition-all">
              <BatteryWarning className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2.5 font-['Tajawal']">نفاد بطاريات الهواتف والواي فاي</h3>
            <p className="text-sm text-gray-300 leading-relaxed font-medium">
              انقطاع التواصل مع العائلة والأقارب وتوقف العمل على اللابتوب وأجهزة الانترنت الموتور والراوتر في اللحظات الحرجة.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-red-500/25 bg-[#12080a]/90 hover:border-red-500/50 transition-all text-right group">
            <div className="w-14 h-14 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center mb-5 text-red-400 group-hover:scale-110 transition-all">
              <Flame className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2.5 font-['Tajawal']">المولدات القديمة المكلفة والضوضاء</h3>
            <p className="text-sm text-gray-300 leading-relaxed font-medium">
              المولدات التقليدية التي تعمل بالبنزين تسبب ضوضاء مزعجة، انبعاثات ضارة، وتكاليف وقود وصيانة مرتفعة باستمرار.
            </p>
          </div>

        </div>

        {/* Interactive Before vs After Comparison Card */}
        <div className="glass-card-premium rounded-3xl p-6 md:p-10 border border-white/15 bg-[#090d16]/95 overflow-hidden shadow-2xl">
          
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8 border-b border-white/10 pb-6 text-right">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-['Tajawal']">
                مقارنة الواقع: قبل وبعد اقتناء PRO FAST YY-203
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                شاهد الفارق المباشر بين الطرق القديمة والحل الحديث
              </p>
            </div>

            {/* Switch Tabs */}
            <div className="flex items-center bg-[#06090f] p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={() => setActiveTab('before')}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'before'
                    ? 'bg-red-500/25 text-red-400 border border-red-500/40 shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                بدون محطة YY-203 (قبل)
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'after'
                    ? 'bg-[#33FF55]/25 text-[#33FF55] border border-[#33FF55]/40 shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                مع محطة YY-203 (بعد) ⚡
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Visual Image Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 group">
              <img
                src="/src/assets/images/power_station_use_case_1785257288169.jpg"
                alt="Use case comparison power station Morocco"
                referrerPolicy="no-referrer"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 right-4 bg-[#030508]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#33FF55]/40 text-xs font-bold text-[#33FF55]">
                إضاءة وطاقة مستمرة بدون ضوضاء ⚡
              </div>
            </div>

            {/* Dynamic Comparison Content */}
            {activeTab === 'before' ? (
              <div className="space-y-4 text-right">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">عتمة وظلام في البيت أو المحل</h4>
                    <p className="text-xs text-gray-300">الاعتماد على الشموع القابلة للاشتعال الخطرة.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">توقف اللابتوب والواي فاي والإنترنت</h4>
                    <p className="text-xs text-gray-300">عطل مستمر لأعمالك وتواصلك اليومي.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">ضوضاء ورائحة المولدات البترولية</h4>
                    <p className="text-xs text-gray-300">إزعاج الجيران ومصاريف شراء البنزين والصيانة الدورية.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-right">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#33FF55]/10 border border-[#33FF55]/30">
                  <CheckCircle2 className="w-5 h-5 text-[#33FF55] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">إضاءة LED فورية وطاقة ثابتة</h4>
                    <p className="text-xs text-gray-300">إنارة قوية للغرف والخيام بلمسة زر واحدة بدون مخاطر.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#33FF55]/10 border border-[#33FF55]/30">
                  <CheckCircle2 className="w-5 h-5 text-[#33FF55] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">شحن الهواتف وتوصيل المقبس المباشر</h4>
                    <p className="text-xs text-gray-300">3 منافذ USB + مقبس AC لجميع الأجهزة واللابتوبات.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#33FF55]/10 border border-[#33FF55]/30">
                  <CheckCircle2 className="w-5 h-5 text-[#33FF55] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">هدوء تام ونقاء راديو FM مع هوائي معدني</h4>
                    <p className="text-xs text-gray-300">محطة صامتة 100% مع راديو مدمج للاستماع للأخبار والأثير.</p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Section CTA Button */}
          <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
            <button
              onClick={scrollToCheckout}
              className="green-button-glow bg-[#33FF55] text-[#050505] font-black text-sm py-3.5 px-8 rounded-xl inline-flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>احصل على الحل المتكامل الآن — الدفع عند الاستلام</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
