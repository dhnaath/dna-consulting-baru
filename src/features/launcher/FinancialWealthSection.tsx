import React, { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Scale,
  Globe,
  Umbrella,
  Vault,
  Lock,
  CreditCard,
  ArrowRightLeft,
  Banknote,
  Receipt,
  Activity,
  Brain,
  Network,
  Briefcase,
  Landmark,
  BookOpen,
  PieChart,
  Zap,
  TrendingUp,
  RefreshCw,
  GraduationCap,
  Building,
  HeartHandshake,
  ReceiptText,
  Gift,
  Coins,
  DollarSign,
  ShoppingCart,
  Wallet,
  Home,
  ScrollText,
  Binary,
  Lightbulb,
  HeartPulse,
  LineChart,
  Package,
  Calculator,
  Key,
  Users,
  Star,
  Layers,
  ArrowRight,
  ShieldCheck,
  Heart,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";
import { type NavItem } from "@/config/nav";
import { WealthSpectrumPillView } from "./WealthSpectrumPillView";

export interface FinancialStandaloneFeature {
  title: string;
  to: string;
  icon: LucideIcon;
  desc?: string;
}

export interface StandaloneFinancialAppDef {
  id: string;
  to: string;
  title: string;
  subtitle: string;
  category: "surety" | "flow" | "build" | "grow" | "legacy";
  categoryLabel: string;
  icon: LucideIcon;
  badge?: string;
  isEmpty?: boolean;
  features?: FinancialStandaloneFeature[];
}

export const STANDALONE_FINANCIAL_APPS: StandaloneFinancialAppDef[] = [
  // ==========================================
  // PILAR 1: SURETY (KEPASTIAN & PROTEKSI)
  // ==========================================
  {
    id: "kepatuhan-hukum",
    to: "/surety?tab=cat_kepatuhan",
    title: "Legal Compliance",
    subtitle: "Kepatuhan legalitas keuangan perbankan, regulasi otoritas jasa keuangan, serta panduan syariah muamalah.",
    category: "surety",
    categoryLabel: "Pilar 1: Surety",
    icon: Scale,
    badge: "Standalone",
    features: [
      { title: "Panduan Syariah dan Muamalah", to: "/syariah", icon: HeartHandshake },
    ],
  },
  {
    id: "perlindungan-publik",
    to: "/surety?tab=cat_publik",
    title: "Public Protection",
    subtitle: "Sistem jaminan sosial nasional, perlindungan keselamatan publik, dan asuransi sosial dasar tenaga kerja.",
    category: "surety",
    categoryLabel: "Pilar 1: Surety",
    icon: Globe,
    badge: "Standalone",
    isEmpty: true,
    features: [],
  },
  {
    id: "asuransi-pribadi",
    to: "/surety?tab=cat_asuransi",
    title: "Private Insurance",
    subtitle: "Proteksi risiko kesehatan personal, penyakit kritis, dan akad takaful tolong-menolong berlandaskan syariah.",
    category: "surety",
    categoryLabel: "Pilar 1: Surety",
    icon: Umbrella,
    badge: "Standalone",
    features: [
      { title: "Akad Takaful", to: "/syariah/akad?app=takaful", icon: Users },
    ],
  },
  {
    id: "kecukupan-dana",
    to: "/surety?tab=cat_dana",
    title: "Fund Sufficiency",
    subtitle: "Fondasi cadangan dana darurat, buffer likuiditas operasional, dan pemeliharaan kas likuid tak terduga.",
    category: "surety",
    categoryLabel: "Pilar 1: Surety",
    icon: Vault,
    badge: "Standalone",
    features: [
      { title: "Liquid Reserves", to: "/liquid-reserves", icon: Coins },
    ],
  },
  {
    id: "proteksi-aset",
    to: "/surety?tab=cat_proteksi",
    title: "Asset Protection",
    subtitle: "Brankas terenkripsi dokumen fisik aset, akses sandi finansial aman, dan pengarsipan nota garansi belanja.",
    category: "surety",
    categoryLabel: "Pilar 1: Surety",
    icon: Lock,
    badge: "Standalone",
    features: [
      { title: "Vault", to: "/surety?tab=cat_proteksi&sub=vault", icon: Vault },
      { title: "Passwords", to: "/surety?tab=cat_proteksi&sub=passwords", icon: Key },
      { title: "Garansi dan Bukti Nota", to: "/wallet?tab=warranty", icon: ShieldCheck },
    ],
  },

  // ==========================================
  // PILAR 2: FLOW (ARUS KAS & LIABILITAS)
  // ==========================================
  {
    id: "beban-liabilitas",
    to: "/flow?tab=cat_liabilitas",
    title: "Burden Liability",
    subtitle: "Pengawasan kewajiban finansial jangka pendek dan panjang, pemetaan rasio utang, serta cicilan bulanan.",
    category: "flow",
    categoryLabel: "Pilar 2: Flow",
    icon: CreditCard,
    badge: "Standalone",
    features: [
      { title: "Kuadran Liabilitas", to: "/liability", icon: CreditCard },
    ],
  },
  {
    id: "pemasukan-pengeluaran",
    to: "/flow?tab=cat_pengeluaran",
    title: "Income-Expense",
    subtitle: "Monitoring komprehensif aliran pendapatan aktif/pasif serta tracking kuadran pengeluaran primer dan sekunder.",
    category: "flow",
    categoryLabel: "Pilar 2: Flow",
    icon: ArrowRightLeft,
    badge: "Standalone",
    features: [
      { title: "Kuadran Pendapatan", to: "/earning", icon: DollarSign },
      { title: "Kuadran Pengeluaran", to: "/expense", icon: ShoppingCart },
    ],
  },
  {
    id: "kas-kredit",
    to: "/flow?tab=cat_kredit",
    title: "Cash-Credit",
    subtitle: "Pengelolaan saldo kas harian, transaksi multi-wallet, serta kontrol limit kartu kredit dan pinjaman lunak.",
    category: "flow",
    categoryLabel: "Pilar 2: Flow",
    icon: Banknote,
    badge: "Standalone",
    features: [
      { title: "Wallet dan Kas", to: "/wallet", icon: Wallet },
      { title: "Kredit dan Utang", to: "/kredit", icon: CreditCard },
    ],
  },
  {
    id: "retribusi-kontribusi",
    to: "/flow?tab=cat_pajak",
    title: "Retribution-Contribution",
    subtitle: "Perhitungan estimasi pajak penghasilan pribadi (PPh 21 progresif), PTKP, dan kepatuhan kontribusi pajak resmi.",
    category: "flow",
    categoryLabel: "Pilar 2: Flow",
    icon: Receipt,
    badge: "Standalone",
    features: [
      { title: "Pajak Personal", to: "/pajak?app=pph21", icon: Calculator },
    ],
  },
  {
    id: "sistem-otomatisasi",
    to: "/flow?tab=cat_otomatisasi",
    title: "Automation System",
    subtitle: "Otomasi sistem alokasi anggaran bulanan dengan formula persentase 50/30/20 dan autodebet investasi rutin.",
    category: "flow",
    categoryLabel: "Pilar 2: Flow",
    icon: Activity,
    badge: "Standalone",
    features: [
      { title: "Budget", to: "/budget", icon: Wallet },
    ],
  },

  // ==========================================
  // PILAR 3: BUILD (AKUMULASI & PORTOFOLIO)
  // ==========================================
  {
    id: "modal-manusia",
    to: "/build?tab=cat_modal",
    title: "Human Capital",
    subtitle: "Valuasi kapasitas nilai keahlian diri, daya ungkit karier profesional, dan estimasi nilai kapital manusia.",
    category: "build",
    categoryLabel: "Pilar 3: Build",
    icon: Brain,
    badge: "Standalone",
    isEmpty: true,
    features: [],
  },
  {
    id: "jaringan",
    to: "/build?tab=cat_jaringan",
    title: "Net-Work",
    subtitle: "Pusat relasi kemitraan bisnis penghasil omset dan direktori kontak spesialis keuangan, banker, serta akuntan.",
    category: "build",
    categoryLabel: "Pilar 3: Build",
    icon: Network,
    badge: "Standalone",
    features: [
      { title: "Klien dan Partner", to: "/build?tab=cat_jaringan&sub=klien", icon: Briefcase },
      { title: "People Manager", to: "/build?tab=cat_jaringan&sub=people", icon: Users },
    ],
  },
  {
    id: "portofolio",
    to: "/build?tab=cat_portofolio",
    title: "Portfolio",
    subtitle: "Manajemen kepemilikan multi-aset: properti real estate, surat berharga saham/sukuk, aset digital, dan HKI.",
    category: "build",
    categoryLabel: "Pilar 3: Build",
    icon: Briefcase,
    badge: "Standalone",
    features: [
      { title: "Real Estate", to: "/real-estate", icon: Home },
      { title: "Paper Securities", to: "/paper-securities", icon: ScrollText },
      { title: "Digital Assets", to: "/digital-assets", icon: Binary },
      { title: "Intellectual Property", to: "/intellectual-property", icon: Lightbulb },
    ],
  },
  {
    id: "kekayaan-bersih",
    to: "/build?tab=cat_kekayaan",
    title: "Net-Worth",
    subtitle: "Perhitungan kalkulasi total net worth bersih dari seluruh kelas aset serta asesmen rasio kesehatan keuangan.",
    category: "build",
    categoryLabel: "Pilar 3: Build",
    icon: Landmark,
    badge: "Standalone",
    features: [
      { title: "Kuadran Aset", to: "/asset", icon: Briefcase },
      { title: "Kesehatan Finansial", to: "/financial-health", icon: HeartPulse },
    ],
  },
  {
    id: "pembukuan",
    to: "/build?tab=cat_pembukuan",
    title: "Book Entry",
    subtitle: "Sistem pembukuan neraca saldo aset personal, jurnal penyesuaian arus transaksi, dan pencatatan buku besar.",
    category: "build",
    categoryLabel: "Pilar 3: Build",
    icon: BookOpen,
    badge: "Standalone",
    isEmpty: true,
    features: [],
  },

  // ==========================================
  // PILAR 4: GROW (PERTUMBUHAN & INVESTASI)
  // ==========================================
  {
    id: "profil-risiko",
    to: "/grow?tab=cat_profil",
    title: "Risk Profiling",
    subtitle: "Diagnostik toleransi risiko investor (konservatif, moderat, agresif) serta horizon waktu pencapaian target modal.",
    category: "grow",
    categoryLabel: "Pilar 4: Grow",
    icon: Activity,
    badge: "Standalone",
    isEmpty: true,
    features: [],
  },
  {
    id: "alokasi",
    to: "/grow?tab=cat_alokasi",
    title: "Allocation",
    subtitle: "Strategi alokasi aset syariah melalui pasar muamalah fisik, indeks saham sharia, dan 100 komoditas riil dunia.",
    category: "grow",
    categoryLabel: "Pilar 4: Grow",
    icon: PieChart,
    badge: "Standalone",
    features: [
      { title: "Pasar Muamalah", to: "/syariah", icon: HeartHandshake },
      { title: "Indeks Sharia", to: "/syariah/indeks", icon: LineChart },
      { title: "100 Komoditas", to: "/100-komoditas", icon: Package },
    ],
  },
  {
    id: "efektif-efisien",
    to: "/grow?tab=cat_efektif",
    title: "Effective-Efficient",
    subtitle: "Pengurangan friction fee transaksi, rasio efisiensi pengelolaan instrumen, dan maksimalisasi net yield return.",
    category: "grow",
    categoryLabel: "Pilar 4: Grow",
    icon: Zap,
    badge: "Standalone",
    isEmpty: true,
    features: [],
  },
  {
    id: "bunga-berbunga",
    to: "/grow?tab=cat_bunga",
    title: "Compounding",
    subtitle: "Simulasi kekuatan bunga majemuk (compounding interest) dan kalkulator Return on Investment (ROI) berkala.",
    category: "grow",
    categoryLabel: "Pilar 4: Grow",
    icon: TrendingUp,
    badge: "Standalone",
    features: [
      { title: "Bunga Majemuk dan ROI", to: "/investasi?app=bunga-majemuk", icon: Calculator },
    ],
  },
  {
    id: "rebalancing-periodik",
    to: "/grow?tab=cat_rebalance",
    title: "Periodic Rebalancing",
    subtitle: "Penyesuaian periodik deviasi alokasi aset investasi agar tetap berada pada batas toleransi risiko yang optimal.",
    category: "grow",
    categoryLabel: "Pilar 4: Grow",
    icon: RefreshCw,
    badge: "Standalone",
    isEmpty: true,
    features: [],
  },

  // ==========================================
  // PILAR 5: LEGACY (WARISAN & FILANTROPI)
  // ==========================================
  {
    id: "pembelajaran-seumur-hidup",
    to: "/legacy?tab=cat_pembelajaran",
    title: "Lifelong Learning",
    subtitle: "Edukasi filosofi kekayaan keluarga, kurikulum literasi finansial antargenerasi, dan transfer nilai-nilai bijak.",
    category: "legacy",
    categoryLabel: "Pilar 5: Legacy",
    icon: GraduationCap,
    badge: "Standalone",
    isEmpty: true,
    features: [],
  },
  {
    id: "valuasi-mappi",
    to: "/valuasi",
    title: "Valuasi MAPPI",
    subtitle: "Standar Penilaian Indonesia (SPI) terakreditasi: penilaian properti komersial/residensial, valuasi entitas bisnis, dan opini nilai wajar aset.",
    category: "legacy",
    categoryLabel: "Pilar 5: Legacy",
    icon: Building,
    badge: "Standalone",
    features: [
      { title: "Penilaian Properti (Market & Cost)", to: "/valuasi", icon: Building },
      { title: "Penilaian Bisnis (Income DCF)", to: "/valuasi", icon: Briefcase },
      { title: "Good Governance", to: "/legacy?tab=cat_tatakelola", icon: Scale },
    ],
  },
  {
    id: "tata-kelola-yang-baik",
    to: "/legacy?tab=cat_tatakelola",
    title: "Good Governance",
    subtitle: "Tata kelola legalitas aset keluarga dan sertifikasi nilai pasar independen sesuai standar penilaian MAPPI.",
    category: "legacy",
    categoryLabel: "Pilar 5: Legacy",
    icon: Scale,
    badge: "Standalone",
    features: [
      { title: "Valuasi MAPPI", to: "/valuasi", icon: Building },
    ],
  },
  {
    id: "kontribusi-amal",
    to: "/legacy?tab=cat_amal",
    title: "Charitable Concern",
    subtitle: "Penyaluran zakat dan sedekah terstruktur, pelacak donasi infaq kemanusiaan, serta pencatatan relawan sosial.",
    category: "legacy",
    categoryLabel: "Pilar 5: Legacy",
    icon: HeartHandshake,
    badge: "Standalone",
    features: [
      { title: "Zakat dan Sedekah", to: "/legacy?tab=cat_amal&sub=zakat", icon: Coins },
      { title: "Catatan Infaq dan Donasi", to: "/lainnya?app=donation-tracker", icon: Coins },
      { title: "Relawan dan Bakti Sosial", to: "/lainnya?app=volunteer-log", icon: Heart },
    ],
  },
  {
    id: "likuidasi-kewajiban",
    to: "/legacy?tab=cat_likuidasi",
    title: "Liability Liquidation",
    subtitle: "Prosedur penutupan dan pelunasan seluruh sisa kewajiban hutang piutang sebelum transisi pembagian warisan aset.",
    category: "legacy",
    categoryLabel: "Pilar 5: Legacy",
    icon: ReceiptText,
    badge: "Standalone",
    features: [
      { title: "Kredit dan Utang", to: "/kredit", icon: CreditCard },
    ],
  },
  {
    id: "transfer-kekayaan",
    to: "/legacy?tab=cat_transfer",
    title: "Wealth Transfer",
    subtitle: "Perencanaan suksesi peralihan portofolio aset, pembagian hak waris, dan pemindahan hak milik bebas sengketa.",
    category: "legacy",
    categoryLabel: "Pilar 5: Legacy",
    icon: Gift,
    badge: "Standalone",
    features: [
      { title: "Portfolio", to: "/build?tab=cat_portofolio", icon: Briefcase },
    ],
  },
];

interface FinancialWealthSectionProps {
  isActive?: boolean;
  page?: {
    title: string;
    subCategories: { title: string; rawItems: NavItem[] }[];
  };
  favorites: string[];
  toggleFavorite: (to: string) => void;
  setActiveFolder?: (folder: any) => void;
  getGradient: (name: string) => string;
  FolderTile?: any;
}

export type FinancialCategoryTab = "all" | "spectrum";

const FinancialFlipCard = ({
  app,
  isFav,
  toggleFavorite,
  gradient,
}: {
  app: StandaloneFinancialAppDef;
  isFav: boolean;
  toggleFavorite: (to: string) => void;
  gradient: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [interactionConfig, setInteractionConfig] = useState(() => ({
    axis: Math.random() > 0.5 ? "x" : "y",
    dir: Math.random() > 0.5 ? 1 : -1,
  }));

  const handleFlip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setInteractionConfig((prev) => {
      let nextAxis = prev.axis;
      let nextDir = prev.dir;
      while (nextAxis === prev.axis && nextDir === prev.dir) {
        nextAxis = Math.random() > 0.5 ? "x" : "y";
        nextDir = Math.random() > 0.5 ? 1 : -1;
      }
      return { axis: nextAxis, dir: nextDir };
    });
    setIsFlipped((prev) => !prev);
  };

  const Icon = app.icon;

  return (
    <div className="w-full [perspective:1000px] min-h-[300px]">
      <motion.div
        className="relative w-full h-full min-h-[300px] [transform-style:preserve-3d]"
        animate={{
          rotateX: isFlipped && interactionConfig.axis === "x" ? 180 * interactionConfig.dir : 0,
          rotateY: isFlipped && interactionConfig.axis === "y" ? 180 * interactionConfig.dir : 0,
        }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
      >
        {/* Front Face */}
        <div className="w-full h-full rounded-2xl border border-border bg-card p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-4 group [backface-visibility:hidden]">
          <div>
            {/* Header: Icon, Title & Standalone Badge */}
            <div className="flex items-start justify-between gap-3">
              <Link
                to={app.to}
                className="flex items-center gap-3.5 group/header min-w-0 flex-1 outline-none"
              >
                <div
                  className={`h-12 w-12 rounded-full flex items-center justify-center text-white shadow-xs shrink-0 ${gradient} group-hover/header:scale-105 transition-transform`}
                >
                  <Icon className="h-6 w-6 opacity-90 drop-shadow-sm" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-base text-foreground group-hover/header:text-primary transition-colors truncate">
                    {app.title}
                  </h4>
                  <span className="text-[11px] text-muted-foreground capitalize">
                    {app.categoryLabel}
                  </span>
                </div>
              </Link>

              {/* Favorite Button */}
              <button
                type="button"
                onClick={() => toggleFavorite(app.to)}
                className={`p-1.5 rounded-xl border transition-all cursor-pointer active:scale-95 ${
                  isFav
                    ? "border-amber-400/50 bg-amber-400/10 text-amber-400 shadow-xs"
                    : "border-border/60 hover:border-amber-400/30 hover:bg-muted/60 text-muted-foreground hover:text-amber-400"
                }`}
                title={isFav ? "Hapus dari Favorit Dock" : "Tambah ke Favorit Dock (Maksimal 5)"}
                aria-label={isFav ? `Hapus ${app.title} dari favorit` : `Tambahkan ${app.title} ke favorit dock`}
              >
                <Star
                  className={`size-4 transition-transform ${
                    isFav ? "fill-amber-400 text-amber-400 scale-110" : ""
                  }`}
                />
              </button>
            </div>

            {/* Sub-Features Chips (If any) */}
            {app.features && app.features.length > 0 ? (
              <div className="mt-3 pt-3 border-t border-border/60">
                <span className="text-[10px] font-bold tracking-wider text-muted-foreground block mb-2">
                  Features ({app.features.length}):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {app.features.map((feat, idx) => {
                    const FeatIcon = feat.icon;
                    const featPath = feat.to.split("?")[0];
                    const featSearch = feat.to.includes("?")
                      ? Object.fromEntries(new URLSearchParams(feat.to.split("?")[1]))
                      : undefined;

                    return (
                      <Link
                        key={idx}
                        to={featPath}
                        search={featSearch as any}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted/60 hover:bg-primary/10 hover:text-primary text-[11px] font-medium text-foreground transition-all cursor-pointer border border-border/40 hover:border-primary/30"
                      >
                        <FeatIcon size={12} className="text-primary shrink-0" />
                        <span>{feat.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="mt-4 pt-3 border-t border-border/60">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted/40 text-[11px] font-medium text-muted-foreground border border-dashed border-border/60">
                  <span>Belum Ada Isi</span>
                </span>
              </div>
            )}
          </div>

          {/* Bottom Quick Open Link */}
          <div className="border-t border-border/50 pt-3 flex items-center justify-end text-xs">
            <button
              type="button"
              onClick={handleFlip}
              className="px-2.5 py-1 rounded-lg border border-border/70 hover:bg-muted text-muted-foreground hover:text-foreground text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
              title="Lihat Related"
            >
              <span className="text-[11px]">Related</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl border border-primary/40 bg-card p-5 shadow-md flex flex-col justify-between gap-3 overflow-hidden [backface-visibility:hidden]"
          style={{
            transform:
              interactionConfig.axis === "x"
                ? `rotateX(${180 * interactionConfig.dir}deg)`
                : `rotateY(${180 * interactionConfig.dir}deg)`,
          }}
        >
          <div>
            {/* Header Back Face */}
            <div className="flex items-center gap-2.5 pb-3 border-b border-border/60 min-w-0">
              <div
                className={`size-8 rounded-full flex items-center justify-center text-white shrink-0 ${gradient}`}
              >
                <Icon className="size-4" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <h5 className="font-bold text-sm text-foreground truncate">
                  Related
                </h5>
                <p className="text-[11px] text-muted-foreground truncate">
                  {app.title}
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-3 overflow-y-auto max-h-[175px] pr-1 space-y-1.5 [scrollbar-width:thin]">
              {app.features && app.features.length > 0 ? (
                app.features.map((feat, idx) => {
                  const FeatIcon = feat.icon;
                  const featPath = feat.to.split("?")[0];
                  const featSearch = feat.to.includes("?")
                    ? Object.fromEntries(new URLSearchParams(feat.to.split("?")[1]))
                    : undefined;

                  return (
                    <Link
                      key={idx}
                      to={featPath}
                      search={featSearch as any}
                      className="flex items-center justify-between px-2.5 py-2 rounded-lg border border-border/70 hover:bg-muted text-muted-foreground hover:text-foreground text-xs font-medium transition-colors shadow-2xs group/item"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <FeatIcon size={13} className="text-muted-foreground group-hover/item:text-foreground transition-colors shrink-0" />
                        <span className="truncate">
                          {feat.title}
                        </span>
                      </div>
                      <ArrowRight size={12} className="text-muted-foreground group-hover/item:text-foreground group-hover/item:translate-x-0.5 transition-all shrink-0 ml-1" />
                    </Link>
                  );
                })
              ) : (
                <div className="py-8 text-center text-xs text-muted-foreground">
                  Belum ada instrumen terkait
                </div>
              )}
            </div>
          </div>

          {/* Footer Back Face */}
          <div className="border-t border-border/50 pt-2.5 flex items-center justify-end text-xs">
            <button
              type="button"
              onClick={handleFlip}
              className="px-2.5 py-1 rounded-lg border border-border/70 hover:bg-muted text-muted-foreground hover:text-foreground text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
              title="Putar balik"
            >
              <RotateCcw size={12} />
              <span className="text-[11px]">Kembali</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function FinancialWealthSection({
  favorites,
  toggleFavorite,
  getGradient,
}: FinancialWealthSectionProps) {
  const [activeTab, setActiveTab] = useState<FinancialCategoryTab>("all");
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

  const filteredApps = useMemo(() => {
    if (activeTab === "all" && !selectedPillar) {
      return STANDALONE_FINANCIAL_APPS;
    }
    if (selectedPillar) {
      return STANDALONE_FINANCIAL_APPS.filter((app) => app.category === selectedPillar);
    }
    return STANDALONE_FINANCIAL_APPS;
  }, [activeTab, selectedPillar]);

  const countAll = STANDALONE_FINANCIAL_APPS.length;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Title & Description */}
      <div className="text-center mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground/90 tracking-tight flex items-center justify-center gap-2">
          <span>Financial Planning <span className="font-normal">&</span> Wealth Management</span>
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 max-w-2xl mx-auto">
          25 Standalone Apps Terintegrasi — Arsitektur 5 Pilar: Surety (Kepastian), Flow (Arus Kas), Build (Akumulasi), Grow (Pertumbuhan), dan Legacy (Warisan).
        </p>
      </div>

      {/* Main Filter Tabs: Semua App & Wealth Spectrum */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 w-full mb-6">
        <button
          onClick={() => {
            setActiveTab("all");
            setSelectedPillar(null);
          }}
          className={`shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "all" && !selectedPillar
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <Layers className="size-4 shrink-0" />
          <span>Semua App</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "all" && !selectedPillar
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {countAll}
          </span>
        </button>

        <button
          onClick={() => {
            setActiveTab("spectrum");
          }}
          className={`shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "spectrum" || selectedPillar
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <ShieldCheck className="size-4 shrink-0 text-emerald-500" />
          <span>Wealth Spectrum</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "spectrum" || selectedPillar
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {selectedPillar ? selectedPillar.toUpperCase() : "5 Tahapan"}
          </span>
        </button>
      </div>

      {/* Kotak-kotak 5 Tahapan Deskripsi (Surety, Flow, Build, Grow, Legacy) Tetap Dimunculkan */}
      <WealthSpectrumPillView
        selectedFilter={selectedPillar || undefined}
        onSelectFilter={(cat) => {
          setSelectedPillar(cat);
          if (cat) {
            setActiveTab("spectrum");
          }
        }}
      />

      {/* Standalone Apps Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredApps.map((app) => {
          const isFav = favorites.includes(app.to);
          const gradient = getGradient(app.title);

          return (
            <FinancialFlipCard
              key={app.id}
              app={app}
              isFav={isFav}
              toggleFavorite={toggleFavorite}
              gradient={gradient}
            />
          );
        })}
      </div>
    </div>
  );
}
