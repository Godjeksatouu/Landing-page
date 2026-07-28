import React, { useState } from 'react';
import { Plug, Usb, Zap, Radio, Lightbulb, Tv, Info, CheckCircle2 } from 'lucide-react';
import { VERIFIED_PORTS } from '../data/productData';

export const PortsOverview: React.FC = () => {
  const [activePortId, setActivePortId] = useState<string>('ac-socket');

  const activePort = VERIFIED_PORTS.find((p) => p.id === activePortId) || VERIFIED_PORTS[0];

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33FF55]/10 border border-[#33FF55]/30 text-[#33FF55] text-xs font-bold mb-4">
            دليل المنافذ والتشغيل
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            استكشف منافذ الطاقة الموثوقة بالكامل
          </h2>

          <p className="text-base md:text-lg text-gray-300 font-medium">
            اضغط على أي منفذ أدناه للتعرف على استخداماته الفعالية والأجهزة المتوافقة معه مباشرة.
          </p>
        </div>

        {/* Interactive Port Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Visual Port Map Buttons */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {VERIFIED_PORTS.map((port) => {
              let Icon = Plug;
              if (port.id === 'usb-ports') Icon = Usb;
              if (port.id === 'dc-ports') Icon = Zap;
              if (port.id === 'fm-radio') Icon = Radio;
              if (port.id === 'led-light') Icon = Lightbulb;
              if (port.id === 'lcd-display') Icon = Tv;

              const isSelected = port.id === activePortId;

              return (
                <button
                  key={port.id}
                  onClick={() => setActivePortId(port.id)}
                  className={`p-4 rounded-2xl text-right transition-all cursor-pointer flex items-center gap-3 ${
                    isSelected
                      ? 'bg-[#33FF55] text-[#050505] font-black shadow-lg scale-[1.02]'
                      : 'glass-card border-white/10 hover:border-[#33FF55]/40 text-white'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-[#050505] text-[#33FF55]' : 'bg-[#181818] text-[#33FF55]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-['Tajawal'] leading-snug">
                      {port.nameAr.split('(')[0]}
                    </h4>
                    <span className={`text-[11px] font-semibold block ${isSelected ? 'text-[#050505]/80' : 'text-gray-400'}`}>
                      العدد: {port.count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Port Info Card */}
          <div className="lg:col-span-6">
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-[#33FF55]/40 bg-[#101010] relative overflow-hidden green-glow-subtle">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#33FF55]/20 border border-[#33FF55]/40 flex items-center justify-center text-[#33FF55]">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-[#33FF55] font-bold block">تفاصيل المنفذ المحدد</span>
                    <h3 className="text-xl font-bold text-white font-['Tajawal']">{activePort.nameAr}</h3>
                  </div>
                </div>

                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#181818] text-white border border-white/10">
                  متوفر x{activePort.count}
                </span>
              </div>

              <p className="text-base text-gray-200 leading-relaxed mb-6 font-medium">
                {activePort.description}
              </p>

              <div className="bg-[#181818] p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-[#33FF55] mb-3">
                  <Info className="w-4 h-4" />
                  <span>أبرز الأجهزة والمعدات المتوافقة:</span>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                  {activePort.compatibleDevices.map((dev, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#33FF55] shrink-0" />
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
