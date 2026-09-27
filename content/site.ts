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
  tagline: "Mobile quotes and orders for Revelation Accounting",
  description:
    "RevLink, MobiLink and the Alpha API: mobile quotes, orders and stock for businesses running Revelation Accounting Software, with device control included.",
  url: "https://www.elotechit.com",
  locale: "en_ZA",

  nav: [
    { label: "About", href: "/#about" },
    { label: "Products", href: "/#products" },
    { label: "Pricing", href: "/revlink#pricing" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavLink[],

  hero: {
    eyebrow: "RevLink for Revelation Accounting Software",
    headline: "Your Revelation Accounting data, wherever your team works.",
    subheadline:
      "RevLink puts quotes, orders and stock in your field team's hands, with MobiLink device control and the Alpha API included in every subscription.",
    primaryCta: { label: "See pricing", href: "/revlink#pricing" },
    secondaryCta: { label: "Explore RevLink", href: "/revlink" },
  },

  about: {
    heading: "About EloTech",
    paragraphs: [
      "EloTech Software Development (Pty) Ltd builds and supports RevLink, MobiLink and the Alpha API: a connected software suite that gives businesses running Revelation Accounting Software access to their data from the field, with full control over which devices can reach it. EloTech is a sister company of Revelation Accounting Software. Your business data stays on your own systems. Our software connects to it securely rather than storing a copy.",
    ],
  },

  products: {
    eyebrow: "Products",
    heading: "Our product suite.",
    lede: "Three components that work together as one system. Every RevLink subscription includes MobiLink and the Alpha API access RevLink needs.",
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
    primaryCta: { label: "How to subscribe", href: "#subscribe" },
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
      unit: "per device, per month, excluding tax",
      includes: [
        "RevLink — the mobile application",
        "MobiLink — device management and management dashboard",
        "Alpha API — integration access as required for RevLink to operate",
      ],
      paragraphs: [
        "RevLink is licensed per device. Each device has its own subscription, bought in the RevLink app on that device. Administrators control which devices can access company data through MobiLink.",
        "There is no additional charge for MobiLink or for the API access required by RevLink, regardless of the number of devices subscribed.",
      ],
      cta: { label: "How to subscribe", href: "#subscribe" },
      /** Billing terms shown directly under the plan card. */
      notes: [
        "Billed monthly, per device. Each subscription renews automatically until cancelled. Cancel anytime; cancellation takes effect at the end of the current billing period. Requires an existing, licensed installation of Revelation Accounting Software.",
        "Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders.",
      ],
    },
    details: [
      {
        title: "Scope of API access",
        intro: [
          "API access provided under the RevLink subscription is limited to the communication required between the RevLink mobile application and the customer's Revelation Accounting system.",
          "This subscription does not grant a general-purpose API licence. Any other use of the Alpha API requires a separate written agreement with EloTech.",
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

  /**
   * "How to subscribe" section on /revlink, shown after pricing.
   * `needs` and `outro` support inline `**bold**` and `[label](href)` links.
   */
  subscribe: {
    heading: "How to subscribe",
    lede: "RevLink subscriptions are bought and paid for only inside the RevLink app, one device at a time.",
    needsIntro: "Each device needs two things before it can reach your company's data:",
    needs: [
      "**An active RevLink subscription.** Install RevLink on the device and subscribe in the app for R450 per month, excluding tax. Payment is handled securely by Paddle.com, our Merchant of Record. You'll be asked to accept our [Terms & Conditions](/terms) and [Refund Policy](/refund) before you pay.",
      "**Authorisation in MobiLink.** Your administrator approves the device in MobiLink on the desktop.",
    ],
    outro:
      "Each device's subscription is managed and cancelled separately, at [paddle.net](https://paddle.net) or by contacting us. Deactivating a device in MobiLink removes its access but does not cancel its subscription.",
    cta: {
      label: "Get RevLink on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.revelation.rev_mobile",
    },
  },

  custom: {
    eyebrow: "Custom software development",
    heading: "Need something built around the way your business works?",
    paragraphs: [
      "Beyond our product suite, EloTech undertakes bespoke software development for clients requiring solutions tailored to their specific operational requirements, across mobile, desktop and web platforms.",
      "Enquiries for custom development are handled directly by our team — please get in touch to discuss your requirements. Custom development is quoted and invoiced separately. It is not sold through this website or the RevLink app.",
    ],
    cta: { label: "Get in touch", href: "/#contact" },
  },

  contact: {
    eyebrow: "Get in touch",
    heading: "Questions about RevLink? Talk to us.",
    blurb: "Speak to our team about getting set up, your subscription, or support.",
    email: "support@elotech.co.za",
    phone: "011 578 1422",
    location: "12 Dagbreek Street, Glen Marais, Kempton Park, Gauteng, 1619",
    responseTime: "Support hours: 08:30 – 16:00, Monday to Friday",
  },

  footer: {
    blurb: "RevLink, MobiLink and the Alpha API for businesses running Revelation Accounting Software.",
    legalLinks: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund Policy", href: "/refund" },
    ] satisfies NavLink[],
  },
} as const;

export type Site = typeof site;
