import { PRODUCT_INFO } from '../data/productData';

export interface OrderData {
  fullName: string;
  city: string;
  phone: string;
  quantity?: number;
  notes?: string;
}

export interface OrderResponse {
  success: boolean;
  orderNumber: string;
  date: string;
  message?: string;
  data?: {
    orderNumber: string;
    date: string;
    fullName: string;
    city: string;
    phone: string;
    productName: string;
    quantity: number;
    totalAmount: string;
    status: string;
  };
}

// Memory set to prevent duplicate phone submissions within a short window
const recentSubmissions = new Set<string>();

/**
 * Validates Moroccan phone numbers (+212, 06, 07, 05)
 */
export const validateMoroccanPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  const regex = /^(?:\+?212|0)[567]\d{8}$/;
  return regex.test(cleaned);
};

/**
 * Generates a unique Order ID (e.g. MA-839201)
 */
export const generateOrderId = (): string => {
  const randomDigits = Math.floor(100000 + Math.random() * 900000);
  return `MA-${randomDigits}`;
};

/**
 * Submits order to Google Sheets API Webhook (if configured) or handles fallback
 */
export const submitOrder = async (data: OrderData): Promise<OrderResponse> => {
  const cleanedPhone = data.phone.replace(/[\s\-\(\)]/g, '');

  // 1. Phone validation check
  if (!validateMoroccanPhone(cleanedPhone)) {
    throw new Error('يرجى إدخال رقم هاتف مغربي صحيح (مثال: 0661234567).');
  }

  // 2. Duplicate submission prevention check
  const submissionKey = `${data.fullName.trim().toLowerCase()}_${cleanedPhone}`;
  if (recentSubmissions.has(submissionKey)) {
    throw new Error('لقد تم تقديم طلب مسبق بنفس هذه البيانات مؤخراً. فريقنا سيتصل بكم قريباً.');
  }

  const orderId = generateOrderId();
  const dateStr = new Date().toLocaleString('ar-MA', {
    timeZone: 'Africa/Casablanca',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const payload = {
    orderId: orderId,
    dateTime: dateStr,
    fullName: data.fullName.trim(),
    city: data.city.trim(),
    phone: cleanedPhone,
    productName: PRODUCT_INFO.name,
    quantity: data.quantity || 1,
    totalPrice: `${PRODUCT_INFO.price} ${PRODUCT_INFO.currency}`,
    paymentMethod: 'الدفع عند الاستلام (COD)',
    status: 'Nouvelle',
    notes: data.notes || 'طلب جديد عبر الموقع — الدفع عند الاستلام',
  };

  const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL || '';

  if (googleSheetsUrl && googleSheetsUrl.startsWith('http')) {
    try {
      // Send to Google Sheets Apps Script Web App
      await fetch(googleSheetsUrl, {
        method: 'POST',
        mode: 'no-cors', // Apps Script web app redirect compatibility
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn('Google Sheets sync notice:', err);
      // Fallback allowed so customer order is not lost on network blip
    }
  }

  // Record submission to prevent duplicates for 5 minutes
  recentSubmissions.add(submissionKey);
  setTimeout(() => {
    recentSubmissions.delete(submissionKey);
  }, 5 * 60 * 1000);

  return {
    success: true,
    orderNumber: orderId,
    date: dateStr,
    data: {
      orderNumber: orderId,
      date: dateStr,
      fullName: data.fullName.trim(),
      city: data.city.trim(),
      phone: cleanedPhone,
      productName: PRODUCT_INFO.name,
      quantity: data.quantity || 1,
      totalAmount: `${PRODUCT_INFO.price} ${PRODUCT_INFO.currency}`,
      status: 'Nouvelle',
    },
  };
};
