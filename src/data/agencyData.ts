import { Language, PlatformItem, PricingPack, MetaProfilePack, StatItem } from '../types';

export const AGENCY_INFO = {
  name: 'DIGICOD ADS',
  tagline: 'WE BUY ADS, YOU GET RESULTS',
  phone: '+212 631-769851',
  phoneClean: '+212631769851',
  website: 'digicodads.com',
  instagram: '@digicod_ads',
  instagramUrl: 'https://instagram.com/digicod_ads',
  whatsappUrl: 'https://wa.me/212631769851',
  year: '2026',
};

export const PLATFORMS: PlatformItem[] = [
  {
    id: 'meta',
    name: 'META ADS',
    code: 'M',
    bgGradient: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-400',
    iconName: 'Meta',
    description: {
      fr: 'Optimisation multi-canal Facebook & Instagram pour maximiser le taux de conversion.',
      en: 'Multi-channel Facebook & Instagram optimization to maximize conversion rates.',
      ar: 'تحسين متكامل لإعلانات فيسبوك وانستغرام لزيادة المبيعات.'
    }
  },
  {
    id: 'facebook',
    name: 'FACEBOOK ADS',
    code: 'f',
    bgGradient: 'from-blue-700 to-blue-900',
    textColor: 'text-blue-500',
    iconName: 'Facebook',
    description: {
      fr: 'Ciblage précis par démographie et centres d\'intérêt avec formats vidéo & carrousel.',
      en: 'Precise demographic and interest targeting with video & carousel ad formats.',
      ar: 'استهداف دقيق حسب الاهتمامات والفئات العمرية مع تصاميم احترافية.'
    }
  },
  {
    id: 'instagram',
    name: 'INSTAGRAM ADS',
    code: 'IG',
    bgGradient: 'from-pink-500 via-red-500 to-yellow-500',
    textColor: 'text-pink-400',
    iconName: 'Instagram',
    description: {
      fr: 'Publicités visuelles haute immersion, Reels sponsors et Stories engageantes.',
      en: 'High-immersion visual ads, sponsored Reels, and engaging Stories.',
      ar: 'إعلانات بصرية جذابة عبر الريلز والقصص لزيادة التفاعل.'
    }
  },
  {
    id: 'tiktok',
    name: 'TIKTOK ADS',
    code: 'TT',
    bgGradient: 'from-zinc-900 via-cyan-900 to-pink-900',
    textColor: 'text-cyan-400',
    iconName: 'Music2',
    description: {
      fr: 'Campagnes virales Spark Ads & In-Feed pour captiver les jeunes consommateurs.',
      en: 'Viral Spark Ads & In-Feed campaigns to captivate modern shoppers.',
      ar: 'حملات تيك توك مخصصة للوصول لأكبر عدد من العملاء المستهدفين.'
    }
  },
  {
    id: 'google',
    name: 'GOOGLE ADS',
    code: 'G',
    bgGradient: 'from-red-500 via-yellow-500 to-green-500',
    textColor: 'text-emerald-400',
    iconName: 'Search',
    description: {
      fr: 'Annonces Search & Performance Max pour capter les clients avec une intention d\'achat élevée.',
      en: 'Search & Performance Max ads to capture high-intent active shoppers.',
      ar: 'إعلانات البحث على جوجل لاستهداف العملاء الباحثين عن خدماتك مباشرة.'
    }
  },
  {
    id: 'snapchat',
    name: 'SNAPCHAT ADS',
    code: 'SC',
    bgGradient: 'from-yellow-400 to-amber-500',
    textColor: 'text-yellow-400',
    iconName: 'Ghost',
    description: {
      fr: 'Publicités plein écran Snap Ads & Commercials avec fort taux de clic.',
      en: 'Full-screen Snap Ads & Commercials with high click-through performance.',
      ar: 'إعلانات سناب شات عالية التفاعل والتسوق المباشر.'
    }
  }
];

export const CAMPAIGN_PACKS: PricingPack[] = [
  {
    id: 'basic-test',
    title: 'BASIC TEST',
    price: 700,
    currency: 'DH',
    duration: '7 days campaign management',
    durationAr: 'إدارة حملات إعلانية لمدة 7 أيام',
    features: {
      en: [
        'Campaign setup',
        'Precise audience targeting',
        'Competitor analysis',
        'Professional ad design',
        'Daily campaign monitoring',
        'Final performance report',
        'WhatsApp support'
      ],
      fr: [
        'Configuration de la campagne',
        'Ciblage précis d\'audience',
        'Analyse de la concurrence',
        'Design publicitaire professionnel',
        'Suivi quotidien de la campagne',
        'Rapport de performance final',
        'Support WhatsApp'
      ],
      ar: [
        'إعداد الحملة الإعلانية',
        'استهداف دقيق للجمهور',
        'تحليل المنافسين',
        'تصميم إعلانات احترافية',
        'متابعة يومية للحملة',
        'تقرير أداء نهائي',
        'دعم عبر الواتساب'
      ]
    },
    ctaText: {
      fr: 'COMMANDER MA CAMPAGNE',
      en: 'GET STARTED',
      ar: 'ابدأ الآن'
    }
  },
  {
    id: 'pack-scale',
    title: 'PACK SCALE',
    price: 2000,
    currency: 'DH',
    duration: '14 days campaign management',
    durationAr: 'إدارة حملات إعلانية لمدة 14 يوم',
    popular: true,
    features: {
      en: [
        'Full strategy build-out',
        'Advanced audience targeting',
        'Complete competitor analysis',
        'Professional ad creative',
        'A/B ad testing',
        'Daily campaign optimization',
        'Detailed performance reports',
        '24/7 WhatsApp support'
      ],
      fr: [
        'Élaboration d\'une stratégie complète',
        'Ciblage d\'audience avancé',
        'Analyse concurrentielle approfondie',
        'Créatifs publicitaires professionnels',
        'Tests A/B des visuels & textes',
        'Optimisation quotidienne des performances',
        'Rapports d\'analyse détaillés',
        'Support WhatsApp 24/7'
      ],
      ar: [
        'بناء استراتيجية كاملة',
        'استهداف متقدم للجمهور',
        'تحليل شامل للمنافسين',
        'تصاميم وفيديوهات احترافية',
        'اختبار A/B للإعلانات',
        'تحسين يومي للحملات',
        'تقارير أداء تفصيلية',
        'دعم 24/7 عبر الواتساب'
      ]
    },
    ctaText: {
      fr: 'CHOISIR PACK SCALE',
      en: 'GET STARTED',
      ar: 'احصل على باقة SCALE'
    }
  },
  {
    id: 'pack-growth',
    title: 'PACK GROWTH',
    price: 1200,
    currency: 'DH',
    duration: '10 days campaign management',
    durationAr: 'إدارة حملات إعلانية لمدة 10 أيام',
    features: {
      en: [
        'Campaign setup',
        'Precise audience targeting',
        'Competitor analysis',
        'Professional ad design',
        'Daily campaign monitoring',
        'Final performance report',
        'WhatsApp support'
      ],
      fr: [
        'Configuration complète de campagne',
        'Ciblage démographique & intérêts',
        'Analyse des offres concurrentes',
        'Design publicitaire premium',
        'Suivi & optimisation quotidienne',
        'Rapport de performance complet',
        'Support dédié WhatsApp'
      ],
      ar: [
        'إعداد الحملة',
        'استهداف دقيق للجمهور',
        'تحليل المنافسين',
        'تصميم إعلانات احترافية',
        'متابعة يومية للحملات',
        'تقرير أداء نهائي',
        'دعم عبر الواتساب'
      ]
    },
    ctaText: {
      fr: 'COMMANDER PACK GROWTH',
      en: 'GET STARTED',
      ar: 'احصل على باقة GROWTH'
    }
  }
];

export const META_PROFILES_PACKS: MetaProfilePack[] = [
  {
    id: '1-profile',
    title: '1 PROFILE ACCOUNT',
    price: 150,
    currency: 'DH',
    features: {
      en: [
        '1 Business Manager',
        '2 Ad Accounts',
        '2 Ready Facebook Pages',
        'Custom Instagram Page',
        'Login & password modification'
      ],
      fr: [
        '1 Business Manager vérifié',
        '2 Comptes publicitaires (Ad Accounts)',
        '2 Pages Facebook prêtes à l\'emploi',
        'Page Instagram personnalisée',
        'Modification identifiant & mot de passe'
      ],
      ar: [
        '1 Business Manager',
        '2 حسابات إعلانية (Ad Accounts)',
        '2 صفحات فيسبوك جاهزة',
        'صفحة انستغرام مخصصة',
        'تعديل اسم المستخدم كلمة السر'
      ]
    },
    ctaText: {
      fr: 'COMMANDER 1 COMPTE',
      en: 'GET STARTED',
      ar: 'شراء حساب واحد'
    }
  },
  {
    id: '2-profiles',
    title: '2 PROFILES ACCOUNTS',
    price: 299,
    currency: 'DH',
    features: {
      en: [
        '2 Business Managers',
        '4 Ad Accounts',
        '4 Ready Facebook Pages',
        'Custom Instagram Page',
        'Login & password modification'
      ],
      fr: [
        '2 Business Managers vérifiés',
        '4 Comptes publicitaires',
        '4 Pages Facebook prêtes',
        'Page Instagram personnalisée',
        'Modification sécurisée accès & mdp'
      ],
      ar: [
        '2 Business Managers',
        '4 حسابات إعلانية',
        '4 صفحات فيسبوك جاهزة',
        'صفحة انستغرام مخصصة',
        'تعديل كامل لمعلومات الدخول'
      ]
    },
    ctaText: {
      fr: 'COMMANDER 2 COMPTES',
      en: 'GET STARTED',
      ar: 'شراء حسابين'
    }
  },
  {
    id: '3-profiles',
    title: '3 PROFILES ACCOUNTS',
    price: 499,
    currency: 'DH',
    recommended: true,
    features: {
      en: [
        'Structure backup setup',
        '3 Business Managers',
        '6 Ad Accounts',
        '6 Ready Facebook Pages',
        'Custom Instagram Page',
        'Login & password modification',
        'Free ad-spend management Google Sheet'
      ],
      fr: [
        'Configuration de secours (Backup structure)',
        '3 Business Managers vérifiés',
        '6 Comptes publicitaires active',
        '6 Pages Facebook prêtes',
        'Page Instagram personnalisée',
        'Changement accès & mot de passe complet',
        'Google Sheet gratuit de suivi des dépenses pub'
      ],
      ar: [
        'إعداد بنية احتياطية (Structure backup setup)',
        '3 Business Managers',
        '6 حسابات إعلانية',
        '6 صفحات فيسبوك جاهزة',
        'صفحة انستغرام مخصصة',
        'تعديل كامل لمعلومات الدخول',
        'جدول Google Sheet مجاني لمتابعة المصاريف'
      ]
    },
    ctaText: {
      fr: 'OBTENIR LE PACK RECOMMANDÉ',
      en: 'GET STARTED',
      ar: 'احصل على الباقة الموصى بها'
    }
  }
];

export const RESULTS_STATS: StatItem[] = [
  {
    value: '+320%',
    label: {
      fr: 'LEADS GÉNÉRÉS',
      en: 'LEADS GENERATED',
      ar: 'زيادة في العملاء'
    },
    sublabelAr: 'زيادة في العملاء'
  },
  {
    value: '-45%',
    label: {
      fr: 'COÛT PAR LEAD',
      en: 'COST PER LEAD',
      ar: 'تخفيض في التكلفة'
    },
    sublabelAr: 'تخفيض في التكلفة'
  },
  {
    value: '+250K',
    label: {
      fr: 'CHIFFRE D\'AFFAIRES GAGNÉ (DH)',
      en: 'REVENUE GENERATED',
      ar: 'إيرادات محققة'
    },
    sublabelAr: 'إيرادات محققة'
  },
  {
    value: '+70%',
    label: {
      fr: 'AMÉLIORATION DU ROI',
      en: 'ROI IMPROVEMENT',
      ar: 'تحسين العائد'
    },
    sublabelAr: 'تحسين العائد'
  }
];

export const AGENCY_PILLARS = [
  {
    icon: 'Target',
    title: {
      fr: 'CIBLAGE PRÉCIS',
      en: 'PRECISE TARGETING',
      ar: 'استهداف دقيق'
    },
    desc: {
      fr: 'Nous touchons exactement l\'audience qualifiée qui achètera vos produits ou services.',
      en: 'We reach the exact audience that will buy from you.',
      ar: 'نصل إلى الجمهور المباشر المستعد للشراء منك.'
    }
  },
  {
    icon: 'DollarSign',
    title: {
      fr: 'MEILLEURS PRIX PUB',
      en: 'BEST AD PRICES',
      ar: 'أفضل الأسعار'
    },
    desc: {
      fr: 'Accès aux espaces publicitaires au coût par mille (CPM) et coût par clic le plus avantageux.',
      en: 'Premium ad space at the lowest possible cost.',
      ar: 'مساحات إعلانية ممتازة بأقل تكلفة ممكنة.'
    }
  },
  {
    icon: 'ShieldCheck',
    title: {
      fr: 'QUALITÉ GARANTIE',
      en: 'GUARANTEED QUALITY',
      ar: 'جودة مضمونة'
    },
    desc: {
      fr: 'Réseaux publicitaires vérifiés et sécurisés — aucun budget gaspillé.',
      en: 'Trusted, verified publishers — no wasted spend.',
      ar: 'حسابات موثوقة ومفعلة — بدون هدر للميزانية.'
    }
  },
  {
    icon: 'BarChart3',
    title: {
      fr: 'RAPPORTS PROS',
      en: 'PRO REPORTS',
      ar: 'تقارير احترافية'
    },
    desc: {
      fr: 'Analyses claires et métriques de retour sur investissement mesurables au quotidien.',
      en: 'Clear analytics and outcomes you can act on.',
      ar: 'تقارير أداء واضحة يمكنك الاتخاذ عليها قرارات صائبة.'
    }
  }
];

export const STRATEGY_PROCESS = [
  {
    num: '01',
    title: {
      fr: 'Ciblage Précis',
      en: 'Precise Targeting',
      ar: 'استهداف دقيق'
    },
    desc: {
      fr: 'Segmentation comportementale et géolocalisation haute précision.',
      en: 'Behavioral segmentation and high-precision geo-targeting.',
      ar: 'تقسيم سلوكي واستهداف جغرافي عالي الدقة.'
    }
  },
  {
    num: '02',
    title: {
      fr: 'Analyse & Suivi des Performances',
      en: 'Performance Analysis & Tracking',
      ar: 'تحليل ومتابعة الأداء'
    },
    desc: {
      fr: 'Pixel Meta, TikTok Events API et Google Conversions configurés sans faille.',
      en: 'Flawless setup for Meta Pixel, TikTok Events API & Google Conversions.',
      ar: 'تتبع شامل للتكلفة والتحويلات عبر البكسل و APIs.'
    }
  },
  {
    num: '03',
    title: {
      fr: 'Optimisation du ROI',
      en: 'ROI Optimization',
      ar: 'تحسين العائد'
    },
    desc: {
      fr: 'Réallocation dynamique du budget sur les visuels et audiences les plus rentables.',
      en: 'Dynamic budget allocation to top-performing creatives and audiences.',
      ar: 'إعادة توزيع الميزانية على الإعلانات الأكثر ربحية.'
    }
  },
  {
    num: '04',
    title: {
      fr: 'Gestion de Campagnes 360°',
      en: 'Campaign Management',
      ar: 'إدارة الحملات'
    },
    desc: {
      fr: 'Ajustements quotidiens par nos Media Buyers seniors pour maintenir le coût par prospect bas.',
      en: 'Daily manual tweaks by senior media buyers to keep CPL low.',
      ar: 'تعديلات يومية من خبراء الشراء الإعلاني للحفاظ على انخفاض التكلفة.'
    }
  },
  {
    num: '05',
    title: {
      fr: 'Stratégies Sur-Mesure',
      en: 'Custom Strategies',
      ar: 'استراتيجيات مخصصة'
    },
    desc: {
      fr: 'Funnels de vente personnalisés adaptés au marché marocain et international.',
      en: 'Tailored conversion funnels built for local and global markets.',
      ar: 'مسارات مبيعات مخصصة للسوق المغربي والدولي.'
    }
  }
];

export const FAQS = [
  {
    q: {
      fr: 'Comment commencer une campagne publicitaire avec DIGICOD ADS ?',
      en: 'How do I launch an ad campaign with DIGICOD ADS?',
      ar: 'كيف أبدأ حملة إعلانية مع DIGICOD ADS؟'
    },
    a: {
      fr: 'Choisissez simplement le pack adapté à vos objectifs (Basic, Scale ou Growth), puis cliquez sur le bouton pour nous contacter sur WhatsApp. Nous analysons votre niche, créons vos visuels et lançons la campagne sous 24h à 48h.',
      en: 'Simply select your preferred pack (Basic, Scale, or Growth) and click the WhatsApp order button. We analyze your product/service, design the creatives, and set up your campaign within 24 to 48 hours.',
      ar: 'اختر الباقة المناسبة لاحتياجاتك (Basic, Scale أو Growth) واضغط على زر الاتصال بالواتساب. سنقوم بتحليل مشروعك وتصميم الإعلانات وإطلاق الحملة خلال 24 إلى 48 ساعة.'
    }
  },
  {
    q: {
      fr: 'Que contiennent les packs Meta Ads Profiles ?',
      en: 'What is included in the Meta Ads Profiles packs?',
      ar: 'ماذا تتضمن باقات حسابات Meta Ads Profiles؟'
    },
    a: {
      fr: 'Nos packs de profils Meta contiennent des Business Managers actifs, des comptes publicitaires prêts à dépenser, des pages Facebook réchauffées, une page Instagram et un accès sécurisé avec modification immédiate des identifiants.',
      en: 'Our Meta profiles include active Business Managers, ready-to-run ad accounts, warmed Facebook pages, Instagram page, and secure credentials with full access modification.',
      ar: 'تحتوي باقاتنا على Business Managers نشطة، حسابات إعلانية جاهزة للإطلاق، صفحات فيسبوك جاهزة، صفحة انستغرام وتعديل كامل لكلمة السر والمعلومات.'
    }
  },
  {
    q: {
      fr: 'Quels sont les modes de paiement acceptés en DH ?',
      en: 'What payment methods do you accept in DH?',
      ar: 'ما هي طرق الدفع المقبولة بالمغرب (بالدرهم)؟'
    },
    a: {
      fr: 'Nous acceptons le virement bancaire local (CIH Bank, Attijariwafa, BMCE, BCP) et les paiements mobiles rapides au Maroc.',
      en: 'We accept local Moroccan bank transfers (CIH, Attijariwafa, BMCE, BCP) and instant mobile transfers.',
      ar: 'نقبل التحويل البنكي المحلي (CIH, Attijariwafa Bank, BMCE, BCP) والأداء السريع عبر التطبيقات البنكية.'
    }
  },
  {
    q: {
      fr: 'Fournissez-vous des rapports détaillés pendant la campagne ?',
      en: 'Do you provide detailed campaign performance reports?',
      ar: 'هل تقدمون تقارير أداء تفصيلية أثناء الحملة؟'
    },
    a: {
      fr: 'Oui, vous recevez un suivi quotidien du budget, du nombre de prospects générés, du coût par clic (CPC) et du retour sur investissement global.',
      en: 'Yes, you receive daily reporting on spent budget, leads count, CPC, and overall ROI.',
      ar: 'نعم، تصلك متابعة يومية للميزانية المستهلكة، عدد العملاء الجدد، تكلفة النقرة والعائد على الاستثمار.'
    }
  }
];
