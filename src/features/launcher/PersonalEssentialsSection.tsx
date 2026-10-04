import React, { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Briefcase,
  BookOpen,
  Heart,
  Smile,
  Wallet,
  TrendingDown,
  ShoppingBag,
  ShieldCheck,
  Dumbbell,
  Droplet,
  FileHeart,
  Activity,
  Scale,
  Moon,
  Sparkles,
  Vault,
  Shield,
  Award,
  Utensils,
  Package,
  AlertTriangle,
  RefreshCw,
  CalendarDays,
  ShoppingCart,
  Plane,
  Pocket,
  Luggage,
  Key,
  CloudSun,
  Calculator,
  Star,
  Layers,
  ChevronRight,
  ArrowRight,
  Search,
  ExternalLink,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Film,
  Gamepad2,
  Podcast,
  Music,
  Flame,
  HeartPulse,
  Pill,
  Palmtree,
  Car,
  Fuel,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { type NavItem } from "@/config/nav";

interface StandaloneFeature {
  title: string;
  to: string;
  icon: LucideIcon;
}

export interface StandaloneAppDef {
  id: string;
  to: string;
  title: string;
  subtitle: string;
  category: "personal" | "essentials" | "household";
  icon: LucideIcon;
  badge?: string;
  features?: StandaloneFeature[];
}

export const STANDALONE_REORGANIZED_APPS: StandaloneAppDef[] = [
  // 1. Personal (Standalone) + 11 Fitur
  {
    id: "personal",
    to: "/proyek-personal",
    title: "Personal",
    subtitle: "Pusat inisiatif mandiri, brankas identitas berenkripsi, brankas sandi kredensial, pembanding harga belanja, dan organizer saku.",
    category: "personal",
    icon: Briefcase,
    badge: "Standalone",
    features: [
      { title: "Personal Projects", to: "/proyek-personal", icon: Briefcase },
      { title: "Vault", to: "/vault", icon: Vault },
      { title: "ID Vault", to: "/vault?tab=ktp", icon: Shield },
      { title: "Certificate Vault", to: "/vault?tab=certificates", icon: Award },
      { title: "Passwords", to: "/passwords", icon: Key },
      { title: "Price Compare", to: "/wallet?tab=price-compare", icon: TrendingDown },
      { title: "Wishlist", to: "/wallet?tab=wishlist", icon: ShoppingBag },
      { title: "Warranty Receipts MVP", to: "/wallet?tab=warranty", icon: ShieldCheck },
      { title: "Pocket", to: "/pocket", icon: Pocket },
      { title: "Pouch", to: "/pouch", icon: ShoppingBag },
      { title: "Cash Book", to: "/wallet", icon: Wallet },
    ],
  },
  // 2. Wellbeing (Standalone) + 13 Fitur
  {
    id: "wellbeing",
    to: "/health",
    title: "Wellbeing",
    subtitle: "Pusat vitalitas eksekutif: pelacak kebiasaan streak, jurnal refleksi harian, rasa syukur, mood, kebugaran, hidrasi, rekam medis, biomarker, kualitas tidur, dan pengingat obat.",
    category: "personal",
    icon: Heart,
    badge: "Standalone",
    features: [
      { title: "Habit Tracker MVP", to: "/habit-tracker", icon: Flame },
      { title: "Daily Journal", to: "/journal", icon: BookOpen },
      { title: "Gratitude Journal", to: "/journal?tab=gratitude", icon: Heart },
      { title: "Mood Tracker MVP", to: "/journal?tab=mood", icon: Smile },
      { title: "Health Tracker", to: "/health", icon: Activity },
      { title: "Workouts", to: "/health?tab=workouts", icon: Dumbbell },
      { title: "Water Intake", to: "/health?tab=water", icon: Droplet },
      { title: "Medical Records", to: "/health?tab=medical-records", icon: FileHeart },
      { title: "Vitals Tracker", to: "/health?tab=vitals", icon: HeartPulse },
      { title: "Body Metrics", to: "/health?tab=body-metrics", icon: Scale },
      { title: "Sleep Quality MVP", to: "/health?tab=sleep", icon: Moon },
      { title: "Skincare Log", to: "/health?tab=skincare", icon: Sparkles },
      { title: "Med Reminder", to: "/lainnya?app=med-reminder", icon: Pill },
    ],
  },
  // 6. Recipes
  {
    id: "recipes",
    to: "/recipes",
    title: "Recipes",
    subtitle: "Kurasi nutrisi penunjang performa kognitif, inventaris bahan dapur, dan meal-prep.",
    category: "household",
    icon: Utensils,
    badge: "Standalone",
    features: [
      { title: "Pantry Inventory", to: "/recipes?tab=pantry", icon: Package },
      { title: "Cook Log", to: "/recipes?tab=cook-log", icon: BookOpen },
      { title: "Expiry Alert", to: "/recipes?tab=expiry", icon: AlertTriangle },
      { title: "Leftover Manager", to: "/recipes?tab=leftovers", icon: RefreshCw },
      { title: "Meal Planner", to: "/recipes?tab=meal-planner", icon: CalendarDays },
    ],
  },
  // 7. Shopping List
  {
    id: "shopping",
    to: "/shopping",
    title: "Shopping List",
    subtitle: "Daftar belanja kebutuhan pribadi, perlengkapan kerja, dan logistik nutrisi.",
    category: "essentials",
    icon: ShoppingCart,
    badge: "Standalone",
  },
  // Leisure (Standalone) + 6 Fitur
  {
    id: "leisure",
    to: "/trips",
    title: "Leisure",
    subtitle: "Pusat rekreasi dan hiburan eksekutif: perencana perjalanan, prakiraan cuaca, kurasi film, game pelepas penat, podcast audio, dan koleksi musik.",
    category: "household",
    icon: Palmtree,
    badge: "Standalone",
    features: [
      { title: "Trip Planner", to: "/trips", icon: Plane },
      { title: "Weather", to: "/weather", icon: CloudSun },
      { title: "Movies", to: "/movies", icon: Film },
      { title: "Games", to: "/games", icon: Gamepad2 },
      { title: "Podcasts", to: "/podcasts", icon: Podcast },
      { title: "Music", to: "/music", icon: Music },
    ],
  },
  // Mobility (Standalone) + 6 Fitur
  {
    id: "mobility",
    to: "/lainnya?app=vehicle-identity",
    title: "Mobility",
    subtitle: "Pusat manajemen armada kendaraan keluarga: buku registrasi BPKB/STNK, log konsumsi BBM, riwayat servis bengkel, siklus aus suku cadang, dan jadwal perpanjangan pajak.",
    category: "essentials",
    icon: Car,
    badge: "Standalone",
    features: [
      { title: "Vehicle Registry", to: "/lainnya?app=vehicle-identity", icon: Car },
      { title: "Fuel Log", to: "/lainnya?app=mileage-fuel", icon: Fuel },
      { title: "Service History", to: "/lainnya?app=vehicle-service", icon: Wrench },
      { title: "Parts Lifecycle", to: "/lainnya?app=parts-lifecycle", icon: RefreshCw },
      { title: "Vehicle Renewals", to: "/lainnya?app=vehicle-renewals", icon: ShieldCheck },
      { title: "Vehicle Logbook", to: "/lainnya?app=vehicle-logbook", icon: CalendarDays },
    ],
  },
  // 9. Trunk
  {
    id: "trunk",
    to: "/trunk",
    title: "Trunk",
    subtitle: "Gudang perkakas rumah tangga, inventaris alat musiman, dan penyimpanan bagasi.",
    category: "household",
    icon: Luggage,
    badge: "Standalone",
  },
  // 14. Utilities
  {
    id: "kalkulator",
    to: "/kalkulator",
    title: "Utilities",
    subtitle: "Alat hitung serbaguna ilmiah, konverter satuan, dan kalkulasi persentase kas.",
    category: "personal",
    icon: Calculator,
    badge: "Standalone",
  },
];

interface PersonalEssentialsSectionProps {
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

export type MainCategoryTab = "all" | "personal" | "essentials" | "household";

const PersonalFlipCard = ({
  app,
  isFav,
  toggleFavorite,
  gradient,
}: {
  app: StandaloneAppDef;
  isFav: boolean;
  toggleFavorite: (to: string) => void;
  gradient: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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
  const initialCount = 6;
  const displayFeatures = isExpanded
    ? app.features
    : app.features?.slice(0, initialCount);
  const hasMore = (app.features?.length || 0) > initialCount;

  return (
    <div className="w-full [perspective:1000px] min-h-[200px]">
      <motion.div
        className="relative w-full h-full min-h-[200px] [transform-style:preserve-3d]"
        animate={{
          rotateX: isFlipped && interactionConfig.axis === "x" ? 180 * interactionConfig.dir : 0,
          rotateY: isFlipped && interactionConfig.axis === "y" ? 180 * interactionConfig.dir : 0,
        }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
      >
        {/* Front Face */}
        <div className="w-full h-full rounded-2xl border border-border bg-card p-3.5 sm:p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-2.5 group [backface-visibility:hidden]">
          <div>
            {/* Header: Icon, Title & Standalone Badge */}
            <div className="flex items-start justify-between gap-3">
              <Link
                to={app.to}
                className="flex items-center gap-3 group/header min-w-0 flex-1 outline-none"
              >
                <div
                  className={`h-11 w-11 rounded-full flex items-center justify-center text-white shadow-xs shrink-0 ${gradient} group-hover/header:scale-105 transition-transform`}
                >
                  <Icon className="h-5 w-5 opacity-90 drop-shadow-sm" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-base text-foreground group-hover/header:text-primary transition-colors truncate">
                    {app.title}
                  </h4>
                  <span className="text-[11px] text-muted-foreground capitalize">
                    {app.category}
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

            {/* Sub-Features Chips (With compact view and internal scrolling) */}
            {app.features && app.features.length > 0 && (
              <div className="mt-2.5 pt-2 border-t border-border/60">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold tracking-wider text-muted-foreground">
                    Features ({app.features.length}):
                  </span>
                  {hasMore && (
                    <button
                      type="button"
                      onClick={() => setIsExpanded((prev) => !prev)}
                      className="text-[10px] font-semibold text-primary hover:underline flex items-center gap-0.5 cursor-pointer transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp size={11} />
                          <span>Ringkas</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown size={11} />
                          <span>+{app.features.length - initialCount} Semua</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                <div className="max-h-[140px] overflow-y-auto no-scrollbar pr-0.5">
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {displayFeatures?.map((feat: StandaloneFeature, idx: number) => {
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
                          className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted/60 hover:bg-primary/10 hover:text-primary text-[11px] font-medium text-foreground transition-all cursor-pointer border border-border/40 hover:border-primary/30 text-center"
                        >
                          <FeatIcon size={12} className="text-primary shrink-0" />
                          <span>{feat.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Quick Open Link */}
          <div className="border-t border-border/50 pt-2.5 flex items-center justify-end text-xs">
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

        {/* Back Face (Warna icon app + tombol kembali di ujung bawah kanan) */}
        <div
          className={`absolute inset-0 w-full h-full rounded-2xl ${gradient} p-4 shadow-lg border border-white/20 flex flex-col justify-end items-end overflow-hidden [backface-visibility:hidden]`}
          style={{
            transform:
              interactionConfig.axis === "x"
                ? `rotateX(${180 * interactionConfig.dir}deg)`
                : `rotateY(${180 * interactionConfig.dir}deg)`,
          }}
        >
          <button
            type="button"
            onClick={handleFlip}
            className="px-2.5 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 active:scale-95 text-white border border-white/25 text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-all shadow-2xs backdrop-blur-xs"
            title="Kembali"
          >
            <RotateCcw size={12} />
            <span className="text-[11px] font-medium">Kembali</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export function PersonalEssentialsSection({
  favorites,
  toggleFavorite,
  getGradient,
}: PersonalEssentialsSectionProps) {
  const [activeTab, setActiveTab] = useState<MainCategoryTab>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = useMemo(() => {
    return STANDALONE_REORGANIZED_APPS.filter((app) => {
      const matchCategory = activeTab === "all" || app.category === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        app.title.toLowerCase().includes(q) ||
        app.subtitle.toLowerCase().includes(q) ||
        app.features?.some((f) => f.title.toLowerCase().includes(q));
      return matchCategory && matchQuery;
    });
  }, [activeTab, searchQuery]);

  const countAll = STANDALONE_REORGANIZED_APPS.length;
  const countPersonal = STANDALONE_REORGANIZED_APPS.filter((a) => a.category === "personal").length;
  const countEssentials = STANDALONE_REORGANIZED_APPS.filter((a) => a.category === "essentials").length;
  const countHousehold = STANDALONE_REORGANIZED_APPS.filter((a) => a.category === "household").length;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Title & Description */}
      <div className="text-center mb-4 sm:mb-5">
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground/90 tracking-tight flex items-center justify-center gap-2">
          <span>Personal<span className="font-normal">,</span> Essentials<span className="font-normal">, and</span> Household</span>
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl mx-auto">
          14 Standalone Apps Terintegrasi — Ruang Hidup, Finansial, Kesehatan, Hunian, dan Esensial Mandiri.
        </p>
      </div>

      {/* Main Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 w-full mb-4 sm:mb-5">
        <button
          onClick={() => setActiveTab("all")}
          className={`shrink-0 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "all"
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <Layers className="size-4 shrink-0" />
          <span>Semua App</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "all"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {countAll}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("personal")}
          className={`shrink-0 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "personal"
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <Sparkles className="size-4 shrink-0" />
          <span>Personal</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "personal"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {countPersonal}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("essentials")}
          className={`shrink-0 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "essentials"
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <Wallet className="size-4 shrink-0" />
          <span>Essentials</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "essentials"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {countEssentials}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("household")}
          className={`shrink-0 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "household"
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <Utensils className="size-4 shrink-0" />
          <span>Household</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "household"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {countHousehold}
          </span>
        </button>
      </div>

      {/* Standalone Apps Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {filteredApps.map((app) => {
          const isFav = favorites.includes(app.to);
          const gradient = getGradient(app.title);

          return (
            <PersonalFlipCard
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
