export type Language = 'fr' | 'en' | 'ar';

export interface PlatformItem {
  id: string;
  name: string;
  code: string;
  bgGradient: string;
  textColor: string;
  iconName: string;
  description: Record<Language, string>;
}

export interface PricingPack {
  id: string;
  title: string;
  price: number;
  currency: string;
  duration: string;
  durationAr: string;
  popular?: boolean;
  recommended?: boolean;
  features: {
    en: string[];
    fr: string[];
    ar: string[];
  };
  ctaText: Record<Language, string>;
}

export interface MetaProfilePack {
  id: string;
  title: string;
  price: number;
  currency: string;
  recommended?: boolean;
  features: {
    en: string[];
    fr: string[];
    ar: string[];
  };
  ctaText: Record<Language, string>;
}

export interface StatItem {
  value: string;
  label: Record<Language, string>;
  sublabelAr?: string;
  change?: string;
  isPositive?: boolean;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  websiteOrPage: string;
  selectedPack?: string;
  budget?: string;
  platform?: string;
  message: string;
}
