import React, { useState, useRef, useEffect } from 'react';
import {
  User, MapPin, Phone, CheckCircle2,
  Zap, AlertCircle, Loader2, Search, ChevronDown, Check, Lock,
  HelpCircle, ChevronDown as ChevronDown2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MOROCCAN_CITIES } from '../data/moroccanCities';
import { PRODUCT_INFO, FAQS } from '../data/productData';
import { submitOrder, validateMoroccanPhone } from '../services/orderService';
import { deliveryCashImg } from '../assets/images';

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

  const [faqOpenId, setFaqOpenId] = useState<string | null>(null);

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

  const inputBase = "w-full min-h-[56px] px-4 py-3.5 rounded-2xl text-base font-medium bg-[#111] border border-white/12 text-white transition-all font-['Cairo']";
  const getInputClass = (touched: boolean, valid: boolean) =>
    `${inputBase} ${touched && !valid ? 'border-red-500/80 bg-red-500/5' : touched && valid ? 'border-[#79E000] bg-[#79E000]/5' : ''}`;

  const toggleFaq = (id: string) => {
    setFaqOpenId(faqOpenId === id ? null : id);
  };

  return (
    <section id="checkout" className="py-16 md:py-28 relative overflow-hidden border-t border-white/8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#79E000]/12 rounded-full blur-[250px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Tajawal'] leading-tight mb-3">
            اطلب محطة الطاقة الآن
          </h2>
          <p className="text-base text-gray-400 font-medium max-w-2xl mx-auto font-['Cairo']">
            احجز وحدتك — نوصلها لباب منزلك مع إمكانية المعاينة قبل الدفع.
          </p>
        </div>

        <div className="rounded-3xl p-6 sm:p-8 md:p-10 border border-[#79E000]/30 bg-[#0d0d0d] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#79E000]/5 via-transparent to-transparent pointer-events-none" />

          {!isSubmitted ? (
            <>
              <form onSubmit={handleSubmit} noValidate className="space-y-5 text-right relative">

                {submitError && (
                  <div className="p-4 rounded-2xl bg-red-500/12 border border-red-500/30 text-xs font-bold text-red-400 flex items-center gap-2.5 font-['Cairo']">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

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
                    <div className="absolute z-50 left-0 right-0 top-full mt-2 bg-[#0f0f0f] rounded-2xl border border-[#79E000]/35 shadow-2xl p-3 max-h-60 overflow-y-auto">
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

                {/* Realistic Doorstep Inspection Photo Trust Card */}
                <div className="rounded-2xl overflow-hidden border border-[#79E000]/30 bg-[#151515] p-3 text-right space-y-2 my-4">
                  <div className="relative h-32 rounded-xl overflow-hidden bg-[#050505]">
                    <img
                      src={deliveryCashImg}
                      alt="التسليم والمعاينة عند الموزع قبل الدفع"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                    <div className="absolute bottom-2 right-2 bg-[#050505]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#79E000]/40 text-[11px] font-bold text-[#79E000] font-['Cairo'] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#79E000]" />
                      <span>معاينة وتفقد الطرد أولاً قبل تسليم المبلغ</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs font-['Cairo'] px-1">
                    <span className="text-gray-300 font-medium">🚚 التسليم خلال 24-48 ساعة</span>
                    <span className="text-[#79E000] font-bold">لا تدفع درهماً حتى تتأكد</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#111] border border-white/8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#79E000]/12 border border-[#79E000]/30 flex items-center justify-center text-[#79E000] font-bold text-sm">
                      1x
                    </div>
                    <div className="text-right">
                      <h4 className="text-sm font-bold text-white font-['Tajawal']">{PRODUCT_INFO.fullTitle}</h4>
                      <p className="text-[11px] text-[#79E000] font-bold font-['Cairo']">توصيل مجاني + الدفع عند الاستلام</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-2xl font-black text-[#79E000]">{PRODUCT_INFO.price}</span>
                    <span className="text-xs font-bold text-gray-300 mr-1">{PRODUCT_INFO.currency}</span>
                  </div>
                </div>

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
              </form>

              {/* FAQ Section */}
              <div className="mt-14 pt-10 border-t border-white/8">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#79E000]/10 border border-[#79E000]/30 text-[#79E000] text-xs font-bold mb-4 font-['Cairo']">
                    <HelpCircle className="w-4 h-4" />
                    الأسئلة الشائعة
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-['Tajawal']">أسئلة شائعة عن محطة الطاقة</h3>
                </div>

                <div className="max-w-3xl mx-auto space-y-3">
                  {FAQS.map((faq) => {
                    const isOpen = faqOpenId === faq.id;
                    return (
                      <div
                        key={faq.id}
                        className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                          isOpen ? 'border-[#79E000]/35 bg-[#151515]/90' : 'border-white/8 bg-[#101010]/80'
                        }`}
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full p-5 text-right flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                        >
                          <span className="text-sm font-bold text-white font-['Tajawal']">
                            {faq.question}
                          </span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isOpen
                              ? 'bg-[#79E000]/20 text-[#79E000] rotate-180'
                              : 'bg-[#1a1a1a] text-[#79E000]'
                          }`}>
                            <ChevronDown2 className="w-4 h-4" />
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-sm text-gray-400 leading-relaxed border-t border-white/6 bg-[#0d0d0d]/50 font-medium font-['Cairo'] text-right">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </>
          ) : (
            /* Success State */
            <div className="text-center py-10 space-y-7 font-['Tajawal'] relative">
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

              <div className="p-6 rounded-2xl border border-[#79E000]/25 bg-[#111] max-w-sm mx-auto text-right space-y-3 font-['Cairo']">
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
