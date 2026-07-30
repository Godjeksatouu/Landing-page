import React from 'react';
import { Plug, Usb, Zap, Radio, Lightbulb, Tv, Sparkles } from 'lucide-react';
import { VERIFIED_PORTS } from '../data/productData';

const iconMap: Record<string, React.ElementType> = {
  'ac-socket': Plug,
  'usb-ports': Usb,
  'dc-ports': Zap,
  'fm-radio': Radio,
  'led-light': Lightbulb,
  'lcd-display': Tv,
};

export const BenefitsGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden border-t border-white/8">
      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#79E000]/6 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#79E000]/10 border border-[#79E000]/30 text-[#79E000] text-xs font-bold mb-5 font-['Cairo']">
            <Sparkles className="w-4 h-4" />
            المميزات الموثوقة لمحطة PRO FAST YY-203
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-6">
            واجهة احترافية تتوافق مع جميع أجهزتك اليومية
          </h2>

          <p className="text-base md:text-lg text-gray-400 font-medium font-['Cairo']">
            كل منفذ وميزة في YY-203 تم تصميمه لمنحك أقصى مرونة وأمان وسهولة استخدام.
          </p>
        </div>

        {/* Benefits Cards Grid - 2 cols on small, 3 on large */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {VERIFIED_PORTS.map((port) => {
            const Icon = iconMap[port.id] ?? Plug;
            return (
              <div
                key={port.id}
                className="glass-card-luxury p-4 sm:p-6 rounded-2xl border border-white/8 bg-[#151515]/80 flex flex-col justify-between text-right group"
              >
                {/* Icon + Badge Row */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-[#79E000]/12 text-[#79E000] border border-[#79E000]/25 font-['Cairo']">
                      ✓ موثوق ومختبر
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#79E000]/12 border border-[#79E000]/25 flex items-center justify-center text-[#79E000] shadow-[0_0_15px_rgba(121,224,0,0.15)] group-hover:bg-[#79E000]/20 group-hover:shadow-[0_0_25px_rgba(121,224,0,0.25)] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2.5 font-['Tajawal'] leading-snug">
                    {port.nameAr}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-5 font-medium font-['Cairo']">
                    {port.description}
                  </p>
                </div>

                {/* Compatible Devices Tags */}
                <div className="pt-4 border-t border-white/8">
                  <p className="text-[11px] font-bold text-gray-500 mb-2.5 font-['Cairo']">الأجهزة المتوافقة:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {port.compatibleDevices.map((dev, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold bg-[#1e1e1e] text-gray-300 px-2.5 py-1 rounded-lg border border-white/6 font-['Cairo']"
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
