import React from "react";
import {
  Download,
  LayoutList,
  ArrowUpDown,
  Clock,
  AlertCircle,
  UserSquare2,
} from "lucide-react";

// Importe os componentes do Shadcn conforme a sua estrutura
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@repo/ui/components/ui/card";
import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";

import CivicReportList from "./civic-reports-list";

export default function OccurrencesDashboard() {
  return (
    <Card className="col-span-2 rounded-xl shadow-sm flex flex-col overflow-hidden border-border">
      <CardHeader className="border-b border-border px-6 py-5 bg-card space-y-4">
        {/* Topo do Header: Título e Ações (Sem redundância com a sidebar) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Área de Título e Descrição */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <LayoutList className="w-5 h-5 text-primary" />
              <CardTitle className="text-xl font-bold tracking-tight">
                Feed de Ocorrências
              </CardTitle>
              <Badge variant="secondary" className="ml-2 font-medium">
                24 Novas
              </Badge>
            </div>
            <CardDescription className="text-sm text-muted-foreground">
              Acompanhe os relatos da comunidade e gerencie suas atribuições.
            </CardDescription>
          </div>

          {/* Área de Ações: Ordenação e Exportação */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            {/* Controle de Ordenação (Complementa os filtros da sidebar) */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground hidden lg:block">
                Ordenar por:
              </span>
              <Select defaultValue="recent">
                <SelectTrigger className="w-[160px] h-9 bg-background shadow-sm">
                  <ArrowUpDown className="w-4 h-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="Ordenação" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Mais Recentes</SelectItem>
                  <SelectItem value="oldest">Mais Antigas</SelectItem>
                  <SelectItem value="urgency">Maior Urgência</SelectItem>
                  <SelectItem value="updates">Últimas Atualizações</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Botão de Exportação */}
            <Button
              variant="outline"
              size="sm"
              className="h-9 hidden sm:flex gap-2 shadow-sm"
            >
              <Download className="h-4 w-4 text-muted-foreground" />
              <span>Exportar</span>
            </Button>
          </div>
        </div>

        {/* Bottom do Header: Visualizações de Contexto.
          Em vez de Status (que já estão na sidebar), usamos contextos de trabalho (Inbox).
        */}
        <div className="pt-2 -mb-5">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-transparent border-b border-border w-full justify-start h-auto p-0 rounded-none gap-6">
              <TabsTrigger
                value="all"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-1 pb-3 pt-2 font-medium flex gap-2 items-center"
              >
                <LayoutList className="w-4 h-4" />
                Todas
              </TabsTrigger>
              <TabsTrigger
                value="overdue"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-destructive data-[state=active]:text-destructive data-[state=active]:bg-transparent data-[state=active]:shadow-none px-1 pb-3 pt-2 font-medium flex gap-2 items-center text-muted-foreground"
              >
                <Clock className="w-4 h-4" />
                Em Atraso (SLA)
              </TabsTrigger>
              <TabsTrigger
                value="critical"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:text-orange-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-1 pb-3 pt-2 font-medium flex gap-2 items-center text-muted-foreground"
              >
                <AlertCircle className="w-4 h-4" />
                Críticas
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-6 bg-muted/10 grow">
        <CivicReportList />
      </CardContent>
    </Card>
  );
}
