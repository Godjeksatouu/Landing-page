import React, { useState, useEffect } from 'react';
import { Zap, Truck, Package } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
      const checkoutEl = document.getElementById('checkout');
      if (checkoutEl) {
        const rect = checkoutEl.getBoundingClientRect();
        setIsVisible(!(rect.top <= window.innerHeight && rect.bottom >= 0));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible || !scrolled) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden px-3 pt-3 pb-safe bg-[#050505]/97 backdrop-blur-xl border-t border-[#79E000]/30 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]" style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}>
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">

        {/* Price & Shipping */}
        <div className="text-right font-['Tajawal']">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-[#79E000]">
              {PRODUCT_INFO.price}
            </span>
            <span className="text-sm font-bold text-white">{PRODUCT_INFO.currency}</span>
            <span className="text-xs text-gray-500 line-through">
              {PRODUCT_INFO.oldPrice}
            </span>
          </div>
          <p className="text-[10px] text-gray-400 font-bold flex items-center gap-1.5 mt-0.5 font-['Cairo']">
            <Truck className="w-3 h-3 text-[#79E000]" />
            توصيل مجاني + الدفع عند الاستلام
          </p>
        </div>

        {/* CTA */}
        <button
          id="mobile-sticky-cta"
          onClick={scrollToCheckout}
          className="btn-lime-glow font-black text-sm px-5 py-3 rounded-xl flex items-center gap-1.5 shrink-0 cursor-pointer font-['Tajawal']"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>اطلب الآن</span>
        </button>

      </div>

      {/* Stock urgency pill */}
      <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] font-bold text-orange-400 font-['Cairo']">
        <Package className="w-3 h-3" />
        <span>متبقي 9 قطع فقط في المخزون — لا تفوت الفرصة</span>
      </div>
    </div>
  );
};
