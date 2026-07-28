import React from 'react';
import { Star, ShieldCheck, MapPin, Quote, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/productData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-section-gallery border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#33FF55]/10 border border-[#33FF55]/30 text-[#33FF55] text-xs font-bold mb-4 font-['Tajawal']">
            <Sparkles className="w-4 h-4 text-[#33FF55]" />
            قصص وانطباعات زبنائنا بالمغرب 🇲🇦
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            تجارب واقعية يعتز بها مستخدمونا
          </h2>

          <p className="text-base md:text-lg text-gray-300 font-medium">
            شهادات حقيقية من زبنائنا في الدار البيضاء، الرباط، طنجة ومراكش بعد استلام وتشغيل المحطة.
          </p>
        </div>

        {/* Customer Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="glass-card-premium p-6 md:p-8 rounded-3xl border border-white/15 bg-[#090d16]/90 hover:border-[#33FF55]/40 transition-all relative flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#33FF55]/50 shadow-lg group-hover:scale-105 transition-transform"
                    />
                    <div className="text-right">
                      <h3 className="text-lg font-bold text-white font-['Tajawal']">{review.name}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#33FF55]" />
                        <span>{review.city}</span>
                        <span>•</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#33FF55]/20 text-[#33FF55] border border-[#33FF55]/40 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {review.tag}
                  </span>
                </div>

                {/* Star Rating Bar */}
                <div className="flex items-center text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <p className="text-base text-gray-200 leading-relaxed font-medium mb-6 text-right">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5 text-[#33FF55] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  تم التسليم بنجاح مع معاينة المنتج
                </span>
                <Quote className="w-5 h-5 text-[#33FF55]/40" />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
