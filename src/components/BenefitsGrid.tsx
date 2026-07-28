import React from 'react';
import { Plug, Usb, Zap, Radio, Lightbulb, Tv, ShieldCheck, Sparkles } from 'lucide-react';
import { VERIFIED_PORTS } from '../data/productData';

export const BenefitsGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33FF55]/10 border border-[#33FF55]/30 text-[#33FF55] text-xs font-bold mb-4">
            <Sparkles className="w-4 h-4 text-[#33FF55]" />
            المميزات الموثوقة لمحطة PRO FAST YY-203
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-6">
            واجهة احترافية تتوافق مع جميع أجهزتك اليومية
          </h2>

          <p className="text-base md:text-lg text-gray-300 font-medium">
            كل منفذ وميزة في محطة PRO FAST YY-203 تم تصميمها لمنحك أقصى درجات المرونة، الأمان، وسهولة الاستخدام.
          </p>
        </div>

        {/* Verified Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {VERIFIED_PORTS.map((port) => {
            let Icon = Plug;
            if (port.id === 'usb-ports') Icon = Usb;
            if (port.id === 'dc-ports') Icon = Zap;
            if (port.id === 'fm-radio') Icon = Radio;
            if (port.id === 'led-light') Icon = Lightbulb;
            if (port.id === 'lcd-display') Icon = Tv;

            return (
              <div
                key={port.id}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 bg-[#0e0e0e] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#181818] border border-[#33FF55]/30 flex items-center justify-center text-[#33FF55] green-glow-subtle">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#33FF55]/15 text-[#33FF55] border border-[#33FF55]/30">
                      ميزة موثوقة
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-['Tajawal']">
                    {port.nameAr}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed mb-4 font-medium">
                    {port.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-bold text-gray-400 mb-2">الأجهزة والأمثلة المتوافقة:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {port.compatibleDevices.map((dev, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-[#1a1a1a] text-gray-200 px-2.5 py-1 rounded-md border border-white/5"
                      >
                        ✓ {dev}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
