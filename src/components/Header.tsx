import React, { useState, useEffect } from 'react';
import { ShieldCheck, Truck, Zap, Package } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCheckout = () => {
    const checkoutEl = document.getElementById('checkout');
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Notification Bar */}
      <div className="bg-[#79E000] py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
          <span className="flex items-center gap-1.5 text-[#050505] text-xs font-black">
            <span className="w-2 h-2 rounded-full bg-[#050505] animate-ping inline-block" />
            عرض حصري في المغرب 🇲🇦
          </span>
          <span className="text-[#050505]/50 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5 text-[#050505] text-xs font-bold">
            <Truck className="w-3.5 h-3.5" />
            توصيل مجاني خلال 24-48 ساعة
          </span>
          <span className="text-[#050505]/50 hidden md:inline">|</span>
          <span className="hidden md:flex items-center gap-1.5 text-[#050505] text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            الدفع عند الاستلام والمعاينة
          </span>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <nav
        className={`w-full px-4 md:px-8 py-3.5 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-[#79E000]/20 shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
            : 'bg-[#050505]/80 backdrop-blur-md border-b border-white/8'
        }`}
      >
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#79E000]/15 border border-[#79E000]/40 flex items-center justify-center shadow-[0_0_15px_rgba(121,224,0,0.2)]">
            <Zap className="w-5 h-5 text-[#79E000]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-black tracking-tight text-white font-['Tajawal']">
                PRO FAST <span className="text-[#79E000]">YY-203</span>
              </span>
              <span className="text-[9px] font-black px-1.5 py-0.5 rounded-md bg-[#79E000]/20 text-[#79E000] border border-[#79E000]/30 tracking-wider">
                ORIGINAL
              </span>
            </div>
            <p className="text-[11px] text-gray-500 font-medium hidden sm:block font-['Cairo']">
              محطة الطاقة المحمولة — المغرب
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-400 font-['Cairo']">
          {[
            { label: 'المميزات', id: 'features' },
            { label: 'المنافذ', id: 'ports' },
            { label: 'المقارنة', id: 'comparison' },
            { label: 'الآراء', id: 'reviews' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-[#79E000] transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Stock badge */}
          <div className="hidden sm:flex items-center gap-1.5 bg-[#151515] border border-white/10 px-3 py-1.5 rounded-full">
            <Package className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-[11px] font-bold text-orange-400 font-['Cairo']">متبقي 9 قطع</span>
          </div>

          <button
            id="header-cta"
            onClick={scrollToCheckout}
            className="btn-lime-glow text-[#050505] font-black text-xs md:text-sm px-4 md:px-5 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span className="font-['Tajawal']">اطلب الآن</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
