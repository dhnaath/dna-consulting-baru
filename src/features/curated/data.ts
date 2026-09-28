export interface SubChapter {
  id: number;
  title: string;
  focus: string;
  example: string;
  [key: string]: any;
}

export interface Chapter {
  id: number;
  title: string;
  subtitle?: string;
  tagline?: string;
  description?: string;
  focus: string;
  example: string;
  subChapters: SubChapter[];
  [key: string]: any;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "1. Fondasi Bisnis & Model Nilai",
    subtitle: "Value Architecture",
    tagline: "Merumuskan model nilai yang tahan krisis",
    description: "Pemahaman proposisi nilai dan kebutuhan pasar target secara menyeluruh.",
    focus: "Pemahaman proposisi nilai dan kebutuhan pasar target",
    example: "Business Model Canvas (BMC) & Value Proposition Canvas",
    subChapters: [
      { id: 101, title: "Value Proposition", focus: "Kesesuaian masalah dan solusi", example: "Analisis Pain-Gain" },
      { id: 102, title: "Customer Segments", focus: "Penetapan profil audiens ideal", example: "B2B vs B2C Archetype" },
      { id: 103, title: "Revenue Streams", focus: "Struktur model monetisasi", example: "Subscription & Transactional" },
      { id: 104, title: "Key Resources", focus: "Sumber daya pokok operasional", example: "IP & Human Capital" },
      { id: 105, title: "Cost Structure", focus: "Struktur biaya tetap vs variabel", example: "Break-even Analysis" },
      { id: 106, title: "Channels", focus: "Saluran distribusi dan akuisisi", example: "Omnichannel Funnel" },
    ],
  },
  {
    id: 2,
    title: "2. Analisis Strategis & Pasar",
    subtitle: "Market Intelligence",
    tagline: "Membedah dinamika kompetisi dan keunggulan bersaing",
    description: "Mendiagnosis keunggulan kompetitif dan dinamika industri secara terukur.",
    focus: "Mendiagnosis keunggulan kompetitif dan dinamika industri",
    example: "SWOT, BCG Matrix, Porter 5 Forces, PESTEL",
    subChapters: [
      { id: 201, title: "Porter 5 Forces", focus: "Kekuatan tawar-menawar", example: "Supplier & Buyer Power" },
      { id: 202, title: "SWOT Matrix", focus: "Kekuatan internal vs ancaman", example: "TOWS Strategy" },
      { id: 203, title: "BCG Matrix", focus: "Portofolio produk", example: "Stars, Cash Cows, Dogs" },
      { id: 204, title: "PESTEL Analysis", focus: "Faktor makroekonomi", example: "Regulasi & Tren Teknologi" },
      { id: 205, title: "Blue Ocean", focus: "Diferensiasi pasar tanpa pesaing", example: "Strategy Canvas" },
      { id: 206, title: "Ansoff Matrix", focus: "Strategi penetrasi vs diversifikasi", example: "Market Expansion" },
    ],
  },
  {
    id: 3,
    title: "3. Perencanaan Keuangan & Valuasi",
    subtitle: "Financial Engineering",
    tagline: "Menjaga daya tahan kas dan memaksimalkan nilai ekuitas",
    description: "Ketahanan kas, proyeksi arus kas, dan pengembalian investasi strategis.",
    focus: "Ketahanan kas, proyeksi arus kas, dan pengembalian investasi",
    example: "DCF, LBO, ROIC, Capital Allocation, Unit Economics",
    subChapters: [
      { id: 301, title: "Unit Economics", focus: "LTV/CAC dan Gross Margin", example: "Payback Period" },
      { id: 302, title: "Cash Flow Forecasting", focus: "Likuiditas operasional 12-24 bulan", example: "Burn Rate & Runway" },
      { id: 303, title: "Capital Allocation", focus: "Efisiensi pengembalian modal", example: "ROIC vs WACC" },
      { id: 304, title: "Valuasi Kelayakan", focus: "Estimasi nilai pasar perusahaan", example: "Discounted Cash Flow" },
      { id: 305, title: "Risk Mitigation", focus: "Mitigasi solvabilitas & cadangan darurat", example: "Stress Testing" },
      { id: 306, title: "Dividen & Reinvestasi", focus: "Kebijakan pembagian hasil usaha", example: "Dividend Yield" },
    ],
  },
];
