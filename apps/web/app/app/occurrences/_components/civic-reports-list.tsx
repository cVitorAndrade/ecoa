"use client";

import React from "react";
import {
  AlertTriangle,
  CheckCircle2,
  UserRound,
  Rocket,
  Share2,
  BadgeCheck,
  Clock,
} from "lucide-react";

import { CivicReportCard } from "./civic-report-card";

import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@repo/ui/components/ui/avatar";
import { Separator } from "@repo/ui/components/ui/separator";

const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAlTU6jChei5c-ugJfdpLjEYuvvqkxTEtduagnmiLzwXUZ6W-UbRoZaH6lvbO7U7Mknj5Zdg46TTNoh75xI_jedx6Tc7PKWFE0Da6PzvsAs6A3-on5RdC8VxCV_cvaBrmMODSRcwBH5oFY11kAywRohnN-AQdc6yy42Xds1Lb88GKFSO1w36tZJ3V8vMwbVhna3diKd3Xm1urrQaRuz5JoZ63TmIHc_26lQipnbMP98rfXG9fl1HqT3Tvi-IgojOLMs1Iw3gTF-GmY";

const DEFAULT_AVATARS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDoaJ0PP2wdrt-sbvdeW1DMzW4XVsDf3wmvQjURSA0KdgTD5ZThtJQgSdakjnsrYQKcGMkZx-hkyKDwiGxs5sbHSHELTsG3QexwRordMqSsaSZa1tpKxTASgWvj5Vx9PNG0o-8iCpZbWyki3-aIyaxmxRr1tF2YOF9Y13-BAQaqO0Rk8O7KbhZq25MgDZq66rF6qFYX7mIAOXPEl5WLHlqXpZiqqV-e9ZoQh-SPJ9XY6SIAcS_CpIC_aDkQ29GM3umVfcb2qw_0k6Q",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuApRtZ6GTTg8WVQ9LHZUQK45qKuyP5niFLcbbqE5kjSlvq6jl8mEaDC4XlBnl8CoBzLRbbGg5UNIoKnSfIS-LmLTs24DhHKcMGMt5dfCikPIupAtT8UMGvxAG5T0UN7U493IILQfPNY7OwBxuBBq2C7XP76NXIoox3VkeSL3zM0x4phpX28CQ_FT3iZg5I3319uz1f7-yt93TTlYdPlSAbG_nBwBKMeugEEShlybO3y2lpt9dI4KWgKHiRtz95jT_j1eIIbT94f-vs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDWbGQzmzFeKgsZaXaUxHCN5JQfcGfrU1Jmu8331rRM8wHLiHTFyPRnVZT2YtSb_XLwLLO8-YZQF6q_BYyLMzL9Zt9xiP6of-Xc-GgqLEFSkHFKVxBwAgBiLqosOJi9Y8mUFbNDVdkmZuJJcewRQGXK9Ll4WyxOtIKuDwjSGvtbiGoe1Ib0HgmaJH3ujHPHkIWBAb6HY_-ZjuouH8SpeWWwf7zgi9EXEq9k3BMUis1xqoZF25gJKJC3e0RiUAn4LH3L__o8SGD5T0k",
];

const mockReports = [
  {
    id: "PRT-2024-0910",
    title: "Vazamento de água em via pública",
    location: "Rua das Flores, 245 - Centro",
    timeAgo: "Aberto há 2 dias",
    status: { label: "Em Análise", variant: "secondary" as const },
    priority: {
      label: "ALTA",
      variant: "destructive" as const,
      icon: AlertTriangle,
    },
    image: DEFAULT_IMAGE,
    description:
      "Vazamento constante de água próximo ao meio-fio, causando desperdício e deterioração do asfalto.",
    category: "Saneamento",
    agency: "Companhia de Água",
    coordinates: "-23.551, -46.634",
    reportedBy: { name: "Ana Souza", verified: true },
    affectedCount: 27,
    avatars: DEFAULT_AVATARS,
    officialResponse: null,
  },
  {
    id: "PRT-2024-0911",
    title: "Acúmulo de lixo em terreno baldio",
    location: "Rua José Bonifácio, 88 - Vila Nova",
    timeAgo: "Aberto há 6 dias",
    status: { label: "Pendente", variant: "secondary" as const },
    priority: {
      label: "MÉDIA",
      variant: "default" as const,
      icon: Clock,
    },
    image: DEFAULT_IMAGE,
    description:
      "Grande quantidade de lixo descartada irregularmente, atraindo insetos e animais.",
    category: "Limpeza Urbana",
    agency: "Secretaria de Serviços Urbanos",
    coordinates: "-23.547, -46.642",
    reportedBy: { name: "Pedro Lima", verified: false },
    affectedCount: 19,
    avatars: DEFAULT_AVATARS,
    officialResponse: null,
  },
  {
    id: "PRT-2024-0912",
    title: "Semáforo com defeito",
    location: "Av. Central, 1200 - Jardim América",
    timeAgo: "Aberto há 12 horas",
    status: { label: "Em Atendimento", variant: "default" as const },
    priority: {
      label: "ALTA",
      variant: "destructive" as const,
      icon: AlertTriangle,
    },
    image: DEFAULT_IMAGE,
    description:
      "Semáforo permanece piscando em amarelo durante todo o dia, causando riscos de acidentes.",
    category: "Trânsito",
    agency: "Departamento de Trânsito",
    coordinates: "-23.553, -46.645",
    reportedBy: { name: "Carlos Mendes", verified: true },
    affectedCount: 58,
    avatars: DEFAULT_AVATARS,
    officialResponse: {
      date: "Hoje, 09:10",
      message:
        "Equipe técnica acionada para manutenção emergencial do equipamento.",
      forecast: "23/06",
    },
  },
  {
    id: "PRT-2024-0913",
    title: "Árvore caída bloqueando calçada",
    location: "Rua Harmonia, 510 - Vila Madalena",
    timeAgo: "Aberto há 1 dia",
    status: { label: "Resolvido", variant: "outline" as const },
    priority: {
      label: "ALTA",
      variant: "destructive" as const,
      icon: AlertTriangle,
    },
    image: DEFAULT_IMAGE,
    description:
      "Árvore caiu após ventania e bloqueou completamente a passagem de pedestres.",
    category: "Áreas Verdes",
    agency: "Secretaria do Verde",
    coordinates: "-23.561, -46.689",
    reportedBy: { name: "Fernanda Rocha", verified: true },
    affectedCount: 12,
    avatars: DEFAULT_AVATARS,
    officialResponse: {
      date: "Ontem, 16:20",
      message: "Equipe realizou a remoção da árvore e liberou a passagem.",
      forecast: "Concluído",
    },
  },
  {
    id: "PRT-2024-0914",
    title: "Pichação em patrimônio público",
    location: "Praça da República - Centro",
    timeAgo: "Aberto há 4 dias",
    status: { label: "Em Análise", variant: "secondary" as const },
    priority: {
      label: "BAIXA",
      variant: "outline" as const,
      icon: Clock,
    },
    image: DEFAULT_IMAGE,
    description:
      "Monumento histórico foi alvo de vandalismo durante a madrugada.",
    category: "Patrimônio Público",
    agency: "Secretaria de Cultura",
    coordinates: "-23.544, -46.642",
    reportedBy: { name: "Lucas Martins", verified: false },
    affectedCount: 8,
    avatars: DEFAULT_AVATARS,
    officialResponse: null,
  },
  {
    id: "PRT-2024-0915",
    title: "Ponto de ônibus danificado",
    location: "Av. Brasil, 3200 - Jardim Paulista",
    timeAgo: "Aberto há 8 horas",
    status: { label: "Pendente", variant: "secondary" as const },
    priority: {
      label: "MÉDIA",
      variant: "default" as const,
      icon: Clock,
    },
    image: DEFAULT_IMAGE,
    description:
      "Cobertura quebrada e assentos danificados, dificultando o uso pelos passageiros.",
    category: "Mobilidade Urbana",
    agency: "SPTrans",
    coordinates: "-23.567, -46.662",
    reportedBy: { name: "Mariana Alves", verified: true },
    affectedCount: 33,
    avatars: DEFAULT_AVATARS,
    officialResponse: null,
  },
  {
    id: "PRT-2024-0916",
    title: "Bueiro entupido",
    location: "Rua Vergueiro, 980 - Liberdade",
    timeAgo: "Aberto há 3 dias",
    status: { label: "Em Atendimento", variant: "default" as const },
    priority: {
      label: "ALTA",
      variant: "destructive" as const,
      icon: AlertTriangle,
    },
    image: DEFAULT_IMAGE,
    description:
      "Durante chuvas ocorre alagamento frequente devido ao entupimento da rede pluvial.",
    category: "Drenagem",
    agency: "Secretaria de Obras",
    coordinates: "-23.573, -46.639",
    reportedBy: { name: "Ricardo Nunes", verified: true },
    affectedCount: 45,
    avatars: DEFAULT_AVATARS,
    officialResponse: {
      date: "Hoje, 08:45",
      message: "Limpeza programada para os próximos dias.",
      forecast: "25/06",
    },
  },
  {
    id: "PRT-2024-0917",
    title: "Barulho excessivo em obra",
    location: "Rua Oscar Freire, 1400 - Pinheiros",
    timeAgo: "Aberto há 18 horas",
    status: { label: "Em Análise", variant: "secondary" as const },
    priority: {
      label: "BAIXA",
      variant: "outline" as const,
      icon: Clock,
    },
    image: DEFAULT_IMAGE,
    description:
      "Obra iniciando atividades antes do horário permitido pela legislação municipal.",
    category: "Fiscalização",
    agency: "Secretaria de Urbanismo",
    coordinates: "-23.561, -46.678",
    reportedBy: { name: "Juliana Costa", verified: false },
    affectedCount: 9,
    avatars: DEFAULT_AVATARS,
    officialResponse: null,
  },
  {
    id: "PRT-2024-0918",
    title: "Faixa de pedestres apagada",
    location: "Av. Rebouças, 750 - Pinheiros",
    timeAgo: "Aberto há 9 dias",
    status: { label: "Pendente", variant: "secondary" as const },
    priority: {
      label: "MÉDIA",
      variant: "default" as const,
      icon: Clock,
    },
    image: DEFAULT_IMAGE,
    description:
      "Sinalização horizontal praticamente invisível, dificultando a travessia segura.",
    category: "Trânsito",
    agency: "Departamento de Trânsito",
    coordinates: "-23.557, -46.671",
    reportedBy: { name: "Eduardo Silva", verified: true },
    affectedCount: 24,
    avatars: DEFAULT_AVATARS,
    officialResponse: null,
  },
  {
    id: "PRT-2024-0919",
    title: "Praça sem iluminação",
    location: "Praça das Palmeiras - Vila Mariana",
    timeAgo: "Aberto há 5 dias",
    status: { label: "Em Atendimento", variant: "default" as const },
    priority: {
      label: "ALTA",
      variant: "destructive" as const,
      icon: AlertTriangle,
    },
    image: DEFAULT_IMAGE,
    description:
      "Diversos postes estão apagados, deixando a praça completamente escura durante a noite.",
    category: "Iluminação",
    agency: "Ilume",
    coordinates: "-23.585, -46.633",
    reportedBy: { name: "Gabriel Santos", verified: true },
    affectedCount: 61,
    avatars: DEFAULT_AVATARS,
    officialResponse: {
      date: "Ontem, 18:00",
      message: "Equipe de manutenção identificou falha na rede elétrica local.",
      forecast: "24/06",
    },
  },
];

export default function CivicReportList() {
  return (
    <div className="flex flex-col gap-8 mx-auto">
      {mockReports.map((report) => (
        <CivicReportCard.Root key={report.id}>
          <CivicReportCard.Media src={report.image} alt={report.title}>
            <Badge variant={report.status.variant} className="shadow-sm">
              {report.status.label}
            </Badge>
            <Badge
              variant={report.priority.variant}
              className="shadow-sm flex gap-1 items-center"
            >
              <report.priority.icon className="w-3.5 h-3.5" />
              {report.priority.label}
            </Badge>
          </CivicReportCard.Media>

          <CivicReportCard.Header>
            <CivicReportCard.HeaderInfo>
              <CivicReportCard.Title>{report.title}</CivicReportCard.Title>
              <CivicReportCard.Location>
                {report.location}
              </CivicReportCard.Location>
            </CivicReportCard.HeaderInfo>

            <CivicReportCard.Meta>
              <span className="font-mono text-xs text-muted-foreground">
                #{report.id}
              </span>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {report.timeAgo}
              </span>
            </CivicReportCard.Meta>
          </CivicReportCard.Header>

          <CivicReportCard.Content>
            <CivicReportCard.Description>
              {report.description}
            </CivicReportCard.Description>

            <CivicReportCard.Grid>
              <CivicReportCard.GridItem label="Categoria">
                {report.category}
              </CivicReportCard.GridItem>

              <CivicReportCard.GridItem label="Agência">
                {report.agency}
              </CivicReportCard.GridItem>

              <CivicReportCard.GridItem label="Coordenadas">
                <span className="font-mono text-xs mt-0.5">
                  {report.coordinates}
                </span>
              </CivicReportCard.GridItem>

              <CivicReportCard.GridItem label="Reportado por">
                <div className="flex items-center gap-1">
                  <span>{report.reportedBy.name}</span>
                  {report.reportedBy.verified && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  )}
                </div>
              </CivicReportCard.GridItem>
            </CivicReportCard.Grid>

            {report.officialResponse && (
              <CivicReportCard.OfficialResponse>
                <div className="flex items-center gap-2 mb-2">
                  <BadgeCheck className="w-4 h-4 text-primary" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
                    Resposta Oficial da Prefeitura
                  </h3>
                  <span className="text-xs text-muted-foreground ml-auto">
                    {report.officialResponse.date}
                  </span>
                </div>

                <p className="text-sm italic text-foreground/80 leading-relaxed">
                  {report.officialResponse.message}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-border"></div>
                  </div>
                  <div className="h-0.5 w-8 bg-border"></div>

                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary ring-2 ring-primary/20 animate-pulse"></div>
                  </div>
                  <div className="h-0.5 w-8 bg-border/50"></div>

                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-transparent border-2 border-border"></div>
                  </div>

                  <span className="ml-2 uppercase tracking-wide">
                    Previsão: {report.officialResponse.forecast}
                  </span>
                </div>
              </CivicReportCard.OfficialResponse>
            )}
          </CivicReportCard.Content>

          <Separator />

          <CivicReportCard.Footer>
            <CivicReportCard.FooterUsers>
              {report.avatars.length > 0 && (
                <div className="flex -space-x-2">
                  {report.avatars.map((avatar, index) => (
                    <Avatar
                      key={index}
                      className="w-7 h-7 border-2 border-background"
                    >
                      <AvatarImage src={avatar} />
                      <AvatarFallback>U{index + 1}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              )}
              <span className="text-xs text-muted-foreground">
                Você e outras{" "}
                <strong className="font-medium text-foreground">
                  {report.affectedCount} pessoas
                </strong>{" "}
                foram afetadas
              </span>
            </CivicReportCard.FooterUsers>

            <CivicReportCard.FooterActions>
              <Button className="flex-1 md:flex-none gap-2">
                <UserRound className="w-4 h-4" />
                Fui Afetado
              </Button>

              <Button variant="outline" className="flex-1 md:flex-none gap-2">
                <Rocket className="w-4 h-4" />
                Impulsionar
              </Button>

              <Button variant="ghost" size="icon" aria-label="Compartilhar">
                <Share2 className="w-4 h-4 text-muted-foreground" />
              </Button>
            </CivicReportCard.FooterActions>
          </CivicReportCard.Footer>
        </CivicReportCard.Root>
      ))}
    </div>
  );
}
