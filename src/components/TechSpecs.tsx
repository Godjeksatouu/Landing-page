import React from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';

const specs = [
  { label: 'اسم الموديل', value: 'PRO FAST YY-203 Portable Power Station' },
  { label: 'منفذ التيار المتردد (AC)', value: '1x مقبس عالمي متعدد المعايير (Universal AC Socket)' },
  { label: 'منافذ الشحن السريع (USB)', value: '3x منافذ USB-A متوافقة مع جميع الهواتف والأجهزة' },
  { label: 'منافذ التيار المستمر (DC)', value: '3x منافذ DC بجهد 12V مخصصة للإضاءة والراوتر' },
  { label: 'الراديو FM', value: 'راديو FM مدمج مع هوائي معدني تليسكوبي ومكبر صوت' },
  { label: 'كشاف الطوارئ', value: 'كشاف LED طوارئ مدمج بالواجهة عالي السطوع' },
  { label: 'مؤشر الطاقة', value: 'شاشة إلكترونية رقمية LCD لعرض النسبة والحالة الكاملة' },
  { label: 'الهيكل والحمل', value: 'هيكل مصفح مضاد للصدمات مع مقبض حمل علوي مريح' },
  { label: 'محتويات الصندوق', value: 'محطة YY-203 + كابل الشحن AC + دليل الاستعمال' },
];

export const TechSpecs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden border-t border-white/8">
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-[#79E000]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#79E000]/10 border border-[#79E000]/30 text-[#79E000] text-xs font-bold mb-5 font-['Cairo']">
            <Cpu className="w-4 h-4" />
            المواصفات الفنية المعتمدة
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-['Tajawal'] leading-tight mb-3">
            المواصفات والخصائص الرسمية للمنتج
          </h2>
          <p className="text-sm text-gray-400 font-['Cairo']">
            جميع المواصفات الواردة أدناه موثقة ومطابقة للوحدة الفعلية بداخل الصندوق.
          </p>
        </div>

        {/* Specs Table */}
        <div className="glass-card-luxury rounded-3xl p-6 md:p-8 border border-white/8 bg-[#101010]/90">
          <div className="divide-y divide-white/6">
            {specs.map((item, index) => (
              <div
                key={index}
                className="py-3.5 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 text-sm group hover:bg-white/[0.015] rounded-xl px-2 transition-colors"
              >
                <span className="text-gray-500 font-medium sm:w-2/5 text-xs sm:text-sm font-['Cairo']">{item.label}</span>
                <span className="text-white font-bold sm:w-3/5 sm:text-right text-xs sm:text-sm font-['Cairo'] group-hover:text-[#79E000] transition-colors duration-200">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-white/8 flex items-center gap-2 text-xs text-[#79E000] font-semibold font-['Cairo']">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>بيانات ومواصفات موثقة 100% بدون أي ادعاءات مبالغ فيها.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
