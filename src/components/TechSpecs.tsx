import React from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';

export const TechSpecs: React.FC = () => {
  const specs = [
    { label: 'اسم واسم الموديل', value: 'PRO FAST YY-203 Portable Power Station' },
    { label: 'منفذ التيار المتردد (AC)', value: '1x مقبس عالمي متعدد المعايير (Universal AC Socket)' },
    { label: 'منافذ الشحن السريع (USB)', value: '3x منافذ USB-A متوافقة مع جميع الهواتف والأجهزة' },
    { label: 'منافذ التيار المستمر (DC)', value: '3x منافذ DC بجهد 12V مخصصة للإضاءة والراوتر' },
    { label: 'المذياع والراديو', value: 'راديو FM مدمج مع هوائي معدني تليسكوبي ومكبر صوت' },
    { label: 'الإضاءة والكشاف', value: 'كشاف LED طوارئ مدمج بالواجهة عالي السطوع' },
    { label: 'مؤشر الحالة والبطارية', value: 'شاشة إلكترونية رقمية LCD لعرض النسبة والحالة' },
    { label: 'هيكل وقابلية الحمل', value: 'هيكل مصفح مضاد للصدمات مع مقبض حمل علوي مريح' },
    { label: 'المحتويات المرفقة', value: 'محطة YY-203 + كابل الشحن AC + دليل الاستعمال' },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33FF55]/10 border border-[#33FF55]/30 text-[#33FF55] text-xs font-bold mb-4">
            <Cpu className="w-4 h-4" />
            المواصفات الفنية المعتمدة
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-['Tajawal'] leading-tight mb-3">
            المواصفات والخصائص الرسمية للمنتج
          </h2>

          <p className="text-sm text-gray-300">
            جميع المواصفات الواردة أدناه موثقة ومطابقة للوحدة الفعلية بداخل الصندوق.
          </p>
        </div>

        {/* Specs Table */}
        <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/10 bg-[#0c0c0c]">
          <div className="divide-y divide-white/10">
            {specs.map((item, index) => (
              <div key={index} className="py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm">
                <span className="text-gray-400 font-medium sm:w-1/3">{item.label}</span>
                <span className="text-white font-bold sm:w-2/3 sm:text-left">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-2 text-[#33FF55] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>بيانات ومواصفات موثقة 100% بدون أي ادعاءات زاتفة.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
