// src/content/site.js

export const locales = ["tr", "en"];

export const content = {
  tr: {
    brand: "Azakli Studio",
    taglineTop: "Mobil ve Veri Odaklı Ürünler",
    taglineAccent: "Azakli Studio tarafından ✦",
    heroText:
      "Modern, hızlı ve kullanıcı odaklı mobil uygulamalar geliştiriyoruz. Oyun/eğlence ve veri-yoğun niş ürünler için tasarım, altyapı ve dağıtımın tamamını üstleniyoruz.",
    ctaExplore: "Ürünleri Keşfet",
    ctaContact: "İletişim",
    nav: ["Ana Sayfa", "Ürünler", "Hakkımızda", "İletişim"],
    badges: ["iOS & Android", "Flutter / KMP / Compose", "Git + CI/CD"],
    featured: {
      title: "Potentials Radar",
      desc:
        "EA FC 26 için kapsamlı oyuncu analizi, filtreler, takım önerileri ve karşılaştırma.",
      appStore: "https://apps.apple.com/app/id6752223909",
      googlePlay: "https://play.google.com/store/apps/details?id=com.azaklistudio.potential&hl=tr",
      x: "https://x.com/PotentialsRadar",
    },
    productsTitle: "Ürünler",
    productsCTA: "Danışalım →",
    products: [
      {
        name: "Potentials Radar",
        subtitle: "FC 26 — Career Mode yardımcı",
        desc:
          "30+ filtre, takım önerileri, oyuncu karşılaştırma ve çok dilli destek.",
        links: {
          appStore: "https://apps.apple.com/app/id6752223909",
          googlePlay: "https://play.google.com/store/apps/details?id=com.azaklistudio.potential&hl=tr",
          x: "https://x.com/PotentialsRadar",
        },
        tags: ["iOS", "Android"],
      },
      {
        name: "MailAssistantApp",
        subtitle: "",
        desc:
          "Gereksiz e-postaları temizleyen, oyunlaştırma ve planlı temizlik özellikli akıllı posta asistanı.",
        links: {},
        tags: ["KMP", "Gmail/Outlook", "Yakında"],
      },
      {
        name: "Puhtalk",
        subtitle: "",
        desc:
          "Kanal + sesli sohbet odaklı, ekran paylaşımı planlı, Flutter tabanlı topluluk uygulaması.",
        links: {},
        tags: ["Flutter", "WebRTC", "Yakında"],
      },
    ],
    aboutTitle: "Neler Yapıyoruz?",
    aboutText:
      "Azakli Studio; mobil uygulama geliştirme, oyun prototipleme ve veri odaklı ürünler geliştirir. Uçtan uca; fikir doğrulama, UI/UX tasarım, veri modeli, backend/CI ve mağaza yayınına kadar eşlik eder.",
    aboutBullets: [
      "Jetpack Compose / Flutter / KMP",
      "Firebase / Firestore / SQLite",
      "AdMob / RevenueCat / Analytics",
    ],
    vision: {
      title: "Kısa Vizyon",
      items: [
        { k: "Çok Dilli", v: "EN · TR · DE · ES · FR ..." },
        { k: "Performans", v: "20K+ kayıt optimizasyonu" },
        { k: "Dağıtım", v: "App Store · Google Play" },
        { k: "Analitik", v: "AdMob · RC · Firebase" },
      ],
    },
    contactTitle: "İletişime Geç",
    contactDesc:
      "Projeniz için kısa bir özet paylaşın, en kısa sürede dönüş yapalım.",
    email: "azakli.dev@gmail.com",
    website: "https://azaklistudio.app",
    footerNote: `© ${new Date().getFullYear()} Azakli Studio — "Kıyıya güvenle yaklaşın"`,
    footerLinks: { privacy: "/privacy", terms: "#terms" },
  },

  en: {
    brand: "Azakli Studio",
    taglineTop: "Mobile & Data-Driven Products",
    taglineAccent: "by Azakli Studio ✦",
    heroText:
      "We build fast, user-focused mobile apps. From design to infrastructure and distribution for game/entertainment and data-heavy niche products.",
    ctaExplore: "Explore Products",
    ctaContact: "Contact",
    nav: ["Home", "Products", "About", "Contact"],
    badges: ["iOS & Android", "Flutter / KMP / Compose", "Git + CI/CD"],
    featured: {
      title: "Potentials Radar",
      desc:
        "Comprehensive player analysis for EA FC 26 with filters, team suggestions and comparison.",
      appStore: "https://apps.apple.com/app/id6752223909",
      googlePlay: "https://play.google.com/store/apps/details?id=com.azaklistudio.potential&hl=tr",
      x: "https://x.com/PotentialsRadar",
    },
    productsTitle: "Products",
    productsCTA: "Let’s talk →",
    products: [
      {
        name: "Potentials Radar",
        subtitle: "FC 26 — Career Mode companion",
        desc:
          "30+ filters, team suggestions, player comparison and multilingual support.",
        links: {
          appStore: "https://apps.apple.com/app/id6752223909",
          googlePlay: "https://play.google.com/store/apps/details?id=com.azaklistudio.potential&hl=tr",
          x: "https://x.com/PotentialsRadar",
        },
        tags: ["iOS", "Android"],
      },
      {
        name: "MailAssistantApp",
        subtitle: "",
        desc:
          "Smart mail assistant with scheduled cleaning and gamification.",
        links: {},
        tags: ["KMP", "Gmail/Outlook", "Soon"],
      },
      {
        name: "Puhtalk",
        subtitle: "",
        desc:
          "Channel + voice chat focused community app, planned screen sharing.",
        links: {},
        tags: ["Flutter", "WebRTC", "Soon"],
      },
    ],
    aboutTitle: "What We Do",
    aboutText:
      "We build mobile apps, game prototypes and data-driven products end-to-end: idea validation, UI/UX, data model, backend/CI and app store releases.",
    aboutBullets: [
      "Jetpack Compose / Flutter / KMP",
      "Firebase / Firestore / SQLite",
      "AdMob / RevenueCat / Analytics",
    ],
    vision: {
      title: "Vision",
      items: [
        { k: "Multilingual", v: "EN · TR · DE · ES · FR ..." },
        { k: "Performance", v: "20K+ records optimized" },
        { k: "Distribution", v: "App Store · Google Play" },
        { k: "Analytics", v: "AdMob · RC · Firebase" },
      ],
    },
    contactTitle: "Contact",
    contactDesc: "Share a short brief; we’ll get back shortly.",
    email: "azakli.dev@gmail.com",
    website: "https://azaklistudio.app",
    footerNote: `© ${new Date().getFullYear()} Azakli Studio — "Approach the shore safely"`,
    footerLinks: { privacy: "/privacy", terms: "#terms" },
  },
};
