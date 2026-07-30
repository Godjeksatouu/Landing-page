import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS } from '../data/productData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden border-t border-white/8">
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-[#79E000]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#79E000]/10 border border-[#79E000]/30 text-[#79E000] text-xs font-bold mb-5 font-['Cairo']">
            <HelpCircle className="w-4 h-4" />
            الأسئلة الشائعة والأجوبة
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            كل ما تحتاجه قبل طلب المحطة
          </h2>
          <p className="text-base text-gray-400 font-medium font-['Cairo']">
            إليكم إجابات شفافة ومباشرة على أكثر الاستفسارات وروداً من زبنائنا بالمغرب.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 mb-10">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`glass-card-luxury rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-[#79E000]/35 bg-[#151515]/90' : 'border-white/8 bg-[#101010]/80'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-base font-bold text-white font-['Tajawal']">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#79E000]/20 text-[#79E000] rotate-180'
                      : 'bg-[#1a1a1a] text-[#79E000]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-gray-400 leading-relaxed border-t border-white/6 bg-[#0d0d0d]/50 font-medium font-['Cairo'] text-right">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="p-6 rounded-2xl glass-card-luxury border border-[#79E000]/20 bg-[#151515]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right">
            <h4 className="text-sm font-bold text-white mb-1 font-['Tajawal']">لديك استفسار آخر لم نذكره هنا؟</h4>
            <p className="text-xs text-gray-500 font-['Cairo']">فريق خدمة الزبناء المغربي جاهز على الهاتف والواتساب.</p>
          </div>
          <a
            href="#checkout"
            className="btn-lime-glow font-black text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 shrink-0 font-['Tajawal']"
          >
            <PhoneCall className="w-4 h-4" />
            <span>اطلب الآن ودعنا نتصل بك</span>
          </a>
        </div>

      </div>
    </section>
  );
};
