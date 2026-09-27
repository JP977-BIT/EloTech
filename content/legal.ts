/**
 * Legal documents: Terms & Conditions, Privacy Policy and Refund Policy.
 *
 * Edit the text here — the pages render whatever is in these objects.
 * Section headings are numbered automatically in order, so don't prefix them
 * with numbers. Remember to bump `lastUpdated` when the wording changes.
 * Paragraphs and list items support inline `**bold**` and `[label](href)` links.
 */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  slug: "terms" | "privacy" | "refund";
  title: string;
  description: string;
  /** The legal entity the document is issued by. */
  entity: string;
  /** Human-readable date shown on the page, e.g. "27 August 2026". */
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
};

const ENTITY = "EloTech Software Development (Pty) Ltd";
const REG_NUMBER = "2025/767551/07";
const ADDRESS = "12 Dagbreek Street, Glen Marais, Kempton Park, Gauteng, 1619";
const CONTACT_LINE = "support@elotech.co.za | 011 578 1422";

const p = (text: string): LegalBlock => ({ type: "p", text });
const h3 = (text: string): LegalBlock => ({ type: "h3", text });
const list = (...items: string[]): LegalBlock => ({ type: "list", items });

export const privacy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  description:
    "How EloTech Software Development (Pty) Ltd handles your personal information when you use RevLink, MobiLink and the Alpha API.",
  entity: ENTITY,
  lastUpdated: "27 September 2026",
  intro: [
    "This Privacy Policy explains how EloTech Software Development (Pty) Ltd (\"EloTech\", \"we\", \"us\" or \"our\") handles your personal information when you visit our website at www.elotechit.com or use the RevLink mobile application (\"RevLink\" or the \"App\"), the MobiLink desktop application, the Alpha API and related services (together, the \"Services\"). We are committed to protecting your privacy in line with the Protection of Personal Information Act 4 of 2013 (\"POPIA\").",
    "By using the Services you agree to the terms of this policy. Where we rely on your consent for specific processing, such as location tracking, that consent is obtained separately and may be withdrawn at any time.",
  ],
  sections: [
    {
      heading: "Who is responsible",
      blocks: [
        p(
          `EloTech Software Development (Pty) Ltd, registration number ${REG_NUMBER}, of ${ADDRESS}, South Africa, is the responsible party for the limited personal information we collect directly from you, such as support correspondence.`,
        ),
        p(
          "Where you use the Services as part of your employment or engagement with an organisation, that organisation is the responsible party for the business data and activity records processed through the Services, including accounting records, customer information and day-tracking information. EloTech acts as an operator on that organisation's behalf. Questions about how your employer collects and uses that information should be directed to your employer.",
        ),
        p("Our Information Officer can be contacted at support@elotech.co.za or 011 578 1422."),
      ],
    },
    {
      heading: "Where your data is stored",
      blocks: [
        p("The Services are designed so that your organisation's data remains under your organisation's control."),
        p(
          "Accounting records, quotes, orders, invoices, customer and creditor information, job records, user accounts and day-tracking records are stored on your organisation's own systems and infrastructure. The Alpha API acts as a secure connection between the App and those systems. EloTech does not host, store or retain copies of this data on its own servers.",
        ),
        p("Your organisation determines where its data resides, how long it is kept, and who within the organisation may access it."),
      ],
    },
    {
      heading: "Information we collect",
      blocks: [
        h3("Held by EloTech"),
        list("Support correspondence, where you contact us for assistance."),
        h3("Held on your organisation's systems, processed by the Services"),
        list(
          "Account and login details used to authenticate you.",
          "Device identifiers and licensing information used by MobiLink to activate, deactivate and manage authorised devices.",
          "Business and accounting data entered into or synchronised through the App.",
          "Location information, but only while a tracking day is active. See section 5.",
        ),
        h3("Held by our payment provider"),
        list(
          "Subscription and billing details, including contact details and payment information, are collected and held by Paddle.com as merchant of record. See section 7.",
        ),
        p(
          "The App does not send crash reports, error logs or analytics to any third-party service. We do not collect or store your payment card details.",
        ),
        p(
          "**Website visitors:** Our website does not use cookies, analytics or advertising, and does not ask you to register or submit personal information. If you contact us by email or phone, your details are used only to respond to you and are retained as support correspondence (see section 10). Our website hosting provider may process basic technical information, such as IP addresses, to deliver the site securely.",
        ),
      ],
    },
    {
      heading: "How we use your information and our lawful basis",
      blocks: [
        p("We use personal information to:"),
        list(
          "provide, maintain and support the Services;",
          "enable authentication and device licensing;",
          "respond to your support requests;",
          "help prevent fraud and misuse; and",
          "comply with our legal obligations.",
        ),
        p(
          "Our lawful bases include performing our agreement with you, your consent, our legitimate interests in operating and securing the Services, and compliance with the law.",
        ),
      ],
    },
    {
      heading: "Location information",
      blocks: [
        p("RevLink includes an optional day-tracking feature that uses your device's location."),
        h3("Why location is used"),
        p(
          "The feature helps field representatives record their working day for business purposes. When tracking is active, the App logs the key points of your day — where the day started, the stops you make, when you leave a stop, and where the day ended — so this activity can be recorded against your organisation's records. Location is not used for advertising and is never sold.",
        ),
        h3("Tracking is not always on — you start and stop it"),
        p(
          "The App does not track your location continuously or in the background by default. Tracking only runs while you have actively started a tracking day, and stops as soon as you end the day. You are always the one who turns it on and off. If you never start a tracking day, the App does not collect your location.",
        ),
        h3("Background use while a day is active"),
        p(
          "So that your day is recorded accurately even when your phone is locked or you are using other apps, tracking continues in the background for the duration of an active tracking day. While this is happening your device shows a visible indicator — a persistent notification on Android, and the location indicator on iOS — so it is always clear that tracking is in progress. Background location use stops the moment you end the day.",
        ),
        h3("What is collected"),
        p(
          "Location coordinates and the time at meaningful points in your day: the start of the day, arrivals at stops, departures, and the end of the day. A coordinate may be converted into an approximate street address to make the record easier to read. The App does not record a continuous trail of every position.",
        ),
        h3("Where it is stored and who sees it"),
        p(
          "Day-tracking records are stored on your organisation's systems and are visible to authorised management within your organisation. Your employer determines how these records are used and how long they are kept.",
        ),
        h3("Your control and choices"),
        p(
          "You control tracking by starting and ending a tracking day in the App. You may also decline or revoke the location permission at any time through your device settings, in which case the feature cannot record your location.",
        ),
      ],
    },
    {
      heading: "How we share your information",
      blocks: [
        p(
          "We share personal information only as needed to provide the Services: with our payment provider where you make a payment, and with your organisation where the Services form part of its business records. We may disclose information to authorities or professional advisers where required by law or to protect our rights. We do not sell your personal information.",
        ),
      ],
    },
    {
      heading: "Payment information",
      blocks: [
        p(
          "Our order process is conducted by our online reseller Paddle.com, which is the Merchant of Record for all our orders. Paddle handles payment, billing and related customer service. Your card and billing details are collected and held by Paddle under its own terms and privacy policy, in accordance with applicable payment card security standards. We receive confirmation of payment outcomes only, not your card details. Paddle's retention of your billing information is governed by Paddle's own privacy policy.",
        ),
      ],
    },
    {
      heading: "Security",
      blocks: [
        p(
          "We take reasonable technical and organisational measures to protect personal information against loss, damage and unauthorised access. Sensitive values stored on your device, such as credentials, are held in the platform's secure storage. Biometric authentication is handled entirely by your device's operating system and biometric data is never accessible to us.",
        ),
        p(
          "Access to company data through the Services is controlled by your organisation through MobiLink, which allows administrators to activate and deactivate individual devices.",
        ),
      ],
    },
    {
      heading: "Security compromises",
      blocks: [
        p(
          "Where there are reasonable grounds to believe that personal information under our control has been accessed or acquired by an unauthorised person, we will notify the Information Regulator and any affected person as soon as reasonably possible after discovering the compromise, in accordance with section 22 of POPIA. Where a compromise occurs on systems controlled by your organisation, that organisation is responsible for notification.",
        ),
      ],
    },
    {
      heading: "Retention",
      blocks: [
        p("Support correspondence is retained for two years from the date of the last communication, after which it is deleted."),
        p("We do not retain technical or usage logs."),
        p(
          "Business data, user accounts and day-tracking records are stored on your organisation's systems and retained according to your organisation's own practices, not ours.",
        ),
        p(
          "Subscription and billing records are retained by Paddle in accordance with Paddle's privacy policy and applicable financial record-keeping law.",
        ),
      ],
    },
    {
      heading: "Cross-border transfers",
      blocks: [
        p(
          "Because your organisation's data is stored on your organisation's own systems, it is not transferred outside South Africa by us. Where information held by our payment provider is processed outside South Africa, that provider is required to apply protections substantially similar to those required by POPIA.",
        ),
      ],
    },
    {
      heading: "Your rights",
      blocks: [
        p(
          "Subject to POPIA, you may request access to the personal information we hold about you, ask us to correct or delete it, object to certain processing, or withdraw consent, which may affect your ability to use the Services or particular features.",
        ),
        p(
          "To exercise these rights in respect of information we hold, contact our Information Officer at support@elotech.co.za. Where the request relates to business data, user accounts or day-tracking records held by your employer, please direct it to your employer. Where it relates to billing information, please contact Paddle at paddle.net.",
        ),
        p("You also have the right to lodge a complaint with the Information Regulator of South Africa."),
      ],
    },
    {
      heading: "Children",
      blocks: [
        p(
          "The Services are intended for business use by adults. They are not directed at children under 18, and we do not knowingly collect their personal information.",
        ),
      ],
    },
    {
      heading: "Changes to this policy",
      blocks: [
        p(
          "We may update this Privacy Policy from time to time. Material changes will be reflected in the \"Last updated\" date at the top of this page.",
        ),
      ],
    },
    {
      heading: "Contact us",
      blocks: [p(ENTITY), p(ADDRESS), p(CONTACT_LINE)],
    },
  ],
};

export const refund: LegalDoc = {
  slug: "refund",
  title: "Refund Policy",
  description: "EloTech's refund and cancellation policy for RevLink subscriptions.",
  entity: ENTITY,
  lastUpdated: "27 September 2026",
  intro: [
    "This Refund Policy sets out how cancellations and refunds are handled for RevLink subscriptions sold by EloTech Software Development (Pty) Ltd through our Merchant of Record, Paddle.com.",
  ],
  sections: [
    {
      heading: "Merchant of Record",
      blocks: [
        p(
          "Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service enquiries relating to payments and handles refunds.",
        ),
      ],
    },
    {
      heading: "Subscription basis",
      blocks: [
        p(
          "RevLink is sold as a recurring monthly subscription for each device, at R450 per device per month. Each device's subscription is purchased in the RevLink app on that device. Access is provided as soon as the subscription is active and the device has been authorised in MobiLink.",
        ),
      ],
    },
    {
      heading: "Non-refundable by default",
      blocks: [
        p(
          "Subscription charges are non-refundable. Once a monthly billing period has commenced and access has been provided, that period's charge is not refunded, whether or not the subscription is used during that period.",
        ),
        p(
          "Deactivating a device in MobiLink removes its access to your company's data but does not cancel its subscription and does not entitle the subscriber to a refund. To stop billing for a device, cancel that device's subscription.",
        ),
      ],
    },
    {
      heading: "Cancelling your subscription",
      blocks: [
        p(
          "You may cancel at any time. Cancellation takes effect at the end of the current billing period, after which no further payments will be taken. You retain access for the remainder of the period already paid for. Each device's subscription is cancelled separately.",
        ),
        p(
          "To cancel, contact us at support@elotech.co.za or 011 578 1422, or manage your subscription through Paddle at paddle.net.",
        ),
      ],
    },
    {
      heading: "Statutory rights",
      blocks: [
        p(
          "Nothing in this policy limits any rights you may have under applicable law, including the Consumer Protection Act 68 of 2008 and the Electronic Communications and Transactions Act 25 of 2002 in South Africa, or equivalent legislation in your jurisdiction. Where a statutory right to withdraw or obtain a refund applies, that right prevails over this policy.",
        ),
        p(
          "By subscribing and activating a device, you request immediate access to the Services and acknowledge that any statutory cooling-off period may be affected once access has been provided.",
        ),
      ],
    },
    {
      heading: "Requesting a refund",
      blocks: [
        p(
          "Because Paddle is the Merchant of Record, all refund requests must be directed to Paddle at paddle.net. Refunds are granted at Paddle's discretion and in accordance with Paddle's Refund Policy and Buyer Terms.",
        ),
      ],
    },
    {
      heading: "Service faults",
      blocks: [
        p(
          "Where the Services are materially unavailable due to a fault on our side, contact us at support@elotech.co.za. We will investigate and, where appropriate, support a refund or credit request with Paddle. This does not apply to interruptions caused by your own systems, network, hardware, or third-party software.",
        ),
      ],
    },
    {
      heading: "Contact",
      blocks: [
        p(ENTITY),
        p(ADDRESS),
        p(CONTACT_LINE),
        p("Support hours: 08:30 – 16:00, Monday to Friday"),
      ],
    },
  ],
};

export const terms: LegalDoc = {
  slug: "terms",
  title: "Terms and Conditions",
  description: "The terms and conditions governing use of RevLink, MobiLink and the Alpha API.",
  entity: ENTITY,
  lastUpdated: "27 September 2026",
  intro: [
    "These Terms and Conditions govern your use of the RevLink mobile application, the MobiLink desktop application, the Alpha API and related services (the \"Services\"), provided by EloTech Software Development (Pty) Ltd.",
  ],
  sections: [
    {
      heading: "About us and these terms",
      blocks: [
        p(
          `These Terms and Conditions govern your use of the RevLink mobile application, the MobiLink desktop application, the Alpha API and related services (the "Services"), provided by EloTech Software Development (Pty) Ltd, registration number ${REG_NUMBER}, a private company registered in the Republic of South Africa, of ${ADDRESS} ("EloTech", "we", "us", "our").`,
        ),
        p(
          "By subscribing to or using the Services you agree to these terms. If you are agreeing on behalf of an organisation, you confirm you are authorised to bind that organisation.",
        ),
      ],
    },
    {
      heading: "The Services",
      blocks: [
        list(
          "RevLink — a mobile application that integrates with your existing Revelation Accounting Software data, allowing quotes, sales orders, purchase orders, invoices, goods received notes, job quotes and job cards to be created and managed from a mobile device.",
          "MobiLink — a desktop application for activating and deactivating authorised devices and viewing management reporting.",
          "Alpha API — the integration layer enabling communication between RevLink and your systems.",
        ),
        p(
          "Access to MobiLink, and to the Alpha API to the extent required for RevLink to operate, is included in the RevLink subscription. The subscription does not grant a general-purpose licence to the Alpha API. Independent use of the Alpha API requires a separate agreement.",
        ),
      ],
    },
    {
      heading: "Requirements",
      blocks: [
        p(
          "The Services require a compatible, correctly licensed installation of Revelation Accounting Software and a suitable network configuration. You are responsible for ensuring your systems meet these requirements. We do not warrant that the Services will function where your environment is unsupported or misconfigured.",
        ),
      ],
    },
    {
      heading: "Fees and payment",
      blocks: [
        p(
          "RevLink is charged at R450 per device per month, excluding tax. Each device requires its own subscription, which is purchased in the RevLink app on that device. Subscriptions are not sold through MobiLink, the Alpha API or our website.",
        ),
        p(
          "Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders and sells the subscription to you. Paddle calculates, collects and remits any applicable tax, including VAT, which is shown at checkout. Paddle's Buyer Terms and Refund Policy apply to your purchase.",
        ),
        p(
          "Each subscription renews automatically every month until it is cancelled. A device can access your company's data only while it has an active subscription and is authorised in MobiLink. Deactivating a device in MobiLink does not cancel its subscription.",
        ),
        p("We may change our fees on 30 days' written notice. Continued use after the change takes effect constitutes acceptance."),
      ],
    },
    {
      heading: "Setup and additional services",
      blocks: [
        p(
          "The subscription covers software access only. It does not include network, router, firewall or server configuration work. Where such work is required and arranged by us through third-party contractors, it is quoted and invoiced separately. You may arrange for your own IT provider to perform this work instead.",
        ),
      ],
    },
    {
      heading: "Licence and restrictions",
      blocks: [
        p(
          "We grant you a non-exclusive, non-transferable, revocable licence to use the Services for your internal business purposes for the duration of your subscription.",
        ),
        p(
          "You may not: copy, modify, decompile or reverse-engineer the Services; resell, sublicense or provide the Services to third parties; use the Alpha API outside the scope permitted by your subscription; circumvent device activation controls; or use the Services unlawfully.",
        ),
      ],
    },
    {
      heading: "Your data",
      blocks: [
        p(
          "Your business data — including accounting records, customer information, user accounts and day-tracking records — is stored on your own systems. We do not host or retain copies of it.",
        ),
        p(
          "You are responsible for the security, backup and integrity of your systems. We are not liable for loss of data resulting from failure of your infrastructure.",
        ),
      ],
    },
    {
      heading: "Personal information and tracking",
      blocks: [
        p("Our handling of personal information is set out in our [Privacy Policy](/privacy)."),
        p(
          "Where the day-tracking feature is used, you are the responsible party under the Protection of Personal Information Act 4 of 2013 in respect of your employees' location and activity records. You are responsible for informing your employees, obtaining any necessary consent, and complying with POPIA and applicable employment law. EloTech acts as an operator on your instruction.",
        ),
        p("You indemnify us against claims arising from your failure to meet these obligations."),
      ],
    },
    {
      heading: "Availability and support",
      blocks: [
        p(
          "We aim to keep the Services available but do not warrant uninterrupted operation. Availability may be affected by maintenance, your own systems, or third-party services outside our control.",
        ),
        p(
          "Support is provided at support@elotech.co.za and 011 578 1422, 08:30 to 16:00, Monday to Friday, excluding South African public holidays.",
        ),
      ],
    },
    {
      heading: "Suspension and termination",
      blocks: [
        p("We may suspend or terminate access where fees are unpaid, where these terms are breached, or where use poses a security risk."),
        p(
          "You may cancel at any time; cancellation takes effect at the end of the current billing period. On termination your licence ends and devices are deactivated. Your data remains on your own systems and is unaffected.",
        ),
      ],
    },
    {
      heading: "Intellectual property",
      blocks: [
        p("All intellectual property in the Services remains ours. Nothing in these terms transfers ownership to you. Your data remains yours."),
      ],
    },
    {
      heading: "Liability",
      blocks: [
        p(
          "To the maximum extent permitted by law, we are not liable for indirect or consequential loss, loss of profit, business interruption, or loss of data.",
        ),
        p("Our total liability in any twelve-month period is limited to the subscription fees you paid to us in that period."),
        p(
          "Nothing in these terms limits liability for fraud, or for anything that cannot lawfully be excluded under South African law, including the Consumer Protection Act 68 of 2008 where it applies.",
        ),
      ],
    },
    {
      heading: "Changes to these terms",
      blocks: [
        p("We may update these terms. Material changes will be notified by email or in-app and reflected in the \"Last updated\" date."),
      ],
    },
    {
      heading: "Governing law",
      blocks: [
        p(
          "These terms are governed by the laws of the Republic of South Africa, and the parties submit to the jurisdiction of the South African courts.",
        ),
      ],
    },
    {
      heading: "Contact",
      blocks: [p(ENTITY), p(`Registration number ${REG_NUMBER}`), p(ADDRESS), p(CONTACT_LINE)],
    },
  ],
};
