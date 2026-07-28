import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, ShieldCheck } from 'lucide-react';
import { FAQS } from '../data/productData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33FF55]/10 border border-[#33FF55]/30 text-[#33FF55] text-xs font-bold mb-4">
            <HelpCircle className="w-4 h-4" />
            الأسئلة الشائعة والأجوبة
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            كل ما تحتاجه لمعرفته قبل طلب المحطة
          </h2>

          <p className="text-base text-gray-300 font-medium">
            إليكم إجابات شفافة ومباشرة على أكثر الاستفسارات وروداً من زبنائنا بالمغرب.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="glass-card rounded-2xl border border-white/10 bg-[#0c0c0c] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="text-base font-bold text-white font-['Tajawal']">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#181818] flex items-center justify-center shrink-0 text-[#33FF55] transition-transform ${
                    isOpen ? 'rotate-180 bg-[#33FF55]/20' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-gray-300 leading-relaxed border-t border-white/5 bg-[#101010]/50 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call support note */}
        <div className="mt-10 p-6 rounded-2xl bg-[#101010] border border-[#33FF55]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right">
            <h4 className="text-sm font-bold text-white mb-1 font-['Tajawal']">لديك استفسار آخر لم نذكره هنا؟</h4>
            <p className="text-xs text-gray-400">فريق خدمة الزبناء المغربي جاهز للإجابة على جميع تساؤلاتكم عبر الهاتف والواتساب.</p>
          </div>

          <a
            href="#checkout"
            className="green-button-glow bg-[#33FF55] text-[#050505] font-black text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>اطلب الآن ودعنا نتصل بك</span>
          </a>
        </div>

      </div>
    </section>
  );
};
