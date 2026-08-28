/**
 * Single source of truth for all marketing copy and contact details.
 * Edit this file to change what the website says — no component changes needed.
 */

export type IconName =
  | "globe"
  | "smartphone"
  | "code"
  | "layout"
  | "cloud"
  | "wrench"
  | "menu"
  | "close"
  | "arrow-right"
  | "mail"
  | "phone"
  | "map-pin"
  | "clock"
  | "check"
  | "monitor"
  | "plug"
  | "layers"
  | "file-text"
  | "database"
  | "briefcase"
  | "bar-chart";

export type NavLink = { label: string; href: string };

export const site = {
  name: "EloTech",
  legalName: "EloTech Software Development (Pty) Ltd",
  tagline: "Connected business solutions",
  description:
    "EloTech is a software development company specialising in building connected business solutions across mobile, desktop and API platforms.",
  // TODO: replace with the real production domain before launch (used for SEO, sitemap, OpenGraph).
  url: "https://elotech.vercel.app",
  locale: "en_ZA",

  nav: [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Products", href: "/#products" },
    { label: "Pricing", href: "/revlink#pricing" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavLink[],

  hero: {
    eyebrow: "Software development house",
    headline: "We design and build software that moves your business forward.",
    subheadline:
      "From first idea to production launch, EloTech partners with you to ship clean, modern, dependable products — on time and built to scale.",
    primaryCta: { label: "Start a project", href: "/#contact" },
    secondaryCta: { label: "See what we do", href: "/#services" },
    trustNote: "Web · Mobile · Cloud · Custom software",
  },

  about: {
    eyebrow: "About EloTech",
    heading: "A focused team of engineers and designers who care about the details.",
    paragraphs: [
      "EloTech is a software development company specialising in building connected business solutions across mobile, desktop and API platforms. We design and deliver software that extends the systems businesses already rely on, giving teams access to their operational data wherever they work.",
      "Our current product suite consists of three integrated solutions: RevLink, MobiLink, and the Alpha API. Each product is available on its own, and together they form a complete mobile-enabled workflow for businesses running Revelation Accounting Software.",
    ],
    highlights: [
      { value: "End-to-end", label: "Strategy, design, build and support" },
      { value: "Modern stack", label: "TypeScript, React, Next.js, cloud-native" },
      { value: "Transparent", label: "Clear timelines, fixed scope, no surprises" },
    ],
  },

  services: {
    eyebrow: "What we do",
    heading: "Everything you need to take a product from idea to launch.",
    lede: "Whether you need a full build or a specialist team to plug in alongside your own, we've got you covered.",
    items: [
      {
        icon: "globe",
        title: "Web applications",
        description:
          "Fast, accessible and SEO-friendly websites and web apps built with modern frameworks and best practices.",
      },
      {
        icon: "smartphone",
        title: "Mobile apps",
        description:
          "Cross-platform iOS and Android apps that feel native, perform well and ship from a single codebase.",
      },
      {
        icon: "code",
        title: "Custom software",
        description:
          "Bespoke systems, integrations and internal tools designed around how your business actually works.",
      },
      {
        icon: "layout",
        title: "UI / UX design",
        description:
          "Clean, intuitive interfaces grounded in research — designed to be used, not just admired.",
      },
      {
        icon: "cloud",
        title: "Cloud & DevOps",
        description:
          "Secure, scalable infrastructure, CI/CD pipelines and deployments that let you release with confidence.",
      },
      {
        icon: "wrench",
        title: "Support & maintenance",
        description:
          "Ongoing care for the products we build — monitoring, updates, improvements and rapid fixes.",
      },
    ] satisfies { icon: IconName; title: string; description: string }[],
  },

  products: {
    eyebrow: "What we've built",
    heading: "Our product suite.",
    lede: "Three integrated solutions — each available on its own, and together a complete mobile-enabled workflow for businesses running Revelation Accounting Software.",
    items: [
      {
        icon: "smartphone",
        name: "RevLink",
        platform: "Mobile",
        href: "/revlink",
        paragraphs: [
          "RevLink is a mobile application that integrates directly with your existing Revelation Accounting Software data.",
          "Built for sales representatives and staff who spend their day out of the office, RevLink allows quotes and orders to be created and managed from a mobile device in real time. This removes the delay of capturing work only once staff return to the office, shortening turnaround times and improving accuracy.",
          "Each RevLink installation is linked to a designated company, user and warehouse, all of which are configured and controlled from the desktop side of the system.",
        ],
      },
      {
        icon: "monitor",
        name: "MobiLink",
        platform: "Desktop",
        paragraphs: [
          "MobiLink is the central device management platform for the EloTech suite.",
          "It gives administrators full control over which devices are permitted to access company data, with the ability to activate and deactivate devices as required. This ensures that access to sensitive business information remains authorised and auditable at all times.",
          "MobiLink also includes a management dashboard, providing oversight of activity across the organisation so decision-makers can monitor performance and usage at a glance.",
        ],
      },
      {
        icon: "plug",
        name: "Alpha API",
        platform: "Integration Layer",
        paragraphs: [
          "The Alpha API is the connective layer that enables communication between mobile and desktop environments. It is the component that allows RevLink and MobiLink to operate as a single system rather than as isolated applications.",
          "The Alpha API is also available as a standalone service for businesses that require a secure, reliable integration layer between their own platforms.",
        ],
      },
    ] satisfies {
      icon: IconName;
      name: string;
      platform: string;
      /** Optional dedicated product page. When set, the card becomes a link. */
      href?: string;
      paragraphs: string[];
    }[],
  },

  /** Dedicated RevLink product page (/revlink). Product copy is pulled from `products.items`. */
  revlink: {
    headline: "Quotes and orders from the field, in real time.",
    primaryCta: { label: "Get in touch", href: "/#contact" },
    secondaryCta: { label: "See pricing", href: "/revlink#pricing" },
  },

  features: {
    eyebrow: "Key features & deliverables",
    heading: "Everything included in a RevLink subscription.",
    lede: "Every RevLink subscription includes the following.",
    groups: [
      {
        icon: "layers",
        title: "Included platform access",
        items: [
          { label: "RevLink", detail: "The mobile application." },
          { label: "MobiLink", detail: "Desktop device management and management dashboard." },
          { label: "Alpha API", detail: "Integration access as required for RevLink to operate." },
        ],
      },
      {
        icon: "file-text",
        title: "Sales & purchasing",
        intro:
          "Create, manage and process the following directly from a mobile device, synced with your Revelation Accounting data:",
        items: [
          { label: "Quotes" },
          { label: "Sales Orders" },
          { label: "Purchase Orders" },
          { label: "Invoices" },
          { label: "Goods Received Notes (GRNs)" },
        ],
      },
      {
        icon: "database",
        title: "Master data access",
        intro: "Full mobile access to the records your team needs while out of the office:",
        items: [
          { label: "Client accounts" },
          { label: "Creditor accounts" },
          { label: "Stock and inventory information" },
        ],
      },
      {
        icon: "briefcase",
        title: "Job management",
        items: [{ label: "Job Quotes" }, { label: "Job Cards" }],
      },
      {
        icon: "bar-chart",
        title: "Reporting & oversight",
        wide: true,
        items: [
          {
            label: "On-device dashboard",
            detail:
              "A set of predefined business figures, including sales performance, available at a glance on the mobile device. Dashboard categories are standardised across all users and are not user-configurable, ensuring consistent reporting across the organisation.",
          },
          {
            label: "Representative tracking",
            detail:
              "Optional GPS-based location tracking, enabled by the user with explicit device permission. Allows representatives to log their current location and activity, and gives management visibility of field activity throughout the day.",
          },
          {
            label: "Management dashboard",
            detail: "Organisation-wide oversight via MobiLink.",
          },
        ],
      },
    ] satisfies {
      icon: IconName;
      title: string;
      intro?: string;
      wide?: boolean;
      items: { label: string; detail?: string }[];
    }[],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Straightforward per-device pricing.",
    lede: "RevLink is licensed per device. MobiLink and the API access RevLink requires are included at no additional charge.",
    plan: {
      name: "RevLink Subscription",
      price: "R450",
      unit: "per device, per month",
      includes: [
        "RevLink — the mobile application",
        "MobiLink — device management and management dashboard",
        "Alpha API — integration access as required for RevLink to operate",
      ],
      paragraphs: [
        "RevLink is licensed on a per-device basis. Each mobile device that connects to the system requires its own active subscription. Devices are activated and deactivated through MobiLink, giving administrators direct control over how many active licences are in use at any time.",
        "There is no additional charge for MobiLink or for the API access required by RevLink, regardless of the number of devices subscribed.",
      ],
      cta: { label: "Get in touch", href: "/#contact" },
    },
    details: [
      {
        title: "Scope of API access",
        intro: [
          "API access provided under the RevLink subscription is limited to the communication required between the RevLink mobile application and the customer's Revelation Accounting system.",
          "This subscription does not grant a general-purpose API licence. Customers who wish to integrate the Alpha API into their own applications, or use it independently of RevLink, require a separate Alpha API licence. Please contact us for details.",
        ],
      },
      {
        title: "Standalone Alpha API",
        intro: [
          "The Alpha API is available independently for businesses requiring a secure integration layer between their own systems. Pricing is quoted on request based on requirements.",
        ],
      },
      {
        title: "Services not included in the subscription",
        intro: [
          "The RevLink subscription covers software access only. It does not include on-site or technical setup work that may be required to prepare a customer's environment, such as:",
        ],
        items: [
          "Network and router configuration",
          "Firewall or port configuration",
          "Server-side setup or remote access provisioning",
        ],
        outro: [
          "Where EloTech is required to arrange this work through third-party IT contractors, those costs are quoted separately and billed independently of the subscription. Customers with their own internal IT support are welcome to have this work performed by their own team at no cost to them from EloTech.",
        ],
      },
    ] satisfies { title: string; intro: string[]; items?: string[]; outro?: string[] }[],
  },

  custom: {
    eyebrow: "Custom software development",
    heading: "Need something built around the way your business works?",
    paragraphs: [
      "Beyond our product suite, EloTech undertakes bespoke software development for clients requiring solutions tailored to their specific operational requirements, across mobile, desktop and web platforms.",
      "Enquiries for custom development are handled directly by our team — please get in touch to discuss your requirements.",
    ],
    cta: { label: "Get in touch", href: "/#contact" },
  },

  contact: {
    eyebrow: "Get in touch",
    heading: "Have a project in mind? Let's talk.",
    blurb:
      "Tell us a little about what you're building and we'll come back to you with honest advice on the best way forward — no obligation.",
    email: "support@elotech.co.za",
    phone: "011 578 1422",
    location: "12 Dagbreek Street, Glen Marais, Kempton Park, Gauteng, 1619",
    responseTime: "Support hours: 08:30 – 16:00, Monday to Friday",
  },

  footer: {
    blurb: "A software development house building clean, modern products for the real world.",
    legalLinks: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "RevLink Privacy Policy", href: "/revlink/privacy" },
      { label: "Refund Policy", href: "/refund" },
    ] satisfies NavLink[],
  },
} as const;

export type Site = typeof site;
