import { createFileRoute } from "@tanstack/react-router";
import { ShoppingListView } from "@/features/wira/components/views/ShoppingListView";
import { AppShell } from "@/app/app-shell";

export const Route = createFileRoute("/shopping")({
  head: () => ({
    meta: [
      { title: "Shopping List — All in One" },
      { name: "description", content: "Daftar belanja, perlengkapan kerja & nutrisi dengan pelacakan anggaran." },
    ],
  }),
  component: ShoppingListViewPage,
});

function ShoppingListViewPage() {
  return (
    <AppShell title="Shopping List" subtitle="Daftar belanja, perlengkapan kerja & nutrisi dengan pelacakan anggaran">
      <div className="w-full">
        <ShoppingListView />
      </div>
    </AppShell>
  );
}
