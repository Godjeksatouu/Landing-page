import React, { useState, useRef, useEffect } from 'react';
import { User, MapPin, Phone, CheckCircle2, ShieldCheck, Truck, Zap, AlertCircle, Loader2, Sparkles, Search, ChevronDown, Check, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MOROCCAN_CITIES } from '../data/moroccanCities';
import { PRODUCT_INFO } from '../data/productData';
import { submitOrder, validateMoroccanPhone } from '../services/orderService';

export const CheckoutSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  // Touched / Validation States
  const [fullNameTouched, setFullNameTouched] = useState(false);
  const [cityTouched, setCityTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  // City Search Dropdown State
  const [citySearch, setCitySearch] = useState('');
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const cityDropdownRef = useRef<HTMLDivElement>(null);

  // Form Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    city: string;
    phone: string;
    orderNumber: string;
    date: string;
  } | null>(null);

  // Close city dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target as Node)) {
        setIsCityDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isFullNameValid = fullName.trim().length >= 3;
  const isCityValid = city.trim().length >= 2;
  const isPhoneValid = validateMoroccanPhone(phone);

  const isFormValid = isFullNameValid && isCityValid && isPhoneValid;

  // Filtered cities list
  const filteredCities = MOROCCAN_CITIES.filter(
    (c) =>
      c.nameAr.includes(citySearch) ||
      c.nameFr.toLowerCase().includes(citySearch.toLowerCase())
  );

  const handleCitySelect = (selectedCityAr: string) => {
    setCity(selectedCityAr);
    setCityTouched(true);
    setIsCityDropdownOpen(false);
    setCitySearch('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    setFullNameTouched(true);
    setCityTouched(true);
    setPhoneTouched(true);

    if (!isFormValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitOrder({
        fullName,
        city,
        phone,
      });

      setIsSubmitting(false);

      if (result.success && result.data) {
        setSubmittedData({
          fullName: result.data.fullName,
          city: result.data.city,
          phone: result.data.phone,
          orderNumber: result.orderNumber,
          date: result.date,
        });

        setIsSubmitted(true);

        // Trigger Confetti Celebration
        try {
          confetti({
            particleCount: 140,
            spread: 85,
            origin: { y: 0.6 },
            colors: ['#33FF55', '#9CFF3A', '#FFFFFF', '#101010'],
          });
        } catch {
          // Fallback if canvas-confetti fails
        }
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setSubmitError(err?.message || 'حدث خطأ في الاتصال، يرجى المحاولة مرة أخرى.');
    }
  };

  const resetForm = () => {
    setFullName('');
    setCity('');
    setPhone('');
    setFullNameTouched(false);
    setCityTouched(false);
    setPhoneTouched(false);
    setIsSubmitted(false);
    setSubmittedData(null);
    setSubmitError(null);
  };

  return (
    <section id="checkout" className="py-16 md:py-24 bg-section-checkout relative overflow-hidden border-t border-white/10">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#33FF55]/15 rounded-full blur-[220px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">

        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#33FF55]/15 border border-[#33FF55]/40 text-[#33FF55] text-xs font-bold mb-4 green-glow-subtle font-['Tajawal']">
            <Sparkles className="w-4 h-4 text-[#33FF55]" />
            نموذج الطلب السريع — الدفع عند الاستلام 🇲🇦
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-3">
            إتمام الطلب في أقل من 20 ثانية
          </h2>

          <p className="text-base text-gray-300 font-medium max-w-2xl mx-auto">
            ادخل بياناتك البسيطة أدناه (الاسم، المدينة، رقم الهاتف) وسنتصل بك فوراً لتأكيد إرسال الطلب مجاناً.
          </p>
        </div>

        {/* Main Bento Checkout Glass Container */}
        <div className="glass-card-premium rounded-3xl p-6 sm:p-8 md:p-10 border border-[#33FF55]/40 bg-[#070b12]/95 shadow-2xl relative">

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-right">

              {/* LEFT BENTO COLUMN: Order Summary & Guarantee Info */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Product Summary Bento Box */}
                <div className="bg-[#0b1018] p-5 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#030508] border border-[#33FF55]/30 flex items-center justify-center p-1 shrink-0">
                      <Zap className="w-7 h-7 text-[#33FF55]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-['Tajawal']">PRO FAST YY-203</h3>
                      <p className="text-xs text-[#33FF55] font-semibold flex items-center gap-1 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-[#33FF55] animate-ping"></span>
                        متوفر حالياً بالمستودع
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-gray-300">
                    <div className="flex justify-between">
                      <span className="text-gray-400">السعر الأصلي:</span>
                      <span className="line-through text-gray-500 font-semibold">{PRODUCT_INFO.oldPrice} {PRODUCT_INFO.currency}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-400">توفير العرض الخاص:</span>
                      <span className="text-[#33FF55] font-bold">-700 {PRODUCT_INFO.currency} ({PRODUCT_INFO.discountPercent}% OFF)</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-400">الشحن والتوصيل:</span>
                      <span className="text-[#33FF55] font-bold bg-[#33FF55]/15 px-2 py-0.5 rounded border border-[#33FF55]/30">مجاني 100%</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-400">طريقة الدفع:</span>
                      <span className="text-white font-bold">الدفع عند الاستلام (COD)</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-baseline justify-between font-['Tajawal']">
                    <span className="text-sm font-bold text-white">المجموع الإجمالي:</span>
                    <div className="text-left">
                      <span className="text-3xl font-black text-[#33FF55]">{PRODUCT_INFO.price}</span>
                      <span className="text-sm font-bold text-gray-200 mr-1">{PRODUCT_INFO.currency}</span>
                    </div>
                  </div>
                </div>

                {/* Guarantees Mini Bento */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#0b1018] border border-white/10 rounded-2xl p-3 text-center flex flex-col items-center justify-center gap-1">
                    <Truck className="w-5 h-5 text-[#33FF55]" />
                    <span className="text-[10px] text-gray-300 font-bold">توصيل سريع</span>
                  </div>
                  <div className="bg-[#0b1018] border border-white/10 rounded-2xl p-3 text-center flex flex-col items-center justify-center gap-1">
                    <ShieldCheck className="w-5 h-5 text-[#33FF55]" />
                    <span className="text-[10px] text-gray-300 font-bold">معاينة أولاً</span>
                  </div>
                  <div className="bg-[#0b1018] border border-white/10 rounded-2xl p-3 text-center flex flex-col items-center justify-center gap-1">
                    <Lock className="w-5 h-5 text-[#33FF55]" />
                    <span className="text-[10px] text-gray-300 font-bold">طلب آمن</span>
                  </div>
                </div>

              </div>

              {/* RIGHT BENTO COLUMN: Form Fields (Nom Complet, Ville, Téléphone) */}
              <div className="lg:col-span-7 space-y-5">

                {/* Global Error Banner */}
                {submitError && (
                  <div className="p-4 rounded-2xl bg-red-500/15 border border-red-500/30 text-xs font-bold text-red-400 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* FIELD 1: Full Name (Nom Complet) */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white font-['Tajawal'] flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#33FF55]" />
                      الاسم الكامل (Nom Complet) <span className="text-[#33FF55]">*</span>
                    </span>
                    {fullNameTouched && isFullNameValid && (
                      <span className="text-xs font-bold text-[#33FF55] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> صحيح
                      </span>
                    )}
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      onBlur={() => setFullNameTouched(true)}
                      placeholder="مثال: محمد بناني"
                      className={`w-full min-h-[56px] px-4 py-3.5 pr-12 rounded-2xl text-base font-medium glass-input-luxury transition-all ${
                        fullNameTouched && !isFullNameValid
                          ? 'border-red-500/80 focus:border-red-500 bg-red-500/5'
                          : fullNameTouched && isFullNameValid
                          ? 'border-[#33FF55] bg-[#33FF55]/5'
                          : ''
                      }`}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {fullNameTouched && !isFullNameValid && (
                    <p className="text-xs text-red-400 font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      يرجى كتابة الاسم الكامل (3 أحرف على الأقل).
                    </p>
                  )}
                </div>

                {/* FIELD 2: City Selection (Ville) */}
                <div className="space-y-2 relative" ref={cityDropdownRef}>
                  <label className="block text-sm font-bold text-white font-['Tajawal'] flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#33FF55]" />
                      المدينة (Ville) <span className="text-[#33FF55]">*</span>
                    </span>
                    {cityTouched && isCityValid && (
                      <span className="text-xs font-bold text-[#33FF55] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> تم التحديد
                      </span>
                    )}
                  </label>

                  <div
                    onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                    className={`w-full min-h-[56px] px-4 py-3.5 pr-12 rounded-2xl text-base font-medium glass-input-luxury flex items-center justify-between cursor-pointer transition-all ${
                      cityTouched && !isCityValid
                        ? 'border-red-500/80 bg-red-500/5'
                        : cityTouched && isCityValid
                        ? 'border-[#33FF55] bg-[#33FF55]/5'
                        : ''
                    }`}
                  >
                    <span className={city ? 'text-white font-bold' : 'text-gray-400'}>
                      {city || 'اختر مدينتك بالمغرب...'}
                    </span>
                    <div className="flex items-center gap-2">
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isCityDropdownOpen ? 'rotate-180 text-[#33FF55]' : ''}`} />
                    </div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* City Search Dropdown Box */}
                  {isCityDropdownOpen && (
                    <div className="absolute z-50 left-0 right-0 top-full mt-2 glass-card rounded-2xl border border-[#33FF55]/40 bg-[#0a0f18] shadow-2xl p-3 max-h-64 overflow-y-auto">
                      <div className="relative mb-2">
                        <input
                          type="text"
                          value={citySearch}
                          onChange={(e) => setCitySearch(e.target.value)}
                          placeholder="ابحث عن مدينتك..."
                          className="w-full py-2 px-3 pr-9 rounded-xl bg-[#121824] border border-white/10 text-xs text-white focus:border-[#33FF55] focus:outline-none"
                          autoFocus
                        />
                        <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
                      </div>

                      <div className="space-y-1">
                        {filteredCities.length > 0 ? (
                          filteredCities.map((c) => (
                            <button
                              key={c.id}
                              type="button"
                              onClick={() => handleCitySelect(c.nameAr)}
                              className={`w-full text-right px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                                city === c.nameAr
                                  ? 'bg-[#33FF55] text-[#050505]'
                                  : 'text-gray-200 hover:bg-white/10'
                              }`}
                            >
                              <span>{c.nameAr}</span>
                              <span className="text-[10px] opacity-75">{c.nameFr}</span>
                            </button>
                          ))
                        ) : (
                          <p className="text-xs text-gray-400 text-center py-3">
                            لم نجد المدينة. يمكنك كتابتها مباشرة.
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {cityTouched && !isCityValid && (
                    <p className="text-xs text-red-400 font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      يرجى اختيار مدينتك للتوصيل.
                    </p>
                  )}
                </div>

                {/* FIELD 3: Phone Number (Téléphone) */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white font-['Tajawal'] flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#33FF55]" />
                      رقم الهاتف المغربي (Téléphone) <span className="text-[#33FF55]">*</span>
                    </span>
                    {phoneTouched && isPhoneValid && (
                      <span className="text-xs font-bold text-[#33FF55] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> رقم هاتف مغربي صحيح
                      </span>
                    )}
                  </label>

                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onBlur={() => setPhoneTouched(true)}
                      placeholder="مثال: 0661234567 أو 0700000000"
                      dir="ltr"
                      className={`w-full min-h-[56px] px-4 py-3.5 pl-12 rounded-2xl text-base font-bold text-right tracking-wider glass-input-luxury transition-all ${
                        phoneTouched && !isPhoneValid
                          ? 'border-red-500/80 focus:border-red-500 bg-red-500/5'
                          : phoneTouched && isPhoneValid
                          ? 'border-[#33FF55] bg-[#33FF55]/5'
                          : ''
                      }`}
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs flex items-center gap-1">
                      <span className="text-xs">🇲🇦 +212</span>
                    </div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Phone className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {phoneTouched && !isPhoneValid ? (
                    <p className="text-xs text-red-400 font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      يرجى إدخال رقم هاتف مغربي صحيح يبتدئ بـ 06 أو 07 أو +212.
                    </p>
                  ) : (
                    <p className="text-[11px] text-gray-400 font-medium">
                      سنقوم بالاتصال بكم على هذا الرقم للتأكيد وتحديد موقع الاستلام.
                    </p>
                  )}
                </div>

                {/* BIG FULL WIDTH CTA BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-emerald-glow text-[#020407] font-black text-xl py-5 px-8 rounded-2xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-2xl mt-4 font-['Tajawal']"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin text-[#020407]" />
                      <span>جاري تسجيل طلبكم بنجاح...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-6 h-6 fill-current text-[#020407]" />
                      <span>اطلب الآن — الدفع عند الاستلام</span>
                    </>
                  )}
                </button>

              </div>

            </form>
          ) : (
            /* SUCCESS STATE CARD */
            <div className="text-center py-8 space-y-6 animate-fade-in font-['Tajawal']">

              <div className="w-20 h-20 rounded-full bg-[#33FF55]/20 border-2 border-[#33FF55] flex items-center justify-center mx-auto text-[#33FF55] green-glow">
                <Check className="w-10 h-10 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#33FF55]/15 text-[#33FF55] text-xs font-bold border border-[#33FF55]/30">
                  رقم الطلب: {submittedData?.orderNumber}
                </span>

                <h3 className="text-3xl font-black text-white">
                  ✅ تم استلام طلبكم بنجاح!
                </h3>

                <p className="text-base text-gray-200 font-medium max-w-md mx-auto leading-relaxed">
                  سنتواصل معكم قريباً جداً عبر الهاتف لتأكيد العنوان وموعد التوصيل الدقيق إلى مدينتكم.
                </p>
              </div>

              {/* Submitted Details Summary Card */}
              <div className="glass-card p-6 rounded-2xl border border-[#33FF55]/30 bg-[#0b1018] max-w-md mx-auto text-right space-y-3">
                <h4 className="text-sm font-bold text-[#33FF55] border-b border-white/10 pb-2">ملخص بيانات الطلب:</h4>

                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">الاسم الكامل:</span>
                  <span className="text-white font-bold">{submittedData?.fullName}</span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">المدينة:</span>
                  <span className="text-white font-bold">{submittedData?.city}</span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">رقم الهاتف:</span>
                  <span className="text-white font-bold" dir="ltr">{submittedData?.phone}</span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">حالة الطلب الأولية:</span>
                  <span className="text-[#33FF55] font-bold bg-[#33FF55]/15 px-2 py-0.5 rounded border border-[#33FF55]/30">Nouvelle</span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">طريقة الدفع:</span>
                  <span className="text-[#33FF55] font-bold">الدفع عند الاستلام (COD)</span>
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-black">
                  <span className="text-white">المبلغ عند الاستلام:</span>
                  <span className="text-[#33FF55] font-black">{PRODUCT_INFO.price} {PRODUCT_INFO.currency}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={resetForm}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all cursor-pointer"
                >
                  تقديم طلب جديد آخر
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
