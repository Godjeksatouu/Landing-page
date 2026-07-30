import React, { useState, useRef, useEffect } from 'react';
import {
  User, MapPin, Phone, CheckCircle2, ShieldCheck, Truck,
  Zap, AlertCircle, Loader2, Sparkles, Search, ChevronDown, Check, Lock, Package
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MOROCCAN_CITIES } from '../data/moroccanCities';
import { PRODUCT_INFO } from '../data/productData';
import { submitOrder, validateMoroccanPhone } from '../services/orderService';

export const CheckoutSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const [fullNameTouched, setFullNameTouched] = useState(false);
  const [cityTouched, setCityTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  const [citySearch, setCitySearch] = useState('');
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const cityDropdownRef = useRef<HTMLDivElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    fullName: string; city: string; phone: string; orderNumber: string; date: string;
  } | null>(null);

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

  const filteredCities = MOROCCAN_CITIES.filter(
    (c) => c.nameAr.includes(citySearch) || c.nameFr.toLowerCase().includes(citySearch.toLowerCase())
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

    if (!isFormValid || isSubmitting) return;
    setIsSubmitting(true);

    try {
      const result = await submitOrder({ fullName, city, phone });
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

        try {
          confetti({
            particleCount: 160,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#79E000', '#B4FF38', '#FFFFFF', '#050505', '#99F21D'],
          });
          setTimeout(() => {
            confetti({
              particleCount: 80,
              spread: 60,
              origin: { x: 0.2, y: 0.7 },
              colors: ['#79E000', '#FFFFFF'],
            });
            confetti({
              particleCount: 80,
              spread: 60,
              origin: { x: 0.8, y: 0.7 },
              colors: ['#79E000', '#FFFFFF'],
            });
          }, 300);
        } catch { /* noop */ }
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setSubmitError(err?.message || 'حدث خطأ في الاتصال، يرجى المحاولة مرة أخرى.');
    }
  };

  const resetForm = () => {
    setFullName(''); setCity(''); setPhone('');
    setFullNameTouched(false); setCityTouched(false); setPhoneTouched(false);
    setIsSubmitted(false); setSubmittedData(null); setSubmitError(null);
  };

  const inputBase = "w-full min-h-[56px] px-4 py-3.5 rounded-2xl text-base font-medium glass-input-luxury transition-all font-['Cairo']";
  const getInputClass = (touched: boolean, valid: boolean) =>
    `${inputBase} ${touched && !valid ? 'border-red-500/80 bg-red-500/5' : touched && valid ? 'border-[#79E000] bg-[#79E000]/5' : ''}`;

  return (
    <section id="checkout" className="py-16 md:py-28 scene-checkout relative overflow-hidden border-t border-white/8">
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#79E000]/12 rounded-full blur-[250px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#79E000]/15 border border-[#79E000]/40 text-[#79E000] text-xs font-bold mb-5 font-['Cairo'] shadow-[0_0_20px_rgba(121,224,0,0.15)]">
            <Sparkles className="w-4 h-4" />
            نموذج الطلب السريع — الدفع عند الاستلام 🇲🇦
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-3">
            إتمام الطلب في أقل من 30 ثانية
          </h2>
          <p className="text-base text-gray-400 font-medium max-w-2xl mx-auto font-['Cairo']">
            ادخل بياناتك البسيطة (الاسم، المدينة، رقم الهاتف) وسنتصل بك فوراً لتأكيد الطلب مجاناً.
          </p>
        </div>

        {/* Main Checkout Card */}
        <div className="glass-card-luxury rounded-3xl p-6 sm:p-8 md:p-10 border border-[#79E000]/30 bg-[#0d0d0d]/97 shadow-2xl relative overflow-hidden">
          {/* Inner ambient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#79E000]/5 via-transparent to-transparent pointer-events-none" />

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-right relative">

              {/* LEFT: Order Summary */}
              <div className="lg:col-span-5 space-y-4">

                {/* Product Summary */}
                <div className="bg-[#111111] p-5 rounded-2xl border border-white/8 space-y-4">
                  <div className="flex items-center gap-3 border-b border-white/8 pb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#79E000]/12 border border-[#79E000]/30 flex items-center justify-center shrink-0">
                      <Zap className="w-7 h-7 text-[#79E000]" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-white font-['Tajawal']">PRO FAST YY-203</h3>
                      <p className="text-xs text-[#79E000] font-bold flex items-center gap-1.5 mt-0.5 font-['Cairo']">
                        <span className="w-2 h-2 rounded-full bg-[#79E000] animate-ping inline-block" />
                        متوفر حالياً في المستودع
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs font-['Cairo']">
                    {[
                      { label: 'السعر الأصلي:', value: `${PRODUCT_INFO.oldPrice} ${PRODUCT_INFO.currency}`, cls: 'line-through text-gray-500' },
                      { label: 'خصم العرض الخاص:', value: `-700 ${PRODUCT_INFO.currency} (${PRODUCT_INFO.discountPercent}% OFF)`, cls: 'text-[#79E000] font-bold' },
                      { label: 'التوصيل والشحن:', value: 'مجاني 100%', cls: 'text-[#79E000] font-bold bg-[#79E000]/12 px-2 py-0.5 rounded border border-[#79E000]/25' },
                      { label: 'طريقة الدفع:', value: 'الدفع عند الاستلام (COD)', cls: 'text-white font-bold' },
                    ].map(({ label, value, cls }) => (
                      <div key={label} className="flex justify-between text-gray-400">
                        <span>{label}</span>
                        <span className={cls}>{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/8 flex items-baseline justify-between font-['Tajawal']">
                    <span className="text-sm font-bold text-white">المجموع الإجمالي:</span>
                    <div>
                      <span className="text-3xl font-black text-[#79E000]">{PRODUCT_INFO.price}</span>
                      <span className="text-sm font-bold text-gray-300 mr-1">{PRODUCT_INFO.currency}</span>
                    </div>
                  </div>
                </div>

                {/* Mini Trust Badges */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { icon: Truck, label: 'توصيل سريع' },
                    { icon: ShieldCheck, label: 'معاينة أولاً' },
                    { icon: Lock, label: 'طلب آمن' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="bg-[#111111] border border-white/8 rounded-2xl p-3 text-center flex flex-col items-center gap-1.5">
                      <Icon className="w-5 h-5 text-[#79E000]" />
                      <span className="text-[10px] text-gray-400 font-bold font-['Cairo']">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Stock urgency */}
                <div className="flex items-center gap-2 justify-center p-3 rounded-xl bg-orange-500/8 border border-orange-500/20 text-xs font-bold text-orange-400 font-['Cairo']">
                  <Package className="w-4 h-4 shrink-0" />
                  متبقي 9 قطع فقط — الطلب يحجز وحدتك فوراً
                </div>
              </div>

              {/* RIGHT: Form Fields */}
              <div className="lg:col-span-7 space-y-5">

                {/* Error Banner */}
                {submitError && (
                  <div className="p-4 rounded-2xl bg-red-500/12 border border-red-500/30 text-xs font-bold text-red-400 flex items-center gap-2.5 font-['Cairo']">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Field: Full Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white font-['Tajawal'] flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#79E000]" />
                      الاسم الكامل <span className="text-[#79E000]">*</span>
                    </span>
                    {fullNameTouched && isFullNameValid && (
                      <span className="text-xs font-bold text-[#79E000] flex items-center gap-1 font-['Cairo']">
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
                      className={`${getInputClass(fullNameTouched, isFullNameValid)} pr-12`}
                    />
                    <User className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  {fullNameTouched && !isFullNameValid && (
                    <p className="text-xs text-red-400 font-semibold flex items-center gap-1 font-['Cairo']">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      يرجى كتابة الاسم الكامل (3 أحرف على الأقل).
                    </p>
                  )}
                </div>

                {/* Field: City */}
                <div className="space-y-2 relative" ref={cityDropdownRef}>
                  <label className="block text-sm font-bold text-white font-['Tajawal'] flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#79E000]" />
                      المدينة <span className="text-[#79E000]">*</span>
                    </span>
                    {cityTouched && isCityValid && (
                      <span className="text-xs font-bold text-[#79E000] flex items-center gap-1 font-['Cairo']">
                        <CheckCircle2 className="w-3.5 h-3.5" /> تم التحديد
                      </span>
                    )}
                  </label>

                  <div
                    onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                    className={`${getInputClass(cityTouched, isCityValid)} pr-12 flex items-center justify-between cursor-pointer select-none`}
                  >
                    <span className={city ? 'text-white font-bold' : 'text-gray-500'}>
                      {city || 'اختر مدينتك بالمغرب...'}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isCityDropdownOpen ? 'rotate-180 text-[#79E000]' : ''}`} />
                    <MapPin className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {isCityDropdownOpen && (
                    <div className="absolute z-50 left-0 right-0 top-full mt-2 glass-card-luxury rounded-2xl border border-[#79E000]/35 bg-[#0f0f0f] shadow-2xl p-3 max-h-60 overflow-y-auto">
                      <div className="relative mb-2.5">
                        <input
                          type="text"
                          value={citySearch}
                          onChange={(e) => setCitySearch(e.target.value)}
                          placeholder="ابحث عن مدينتك..."
                          className="w-full py-2.5 px-3 pr-9 rounded-xl bg-[#1a1a1a] border border-white/8 text-xs text-white focus:border-[#79E000] focus:outline-none font-['Cairo']"
                          autoFocus
                        />
                        <Search className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                      <div className="space-y-0.5">
                        {filteredCities.length > 0 ? (
                          filteredCities.map((c) => (
                            <button
                              key={c.id}
                              type="button"
                              onClick={() => handleCitySelect(c.nameAr)}
                              className={`w-full text-right px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer font-['Cairo'] ${
                                city === c.nameAr
                                  ? 'bg-[#79E000] text-[#050505]'
                                  : 'text-gray-300 hover:bg-white/8'
                              }`}
                            >
                              <span>{c.nameAr}</span>
                              <span className="text-[10px] opacity-60">{c.nameFr}</span>
                            </button>
                          ))
                        ) : (
                          <p className="text-xs text-gray-500 text-center py-3 font-['Cairo']">لم نجد المدينة. يمكنك كتابتها مباشرة.</p>
                        )}
                      </div>
                    </div>
                  )}

                  {cityTouched && !isCityValid && (
                    <p className="text-xs text-red-400 font-semibold flex items-center gap-1 font-['Cairo']">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      يرجى اختيار مدينتك للتوصيل.
                    </p>
                  )}
                </div>

                {/* Field: Phone */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white font-['Tajawal'] flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#79E000]" />
                      رقم الهاتف المغربي <span className="text-[#79E000]">*</span>
                    </span>
                    {phoneTouched && isPhoneValid && (
                      <span className="text-xs font-bold text-[#79E000] flex items-center gap-1 font-['Cairo']">
                        <CheckCircle2 className="w-3.5 h-3.5" /> رقم صحيح
                      </span>
                    )}
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onBlur={() => setPhoneTouched(true)}
                      placeholder="0661234567 أو 0712345678"
                      dir="ltr"
                      className={`${getInputClass(phoneTouched, isPhoneValid)} pr-12 pl-16 text-right tracking-wider`}
                    />
                    <Phone className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500 pointer-events-none">🇲🇦 +212</span>
                  </div>
                  {phoneTouched && !isPhoneValid ? (
                    <p className="text-xs text-red-400 font-semibold flex items-center gap-1 font-['Cairo']">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      يرجى إدخال رقم هاتف مغربي يبتدئ بـ 06 أو 07.
                    </p>
                  ) : (
                    <p className="text-[11px] text-gray-500 font-medium font-['Cairo']">
                      سنتصل بكم على هذا الرقم لتأكيد الطلب وتحديد موعد التسليم.
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-lime-glow font-black text-xl py-5 px-8 rounded-2xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-2xl mt-2 font-['Tajawal']"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>جاري تسجيل طلبكم...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-6 h-6 fill-current" />
                      <span>اطلب الآن — الدفع عند الاستلام</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-600 text-center flex items-center justify-center gap-1.5 font-['Cairo']">
                  <Lock className="w-3.5 h-3.5 text-[#79E000]" />
                  بياناتك محمية ولن تُشارك مع أي جهة خارجية
                </p>
              </div>

            </form>
          ) : (
            /* ===== SUCCESS STATE ===== */
            <div className="text-center py-10 space-y-7 font-['Tajawal'] relative">
              {/* Checkmark */}
              <div className="w-24 h-24 rounded-full bg-[#79E000]/15 border-2 border-[#79E000] flex items-center justify-center mx-auto text-[#79E000] shadow-[0_0_40px_rgba(121,224,0,0.3)]">
                <Check className="w-12 h-12 stroke-[3]" />
              </div>

              <div className="space-y-3">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#79E000]/12 text-[#79E000] text-xs font-bold border border-[#79E000]/30 font-['Cairo']">
                  رقم الطلب: {submittedData?.orderNumber}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white">✅ تم استلام طلبكم بنجاح!</h3>
                <p className="text-base text-gray-400 font-medium max-w-md mx-auto leading-relaxed font-['Cairo']">
                  سنتواصل معكم قريباً عبر الهاتف لتأكيد العنوان وموعد التوصيل الدقيق.
                </p>
              </div>

              {/* Order Summary Card */}
              <div className="glass-card-luxury p-6 rounded-2xl border border-[#79E000]/25 bg-[#111111] max-w-sm mx-auto text-right space-y-3 font-['Cairo']">
                <h4 className="text-sm font-bold text-[#79E000] border-b border-white/8 pb-2">ملخص بيانات الطلب:</h4>
                {[
                  { label: 'الاسم الكامل:', value: submittedData?.fullName },
                  { label: 'المدينة:', value: submittedData?.city },
                  { label: 'رقم الهاتف:', value: submittedData?.phone, dir: 'ltr' },
                  { label: 'حالة الطلب:', value: 'Nouvelle', special: true },
                  { label: 'طريقة الدفع:', value: 'الدفع عند الاستلام (COD)', green: true },
                ].map(({ label, value, dir, special, green }) => (
                  <div key={label} className="flex justify-between text-xs">
                    <span className="text-gray-500">{label}</span>
                    {special ? (
                      <span className="text-[#79E000] font-bold bg-[#79E000]/12 px-2 py-0.5 rounded border border-[#79E000]/25">{value}</span>
                    ) : (
                      <span className={`font-bold ${green ? 'text-[#79E000]' : 'text-white'}`} dir={dir}>{value}</span>
                    )}
                  </div>
                ))}
                <div className="pt-2 border-t border-white/8 flex justify-between text-sm font-black">
                  <span className="text-white">المبلغ عند الاستلام:</span>
                  <span className="text-[#79E000]">{PRODUCT_INFO.price} {PRODUCT_INFO.currency}</span>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="px-6 py-3 rounded-xl bg-white/8 hover:bg-white/15 text-xs font-bold text-white transition-all cursor-pointer border border-white/10 font-['Cairo']"
              >
                تقديم طلب جديد آخر
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
