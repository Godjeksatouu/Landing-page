import React from 'react';
import { Zap, ShieldCheck, Truck, HeadphonesIcon, BatteryCharging, Cable, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030303] text-gray-500 border-t border-white/8 py-10 text-center relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#79E000]/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-lg bg-[#79E000]/10 border border-[#79E000]/30 flex items-center justify-center">
            <Zap className="w-4 h-4 text-[#79E000]" />
          </div>
          <span className="text-sm font-black text-white font-['Tajawal']">
            PRO FAST <span className="text-[#79E000]">YY-203</span>
          </span>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-5 text-xs font-['Cairo']">
          {[
            { icon: Truck, text: 'توصيل مجاني 24-48h' },
            { icon: ShieldCheck, text: 'الدفع عند الاستلام' },
            { icon: ShieldCheck, text: 'ضمان 30 يوم' },
            { icon: HeadphonesIcon, text: 'دعم الزبناء' },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5 text-gray-400 font-semibold">
              <Icon className="w-3.5 h-3.5 text-[#79E000]" />
              {text}
            </span>
          ))}
        </div>

        {/* Box Contents */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-5 text-[11px] font-['Cairo']">
          <span className="text-gray-600 font-medium">📦 محطة الطاقة</span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-600 font-medium">🔌 كابل الشحن</span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-600 font-medium">📋 دليل الاستخدام</span>
        </div>

        <p className="text-[11px] text-gray-600 font-['Cairo']">© 2026 PRO FAST YY-203 — جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
};
