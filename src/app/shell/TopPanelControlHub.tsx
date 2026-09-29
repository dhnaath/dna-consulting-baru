import React, { useState, useEffect } from "react";
import {
  User,
  Settings,
  Globe,
  Clock,
  Sparkles,
  Laptop,
} from "lucide-react";
import { ThemeLangToggle } from "../theme-lang-toggle";
import { ProfileMenu } from "../wira-settings";

interface TopPanelControlHubProps {
  onClose: () => void;
  onOpenSettings: (tab: string) => void;
}

export function TopPanelControlHub({
  onClose,
  onOpenSettings,
}: TopPanelControlHubProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Region State
  const [country, setCountry] = useState<string>(() => {
    try {
      return localStorage.getItem("aio_region_country") || "Indonesia";
    } catch {
      return "Indonesia";
    }
  });

  const [city, setCity] = useState<string>(() => {
    try {
      return localStorage.getItem("aio_region_city") || "Jakarta";
    } catch {
      return "Jakarta";
    }
  });

  const [timezone, setTimezone] = useState<string>(() => {
    try {
      return localStorage.getItem("aio_region_timezone") || "(UTC+07:00) WIB";
    } catch {
      return "(UTC+07:00) WIB";
    }
  });

  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCountryChange = (val: string) => {
    setCountry(val);
    try {
      localStorage.setItem("aio_region_country", val);
    } catch {}
  };

  const handleCityChange = (val: string) => {
    setCity(val);
    try {
      localStorage.setItem("aio_region_city", val);
    } catch {}
  };

  const handleTimezoneChange = (val: string) => {
    setTimezone(val);
    try {
      localStorage.setItem("aio_region_timezone", val);
    } catch {}
  };

  return (
    <div className="w-full h-full flex flex-col relative z-10 animate-in slide-in-from-top-3 duration-200">
      {/* Grid Konten 4 Kolom: Akun, Tema & Bahasa, Region, Client OS Info */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 scrollbar-thin">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-full items-stretch">
          {/* Kolom 1: Akun & Profil Pengguna (Liquid Glass Card) */}
          <div className="liquid-glass-card">
            <div className="card-content">
              <div className="card-header">
                <div className="user-info">
                  <div className="avatar">
                    <svg className="avatar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="user-details">
                    <p className="user-name">Executive User</p>
                    <p className="user-role">DNA Advisory Workspace</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenSettings("notifications")}
                  className="notification-icon text-muted-foreground hover:text-foreground cursor-pointer"
                  title="Notifikasi Akun"
                  aria-label="Notifikasi"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </button>
              </div>

              <div className="card-body">
                <h3 className="card-title">Profil & Kredensial</h3>
                <p className="card-description">
                  Kelola sesi login, hak akses tim, dan sinkronisasi profil workspace.
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="glass-button flex-1"
                  >
                    <User className="size-4 shrink-0" />
                    <span>Menu Profil</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileOpen(false);
                      onOpenSettings("general");
                    }}
                    className="glass-button w-auto px-3 shrink-0"
                    title="Buka Pengaturan"
                    aria-label="Pengaturan"
                  >
                    <Settings className="size-4 shrink-0" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <p className="card-tip">Tip: Sesuaikan preferensi profil dan hak akses di Pengaturan!</p>

                {/* Profile Menu Popup */}
                <ProfileMenu
                  isOpen={isProfileOpen}
                  onClose={() => setIsProfileOpen(false)}
                  onOpenSettings={(tab) => {
                    setIsProfileOpen(false);
                    onOpenSettings(tab);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Kolom 2: Personalisasi Tampilan & Bahasa (Liquid Glass Card) */}
          <div className="liquid-glass-card">
            <div className="card-content">
              <div className="card-header">
                <div className="user-info">
                  <div className="avatar">
                    <Sparkles className="avatar-icon text-amber-500" />
                  </div>
                  <div className="user-details">
                    <p className="user-name">Tampilan & Bahasa</p>
                    <p className="user-role">Tema UI & Translasi</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400">
                  <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                  Aktif
                </span>
              </div>

              <div className="card-body">
                <h3 className="card-title">Kontras & Bahasa</h3>
                <p className="card-description">
                  Pilih mode gelap/terang dan bahasa sistem antarmuka kerja.
                </p>
                <div className="p-2 rounded-xl bg-white/15 dark:bg-black/25 border border-white/15 backdrop-blur-md">
                  <ThemeLangToggle />
                </div>
              </div>

              <p className="card-tip">Tip: Preferensi tema dan bahasa disimpan otomatis di browser!</p>
            </div>
          </div>

          {/* Kolom 3: Wilayah, Kota & Zona Waktu (Liquid Glass Card) */}
          <div className="liquid-glass-card">
            <div className="card-content">
              <div className="card-header">
                <div className="user-info">
                  <div className="avatar">
                    <Globe className="avatar-icon text-emerald-500" />
                  </div>
                  <div className="user-details">
                    <p className="user-name">Wilayah & Waktu</p>
                    <p className="user-role">Region & Timezone</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  <Clock className="size-3.5" />
                  <span>{currentTime || "--:--"}</span>
                </div>
              </div>

              <div className="card-body text-left">
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-semibold opacity-70 block mb-0.5">
                        Negara
                      </label>
                      <select
                        value={country}
                        onChange={(e) => handleCountryChange(e.target.value)}
                        className="w-full px-2 py-1.5 bg-white/15 dark:bg-black/30 border border-white/20 rounded-lg outline-none text-xs font-medium backdrop-blur-sm cursor-pointer"
                      >
                        <option value="Indonesia">Indonesia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="Japan">Japan</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold opacity-70 block mb-0.5">
                        Kota
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => handleCityChange(e.target.value)}
                        placeholder="Jakarta"
                        className="w-full px-2 py-1.5 bg-white/15 dark:bg-black/30 border border-white/20 rounded-lg outline-none text-xs font-medium backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-semibold opacity-70 block mb-0.5">
                      Zona Waktu
                    </label>
                    <select
                      value={timezone}
                      onChange={(e) => handleTimezoneChange(e.target.value)}
                      className="w-full px-2 py-1.5 bg-white/15 dark:bg-black/30 border border-white/20 rounded-lg outline-none text-xs font-medium backdrop-blur-sm cursor-pointer"
                    >
                      <option value="(UTC+07:00) WIB">(UTC+07:00) WIB - Jakarta</option>
                      <option value="(UTC+08:00) WITA">(UTC+08:00) WITA - Bali</option>
                      <option value="(UTC+09:00) WIT">(UTC+09:00) WIT - Jayapura</option>
                      <option value="(UTC+00:00) UTC">(UTC+00:00) UTC - London</option>
                      <option value="(UTC-05:00) EST">(UTC-05:00) EST - New York</option>
                      <option value="(UTC-08:00) PST">(UTC-08:00) PST - San Francisco</option>
                    </select>
                  </div>
                </div>
              </div>

              <p className="card-tip">Tip: Jam dan jadwal sistem disinkronkan dengan zona waktu ini!</p>
            </div>
          </div>

          {/* Kolom 4: Informasi Versi & Status Sistem (Liquid Glass Card) */}
          <div className="liquid-glass-card">
            <div className="card-content">
              <div className="card-header">
                <div className="user-info">
                  <div className="avatar">
                    <Laptop className="avatar-icon text-cyan-500" />
                  </div>
                  <div className="user-details">
                    <p className="user-name">Client OS</p>
                    <p className="user-role">v2.4.2 · Production</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_2px_rgba(16,185,129,0.15)] animate-pulse" />
                  Aktif
                </span>
              </div>

              <div className="card-body">
                <div className="space-y-1.5 p-2.5 rounded-xl bg-white/15 dark:bg-black/25 border border-white/15 text-xs text-left backdrop-blur-sm">
                  <div className="flex justify-between items-center opacity-85">
                    <span>Versi Rilis</span>
                    <span className="font-mono font-semibold">2026.09-stable</span>
                  </div>
                  <div className="flex justify-between items-center opacity-85">
                    <span>Platform</span>
                    <span className="font-medium">React 19 + Vite</span>
                  </div>
                  <div className="flex justify-between items-center opacity-85">
                    <span>Sinkronisasi</span>
                    <span className="text-emerald-500 font-semibold">✓ Terverifikasi</span>
                  </div>
                </div>
              </div>

              <p className="card-tip">Tip: Status sistem dalam kondisi optimal dan responsif!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPanelControlHub;
