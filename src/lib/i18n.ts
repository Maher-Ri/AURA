export type Locale = 'en' | 'ar';

export const translations = {
  en: {
    brand: 'AURA',
    nav: {
      aura: 'Aura',
      notes: 'Notes',
      essence: 'The Essence',
      bottle: 'The Bottle',
      craft: 'The Craft',
    },
    hero: {
      subtitle: 'Maison de Parfum',
      title: 'Aura',
      titleItalic: 'Noire',
      collection: 'The Collection',
      film: 'The Film',
    },
    notes: {
      title: 'The Architecture of Scent',
      desc: 'A rare combination of ingredients distilled over seasons, capturing the ephemeral nature of light.',
      top: 'Top Note',
      heart: 'Heart Note',
      base: 'Base Note',
      saffron: 'Saffron',
      oud: 'Oud Wood',
      amber: 'Amber',
    },
    essence: {
      tag: 'The Soul of Aura',
      title: 'Crafted for the Extraordinary',
      desc: 'Aura represents the invisible strength within. Our perfumes are more than scents; they are echoes of your own brilliance.',
      cta: 'Explore the Collection',
    },
    footer: {
      boutiques: 'Boutiques',
      locations: 'Paris • Dubai • London',
    }
  },
  ar: {
    brand: 'أورا',
    nav: {
      aura: 'أورا',
      notes: 'النوتات',
      essence: 'الجوهر',
      bottle: 'الزجاجة',
      craft: 'الحرفية',
    },
    hero: {
      subtitle: 'دار العطور الفاخرة',
      title: 'أورا',
      titleItalic: 'نوار',
      collection: 'المجموعة',
      film: 'الفيلم',
    },
    notes: {
      title: 'هندسة العبير',
      desc: 'مزيج نادر من المكونات المقطرة عبر الفصول، تجسد طبيعة الضوء العابرة.',
      top: 'النوتة العليا',
      heart: 'قلب العطر',
      base: 'قاعدة العطر',
      saffron: 'الزعفران',
      oud: 'خشب العود',
      amber: 'العنبر',
    },
    essence: {
      tag: 'روح أورا',
      title: 'صُنعت للاستثنائيين',
      desc: 'تمثل أورا القوة الخفية في الداخل. عطورنا ليست مجرد روائح؛ بل هي أصداء لتألقك الخاص.',
      cta: 'استكشف المجموعة',
    },
    footer: {
      boutiques: 'البوتيكات',
      locations: 'باريس • دبي • لندن',
    }
  }
} as const;