import React, { useState, useEffect } from 'react';
import { Zap, Truck } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const checkoutEl = document.getElementById('checkout');
      if (checkoutEl) {
        const rect = checkoutEl.getBoundingClientRect();
        // Hide mobile sticky bar when user is already viewing the checkout form
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCheckout = () => {
    const checkoutEl = document.getElementById('checkout');
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-3 bg-[#03070e]/95 backdrop-blur-xl border-t border-[#33FF55]/40 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">

        <div className="text-right font-['Tajawal']">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-[#33FF55]">
              {PRODUCT_INFO.price} {PRODUCT_INFO.currency}
            </span>
            <span className="text-xs text-gray-400 line-through font-medium">
              {PRODUCT_INFO.oldPrice}
            </span>
          </div>
          <p className="text-[10px] text-gray-300 font-bold flex items-center gap-1">
            <Truck className="w-3 h-3 text-[#33FF55]" />
            توصيل مجاني + الدفع عند الاستلام
          </p>
        </div>

        <button
          onClick={scrollToCheckout}
          className="btn-emerald-glow text-[#020407] font-black text-sm px-5 py-3 rounded-xl flex items-center gap-1.5 shrink-0 cursor-pointer shadow-lg font-['Tajawal']"
        >
          <Zap className="w-4 h-4 fill-current text-[#020407]" />
          <span>اطلب الآن بـ 799 د.م.</span>
        </button>

      </div>
    </div>
  );
};
