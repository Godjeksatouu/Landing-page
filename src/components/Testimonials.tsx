import React from 'react';
import { Star, ShieldCheck, MapPin, Quote, Sparkles, Truck } from 'lucide-react';
import { REVIEWS } from '../data/productData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 scene-gallery border-t border-white/8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#79E000]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#79E000]/10 border border-[#79E000]/30 text-[#79E000] text-xs font-bold mb-5 font-['Cairo']">
            <Sparkles className="w-4 h-4" />
            قصص وانطباعات زبنائنا بالمغرب 🇲🇦
          </div>

          {/* Aggregate Rating */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-white font-black text-2xl font-['Tajawal']">4.9</span>
            <span className="text-gray-500 text-sm font-['Cairo']">من 384 تقييم موثوق</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-4">
            تجارب واقعية يعتز بها مستخدمونا
          </h2>

          <p className="text-base md:text-lg text-gray-400 font-medium font-['Cairo']">
            شهادات حقيقية من زبنائنا في الدار البيضاء، الرباط، طنجة، ومراكش.
          </p>
        </div>

        {/* Reviews Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 items-stretch">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="glass-card-luxury p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/8 bg-[#151515]/80 hover:border-[#79E000]/35 transition-all duration-300 relative flex flex-col justify-between group shadow-xl h-full"
            >
              {/* Large Quote Watermark */}
              <div className="absolute top-4 left-4 text-[#79E000]/8 pointer-events-none">
                <Quote className="w-16 h-16" />
              </div>

              <div>
                {/* User Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 sm:mb-5">
                  <div className="flex items-center gap-2 sm:gap-3.5">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#79E000]/40 shadow-lg shrink-0"
                    />
                    <div className="text-right">
                      <h3 className="text-xs sm:text-base font-black text-white font-['Tajawal'] leading-snug">{review.name}</h3>
                      <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-500 font-medium font-['Cairo']">
                        <MapPin className="w-3 h-3 text-[#79E000]" />
                        <span>{review.city}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#79E000]/12 text-[#79E000] border border-[#79E000]/30 flex items-center gap-1 font-['Cairo'] self-start sm:self-auto">
                    <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    {review.tag}
                  </span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center text-amber-400 mb-2 sm:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-[11px] sm:text-sm text-gray-300 leading-relaxed font-medium mb-4 sm:mb-6 text-right font-['Cairo']">
                  "{review.comment}"
                </p>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/8 flex items-center justify-between text-xs text-gray-500 font-['Cairo']">
                <span className="flex items-center gap-1.5 text-[#79E000] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  تم التسليم مع معاينة المنتج
                </span>
                <Quote className="w-5 h-5 text-[#79E000]/25" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators Bar */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Truck, text: 'توصيل مجاني', sub: '24-48 ساعة' },
              { icon: ShieldCheck, text: 'الدفع عند الاستلام', sub: 'معاينة المنتج أولاً' },
              { icon: Star, text: 'تقييم 4.9', sub: 'من 384 زبون موثوق' },
              { icon: ShieldCheck, text: 'ضمان 30 يوم', sub: 'استرجاع مجاني' },
            ].map(({ icon: Icon, text, sub }) => (
              <div key={text} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111]/80 border border-white/6 hover:border-[#79E000]/25 transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-[#79E000]/12 border border-[#79E000]/20 flex items-center justify-center text-[#79E000] shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <p className="text-xs font-black text-white font-['Tajawal'] leading-tight">{text}</p>
                  <p className="text-[10px] text-gray-500 font-medium font-['Cairo'] mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
