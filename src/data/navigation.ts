export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "صفحه نخست",
    href: "/",
  },
  {
    label: "طراحی سایت",
    href: "/web-design",
    children: [
      { label: "طراحی سایت اختصاصی", href: "/web-design" },
      { label: "طراحی سایت با وردپرس", href: "/web-design/wordpress-web-development" },
      { label: "باز طراحی سایت", href: "/web-design/redesign-platform" },
      { label: "پشتیبانی سایت", href: "/web-design/any-support-website" },
      { label: "طراحی سایت شرکتی", href: "/website-type/company-website" },
      { label: "طراحی سایت فروشگاهی", href: "/website-type/ecommerce-website" },
      { label: "طراحی UI و UX", href: "/ui-ux-design" },
      { label: "نمونه کارهای طراحی سایت", href: "/web-design/website-portfolios" },
      { label: "قیمت طراحی سایت", href: "/web-design/website-price-listing" },
    ],
  },
  {
    label: "برنامه‌نویسی",
    href: "/programming",
    children: [
      { label: "پروژه n8n (صفر تا صد)", href: "/programming/n8n-workflows" },
      { label: "توسعه پلاگین و افزونه وردپرس", href: "/web-design/wordpress-web-development/wordpress-plugin-dev" },
      { label: "توسعه قالب و تم وردپرس", href: "/web-design/wordpress-web-development/wordpress-theme-dev" },
      { label: "توسعه ربات تلگرام", href: "/programming/telegram-bot-development" },
      { label: "توسعه مینی اپ تلگرام", href: "/programming/mini-app-telegram" },
      { label: "طراحی پورتال سازمانی", href: "/website-type/portal-design" },
      { label: "طراحی اپلیکیشن موبایل", href: "/programming/mobile-app-development" },
      { label: "طراحی و توسعه CRM", href: "/programming/crm-development" },
    ],
  },
  {
    label: "سئو سایت",
    href: "/search-engine-optimization",
    children: [
      { label: "برون‌سپاری سئو سایت", href: "/search-engine-optimization" },
      { label: "تولید محتوا سایت", href: "/search-engine-optimization/content-production" },
      { label: "تدوین استراتژی سئو", href: "/search-engine-optimization/seo-strategy" },
      { label: "چک لیست سئو", href: "/search-engine-optimization/seo-checklist-2025" },
      { label: "آموزش رایگان سئو", href: "/search-engine-optimization/seo-instruction" },
      { label: "نمونه‌کارهای سئو", href: "/search-engine-optimization/seo-projects" },
    ],
  },
  {
    label: "نمونه کارها",
    href: "/portfolio",
    children: [
      { label: "همه نمونه‌کارها", href: "/portfolio" },
      { label: "نمونه پروژه طراحی سایت", href: "/web-design/website-portfolios" },
      { label: "نمونه پروژه‌های سئو", href: "/search-engine-optimization/seo-projects" },
    ],
  },
  {
    label: "آکادمی",
    href: "/blog",
    children: [
      { label: "ابزارهای هوش مصنوعی", href: "/category/ai-tools" },
      { label: "ترند باکس!", href: "/category/tech-news" },
      { label: "آموزش تصویری و ویدیویی", href: "/category/learning" },
      { label: "دوره‌های آموزشی", href: "/product-category/courses" },
    ],
  },
  {
    label: "مشاوره رایگان",
    href: "/request",
  },
];

export const contactLink = {
  label: "ارتباط با ما",
  href: "/contact",
};
