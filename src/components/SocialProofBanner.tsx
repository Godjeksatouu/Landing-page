import React, { useEffect, useRef, useState } from 'react';
import { Users, Star, Clock, ThumbsUp } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: string;
  suffix?: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  { icon: Users, value: '+847', label: 'عائلة مغربية اقتنت المحطة هذا الشهر', color: 'text-[#79E000]' },
  { icon: Star, value: '4.9', suffix: '★', label: 'متوسط التقييم من 384 زبون', color: 'text-yellow-400' },
  { icon: Clock, value: '24h', label: 'متوسط وقت التوصيل لكل المدن', color: 'text-[#79E000]' },
  { icon: ThumbsUp, value: '98%', label: 'نسبة الرضا والتوصية للآخرين', color: 'text-[#79E000]' },
];

function AnimatedNumber({ target, suffix }: { target: string; suffix?: string }) {
  const [displayed, setDisplayed] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          // Just animate opacity — the "counting" effect is the CSS animation
          setDisplayed(target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="animate-count-up">
      {displayed}{suffix}
    </span>
  );
}

export const SocialProofBanner: React.FC = () => {
  return (
    <section className="py-8 md:py-10 bg-[#080808] border-b border-white/8 relative overflow-hidden">
      {/* Subtle lime glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#79E000]/4 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map(({ icon: Icon, value, suffix, label, color }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 md:p-5 rounded-2xl bg-[#111]/80 border border-white/6 hover:border-[#79E000]/25 transition-all duration-300 group"
            >
              <div className={`w-10 h-10 rounded-xl bg-[#79E000]/10 border border-[#79E000]/20 flex items-center justify-center mb-3 group-hover:bg-[#79E000]/18 transition-colors ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className={`text-2xl md:text-3xl font-black font-['Tajawal'] mb-1 ${color}`}>
                <AnimatedNumber target={value} suffix={suffix} />
              </div>
              <p className="text-[11px] md:text-xs text-gray-400 font-medium font-['Cairo'] leading-tight">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
