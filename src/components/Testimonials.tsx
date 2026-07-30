import React from 'react';
import { Star, ShieldCheck, MapPin, Quote, Sparkles } from 'lucide-react';
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

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
            className="glass-card-luxury p-5 md:p-8 rounded-3xl border border-white/8 bg-[#151515]/80 hover:border-[#79E000]/35 transition-all duration-300 relative flex flex-col justify-between group shadow-xl"
            >
              {/* Large Quote Watermark */}
              <div className="absolute top-4 left-4 text-[#79E000]/8 pointer-events-none">
                <Quote className="w-16 h-16" />
              </div>

              <div>
                {/* User Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-13 h-13 w-[52px] h-[52px] rounded-full object-cover border-2 border-[#79E000]/40 shadow-lg group-hover:border-[#79E000]/70 transition-colors"
                    />
                    <div className="text-right">
                      <h3 className="text-base font-black text-white font-['Tajawal']">{review.name}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mt-0.5 font-['Cairo']">
                        <MapPin className="w-3.5 h-3.5 text-[#79E000]" />
                        <span>{review.city}</span>
                        <span>·</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#79E000]/12 text-[#79E000] border border-[#79E000]/30 flex items-center gap-1 font-['Cairo']">
                    <ShieldCheck className="w-3 h-3" />
                    {review.tag}
                  </span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-gray-300 leading-relaxed font-medium mb-6 text-right font-['Cairo']">
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

      </div>
    </section>
  );
};
