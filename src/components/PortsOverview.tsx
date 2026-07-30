import React, { useState } from 'react';
import { Plug, Usb, Zap, Radio, Lightbulb, Tv, Info, CheckCircle2 } from 'lucide-react';
import { VERIFIED_PORTS } from '../data/productData';

const iconMap: Record<string, React.ElementType> = {
  'ac-socket': Plug,
  'usb-ports': Usb,
  'dc-ports': Zap,
  'fm-radio': Radio,
  'led-light': Lightbulb,
  'lcd-display': Tv,
};

export const PortsOverview: React.FC = () => {
  const [activePortId, setActivePortId] = useState<string>('ac-socket');
  const activePort = VERIFIED_PORTS.find((p) => p.id === activePortId) || VERIFIED_PORTS[0];
  const ActiveIcon = iconMap[activePortId] ?? Plug;

  return (
    <section id="ports" className="py-16 md:py-24 bg-[#0a0a0a] border-t border-white/8 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#79E000]/7 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#79E000]/10 border border-[#79E000]/30 text-[#79E000] text-xs font-bold mb-5 font-['Cairo']">
            دليل المنافذ والتشغيل
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            استكشف منافذ الطاقة الموثوقة بالكامل
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-medium font-['Cairo']">
            اضغط على أي منفذ للتعرف على استخداماته والأجهزة المتوافقة معه.
          </p>
        </div>

        {/* Interactive Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Port Selector Buttons */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {VERIFIED_PORTS.map((port) => {
              const Icon = iconMap[port.id] ?? Plug;
              const isSelected = port.id === activePortId;
              return (
                <button
                  key={port.id}
                  onClick={() => setActivePortId(port.id)}
                  className={`p-4 rounded-2xl text-right transition-all duration-300 cursor-pointer flex items-center gap-3 border ${
                    isSelected
                      ? 'bg-[#79E000] text-[#050505] font-black shadow-[0_0_25px_rgba(121,224,0,0.4)] scale-[1.02] border-[#79E000]'
                      : 'glass-card-luxury border-white/8 hover:border-[#79E000]/35 text-white'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-[#050505]/20' : 'bg-[#1a1a1a]'
                  }`}>
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-[#050505]' : 'text-[#79E000]'}`} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold font-['Tajawal'] leading-snug ${isSelected ? 'text-[#050505]' : 'text-white'}`}>
                      {port.nameAr.split('(')[0].trim()}
                    </h4>
                    <span className={`text-[10px] font-semibold block ${isSelected ? 'text-[#050505]/70' : 'text-gray-500'} font-['Cairo']`}>
                      متوفر ×{port.count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Port Detail Panel */}
          <div className="lg:col-span-7">
            <div className="glass-card-luxury p-6 md:p-8 rounded-3xl border border-[#79E000]/30 bg-[#101010]/95 relative overflow-hidden shadow-[0_0_40px_rgba(121,224,0,0.08)]">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#79E000]/5 via-transparent to-transparent pointer-events-none" />

              {/* Panel Header */}
              <div className="flex items-center justify-between mb-6 border-b border-white/8 pb-5 relative">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#79E000]/15 border border-[#79E000]/35 flex items-center justify-center text-[#79E000] shadow-[0_0_15px_rgba(121,224,0,0.2)]">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#79E000] font-bold block font-['Cairo']">تفاصيل المنفذ المحدد</span>
                    <h3 className="text-lg sm:text-xl font-black text-white font-['Tajawal'] leading-tight">{activePort.nameAr}</h3>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#1a1a1a] text-white border border-white/8 font-['Cairo']">
                  متوفر ×{activePort.count}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed mb-6 font-medium font-['Cairo'] text-right">
                {activePort.description}
              </p>

              {/* Compatible Devices */}
              <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-white/6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#79E000] mb-3 font-['Cairo']">
                  <Info className="w-4 h-4" />
                  <span>أبرز الأجهزة والمعدات المتوافقة:</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activePort.compatibleDevices.map((dev, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-300 font-['Cairo']">
                      <CheckCircle2 className="w-4 h-4 text-[#79E000] shrink-0" />
                      <span>{dev}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
