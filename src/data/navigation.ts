export interface MenuItem {
  label: string;
  href: string;
  highlight?: boolean;
}

export interface MegaMenuSection {
  title: string;
  items: MenuItem[];
}

export const navigation = {
  main: [
    {
      label: "طراحی سایت",
      href: "/web-design",
      mega: true,
      sections: [
        { title: "", items: [
          { label: "طراحی سایت اختصاصی", href: "/web-design" },
          { label: "طراحی سایت با وردپرس", href: "/web-design/wordpress-web-development" },
          { label: "باز طراحی سایت", href: "/web-design/redesign-platform" },
          { label: "پشتیبانی سایت", href: "/web-design/any-support-website" },
        ]},
        { title: "", items: [
          { label: "طراحی سایت شرکتی", href: "/website-type/company-website" },
          { label: "طراحی سایت فروشگاهی", href: "/website-type/ecommerce-website" },
          { label: "طراحی UI و UX", href: "/ui-ux-design" },
          { label: "نمونه کارهای طراحی سایت", href: "/web-design/website-portfolios" },
          { label: "قیمت طراحی سایت", href: "/web-design/website-price-listing" },
        ]}
      ]
    },
    {
      label: "برنامه‌نویسی",
      href: "/programming",
      mega: true,
      sections: [
        { title: "", items: [
          { label: "پروژه n8n (صفر تا صد)", href: "/programming/n8n-workflows" },
          { label: "توسعه پلاگین وردپرس", href: "/web-design/wordpress-web-development/wordpress-plugin-dev" },
          { label: "توسعه قالب وردپرس", href: "/web-design/wordpress-web-development/wordpress-theme-dev" },
          { label: "توسعه ربات تلگرام", href: "/programming/telegram-bot-development" },
        ]},
        { title: "", items: [
          { label: "توسعه مینی اپ تلگرام", href: "/programming/mini-app-telegram" },
          { label: "طراحی پورتال سازمانی", href: "/website-type/portal-design" },
          { label: "طراحی اپلیکیشن موبایل", href: "/programming/mobile-app-development" },
          { label: "طراحی و توسعه CRM", href: "/programming/crm-development" },
        ]}
      ]
    },
    {
      label: "سئو سایت",
      href: "/search-engine-optimization",
      mega: true,
      sections: [
        { title: "", items: [
          { label: "برون‌سپاری سئو سایت", href: "/search-engine-optimization" },
          { label: "تولید محتوا سایت", href: "/search-engine-optimization/content-production" },
          { label: "تدوین استراتژی سئو", href: "/search-engine-optimization/seo-strategy" },
          { label: "چک لیست سئو", href: "/search-engine-optimization/seo-checklist-2025" },
        ]},
        { title: "", items: [
          { label: "آموزش رایگان سئو", href: "/search-engine-optimization/seo-instruction" },
          { label: "نمونه‌کارهای سئو", href: "/search-engine-optimization/seo-projects" },
        ]}
      ]
    },
    { label: "نمونه‌کارها", href: "/portfolio" },
    { label: "آکادمی", href: "/blog" },
    { label: "مشاوره رایگان", href: "/request", highlight: true },
  ],
  contact: { label: "ارتباط با ما", href: "/contact" }
};
