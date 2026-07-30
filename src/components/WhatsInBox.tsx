import React from 'react';
import { BatteryCharging, Cable, BookOpen, Package } from 'lucide-react';

const items = [
  { icon: BatteryCharging, label: 'محطة الطاقة PRO FAST YY-203', sub: 'الوحدة الرئيسية بتصميم مدمج' },
  { icon: Cable, label: 'كابل الشحن الكهربائي AC', sub: 'لشحن المحطة من المقبس الجداري' },
  { icon: BookOpen, label: 'دليل الاستخدام والتعليمات', sub: 'شرح بسيط لكيفية التشغيل' },
];

export const WhatsInBox: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#050505] relative overflow-hidden border-t border-white/8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#79E000]/10 border border-[#79E000]/30 text-[#79E000] text-xs font-bold mb-4 font-['Cairo']">
            <Package className="w-4 h-4" />
            ماذا يوجد في الصندوق؟
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {items.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 p-4 rounded-2xl border border-white/8 bg-[#111]/80 text-right">
                <div className="w-10 h-10 rounded-xl bg-[#79E000]/10 border border-[#79E000]/20 flex items-center justify-center text-[#79E000] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black text-white font-['Tajawal'] leading-tight">{label}</p>
                  <p className="text-[10px] text-gray-500 font-medium font-['Cairo'] mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
