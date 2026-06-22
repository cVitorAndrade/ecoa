import React from "react";
import { SlidersHorizontal, Gauge } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@repo/ui/components/ui/card";
import { Label } from "@repo/ui/components/ui/label";
import { Input } from "@repo/ui/components/ui/input";
import { Checkbox } from "@repo/ui/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";

export default function OperationalSidebar() {
  return (
    <aside className="lg:col-span-3 flex flex-col gap-6">
      <Card className="rounded-xl shadow-sm">
        <CardHeader className="flex flex-row items-center gap-2 border-b border-border p-4 space-y-0">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
          <CardTitle className="text-xs font-bold uppercase tracking-wider text-foreground">
            Operational Parameters
          </CardTitle>
        </CardHeader>

        <CardContent className="p-4 flex flex-col gap-5">
          <div className="space-y-2">
            <Label
              htmlFor="search-id"
              className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider"
            >
              Search Identifier
            </Label>
            <Input
              id="search-id"
              placeholder="Enter Case ID..."
              className="font-mono text-xs bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              Division Routing
            </Label>
            <Select defaultValue="all">
              <SelectTrigger className="w-full text-sm bg-background">
                <SelectValue placeholder="Select division" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Divisions</SelectItem>
                <SelectItem value="public-works">
                  Dept. of Public Works
                </SelectItem>
                <SelectItem value="environmental">
                  Environmental Protection
                </SelectItem>
                <SelectItem value="traffic">Traffic & Transit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              Resolution Status
            </Label>
            <div className="flex flex-col gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="status-progress" defaultChecked />
                <Label
                  htmlFor="status-progress"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  In Progress
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="status-awaiting" defaultChecked />
                <Label
                  htmlFor="status-awaiting"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Awaiting Assessment
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="status-resolved" />
                <Label
                  htmlFor="status-resolved"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Resolved
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              Urgência
            </Label>
            <Select defaultValue="all">
              <SelectTrigger className="w-full text-sm bg-background">
                <SelectValue placeholder="Select division" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Divisions</SelectItem>
                <SelectItem value="public-works">
                  Dept. of Public Works
                </SelectItem>
                <SelectItem value="environmental">
                  Environmental Protection
                </SelectItem>
                <SelectItem value="traffic">Traffic & Transit</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-xl shadow-sm">
        <CardHeader className="flex flex-row items-center gap-2 border-b border-border p-4 space-y-0">
          <Gauge className="w-4 h-4 text-muted-foreground" />
          <CardTitle className="text-xs font-bold uppercase tracking-wider text-foreground">
            District Efficiency Matrix
          </CardTitle>
        </CardHeader>

        <CardContent className="p-4 flex flex-col gap-4">
          <div className="space-y-1.5">
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium text-foreground">
                District 1 (Downtown)
              </span>
              <span className="font-mono text-xs font-medium text-primary">
                94.2%
              </span>
            </div>
            <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-primary h-full rounded-full transition-all duration-500"
                style={{ width: "94.2%" }}
              ></div>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium text-foreground">
                District 4 (Northside)
              </span>
              <span className="font-mono text-xs font-medium text-primary">
                88.7%
              </span>
            </div>
            <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-primary h-full rounded-full transition-all duration-500"
                style={{ width: "88.7%" }}
              ></div>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium text-foreground">
                District 2 (West End)
              </span>
              <span className="font-mono text-xs font-medium text-muted-foreground">
                76.4%
              </span>
            </div>
            <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-muted-foreground h-full rounded-full transition-all duration-500"
                style={{ width: "76.4%" }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
