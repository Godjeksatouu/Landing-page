import { FaqItem, PortDetail, Review } from '../types';

export const PRODUCT_INFO = {
  name: 'PRO FAST YY-203',
  fullTitle: 'محطة الطاقة المحمولة PRO FAST YY-203',
  subtitle: 'محطة طاقة محمولة عمليّة لتشغيل الراوتر، شحن الهواتف، إنارة البيت والمكتب في أي وقت',
  price: 799,
  oldPrice: 1499,
  currency: 'د.م.',
  discountPercent: 47,
  rating: 4.9,
  reviewCount: 384,
  inStock: true,
  stockLeft: 9,
  deliveryTime: '24 إلى 48 ساعة فقط',
  guaranteeDays: 30,
};

export const VERIFIED_PORTS: PortDetail[] = [
  {
    id: 'ac-socket',
    nameAr: 'منفذ كهرباء عام (Universal AC Outlet)',
    count: 1,
    description: 'مقبس كهربائي عالمي لتوصيل شواحن اللابتوب، أجهزة الراوتر، مصابيح الإضاءة، والمراوح الصغيرة.',
    compatibleDevices: ['شواحن اللابتوب والمحمول', 'مصابيح الإضاءة المنزلية', 'أجهزة الواي فاي والراوتر', 'المراوح الصغيرة'],
    iconName: 'Plug'
  },
  {
    id: 'usb-ports',
    nameAr: 'منافذ شحن USB (3 منافذ)',
    count: 3,
    description: '3 منافذ USB لشحن كافة الهواتف الذكية والأجهزة اللوحية والسماعات اللاسلكية بسهولة.',
    compatibleDevices: ['هواتف آيفون وأندرويد', 'الأجهزة اللوحية والتابلت', 'الساعات والسماعات الذكية'],
    iconName: 'Usb'
  },
  {
    id: 'dc-ports',
    nameAr: 'منافذ تيار مستمر DC 12V',
    count: 3,
    description: '3 منافذ DC مخصصة لتشغيل المصابيح المباشرة وأجهزة 12V.',
    compatibleDevices: ['مصابيح LED طوارئ', 'أجهزة 12V المباشرة'],
    iconName: 'Zap'
  },
  {
    id: 'fm-radio',
    nameAr: 'راديو FM مع هوائي معدني تليسكوبي',
    count: 1,
    description: 'مذياع FM مدمج مع مكبر صوت وسلك هوائي لالتقاط الإذاعات الوطنية والبرامج الإخبارية.',
    compatibleDevices: ['التقاط إذاعات الأخبار والبرامج', 'الاستماع في الرحلات والتخييم'],
    iconName: 'Radio'
  },
  {
    id: 'led-light',
    nameAr: 'مصباح إضاءة طوارئ LED مدمج',
    count: 1,
    description: 'كشاف LED على الواجهة يوفر إضاءة واضحة لإنارة الغرف والمساحات المظلمة عند انقطاع الكهرباء.',
    compatibleDevices: ['إنارة الغرفة عند انقطاع الضوء', 'الكشف في الرحلات والليل'],
    iconName: 'Lightbulb'
  },
  {
    id: 'lcd-display',
    nameAr: 'شاشة إلكترونية رقمية LCD',
    count: 1,
    description: 'تعرض مستوى البطارية بدقة وحالة التشغيل لمتابعة الطاقة المتبقية.',
    compatibleDevices: ['مراقبة نسبة شحن البطارية', 'متابعة حالة التشغيل'],
    iconName: 'Tv'
  }
];

export const VERIFIED_BOX_CONTENTS = [
  {
    id: '1',
    titleAr: 'محطة الطاقة المحمولة PRO FAST YY-203',
    subtitleAr: 'الوحدة الرئيسية بتصميم مدمج ومقبض حمل مريح',
    icon: 'BatteryCharging'
  },
  {
    id: '2',
    titleAr: 'كابل الشحن الكهربائي المباشر (AC Cable)',
    subtitleAr: 'كابل لشحن المحطة من المقبس الجداري بسهولة',
    icon: 'Cable'
  },
  {
    id: '3',
    titleAr: 'كتيب التعليمات والدليل الإرشادي',
    subtitleAr: 'شرح بسيط لكيفية الاستخدام والمحافظة على الجهاز',
    icon: 'BookOpen'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'محمد - الدار البيضاء',
    city: 'الدار البيضاء',
    rating: 5,
    date: 'منذ يومين',
    comment: 'صراحة منتج عملي بزاف! ينقذنا فاش يقطع الضوء بالبيت ونشغل بيه الراوتر واللابتوب لشغلي. والتوصيل كان سريع في 24 ساعة والدفع بعد المعاينة.',
    verifiedPurchase: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    tag: 'زبون مؤكد 🇲🇦'
  },
  {
    id: '2',
    name: 'مريم - الرباط',
    city: 'الرباط',
    rating: 5,
    date: 'منذ 3 أيام',
    comment: 'اشتريته للوالد في المزرعة. فيه منافذ USB لشحن الهواتف ومقبس للضوء. المقبض خفيف والشاشة تعطي النسبة بالضبط. شكرا على المعاملة الراقية.',
    verifiedPurchase: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    tag: 'زبون مؤكد 🇲🇦'
  },
  {
    id: '3',
    name: 'عبد الرحيم - طنجة',
    city: 'طنجة',
    rating: 5,
    date: 'منذ 4 أيام',
    comment: 'الجودة ممتازة مقارنة بالسعر. ينفع بزاف في المحل التجاري لما يقطع الضوء ونشغل بيه الواي فاي والإنارة. التوصيل كان سريع والدفع عند المعاينة.',
    verifiedPurchase: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    tag: 'زبون مؤكد 🇲🇦'
  },
  {
    id: '4',
    name: 'سارة - مراكش',
    city: 'مراكش',
    rating: 5,
    date: 'منذ أسبوع',
    comment: 'المحطة هادئة تماما ومفهاش أي صوت عكس المولدات القديمة بالبنزين. الإضاءة قوية والراديو يشتغل بالهوائي بشكل ممتاز. أنصح به.',
    verifiedPurchase: true,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    tag: 'زبون مؤكد 🇲🇦'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: '1',
    question: 'كيف يتم الشراء ولماذا نعتمد الدفع عند الاستلام والمعاينة؟',
    answer: 'حرصاً منا على ثقتكم وراحتكم الكاملة، تطلبون المنتج عبر النموذج وتستلمونه من الموزع عند باب منزلكم أو محلكم التجاري، وتتأكدون من طردكم وتتفحصونه بنفسكم قبل دفع أي مبلغ.'
  },
  {
    id: '2',
    question: 'كم يستغرق التوصيل داخل المغرب؟',
    answer: 'التوصيل مجاني 100% ويستغرق عادة بين 24 إلى 48 ساعة فقط لكافة المدن المغربية (الدار البيضاء، الرباط، مراكش، طنجة، فاس، أكادير، وجدة، مكناس، وغيرها).'
  },
  {
    id: '3',
    question: 'ما هي الأجهزة التي يمكن تشغيلها عبر المقبس العام AC؟',
    answer: 'يمكنك توصيل شواحن اللابتوب، المصابيح الكهربائية، أجهزة الواي فاي والراوتر، والمراوح الصغيرة عبر المقبس العام الذي يتوافق مع المقابس الكهربائية.'
  },
  {
    id: '4',
    question: 'هل توجد منافذ لشحن الهواتف والكشاف المدمج؟',
    answer: 'نعم! تحتوي المحطة على 3 منافذ USB لشحن الهواتف الذكية والأجهزة اللوحية، بالإضافة إلى 3 منافذ DC وكشاف طوارئ LED مدمج بالواجهة وراديو FM.'
  },
  {
    id: '5',
    question: 'ماذا يوجد داخل صندوق الشحنة؟',
    answer: 'تحصلون على محطة الطاقة PRO FAST YY-203، كابل الشحن الكهربائي المباشر (AC Cable)، وكتيب التعليمات والدليل الإرشادي.'
  }
];
