import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { AppShell } from "../app/app-shell";
import { useFavorites } from "@/hooks/useFavorites";
import { getLastLauncherPage, setLastLauncherPage } from "@/utils/launcherCategoryMapper";
import { Tools100Section } from "@/features/launcher/Tools100Section";
import { FinancialWealthSection } from "@/features/launcher/FinancialWealthSection";
import { ProductivitySection } from "@/features/launcher/ProductivitySection";
import { PersonalEssentialsSection } from "@/features/launcher/PersonalEssentialsSection";
import { PeopleFamilySocietySection } from "@/features/launcher/PeopleFamilySocietySection";
import { KurasiSection } from "@/features/launcher/KurasiSection";
import { COMMODITY_DATA } from "../commodityData";
import { AnimatedSearchIcon } from "@/app/shell/AnimatedSearchIcon";
import { TypewriterSearchText } from "@/app/shell/TypewriterSearchText";
import {
  Layers,
  Coins,
  CheckSquare,
  Heart,
  Users,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const GRADIENT_PALETTES = [
  "bg-linear-to-br from-indigo-500 to-indigo-700",
  "bg-linear-to-br from-blue-500 to-cyan-600",
  "bg-linear-to-br from-emerald-500 to-teal-700",
  "bg-linear-to-br from-amber-500 to-orange-600",
  "bg-linear-to-br from-rose-500 to-pink-600",
  "bg-linear-to-br from-purple-500 to-violet-700",
  "bg-linear-to-br from-sky-500 to-blue-700",
  "bg-linear-to-br from-teal-500 to-emerald-700",
];

export function getGradient(title: string): string {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  const idx = Math.abs(hash) % GRADIENT_PALETTES.length;
  return GRADIENT_PALETTES[idx];
}

const LAUNCHER_TABS = [
  { id: "tools100", label: "100 MBA Tools", icon: Layers, badge: "100 Tools" },
  { id: "financial", label: "Finansial & Wealth", icon: Coins, badge: "5 Tahapan" },
  { id: "productivity", label: "Produktivitas", icon: CheckSquare, badge: "Operasional" },
  { id: "personal", label: "Personal & Essentials", icon: Heart, badge: "Lifestyle" },
  { id: "people", label: "People & Relasi", icon: Users, badge: "Keluarga & CRM" },
  { id: "commodity", label: "100 Komoditas", icon: TrendingUp, badge: "Nasional" },
  { id: "curated", label: "Kurasi & Playbook", icon: BookOpen, badge: "Framework" },
];

export function Launcher() {
  const initialPage = getLastLauncherPage(LAUNCHER_TABS.length);
  const [activeTabIdx, setActiveTabIdx] = useState<number>(initialPage);
  const { favorites, toggleFavorite } = useFavorites();

  // Mode transisi iOS: 'search' saat diam/idle, 'dots' saat swipe/geser halaman
  const [barMode, setBarMode] = useState<"search" | "dots">("search");
  const idleTimerRef = useRef<any>(null);

  // Setup Carousel swipe dengan Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: initialPage,
    loop: false,
    duration: 25,
    skipSnaps: false,
  });

  // Tampilkan dots secara temporer lalu kembali ke search
  const showDotsTemporarily = useCallback((duration = 2000) => {
    setBarMode("dots");
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      setBarMode("search");
    }, duration);
  }, []);

  // Tampilkan dots langsung (selama interaksi swipe berlangsung)
  const showDotsImmediately = useCallback(() => {
    setBarMode("dots");
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
  }, []);

  // Sinkronisasi event Embla Carousel dengan dots indicator
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const snap = emblaApi.selectedScrollSnap();
      setActiveTabIdx(snap);
      setLastLauncherPage(snap, LAUNCHER_TABS.length);
      showDotsTemporarily(2200);
    };

    const onPointerDown = () => {
      showDotsImmediately();
    };

    const onPointerUp = () => {
      showDotsTemporarily(2200);
    };

    const onScroll = () => {
      showDotsImmediately();
    };

    const onSettle = () => {
      showDotsTemporarily(2000);
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);
    emblaApi.on("scroll", onScroll);
    emblaApi.on("settle", onSettle);

    // Dukungan geser / swipe 2 jari horizontal pada trackpad
    const emblaNode = emblaApi.rootNode();
    let accumulatedDeltaX = 0;
    let wheelDebounceTimer: any = null;

    const onWheel = (e: WheelEvent) => {
      // Deteksi geseran 2 jari horizontal di trackpad (deltaX lebih dominan daripada deltaY)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 12) {
        showDotsImmediately();
        accumulatedDeltaX += e.deltaX;

        if (wheelDebounceTimer) clearTimeout(wheelDebounceTimer);
        wheelDebounceTimer = setTimeout(() => {
          accumulatedDeltaX = 0;
          showDotsTemporarily(2000);
        }, 220);

        if (accumulatedDeltaX > 50) {
          emblaApi.scrollNext();
          accumulatedDeltaX = 0;
        } else if (accumulatedDeltaX < -50) {
          emblaApi.scrollPrev();
          accumulatedDeltaX = 0;
        }
      }
    };

    if (emblaNode) {
      emblaNode.addEventListener("wheel", onWheel, { passive: true });
    }

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
      emblaApi.off("scroll", onScroll);
      emblaApi.off("settle", onSettle);
      if (emblaNode) {
        emblaNode.removeEventListener("wheel", onWheel);
      }
      if (wheelDebounceTimer) clearTimeout(wheelDebounceTimer);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [emblaApi, showDotsTemporarily, showDotsImmediately]);

  // Handle pergantian tab manual (klik tab atau klik titik)
  const handleSelectTab = (idx: number) => {
    setActiveTabIdx(idx);
    setLastLauncherPage(idx, LAUNCHER_TABS.length);
    emblaApi?.scrollTo(idx);
    showDotsTemporarily(2200);
  };

  // Keyboard navigation untuk swipe kiri-kanan
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Hanya jika bukan sedang mengetik di input/textarea
      const target = e.target as HTMLElement;
      if (target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable) {
        return;
      }
      if (e.key === "ArrowLeft") {
        if (activeTabIdx > 0) {
          handleSelectTab(activeTabIdx - 1);
        }
      } else if (e.key === "ArrowRight") {
        if (activeTabIdx < LAUNCHER_TABS.length - 1) {
          handleSelectTab(activeTabIdx + 1);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTabIdx, emblaApi]);

  const openGlobalSearch = () => {
    window.dispatchEvent(new CustomEvent("aio_open_search"));
  };

  return (
    <AppShell
      title="All in One Workspace"
      subtitle="Workspace Eksekutif Terintegrasi: Bisnis, Finansial, Manajemen, Komoditas & Produktivitas"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 py-4 space-y-4 pb-20">
        {/* Swipe Carousel Area */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {/* Slide 0: 100 MBA Tools */}
            <div className="flex-[0_0_100%] min-w-0 pr-1">
              <Tools100Section
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                getGradient={getGradient}
              />
            </div>

            {/* Slide 1: Finansial & Wealth */}
            <div className="flex-[0_0_100%] min-w-0 pr-1">
              <FinancialWealthSection
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                getGradient={getGradient}
              />
            </div>

            {/* Slide 2: Produktivitas */}
            <div className="flex-[0_0_100%] min-w-0 pr-1">
              <ProductivitySection
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                getGradient={getGradient}
              />
            </div>

            {/* Slide 3: Personal & Essentials */}
            <div className="flex-[0_0_100%] min-w-0 pr-1">
              <PersonalEssentialsSection
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                getGradient={getGradient}
              />
            </div>

            {/* Slide 4: People & Relasi */}
            <div className="flex-[0_0_100%] min-w-0 pr-1">
              <PeopleFamilySocietySection
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                getGradient={getGradient}
              />
            </div>

            {/* Slide 5: 100 Komoditas */}
            <div className="flex-[0_0_100%] min-w-0 pr-1 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border border-border bg-card/70">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                      <TrendingUp className="size-5" />
                    </span>
                    <h2 className="text-xl font-bold text-foreground">100 Komoditas Unggulan Nasional</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Indeks dan intelijen rantai pasok untuk komoditas pertanian, perkebunan, pertambangan, dan energi.
                  </p>
                </div>
                <Link
                  to="/commodity-dashboard"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors shrink-0"
                >
                  Buka Dashboard Penuh <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {COMMODITY_DATA.slice(0, 16).map((item: any, idx: number) => {
                  const formattedPrice = item.hargaTerbaru != null
                    ? (item.mataUang === "USD" ? `$${item.hargaTerbaru.toLocaleString("en-US", { minimumFractionDigits: 2 })}` : `Rp ${item.hargaTerbaru.toLocaleString("id-ID")}`)
                    : (item.harga || item.price || "Rp Ref Pasar");
                  const isUp = item.perubahan24h != null ? item.perubahan24h >= 0 : true;
                  const trendText = item.perubahan24h != null ? `${isUp ? "+" : ""}${item.perubahan24h}%` : (item.tren || item.trend || "+0.8%");

                  return (
                    <div
                      key={item.id || idx}
                      className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2 gap-1">
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground truncate max-w-[170px]">
                            {item.kategori || item.category || "Komoditas"}
                          </span>
                          <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${isUp ? "text-emerald-500 bg-emerald-500/10" : "text-rose-500 bg-rose-500/10"}`}>
                            {trendText}
                          </span>
                        </div>
                        <h4 className="font-semibold text-foreground text-sm line-clamp-1 group-hover:text-primary transition-colors">
                          {item.nama || item.name}
                        </h4>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border/50 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">{item.satuan || item.unit || "Per Satuan"}</span>
                          <span className="font-bold text-foreground">{formattedPrice}</span>
                        </div>

                        {item.linkSumber && (
                          <a
                            href={item.linkSumber}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-between w-full px-2.5 py-1.5 rounded-lg text-xs font-semibold text-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground border border-primary/20 hover:border-transparent transition-all"
                            title={`Buka web resmi ${item.sumberData || item.linkSumber}`}
                          >
                            <span className="flex items-center gap-1.5 truncate">
                              <ExternalLink className="size-3.5 shrink-0" />
                              <span className="truncate">Portal: {item.sumberData ? item.sumberData.split('/')[0].trim() : "Resmi"}</span>
                            </span>
                            <span className="text-[10px] opacity-80 shrink-0">&rarr;</span>
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Slide 6: Kurasi & Playbook */}
            <div className="flex-[0_0_100%] min-w-0 pr-1 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border border-border bg-card/70">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                      <BookOpen className="size-5" />
                    </span>
                    <h2 className="text-xl font-bold text-foreground">Kurasi & Playbook Bisnis DNA</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Koleksi lengkap 100 modul strategis, framework operasional, dan pedoman konsultasi terstruktur.
                  </p>
                </div>
                <Link
                  to="/kurasi"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors shrink-0"
                >
                  Buka Modul Kurasi Lengkap <ArrowRight className="size-4" />
                </Link>
              </div>
              <KurasiSection />
            </div>
          </div>
        </div>

        {/* iOS-Style Morphing Page Indicator / Search Pill di atas Dock */}
        <div className="fixed bottom-[calc(5rem+10pt)] left-0 right-0 flex justify-center pb-1 pointer-events-none z-30 animate-in fade-in duration-200">
          {barMode === "search" ? (
            <button
              type="button"
              onClick={openGlobalSearch}
              onMouseEnter={() => showDotsTemporarily(3000)}
              className="pointer-events-auto flex items-center justify-center h-[28.5px] min-w-[88px] gap-1.5 px-4 rounded-full liquid-glass-pill text-xs font-medium text-foreground/85 hover:text-foreground active:scale-95 transition-all duration-200 cursor-pointer group"
              aria-label="Pencarian Global (Search)"
            >
              <AnimatedSearchIcon
                active={true}
                className="size-[13px] text-muted-foreground group-hover:text-foreground transition-colors shrink-0 relative z-10"
                strokeWidth={2.4}
              />
              <div className="relative z-10">
                <TypewriterSearchText active={true} speed={50} startDelay={80} />
              </div>
            </button>
          ) : (
            <div
              onMouseEnter={showDotsImmediately}
              onMouseLeave={() => showDotsTemporarily(1800)}
              className="pointer-events-auto flex items-center justify-center h-[28.5px] px-3 gap-2 rounded-full liquid-glass-pill text-xs transition-all duration-200 animate-in fade-in zoom-in-95"
            >
              {/* Tombol prev slide */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (activeTabIdx > 0) handleSelectTab(activeTabIdx - 1);
                }}
                disabled={activeTabIdx === 0}
                className="relative z-10 text-muted-foreground hover:text-foreground disabled:opacity-20 cursor-pointer p-0.5 rounded transition-colors"
                aria-label="Halaman Sebelumnya"
                title="Halaman Sebelumnya"
              >
                <ChevronLeft className="size-3.5" />
              </button>

              {/* Titik-titik indikator halaman */}
              <div className="relative z-10 flex items-center gap-1.5 px-1">
                {LAUNCHER_TABS.map((tab, idx) => {
                  const isActive = idx === activeTabIdx;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectTab(idx);
                      }}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        isActive
                          ? "w-4 sm:w-5 h-2 bg-primary shadow-xs"
                          : "size-2 bg-foreground/30 hover:bg-foreground/60 hover:scale-125"
                      }`}
                      title={`${tab.label} (Hal ${idx + 1} dari ${LAUNCHER_TABS.length})`}
                      aria-label={`Pindah ke ${tab.label}`}
                    />
                  );
                })}
              </div>

              {/* Tombol next slide */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (activeTabIdx < LAUNCHER_TABS.length - 1) handleSelectTab(activeTabIdx + 1);
                }}
                disabled={activeTabIdx === LAUNCHER_TABS.length - 1}
                className="relative z-10 text-muted-foreground hover:text-foreground disabled:opacity-20 cursor-pointer p-0.5 rounded transition-colors"
                aria-label="Halaman Berikutnya"
                title="Halaman Berikutnya"
              >
                <ChevronRight className="size-3.5" />
              </button>

              {/* Akses cepat ke Search */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openGlobalSearch();
                }}
                className="relative z-10 ml-1 pl-1.5 border-l border-border/60 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                title="Buka Pencarian"
                aria-label="Buka Pencarian"
              >
                <Search className="size-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}

export default Launcher;
