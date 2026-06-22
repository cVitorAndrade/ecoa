import React from "react";
import { BarChart3, Radio, ShieldCheck } from "lucide-react";

// Importações dos componentes do Shadcn UI (Ajuste o caminho '@/' conforme seu projeto)
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@repo/ui/components/ui/card";
import { Separator } from "@repo/ui/components/ui/separator";

export default function MetricsSidebar() {
  return (
    <aside className="lg:col-span-3 flex flex-col gap-6">
      {/* Global Metrics */}
      <Card className="rounded-xl shadow-sm">
        <CardHeader className="flex flex-row items-center gap-2 border-b border-border p-4 space-y-0">
          <BarChart3 className="w-4 h-4 text-muted-foreground" />
          <CardTitle className="text-xs font-bold uppercase tracking-wider text-foreground">
            System Metrics (24H)
          </CardTitle>
        </CardHeader>

        <CardContent className="p-4 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                Avg Resolution
              </span>
              <span className="font-mono text-xl font-medium text-foreground block">
                34.2{" "}
                <span className="text-xs text-muted-foreground font-sans">
                  hrs
                </span>
              </span>
            </div>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                Cases Logged
              </span>
              <span className="font-mono text-xl font-medium text-foreground block">
                89
              </span>
            </div>
          </div>

          <Separator className="mt-1" />

          {/* Simple Chart Representation using CSS */}
          <div className="pt-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block mb-3">
              Resolution Flow
            </span>
            <div className="flex items-end h-16 gap-1.5 w-full">
              <div className="bg-primary/20 w-1/6 rounded-t-sm h-[30%]"></div>
              <div className="bg-primary/40 w-1/6 rounded-t-sm h-[50%]"></div>
              <div className="bg-primary/60 w-1/6 rounded-t-sm h-[40%]"></div>
              <div className="bg-primary/80 w-1/6 rounded-t-sm h-[70%]"></div>
              <div className="bg-primary w-1/6 rounded-t-sm h-[90%]"></div>
              <div className="bg-secondary w-1/6 rounded-t-sm h-[100%]"></div>
            </div>
            <div className="flex justify-between font-mono text-[10px] text-muted-foreground mt-2">
              <span>T-5</span>
              <span>Today</span>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Activity Ticker */}
      <Card className="rounded-xl shadow-sm flex flex-col grow">
        <CardHeader className="flex flex-row items-center gap-2 border-b border-border p-4 space-y-0">
          <Radio className="w-4 h-4 text-muted-foreground animate-pulse" />
          <CardTitle className="text-xs font-bold uppercase tracking-wider text-foreground">
            Live Activity Ledger
          </CardTitle>
        </CardHeader>

        <CardContent className="p-4 flex flex-col gap-5 overflow-y-auto max-h-[300px]">
          {/* Ticker Item */}
          <div className="flex gap-3 items-start">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
            <div>
              <p className="text-sm text-foreground leading-tight">
                Case{" "}
                <span className="font-mono text-primary font-medium">
                  TR-9901
                </span>{" "}
                updated status to Resolved.
              </p>
              <span className="font-mono text-[10px] text-muted-foreground mt-1 block">
                Just now
              </span>
            </div>
          </div>

          {/* Ticker Item */}
          <div className="flex gap-3 items-start">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 flex-shrink-0"></span>
            <div>
              <p className="text-sm text-foreground leading-tight">
                New report logged in District 4.
              </p>
              <span className="font-mono text-[10px] text-muted-foreground mt-1 block">
                - 2 min
              </span>
            </div>
          </div>

          {/* Ticker Item */}
          <div className="flex gap-3 items-start">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 flex-shrink-0"></span>
            <div>
              <p className="text-sm text-foreground leading-tight">
                Unit 14 dispatched to Case{" "}
                <span className="font-mono text-primary font-medium">
                  CR-8924A
                </span>
                .
              </p>
              <span className="font-mono text-[10px] text-muted-foreground mt-1 block">
                - 12 min
              </span>
            </div>
          </div>

          {/* Ticker Item */}
          <div className="flex gap-3 items-start">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 flex-shrink-0"></span>
            <div>
              <p className="text-sm text-foreground leading-tight">
                Automated escalation: Case{" "}
                <span className="font-mono text-primary font-medium">
                  WT-2210
                </span>{" "}
                breached SLA.
              </p>
              <span className="font-mono text-[10px] text-muted-foreground mt-1 block">
                - 45 min
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-auto bg-muted/50 p-4 rounded-lg border border-border text-center flex flex-col items-center gap-2">
        <ShieldCheck className="w-8 h-8 text-muted-foreground" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          Your reports help keep our city safe and clean. Thank you for
          participating.
        </p>
      </div>
    </aside>
  );
}
