import React, { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Briefcase,
  Users,
  Home,
  Coins,
  Building2,
  GitFork,
  Scale,
  Archive,
  HeartHandshake,
  Network,
  PhoneCall,
  ArrowRightLeft,
  Gift,
  PartyPopper,
  CalendarDays,
  Megaphone,
  CreditCard,
  ScrollText,
  Compass,
  FileCheck,
  Receipt,
  Heart,
  Star,
  Layers,
  ArrowRight,
  Search,
  RotateCcw,
  ShieldAlert,
  Car,
  ShoppingBag,
  FileBarChart,
  Clock,
  CalendarCheck,
  UserCheck,
  ThumbsUp,
  Award,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";
import { type NavItem } from "@/config/nav";

interface StandaloneFeature {
  title: string;
  to: string;
  icon: LucideIcon;
}

export type PeopleCategoryTab =
  | "all"
  | "kemitraan"
  | "keluarga"
  | "komunitas"
  | "sosial";

export interface StandalonePeopleAppDef {
  id: string;
  to: string;
  title: string;
  subtitle: string;
  category: "kemitraan" | "keluarga" | "komunitas" | "sosial";
  categoryLabel: string;
  icon: LucideIcon;
  badge?: string;
  features?: StandaloneFeature[];
}

export const STANDALONE_PEOPLE_APPS: StandalonePeopleAppDef[] = [
  // 1. Customer (Standalone) + 12 Fitur
  {
    id: "customer",
    to: "/klien",
    title: "Customer",
    subtitle:
      "Pusat manajemen siklus hubungan klien & pelanggan: direktori klien, portal kolaborasi, pesanan jasa, kontak CRM, laporan kustom, antrean loket, booking jadwal sesi, buku tamu, survei kepuasan CSAT, reward loyalitas, dan histori interaksi.",
    category: "kemitraan",
    categoryLabel: "Kemitraan & Bisnis",
    icon: Briefcase,
    badge: "Standalone",
    features: [
      { title: "Clients Directory", to: "/klien", icon: Briefcase },
      { title: "Collab Portal", to: "/portal", icon: Building2 },
      { title: "Client Orders", to: "/lainnya?app=client-orders", icon: ShoppingBag },
      { title: "Contacts CRM", to: "/contacts", icon: Users },
      { title: "Custom Reports", to: "/lainnya?app=custom-reports", icon: FileBarChart },
      { title: "Queue Line", to: "/lainnya?app=queue-line", icon: Clock },
      { title: "Book Slot", to: "/lainnya?app=book-slot", icon: CalendarCheck },
      { title: "Visitor Log", to: "/lainnya?app=visitor-log", icon: UserCheck },
      { title: "Feedback Loop", to: "/lainnya?app=feedback-loop", icon: ThumbsUp },
      { title: "Loyalty Point", to: "/lainnya?app=loyalty-point", icon: Award },
      { title: "Client Messages", to: "/portal/pesan", icon: MessagesSquare },
      { title: "Interaction Manager", to: "/interaction-manager", icon: Network },
    ],
  },

  // 2. Family (Standalone) + 15 Fitur
  {
    id: "family",
    to: "/people-manager",
    title: "Family",
    subtitle:
      "Pusat tata kelola keluarga besar: silsilah garis keturunan, aturan rumah tangga, arsip memori, profil medis, siaga darurat, lingkaran relasi, musyawarah agenda, pinjam barang, hadiah kerabat, reuni, dan rencana carpool.",
    category: "keluarga",
    categoryLabel: "Keluarga & Relasi",
    icon: Users,
    badge: "Standalone",
    features: [
      { title: "Family Tree", to: "/lainnya?app=family-tree", icon: GitFork },
      { title: "House Rules", to: "/lainnya?app=family-rules", icon: Scale },
      { title: "Family Archive", to: "/lainnya?app=family-archive", icon: Archive },
      { title: "Medical Profile", to: "/lainnya?app=medical-family", icon: HeartHandshake },
      { title: "Disaster Prep", to: "/lainnya?app=disaster-prep", icon: ShieldAlert },
      { title: "Emergency Contacts", to: "/lainnya?app=emergency-hub", icon: PhoneCall },
      { title: "Relation Circles", to: "/lainnya?app=circle-groups", icon: Network },
      { title: "Catchup Reminder", to: "/lainnya?app=catchup-cadence", icon: PhoneCall },
      { title: "Meeting Timeline", to: "/lainnya?app=meeting-timeline", icon: CalendarDays },
      { title: "Borrow Log MVP", to: "/lainnya?app=borrowed-items", icon: ArrowRightLeft },
      { title: "Gift Tracker", to: "/lainnya?app=gift-tracker", icon: Gift },
      { title: "Reunion Planner", to: "/lainnya?app=reunion-planner", icon: PartyPopper },
      { title: "Anniversary Tracker", to: "/lainnya?app=family-anniversary", icon: CalendarDays },
      { title: "Carpool Plan", to: "/lainnya?app=carpool-plan", icon: Car },
      { title: "People Manager", to: "/people-manager", icon: Users },
    ],
  },

  // 3. Community (Standalone) + 14 Fitur
  {
    id: "community",
    to: "/komunitas-warga",
    title: "Community",
    subtitle:
      "Pusat kebersamaan warga pemukiman, kepatuhan sipil, dan filantropi sosial: buku warga RT/RW, papan pengumuman warga, kartu anggota, notula musyawarah warga, panduan faskes/layanan publik, kalender sipil, hisab zakat amal, donasi sedekah, dan kerelawanan.",
    category: "komunitas",
    categoryLabel: "Komunitas & Publik",
    icon: Home,
    badge: "Standalone",
    features: [
      { title: "Neighbor Directory", to: "/lainnya?app=rt-rw-directory", icon: Users },
      { title: "Community Board", to: "/lainnya?app=community-announcements", icon: Megaphone },
      { title: "Membership Card", to: "/lainnya?app=membership-card", icon: CreditCard },
      { title: "Meeting Resolutions", to: "/lainnya?app=meeting-resolutions", icon: ScrollText },
      { title: "Services Guide", to: "/lainnya?app=public-services-guide", icon: Compass },
      { title: "Civic Calendar", to: "/lainnya?app=civic-calendar", icon: CalendarDays },
      { title: "Civil Registry", to: "/lainnya?app=civil-registry", icon: FileCheck },
      { title: "Civic Tax", to: "/lainnya?app=tax-civic", icon: Receipt },
      { title: "Giving", to: "/zakat", icon: Coins },
      { title: "Donation Log MVP", to: "/lainnya?app=donation-tracker", icon: Coins },
      { title: "Volunteer Log MVP", to: "/lainnya?app=volunteer-log", icon: Heart },
      { title: "Neighbor Community", to: "/komunitas-warga", icon: Home },
      { title: "Civic Compliance", to: "/lainnya?app=civic-compliance", icon: Scale },
      { title: "Social Impact", to: "/lainnya?app=social-impact", icon: HeartHandshake },
    ],
  },
];

interface PeopleFamilySocietySectionProps {
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

const PeopleFlipCard = ({
  app,
  isFav,
  toggleFavorite,
  gradient,
}: {
  app: StandalonePeopleAppDef;
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
            {app.features && app.features.length > 0 && (
              <div className="mt-3 pt-3 border-t border-border/60">
                <span className="text-[10px] font-bold tracking-wider text-muted-foreground block mb-2 text-center">
                  Features ({app.features.length}):
                </span>
                <div className="flex flex-wrap justify-center gap-1.5">
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
                        className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted/60 hover:bg-primary/10 hover:text-primary text-[11px] font-medium text-foreground transition-all cursor-pointer border border-border/40 hover:border-primary/30 text-center"
                      >
                        <FeatIcon size={12} className="text-primary shrink-0" />
                        <span>{feat.title}</span>
                      </Link>
                    );
                  })}
                </div>
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

export function PeopleFamilySocietySection({
  favorites,
  toggleFavorite,
  getGradient,
}: PeopleFamilySocietySectionProps) {
  const [activeTab, setActiveTab] = useState<PeopleCategoryTab>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = useMemo(() => {
    return STANDALONE_PEOPLE_APPS.filter((app) => {
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

  const countAll = STANDALONE_PEOPLE_APPS.length;
  const countKemitraan = STANDALONE_PEOPLE_APPS.filter((a) => a.category === "kemitraan").length;
  const countKeluarga = STANDALONE_PEOPLE_APPS.filter((a) => a.category === "keluarga").length;
  const countKomunitas = STANDALONE_PEOPLE_APPS.filter((a) => a.category === "komunitas").length;
  const countSosial = STANDALONE_PEOPLE_APPS.filter((a) => a.category === "sosial").length;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Title & Description */}
      <div className="text-center mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground/90 tracking-tight flex items-center justify-center gap-2">
          <span>
            People<span className="font-normal">,</span> Family
            <span className="font-normal">, and</span> Society
          </span>
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 max-w-xl mx-auto">
          4 Standalone Apps Terintegrasi — Klien & Partner, People Manager, Komunitas Warga, serta Zakat & Sedekah.
        </p>
      </div>

      {/* Main Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 w-full mb-6">
        <button
          onClick={() => setActiveTab("all")}
          className={`shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
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
          onClick={() => setActiveTab("kemitraan")}
          className={`shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "kemitraan"
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <Briefcase className="size-4 shrink-0" />
          <span>Kemitraan</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "kemitraan"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {countKemitraan}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("keluarga")}
          className={`shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "keluarga"
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <Users className="size-4 shrink-0" />
          <span>Keluarga & Relasi</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "keluarga"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {countKeluarga}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("komunitas")}
          className={`shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "komunitas"
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <Home className="size-4 shrink-0" />
          <span>Komunitas Warga</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "komunitas"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {countKomunitas}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("sosial")}
          className={`shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "sosial"
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <Coins className="size-4 shrink-0" />
          <span>Zakat & Sosial</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "sosial"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {countSosial}
          </span>
        </button>
      </div>

      {/* Standalone Apps Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredApps.map((app) => {
          const isFav = favorites.includes(app.to);
          const gradient = getGradient(app.title);

          return (
            <PeopleFlipCard
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
