import React from 'react';
import { Truck, ShieldCheck, Star, Eye } from 'lucide-react';

const trustItems = [
  {
    icon: Truck,
    title: 'توصيل مجاني 24-48 ساعة',
    sub: 'لكافة مدن المغرب',
  },
  {
    icon: ShieldCheck,
    title: 'الدفع عند الاستلام',
    sub: 'لا تدفع قبل المعاينة',
  },
  {
    icon: Star,
    title: '4.9★ من 384 زبون',
    sub: 'تقييمات حقيقية موثوقة',
  },
  {
    icon: Eye,
    title: 'معاينة قبل الدفع',
    sub: 'افحص طردك بنفسك',
  },
];

export const TrustBar: React.FC = () => {
  return (
    <section className="py-6 bg-[#080808] border-b border-white/8 relative overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-[#79E000]/35 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Static 2×2 on mobile, 4-col on desktop — Mere Exposure: static = readable */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {trustItems.map(({ icon: Icon, title, sub }) => (
            <div
              key={title}
              className="flex items-center gap-3 px-3 py-3.5 rounded-xl bg-[#111]/80 border border-white/6 hover:border-[#79E000]/25 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#79E000]/12 border border-[#79E000]/20 flex items-center justify-center text-[#79E000] shrink-0 group-hover:bg-[#79E000]/20 transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-black text-white font-['Tajawal'] leading-tight truncate">{title}</h3>
                <p className="text-[10px] text-gray-500 font-medium font-['Cairo'] mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[#79E000]/20 to-transparent pointer-events-none" />
    </section>
  );
};
