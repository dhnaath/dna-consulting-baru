import React, { useState } from "react";
import { Search, X, ShieldCheck, Coins, Building, Sprout, BookOpen, ChevronRight, ChevronLeft } from "lucide-react";
import { FIVE_TAHAPAN_WEALTH } from "@/features/launcher/FiveTahapanDescriptionBanner";

export function TopPanelLauncherDescription({
  onClose,
  onOpenSearch,
}: {
  onClose: () => void;
  onOpenSearch?: () => void;
}) {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const currentTahap = FIVE_TAHAPAN_WEALTH[activeStepIndex] || FIVE_TAHAPAN_WEALTH[0];
  const Icon = currentTahap.icon;

  return (
    <div className="w-full sm:w-[540px] max-w-[95vw] border-b sm:border-r border-border/80 bg-sidebar/95 backdrop-blur-xl px-4 py-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
      {/* Header Baris 1: Tab 5 Tahapan (1-Surety, 2-Flow, 3-Build, 4-Grow, 5-Legacy) */}
      <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-border/50">
        <div className="flex items-center gap-1.5 flex-wrap">
          <div className="flex items-center gap-1 bg-muted/60 p-0.5 rounded-lg border border-border/40">
            {FIVE_TAHAPAN_WEALTH.map((t, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-xs scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                  title={`Tahap ${t.step}: ${t.name}`}
                >
                  <span className="font-mono">{t.step}</span>
                  <span className="hidden xs:inline">{t.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
            disabled={activeStepIndex === 0}
            className="p-1 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            title="Tahap Sebelumnya"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            type="button"
            onClick={() => setActiveStepIndex(Math.min(FIVE_TAHAPAN_WEALTH.length - 1, activeStepIndex + 1))}
            disabled={activeStepIndex === FIVE_TAHAPAN_WEALTH.length - 1}
            className="p-1 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            title="Tahap Berikutnya"
          >
            <ChevronRight size={15} />
          </button>
          {onOpenSearch && (
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title="Pencarian Cepat (⌘K)"
            >
              <Search size={14} />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            title="Tutup Panel Atas"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Header Baris 2: Judul & Subtitle Tahap */}
      <div className="flex items-center gap-2.5 mb-2.5">
        <div className={`size-8 rounded-lg border flex items-center justify-center shrink-0 ${currentTahap.badgeBg}`}>
          <Icon size={18} />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded font-mono bg-primary/10 text-primary border border-primary/20">
              Tahap #{currentTahap.step}
            </span>
            <span className="text-sm font-bold text-foreground truncate">
              {currentTahap.name}
            </span>
          </div>
          <p className="text-[11px] text-muted-foreground truncate">
            {currentTahap.subtitle}
          </p>
        </div>
      </div>

      {/* Deskripsi 5 Butir Berurutan (1-2-3-4-5) */}
      <div className="space-y-1.5 bg-card/60 rounded-xl p-2.5 border border-border/50 max-h-56 overflow-y-auto">
        {currentTahap.items.map((item) => (
          <div key={item.num} className="flex items-start gap-2 text-[11px] leading-relaxed">
            <span className="size-4 rounded-full bg-primary/15 text-primary text-[9px] font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
              {item.num}
            </span>
            <span className="text-foreground/85">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
