import { createFileRoute } from "@tanstack/react-router";
import { KalkulatorUmumView } from "@/features/wira/components/views/KalkulatorUmumView";
import { AppShell } from "@/app/app-shell";

export const Route = createFileRoute("/kalkulator")({
  head: () => ({
    meta: [
      { title: "Utilities — Client OS" },
      { name: "description", content: "Kalkulator ilmiah, konverter satuan, dan kalkulasi persentase kas." },
    ],
  }),
  component: KalkulatorPage,
});

function KalkulatorPage() {
  return (
    <AppShell title="Utilities" subtitle="Kalkulator ilmiah, konverter satuan, dan pecahan kas.">
      <div className="w-full">
        <KalkulatorUmumView />
      </div>
    </AppShell>
  );
}
