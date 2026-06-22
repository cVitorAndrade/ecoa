import React from "react";
import {
  ChevronRight,
  RefreshCw,
  AlertTriangle,
  BadgeCheck,
  Calendar,
  User,
  MapPin,
  ExternalLink,
  Users,
  Rocket,
  Clock,
  Share2,
  Bookmark,
  Camera,
  Building2,
  Hand,
  ShieldCheck,
  MessageSquare,
  ThumbsUp,
  MoreHorizontal,
  Send,
} from "lucide-react";

import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Separator } from "@repo/ui/components/ui/separator";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import { Textarea } from "@repo/ui/components/ui/textarea";

export default function ReportDetailsContent() {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Coluna Esquerda (Conteúdo Principal) */}
      <div className="lg:col-span-8 flex flex-col gap-8">
        {/* Cabeçalho, Breadcrumbs e Metadados */}
        <div className="flex flex-col gap-4">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-primary transition-colors">
              Ocorrências
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">ID</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Cratera na via principal
          </h1>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <Badge
              variant="outline"
              className="uppercase text-[10px] tracking-wider font-bold"
            >
              Infraestrutura
            </Badge>
            <Badge
              variant="default"
              className="uppercase text-[10px] tracking-wider flex items-center gap-1.5 font-bold"
            >
              <RefreshCw className="w-3 h-3" /> Em Andamento
            </Badge>
            <Badge
              variant="destructive"
              className="uppercase text-[10px] tracking-wider flex items-center gap-1.5 font-bold text-primary-foreground"
            >
              <AlertTriangle className="w-3 h-3" /> Alta Urgência
            </Badge>
            <Badge
              variant="secondary"
              className="uppercase text-[10px] tracking-wider flex items-center gap-1.5 text-primary bg-primary/10 hover:bg-primary/20 font-bold"
            >
              <BadgeCheck className="w-3.5 h-3.5" /> Verificado
            </Badge>
          </div>

          {/* Metadados */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mt-4 pb-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2023-10-24T14:30">24 Out 2023, 14:30</time>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>
                Por{" "}
                <a
                  href="#"
                  className="text-primary hover:underline font-medium"
                >
                  Cidadão_084
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <a
                href="#"
                className="hover:text-primary transition-colors flex items-center gap-1.5"
              >
                Av. Paulista, 1578 - Bela Vista
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Ações de Engajamento */}
        <div className="flex flex-wrap gap-3">
          <Button className="flex-1 min-w-[140px] gap-2 h-11">
            <Users className="w-4 h-4" />
            Fui Afetado
          </Button>
          <Button
            variant="outline"
            className="flex-1 min-w-[140px] gap-2 h-11 border-primary text-primary hover:bg-primary/5"
          >
            <Rocket className="w-4 h-4" />
            Impulsionar
          </Button>
          <Button
            variant="secondary"
            className="flex-1 min-w-[140px] gap-2 h-11 text-primary bg-primary/10 hover:bg-primary/20"
          >
            <Clock className="w-4 h-4" />
            Ainda está assim
          </Button>
          <div className="flex gap-2 ml-auto w-full sm:w-auto">
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 shrink-0 text-muted-foreground"
              title="Compartilhar"
            >
              <Share2 className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 shrink-0 text-muted-foreground"
              title="Salvar"
            >
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Galeria de Mídia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative rounded-lg overflow-hidden border border-border bg-muted h-[280px]">
            {/* Substitua o src pela sua imagem real */}
            <img
              alt="Cratera na via"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800"
            />
            <Badge
              variant="secondary"
              className="absolute top-3 left-3 shadow-sm bg-background/90 backdrop-blur font-bold text-[10px]"
            >
              ANTES
            </Badge>
          </div>
          <div className="relative rounded-lg overflow-hidden border-2 border-dashed border-border bg-muted/30 h-[280px] flex flex-col items-center justify-center text-muted-foreground transition-colors hover:bg-muted/50">
            <Camera className="w-10 h-10 mb-3 opacity-40" />
            <span className="text-xs font-bold uppercase tracking-wider opacity-70">
              Aguardando foto da resolução
            </span>
          </div>
        </div>

        {/* Descrição */}
        <Card className="shadow-none border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">Descrição</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              Apareceu uma cratera enorme na faixa da direita da Avenida
              Paulista, próximo ao número 1578, sentido Consolação. O buraco
              está aumentando a cada dia devido às chuvas recentes e ao tráfego
              pesado de ônibus.
              <br />
              <br />
              Já vi três carros furarem o pneu ali só esta semana. Representa um
              risco grave de acidentes, especialmente à noite ou quando chove e
              o buraco fica coberto de água, impossível de ver. Solicito reparo
              urgente antes que aconteça algo pior.
            </p>
          </CardContent>
        </Card>

        {/* Resposta Oficial */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-background rounded-full border border-border flex items-center justify-center shrink-0 shadow-sm">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-2">
                <h3 className="text-lg font-bold text-foreground">
                  Secretaria de Obras
                </h3>
                <BadgeCheck className="w-4 h-4 text-primary fill-primary/20" />
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                Agradecemos o relato. Uma equipe técnica foi enviada ao local na
                manhã de hoje para sinalização provisória e avaliação da base
                asfáltica. O recapeamento estrutural está programado para o
                próximo final de semana, visando minimizar o impacto no trânsito
                local.
              </p>
              <div className="inline-flex items-center gap-2 bg-background border border-border px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                Previsão de Resolução: 29 Out 2023
              </div>
            </div>
          </div>
        </div>

        <Card className="shadow-sm border-border overflow-hidden">
          <CardContent className="flex flex-col sm:flex-row gap-6 p-6">
            {/* Lado Esquerdo: Informações e Avatares */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-1 tracking-tight">
                Community Impact
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                This issue is significantly impacting local transit and daily
                commutes.
              </p>

              <div className="flex items-center gap-3">
                {/* Grupo de Avatares (Social Proof) */}
                <div className="flex -space-x-2">
                  <Avatar className="w-8 h-8 border-2 border-background">
                    <AvatarImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlSwe6hOgLNQ20fZoPIkl6vWqU6WlVsF-iCB0vynD5Rp7AAEWxFYKe9WrbnhVGYY-A5Am05DZmZIxi3XS8a1m1dwfevjSBhobfbmTTUZEB2VKrxo8pAJZG0g_zIQ_-mRNoTLp8VQQZAtnWLxA36xMeMiwDInNNQzlt5PMEZSNP_0gZVSR4_1q1wwbF_JgBy9kiqX8UvVvyK2CMlevs03xd_EoaICFx2q7Q1O_D_G5p1mCMR2OYZ9xxQdF8u3c9tA6sCVfrNYgr9-c"
                      alt="Neighbor"
                    />
                    <AvatarFallback>N1</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-background">
                    <AvatarImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAquia62XCUz70uXOEYdSZEfZsCPdJ3mfHSuRaN_WNWtFU_B2yRskEP36ODyzCtQ4LJC2e9g5m6076bkE_oRfQuTqTeYCtEW5iZ8ugXwNeD78YAjDb6m62ObFn-IqtccH4XNMwMeCOxd4LPYS2DPbjEpUdlHKOAOWDAVNVKytRn1p2zZVPQe-XJMPTkBwod7-SEoelCND-NL-RK0VUNCOVhf-jhgwUJotTBsOdIsFIQVdXZRNFZ66Dx-LapPNjfagrpOHPy0M723WE"
                      alt="Neighbor"
                    />
                    <AvatarFallback>N2</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-background">
                    <AvatarImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkNQZzVqY8o60Chqf5HoZLEE3YboB9eGmGQKBjfiPw3wnZbJ-FJYAS-0wOrcCCHUHT6jaqOgBaKN5mUhsBaPn63IDFD7c9FCQ2i2YZ-BVE8Gbx9h8lljFqjbiMocbpzar8V-AMWNHqhYu6zWXNrJ_s0uNeusKViXZeV-hCR0nmwc9T8evHsocmm2i8ebAMrNBBiy6F2-MwbgbEBTEykzsXO-S7X4wnzhZWmCbP-pclYtMxbuUQCWhn5OVbsEX0K2kouqtGB6CNotc"
                      alt="Neighbor"
                    />
                    <AvatarFallback>N3</AvatarFallback>
                  </Avatar>
                  {/* Indicador de "mais pessoas" */}
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground z-10">
                    +12
                  </div>
                </div>

                <span className="text-sm font-bold text-primary">
                  152 Cidadãos Affected
                </span>
              </div>
            </div>

            {/* Lado Direito: Ação (Com divisor responsivo) */}
            <div className="flex items-center justify-center sm:border-l border-border sm:pl-6 pt-5 sm:pt-0 border-t sm:border-t-0 mt-2 sm:mt-0">
              <Button className="w-full sm:w-auto h-11 px-6 font-semibold gap-2 shadow-sm">
                <Hand className="w-4 h-4" />I am also affected
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 shadow-none border-border">
          {/* Cabeçalho do Card */}
          <CardHeader className="pb-4 flex flex-row items-start justify-between space-y-0">
            <div className="space-y-1.5">
              <CardTitle className="text-xl">Discussion</CardTitle>
              <CardDescription>
                Join the conversation, add updates, or track official responses.
              </CardDescription>
            </div>
            <Badge
              variant="secondary"
              className="hidden sm:inline-flex shadow-none"
            >
              2 Comments
            </Badge>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Área de Input de Comentário */}
            <div className="flex gap-4">
              <Avatar className="w-10 h-10 border border-border shrink-0">
                <AvatarImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqfM3kRPVsmv5xBUW2iYsEBwU8LoJWl7riqX9E2OaCb60XniM7PskwcIIXfXfF0FZQzroJX-iOodz-F4Phg2KzW18g-EPOq__fZmbzJvFc5bWYjAXMa1FlCoCv0FpsqJJGT7XqkSorlt4Gr2pgJwVxzP3fOL8YRObWndtfqnRbA9yye9C9KfngnIJ_pV1jcO2zsBuDBHzoKI0VzANTljOMXSt55Lky8fykn5OKm57E-G6YkrqKK2KmoIJAGEMKrsn3To4zdrt8kUI"
                  alt="Your profile"
                />
                <AvatarFallback>EU</AvatarFallback>
              </Avatar>

              <div className="flex-1 flex flex-col gap-3">
                <Textarea
                  placeholder="Add an update or comment..."
                  className="resize-none min-h-[100px] shadow-sm bg-background focus-visible:ring-1"
                />
                <div className="flex justify-end">
                  <Button className="gap-2 font-semibold shadow-sm h-9 px-4">
                    <Send className="w-4 h-4" />
                    Post Comment
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            {/* Lista de Comentários */}
            <div className="flex flex-col gap-6">
              {/* Comentário 1: Cidadão */}
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border border-border shrink-0">
                  <AvatarImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK4IFhRqJ2zfyrYUkAPzFHqp42r7vgm2fJiY_pyflZKrhTS5wB-auMotOs2q9NcvxxsiSSDFK5GK-9vigt8IZNTaISE96EltEKZmZUk2SXBVusup8WbCBUYBxjX6PdJp0xWrYGCC309h239hECDnebWbl2aYcrCQYql1d8iCci16JczM9ZDiLO26QxKnj4crwR5_I8MOOPrTLDBXUdipCGaJjHex8UOv1aSNPNez50Bd9OQuRmVnZtk4ZYZeczJdL8gyVs70RTLfI"
                    alt="Michael R."
                  />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>

                {/* Fundo sutil (muted) para diferenciar do fundo do Card */}
                <div className="flex-1 bg-muted/50 rounded-xl p-4 sm:p-5 border border-border/50">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-foreground">
                        Michael R.
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        2 hours ago
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 -mr-2 -mt-2 text-muted-foreground hover:text-foreground"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>

                  <p className="text-sm text-foreground/90 leading-relaxed">
                    I popped a tire here yesterday. The city really needs to
                    address this before winter sets in and makes it worse. I've
                    uploaded another photo of the secondary hole forming near
                    the curb.
                  </p>

                  <div className="mt-4 flex items-center gap-2 -ml-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-1.5 text-muted-foreground hover:text-primary"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>24</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-1.5 text-muted-foreground hover:text-foreground"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>

              {/* Comentário 2: Representante Oficial */}
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border border-border shrink-0">
                  <AvatarImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBelNiVbCgrPM2ih3PmBoN0VlnXpQcxwLqXUFrfPcA1AUvgK0kCcCET6SO4LJPu2PaL4PZhGdoKDTZDfYnDHTklN_hfB9JGS0hC9ns-O5rlSWrewJnr96JeDt3iNLgHA_KqxeQxMeKMTHey8O-yLNTZQF1Jz1uKUK3FRCnxFqGhPf3-mxud1Q17wh1kNWAdinFzevG14cbqZVgPJ4R1ixTBnCd74bogQspiFFak3Sr2E9XtxZQs_sz1aTkjUPZGNj7DZ1ZkvwXRgjQ"
                    alt="Dept. of Public Works"
                  />
                  <AvatarFallback>DPW</AvatarFallback>
                </Avatar>

                <div className="flex-1 bg-primary/5 rounded-xl p-4 sm:p-5 border border-primary/20 border-l-4 border-l-primary">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-sm font-bold text-foreground">
                        Dept. of Public Works
                      </span>
                      <Badge
                        variant="default"
                        className="uppercase text-[10px] tracking-wider px-1.5 py-0 h-5 gap-1 shadow-none"
                      >
                        <ShieldCheck className="w-3 h-3" /> Official
                      </Badge>
                      <span className="text-xs font-medium text-muted-foreground">
                        1 day ago
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Thank you for the report. A crew has been dispatched to
                    assess the site. Temporary fill will be applied within 48
                    hours pending weather conditions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Histórico/Timeline */}
        <Card className="shadow-none border-border">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl">Histórico da Ocorrência</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative border-l-2 border-border ml-3 space-y-8">
              {/* Timeline Item 1 */}
              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-primary rounded-full ring-4 ring-background"></div>
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                  Hoje, 09:15
                </div>
                <div className="text-base font-semibold text-foreground">
                  Análise Técnica Concluída
                </div>
                <div className="text-sm text-muted-foreground mt-0.5">
                  Equipe de obras avaliou o local e programou reparo.
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-muted border-2 border-primary rounded-full ring-4 ring-background"></div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                  Ontem, 16:40
                </div>
                <div className="text-base font-semibold text-foreground">
                  Ocorrência Verificada
                </div>
                <div className="text-sm text-muted-foreground mt-0.5">
                  Sistema CivicPulse confirmou duplicidade e relevância.
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-muted border-2 border-border rounded-full ring-4 ring-background"></div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                  24 Out 2023, 14:30
                </div>
                <div className="text-base font-semibold text-foreground">
                  Relato Criado
                </div>
                <div className="text-sm text-muted-foreground mt-0.5">
                  Registrado por Cidadão_084.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coluna Direita (Sidebar) */}
      <aside className="lg:col-span-4 relative">
        <div className="sticky top-24 flex flex-col gap-6">
          {/* Card de Estatísticas */}
          <Card className="shadow-sm border-border">
            <CardContent className="p-0 grid grid-cols-2 divide-x divide-border">
              <div className="flex flex-col items-center justify-center p-6">
                <span className="text-4xl font-bold text-primary tracking-tighter">
                  142
                </span>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-2">
                  Afetados
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-6">
                <span className="text-4xl font-bold text-muted-foreground tracking-tighter">
                  89
                </span>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-2">
                  Impulsos
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Mini Mapa */}
          <Card className="shadow-sm overflow-hidden border-border flex flex-col">
            <div className="h-48 bg-muted relative">
              {/* Substitua pela imagem do mapa estático real */}
              <img
                alt="Visualização do Mapa"
                className="w-full h-full object-cover opacity-90"
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="drop-shadow-lg">
                  <MapPin className="w-12 h-12 fill-primary text-background" />
                </div>
              </div>
            </div>
            <div className="p-4 bg-card flex justify-between items-center border-t border-border">
              <span className="text-sm text-muted-foreground">
                Bela Vista, São Paulo
              </span>
              <a
                href="#"
                className="text-xs font-bold text-primary uppercase tracking-wider hover:underline"
              >
                Ver no Mapa
              </a>
            </div>
          </Card>

          {/* Índice do Bairro */}
          <Card className="shadow-sm border-border">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-foreground">
                  Índice do Bairro
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Qualidade da Infraestrutura
                </p>
              </div>
              <div className="w-12 h-12 rounded-full border-[3px] border-primary flex items-center justify-center text-lg font-bold text-primary">
                6.2
              </div>
            </CardContent>
          </Card>

          {/* Relacionados */}
          <Card className="shadow-sm border-border">
            <CardHeader className="pb-3 pt-5 px-5">
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Na mesma rua
              </CardTitle>
            </CardHeader>
            <CardContent className="px-5 pb-5">
              <ul className="flex flex-col">
                <li>
                  <a href="#" className="block group pb-3">
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      Semáforo apagado cruzamento
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive"></span>{" "}
                      Pendente · 120m
                    </div>
                  </a>
                </li>
                <Separator />
                <li>
                  <a href="#" className="block group pt-3">
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      Calçada esburacada
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>{" "}
                      Resolvido · 350m
                    </div>
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </aside>
    </div>
  );
}
