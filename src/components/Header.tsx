import React from 'react';
import { ShieldCheck, Truck, Zap, PhoneCall } from 'lucide-react';

export const Header: React.FC = () => {
  const scrollToCheckout = () => {
    const checkoutEl = document.getElementById('checkout');
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-[#050505] via-[#101010] to-[#050505] border-b border-[#33FF55]/20 py-2 px-4 text-center text-xs md:text-sm font-medium text-white flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 bg-[#33FF55]/15 text-[#33FF55] px-2.5 py-0.5 rounded-full text-xs font-semibold border border-[#33FF55]/30">
          <span className="w-2 h-2 rounded-full bg-[#33FF55] animate-ping"></span>
          عرض خاص في المغرب
        </span>
        <span className="hidden sm:inline text-gray-300">|</span>
        <span className="flex items-center gap-1 text-gray-200">
          <Truck className="w-4 h-4 text-[#33FF55]" />
          توصيل سريع ومجاني لجميع المدن (24-48 ساعة)
        </span>
        <span className="hidden md:inline text-gray-300">|</span>
        <span className="hidden md:flex items-center gap-1 text-[#9CFF3A] font-semibold">
          <ShieldCheck className="w-4 h-4 text-[#33FF55]" />
          الدفع عند الاستلام 100%
        </span>
      </div>

      {/* Main Glass Navbar */}
      <nav className="glass-card bg-[#050505]/80 backdrop-blur-md border-b border-white/10 px-4 md:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#101010] to-[#1a1a1a] border border-[#33FF55]/40 flex items-center justify-center green-glow-subtle">
            <Zap className="w-5 h-5 text-[#33FF55]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-black tracking-tight text-white font-['Tajawal']">
                PRO FAST <span className="text-[#33FF55]">YY-203</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#33FF55]/20 text-[#33FF55] border border-[#33FF55]/30">
                ORIGINAL
              </span>
            </div>
            <p className="text-[11px] text-gray-400 font-medium hidden sm:block">
              محطة الطاقة المحمولة المعتمدة للمغرب
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+212600000000"
            className="hidden lg:flex items-center gap-1.5 text-xs text-gray-300 hover:text-[#33FF55] transition-colors py-2 px-3 rounded-lg border border-white/10 bg-white/5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#33FF55]" />
            <span>خدمة الزبناء بالمغرب</span>
          </a>

          <button
            onClick={scrollToCheckout}
            className="green-button-glow bg-gradient-to-r from-[#33FF55] to-[#9CFF3A] text-[#050505] font-black text-xs md:text-sm px-4 md:px-6 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-current text-[#050505]" />
            <span>اطلب الآن — الدفع عند الاستلام</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
