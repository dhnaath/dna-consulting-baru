import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  CheckSquare,
  ShieldCheck,
  PackageCheck,
  CalendarDays,
  Clock,
  CalendarRange,
  GitCommit,
  Hourglass,
  FolderKanban,
  Workflow,
  Flag,
  Users2,
  Users,
  Compass,
  FileText,
  Palette,
  Mail,
  Network,
  Truck,
  DollarSign,
  TrendingUp,
  BarChart3,
  Bookmark,
  FileCheck,
  ClipboardList,
  FormInput,
  Search,
  Bell,
  AlarmClock,
  Timer,
  Flame,
  CheckCircle2,
  Lock,
  CreditCard,
  Receipt,
  Layers,
  Star,
  ArrowRight,
  Briefcase,
  RotateCcw,
  LayoutGrid,
  Grid2X2,
  RefreshCw,
  Ticket,
  BookOpen,
  AlertTriangle,
  Wallet,
  Lightbulb,
  PenTool,
  Camera,
  Type,
  Code,
  GraduationCap,
  Book,
  Globe,
  Award,
  Key,
  HardDrive,
  Database,
  Scissors,
  NotebookText,
  Navigation,
  Boxes,
  Snowflake,
  Archive,
  ChevronDown,
  ChevronUp,
  type LucideIcon,
} from "lucide-react";

export interface StandaloneSubFeature {
  title: string;
  to: string;
  icon: LucideIcon;
}

export type ProductivityCategoryGroup =
  | "all"
  | "task-workflow"
  | "planning-timeline"
  | "collaboration-ops"
  | "analytics-standards"
  | "utilities-finance";

export interface StandaloneProductivityAppDef {
  id: string;
  to: string;
  title: string;
  subtitle: string;
  category: "task-workflow" | "planning-timeline" | "collaboration-ops" | "analytics-standards" | "utilities-finance";
  categoryLabel: string;
  icon: LucideIcon;
  badge?: string;
  features?: StandaloneSubFeature[];
}

export const STANDALONE_PRODUCTIVITY_APPS: StandaloneProductivityAppDef[] = [
  // 1. Execution (Standalone) + 13 Fitur
  {
    id: "execution",
    to: "/proyek",
    title: "Execution",
    subtitle: "Pusat komando eksekusi operasional, manajemen proyek, alur kerja, roadmap, deliverable, dan koordinasi tim.",
    category: "task-workflow",
    categoryLabel: "Task & Workflow",
    icon: CheckSquare,
    badge: "Standalone",
    features: [
      { title: "Project Manager", to: "/proyek", icon: FolderKanban },
      { title: "Workflow Manager", to: "/workflow-manager", icon: Workflow },
      { title: "Milestone & Roadmap", to: "/milestone-manager", icon: Flag },
      { title: "Retro Review", to: "/lainnya?app=retro", icon: RefreshCw },
      { title: "Task Manager", to: "/task-manager", icon: CheckSquare },
      { title: "Kanban Board", to: "/kanban", icon: LayoutGrid },
      { title: "Eisenhower Matrix", to: "/eisenhower", icon: Grid2X2 },
      { title: "Deliverable Manager", to: "/deliverable-manager", icon: PackageCheck },
      { title: "Approval Manager", to: "/approval-manager", icon: ShieldCheck },
      { title: "Time Clock", to: "/lainnya?app=time-clock", icon: Clock },
      { title: "Ticket Desk", to: "/lainnya?app=ticket-desk", icon: Ticket },
      { title: "Handover Notes", to: "/lainnya?app=handover-notes", icon: FileText },
    ],
  },
  // 2. Planning (Standalone) + 8 Fitur
  {
    id: "planning",
    to: "/kalender",
    title: "Planning",
    subtitle: "Sistem perencanaan eksekutif terpadu: integrasi kalender, jadwal, timeline, reminder, pelacak waktu, dan fokus.",
    category: "planning-timeline",
    categoryLabel: "Planning & Timeline",
    icon: CalendarRange,
    badge: "Standalone",
    features: [
      { title: "Calendar", to: "/kalender", icon: CalendarDays },
      { title: "Planner", to: "/planner", icon: Clock },
      { title: "Schedule Manager", to: "/schedule-manager", icon: CalendarRange },
      { title: "Timeline Manager", to: "/timeline", icon: GitCommit },
      { title: "Countdown", to: "/countdown", icon: Hourglass },
      { title: "Reminder Manager", to: "/reminder-manager", icon: AlarmClock },
      { title: "Time Tracker", to: "/time-tracker", icon: Timer },
      { title: "Focus Timer", to: "/pomodoro", icon: Flame },
    ],
  },
  // Workplace (Standalone) + 15 Fitur
  {
    id: "workplace",
    to: "/collaboration",
    title: "Workplace",
    subtitle: "Pusat kolaborasi operasional kantor, manajemen rapat, direktori SDM, wiki pengetahuan, SOP, formulir, dan pelaporan insiden.",
    category: "collaboration-ops",
    categoryLabel: "Collaboration & Ops",
    icon: Users,
    badge: "Standalone",
    features: [
      { title: "Collaboration", to: "/collaboration", icon: Users },
      { title: "Meeting Manager", to: "/meeting-manager", icon: Users2 },
      { title: "Meeting Minutes", to: "/lainnya?app=minutes", icon: FileText },
      { title: "Interaction Manager", to: "/interaction-manager", icon: Network },
      { title: "Whiteboard Canvas", to: "/lainnya?app=canvas", icon: Palette },
      { title: "People Manager", to: "/people-manager", icon: Users },
      { title: "Workload Capacity", to: "/lainnya?app=workload", icon: BarChart3 },
      { title: "Notification Center", to: "/notification-center", icon: Bell },
      { title: "Knowledge Wiki", to: "/lainnya?app=wiki", icon: BookOpen },
      { title: "SOP Library", to: "/lainnya?app=sop", icon: FileCheck },
      { title: "Template Manager", to: "/template-manager", icon: Bookmark },
      { title: "Work Templates", to: "/lainnya?app=templates", icon: ClipboardList },
      { title: "Forms", to: "/forms", icon: FormInput },
      { title: "Incident Log", to: "/lainnya?app=incident-log", icon: AlertTriangle },
      { title: "Letter Log", to: "/lainnya?app=mailroom", icon: Mail },
    ],
  },
  // Business Operations (Standalone) + 13 Fitur
  {
    id: "business-operations",
    to: "/goal-manager",
    title: "Business Operations",
    subtitle: "Pusat tata kelola operasional bisnis: direktori vendor, tarif jasa, agenda surat, OKR performa, alokasi sumber daya, analitik statistik, pencarian data, katalog produk, inventaris, inspeksi mutu QC, dan rantai pasokan dingin.",
    category: "collaboration-ops",
    categoryLabel: "Collaboration & Ops",
    icon: Briefcase,
    badge: "Standalone",
    features: [
      { title: "Vendor Directory", to: "/lainnya?app=vendors", icon: Truck },
      { title: "Service Rates", to: "/lainnya?app=services-ratecard", icon: DollarSign },
      { title: "Mail Log", to: "/lainnya?app=mailroom", icon: Mail },
      { title: "Goal Manager", to: "/goal-manager", icon: TrendingUp },
      { title: "Resource Manager", to: "/resource-manager", icon: Briefcase },
      { title: "Statistics", to: "/statistics", icon: BarChart3 },
      { title: "Search Manager", to: "/search-manager", icon: Search },
      { title: "Access Directory", to: "/lainnya?app=access-matrix", icon: Key },
      { title: "Product Catalog", to: "/katalog-produk", icon: PackageCheck },
      { title: "Inventory", to: "/inventory", icon: Archive },
      { title: "Quality Check", to: "/lainnya?app=quality-check", icon: CheckCircle2 },
      { title: "Batch Track", to: "/lainnya?app=batch-track", icon: Boxes },
      { title: "Cold Chain", to: "/lainnya?app=cold-chain", icon: Snowflake },
    ],
  },
  // Money (Standalone) + 4 Fitur
  {
    id: "money",
    to: "/expense-tracker",
    title: "Money",
    subtitle: "Pusat tata kelola pengeluaran operasional, pemantauan langganan SaaS, inventaris aset, dan repositori akses.",
    category: "utilities-finance",
    categoryLabel: "Utilities & Finance",
    icon: Wallet,
    badge: "Standalone",
    features: [
      { title: "Expense Tracker", to: "/expense-tracker", icon: Receipt },
      { title: "Subscription Manager", to: "/subscription-manager", icon: CreditCard },
      { title: "Asset Manager", to: "/asset-manager", icon: HardDrive },
      { title: "Access & Key Directory", to: "/lainnya?app=access-matrix", icon: Key },
    ],
  },
  // Creative (Standalone) + 5 Fitur
  {
    id: "creative",
    to: "/ideas",
    title: "Creative",
    subtitle: "Studio kreasi ide visual, perancangan desain grafis, fotografi portofolio, penulisan editorial, dan rekayasa kode.",
    category: "collaboration-ops",
    categoryLabel: "Collaboration & Ops",
    icon: Palette,
    badge: "Standalone",
    features: [
      { title: "Ideas Board", to: "/ideas", icon: Lightbulb },
      { title: "Design Studio", to: "/design", icon: PenTool },
      { title: "Photography", to: "/photography", icon: Camera },
      { title: "Writing Editor", to: "/writing", icon: Type },
      { title: "Code Dev", to: "/code", icon: Code },
    ],
  },
  // Learning (Standalone) + 6 Fitur
  {
    id: "learning",
    to: "/courses",
    title: "Learning",
    subtitle: "Platform akselerasi kompetensi profesional: kurikulum kursus, kartu hafalan kilat, ujian sertifikasi, dan daftar bacaan.",
    category: "analytics-standards",
    categoryLabel: "Analytics & Standards",
    icon: GraduationCap,
    badge: "Standalone",
    features: [
      { title: "Courses", to: "/courses", icon: GraduationCap },
      { title: "Flashcards", to: "/flashcards", icon: Layers },
      { title: "Exams", to: "/exams", icon: FileCheck },
      { title: "Languages", to: "/languages", icon: Globe },
      { title: "Training Track", to: "/lainnya?app=training-track", icon: Award },
      { title: "Reading List MVP", to: "/reading", icon: Book },
    ],
  },
  // Knowledge (Standalone) + 11 Fitur
  {
    id: "knowledge",
    to: "/notes",
    title: "Knowledge",
    subtitle: "Pusat dokumentasi second brain, pangkalan data, web clipper, riset referensi, ensiklopedia wiki, dan katalog bacaan.",
    category: "analytics-standards",
    categoryLabel: "Analytics & Standards",
    icon: BookOpen,
    badge: "Standalone",
    features: [
      { title: "Notes", to: "/notes", icon: FileText },
      { title: "Documents", to: "/documents", icon: FileCheck },
      { title: "Database", to: "/database", icon: Database },
      { title: "Web Clipper", to: "/web-clipper", icon: Scissors },
      { title: "Research Manager", to: "/research-manager", icon: Compass },
      { title: "Knowledge Base", to: "/knowledge-base", icon: BookOpen },
      { title: "Wiki Engine", to: "/wiki", icon: BookOpen },
      { title: "Quick Notes", to: "/catatan", icon: NotebookText },
      { title: "Bookmark Manager", to: "/bookmarks", icon: Bookmark },
      { title: "Incoterms Guide", to: "/incoterms", icon: Navigation },
      { title: "Reading List MVP", to: "/reading", icon: Book },
    ],
  },
];

interface ProductivitySectionProps {
  page?: {
    title: string;
    subCategories: any[];
  };
  favorites: string[];
  toggleFavorite: (to: string) => void;
  setActiveFolder?: (folder: any) => void;
  getGradient: (name: string) => string;
  FolderTile?: any;
}

const ProductivityFlipCard = ({
  app,
  isFav,
  toggleFavorite,
  gradient,
}: {
  app: StandaloneProductivityAppDef;
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
                    {displayFeatures?.map((feat, idx) => {
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

export function ProductivitySection({
  favorites,
  toggleFavorite,
  getGradient,
}: ProductivitySectionProps) {
  const [activeTab, setActiveTab] = useState<ProductivityCategoryGroup>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = useMemo(() => {
    return STANDALONE_PRODUCTIVITY_APPS.filter((app) => {
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

  const countAll = STANDALONE_PRODUCTIVITY_APPS.length;
  const countTaskWorkflow = STANDALONE_PRODUCTIVITY_APPS.filter(
    (a) => a.category === "task-workflow"
  ).length;
  const countPlanningTimeline = STANDALONE_PRODUCTIVITY_APPS.filter(
    (a) => a.category === "planning-timeline"
  ).length;
  const countCollabOps = STANDALONE_PRODUCTIVITY_APPS.filter(
    (a) => a.category === "collaboration-ops"
  ).length;
  const countAnalytics = STANDALONE_PRODUCTIVITY_APPS.filter(
    (a) => a.category === "analytics-standards"
  ).length;
  const countUtilities = STANDALONE_PRODUCTIVITY_APPS.filter(
    (a) => a.category === "utilities-finance"
  ).length;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Title & Description */}
      <div className="text-center mb-4 sm:mb-5">
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground/90 tracking-tight flex items-center justify-center gap-2">
          <span>Productivity and Operations</span>
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 max-w-xl mx-auto">
          29 Standalone Apps Terintegrasi — Eksekusi Tugas, Jadwal, Kolaborasi, Analitik, dan Utilitas Kerja.
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
          onClick={() => setActiveTab("task-workflow")}
          className={`shrink-0 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "task-workflow"
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <CheckSquare className="size-4 shrink-0" />
          <span>Task & Workflow</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "task-workflow"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {countTaskWorkflow}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("planning-timeline")}
          className={`shrink-0 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "planning-timeline"
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <CalendarDays className="size-4 shrink-0" />
          <span>Planning & Timeline</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "planning-timeline"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {countPlanningTimeline}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("collaboration-ops")}
          className={`shrink-0 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "collaboration-ops"
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <Users className="size-4 shrink-0" />
          <span>Collaboration & Ops</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "collaboration-ops"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {countCollabOps}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("analytics-standards")}
          className={`shrink-0 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "analytics-standards"
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <BarChart3 className="size-4 shrink-0" />
          <span>Analytics & Standards</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "analytics-standards"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {countAnalytics}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("utilities-finance")}
          className={`shrink-0 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activeTab === "utilities-finance"
              ? "bg-primary text-primary-foreground shadow-md scale-105 font-bold"
              : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          }`}
        >
          <Timer className="size-4 shrink-0" />
          <span>Utilities & Tracker</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              activeTab === "utilities-finance"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-background/80 text-muted-foreground"
            }`}
          >
            {countUtilities}
          </span>
        </button>
      </div>

      {/* Standalone Apps Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {filteredApps.map((app) => {
          const isFav = favorites.includes(app.to);
          const gradient = getGradient(app.title);

          return (
            <ProductivityFlipCard
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
