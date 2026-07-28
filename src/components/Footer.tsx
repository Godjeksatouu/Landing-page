import React from 'react';
import { Zap, ShieldCheck, Truck, PhoneCall, Heart } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030303] text-gray-400 border-t border-white/10 pt-12 pb-24 lg:pb-12 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">

          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#101010] to-[#1a1a1a] border border-[#33FF55]/40 flex items-center justify-center green-glow-subtle">
                <Zap className="w-5 h-5 text-[#33FF55]" />
              </div>
              <span className="text-xl font-black text-white font-['Tajawal']">
                PRO FAST <span className="text-[#33FF55]">YY-203</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              محطة الطاقة المحمولة الفاخرة المعتمدة بالمملكة المغربية. جودة يابانية-هندسية ممتازة ومصممة لتوفير الطاقة الآمنة والنظيفة بدون صوت أو انبعاثات.
            </p>

            <div className="flex items-center gap-4 text-xs text-[#33FF55] font-semibold">
              <span className="flex items-center gap-1">
                <Truck className="w-4 h-4" /> توصيل مجاني لكل المدن
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> الدفع عند الاستلام
              </span>
            </div>
          </div>

          {/* Guarantees Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white font-['Tajawal']">ضمانات الشراء والتسليم:</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#33FF55]"></span>
                توصيل سريع خلال 24 إلى 48 ساعة فقط.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#33FF55]"></span>
                معاينة المنتج وتفقده قبل دفع المبلغ للموزع.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#33FF55]"></span>
                خدمة زبناء مغربية متوفرة طيلة أيام الأسبوع.
              </li>
            </ul>
          </div>

          {/* Morocco Delivery Cities Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-['Tajawal']">المدن المشمولة بالتوصيل السريع:</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              الدار البيضاء، الرباط، مراكش، طنجة، فاس، أكادير، وجدة، القنيطرة، تطوان، مكناس، الناظور، آسفي، سطات، العيون، الداخلة، وكافة مدن المغرب.
            </p>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 PRO FAST YY-203 Morocco. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-1">
            صُمم بأعلى معايير تجربة المستخدم لتقليل الجهد وزيادة التحويلات 🇲🇦
          </p>
        </div>

      </div>
    </footer>
  );
};
