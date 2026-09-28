import React from "react";
import { Sparkles, BookOpen, Layers } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function KurasiSection() {
  return (
    <div className="w-full max-w-5xl py-6 px-4">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="size-5 text-amber-500" />
        <h2 className="text-lg font-semibold text-foreground">Aplikasi Terkurasi</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          to="/"
          className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/60 hover:bg-accent/40 transition-colors"
        >
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <BookOpen className="size-6" />
          </div>
          <div>
            <h3 className="font-medium text-foreground">Playbook Bisnis DNA</h3>
            <p className="text-xs text-muted-foreground">Framework dan kurasi modul konsultasi</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
