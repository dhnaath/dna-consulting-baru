import React, { useState } from "react";
import { FIVE_TAHAPAN_WEALTH } from "./FiveTahapanDescriptionBanner";
import { ChevronDown, ChevronUp, Layers, Eye, EyeOff, Sparkles, Filter, X } from "lucide-react";

interface WealthSpectrumPillViewProps {
  selectedFilter?: string;
  onSelectFilter: (cat: string | null) => void;
}

export function WealthSpectrumPillView({
  selectedFilter,
  onSelectFilter,
}: WealthSpectrumPillViewProps) {
  // Default dibuka agar deskripsi 5 prinsip langsung terbaca oleh pengguna
  const [showDescriptions, setShowDescriptions] = useState(true);

  const selectedTahapObj = FIVE_TAHAPAN_WEALTH.find((t) => t.id === selectedFilter);

  return (
    <div className="w-full mb-6">
      {/* Header Pengontrol Tampilan Deskripsi */}
      <div className="flex items-center justify-between gap-3 mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-lg bg-primary/10 text-primary">
            <Layers className="size-3.5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-foreground flex items-center gap-1.5">
              <span>5 Tahapan Arsitektur Finansial</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-primary/10 text-primary font-semibold">
                Surety • Flow • Build • Grow • Legacy
              </span>
            </h4>
            <p className="text-[11px] text-muted-foreground hidden sm:block">
              Setiap tahap memiliki 5 prinsip fondasi fundamental sistem kekayaan
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {selectedFilter && (
            <button
              type="button"
              onClick={() => onSelectFilter(null)}
              className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground px-2 py-1 rounded-md bg-muted/60 border border-border transition-colors cursor-pointer"
              title="Reset Filter Pilar"
            >
              <X className="size-3" />
              <span>Reset Filter</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setShowDescriptions((prev) => !prev)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border/80 bg-background hover:bg-accent text-foreground text-xs font-medium transition-colors cursor-pointer"
            title={showDescriptions ? "Sembunyikan Deskripsi Detail" : "Tampilkan Deskripsi Detail"}
          >
            {showDescriptions ? (
              <>
                <EyeOff className="size-3 text-muted-foreground" />
                <span className="text-[11px]">Sembunyikan Deskripsi</span>
              </>
            ) : (
              <>
                <Eye className="size-3 text-primary" />
                <span className="text-[11px]">Tampilkan Deskripsi (5 Butir)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Grid 5 Tahapan Cards dengan Deskripsi Lengkap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 items-stretch">
        {FIVE_TAHAPAN_WEALTH.map((t) => {
          const isSelected = selectedFilter === t.id;
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onSelectFilter(isSelected ? null : t.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                isSelected
                  ? "border-primary bg-primary/10 shadow-sm ring-2 ring-primary/40"
                  : "border-border/80 bg-card/70 hover:bg-card hover:border-primary/40"
              }`}
            >
              {/* Header Kartu Tahap */}
              <div className="w-full">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-1.5 rounded-lg border text-xs font-semibold ${t.badgeBg}`}>
                    <Icon className="size-4" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    {isSelected && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-primary text-primary-foreground">
                        Aktif ✓
                      </span>
                    )}
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-semibold">
                      Tahap {t.step}
                    </span>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {t.name}
                </h4>
                <p className="text-[11px] font-medium text-muted-foreground/90 mt-0.5 italic leading-tight">
                  {t.subtitle}
                </p>

                {/* Butir-butir Deskripsi Prinsip (1-2-3-4-5) */}
                {showDescriptions && (
                  <div className="mt-3 pt-2.5 border-t border-border/50 space-y-2 animate-in fade-in-50 duration-150">
                    {t.items.map((item) => (
                      <div
                        key={item.num}
                        className="flex items-start gap-1.5 text-[10.5px] leading-relaxed"
                      >
                        <span className="size-3.5 rounded-full bg-primary/15 text-primary text-[9px] font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                          {item.num}
                        </span>
                        <span className="text-muted-foreground group-hover:text-foreground/90 transition-colors">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Kartu */}
              <div className="mt-3 pt-2 border-t border-border/40 w-full flex items-center justify-between text-[10px] text-muted-foreground">
                <span>{t.items.length} prinsip fondasi</span>
                <span
                  className={`font-semibold ${
                    isSelected ? "text-primary font-bold" : "group-hover:text-foreground"
                  }`}
                >
                  {isSelected ? "Filter Dipilih" : "Klik Filter →"}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default WealthSpectrumPillView;
