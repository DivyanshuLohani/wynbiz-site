export const config = {
  site: {
    name: "Wynbiz",
    tagline: "Your Growth Partner for Marketing Excellence",
    description:
      "Helping businesses scale to franchise models with data-driven marketing strategies.",
    baseUrl: "https://wynbiz.in",
  },

  contact: {
    email: "contact@wynbiz.in",
    phone: "+91 86036 31409",
    address: "Kathal More, Ranchi",
    socials: {
      facebook: "https://facebook.com/wynbiz",
      instagram: "https://instagram.com/wynbiz",
      linkedin: "https://linkedin.com/company/wynbiz",
      twitter: "https://x.com/wynbiz",
    },
  },

  experience: {
    years: 3,
    summary:
      "3+ years in marketing, helping local businesses scale to franchise models. Worked with Panchakanya, Balaji Rice, and more.",
    highlights: ["Panchakanya", "Balaji Rice", "Other Local Brands"],
  },

  gallery: Array.from({ length: 29 }, (_, i) => `/images/${i + 1}.png`),
};

export function openWhatsapp() {
  window.open(
    `https://wa.me/${config.contact.phone
      .replace("+91 ", "91")
      .replaceAll(" ", "")}?text=Hello ${
      config.site.name
    }, I would like to know more about your services.`,
    "_blank"
  );
}
