export interface OrderFormData {
  fullName: string;
  city: string;
  phone: string;
}

export interface MoroccanCity {
  id: string;
  nameAr: string;
  nameFr: string;
  region?: string;
}

export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
  avatar: string;
  tag?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PortDetail {
  id: string;
  nameAr: string;
  count: number;
  description: string;
  compatibleDevices: string[];
  iconName: string;
}
