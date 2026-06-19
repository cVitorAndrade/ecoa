import { Landmark, Globe, Leaf } from "lucide-react";
import { LoginForm } from "./_components/login-form";

export default function LoginPage() {
  return (
    <main className="row flex flex-col md:flex-row w-full min-h-screen bg-background text-foreground antialiased font-body">
      <section
        aria-label="Imagem de destaque"
        className="hidden md:flex md:w-1/2 lg:w-7/12 relative bg-muted overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2444&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-primary/40 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-end p-12 lg:p-16 h-full w-full text-white">
          <h2 className="font-heading text-4xl font-bold mb-4 drop-shadow-md">
            Transparência Cidadã
          </h2>
          <p className="font-body text-lg max-w-lg text-white/90 drop-shadow">
            Participe ativamente da gestão da sua cidade. Uma plataforma segura
            e oficial para relatar, acompanhar e resolver problemas urbanos.
          </p>
        </div>
      </section>

      <section className="grow md:w-1/2 lg:w-5/12 bg-card flex flex-col justify-between relative shadow-[-4px_0_24px_rgba(0,0,0,0.05)] z-20">
        <header className="w-full p-8 lg:p-12 flex justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <Leaf className="text-primary w-8 h-8" />
            <h1 className="font-heading text-2xl font-bold text-primary tracking-tight">
              Ecoa
            </h1>
          </div>
        </header>

        <div className="w-full max-w-md mx-auto px-8 md:px-0 py-6 grow flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Acesse sua conta
            </h2>
            <p className="font-body text-base text-muted-foreground">
              Insira suas credenciais para continuar.
            </p>
          </div>

          <LoginForm />

          <div className="relative my-8">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center"
            >
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-card font-body text-sm text-muted-foreground">
                Ou continue com
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-border rounded-md bg-background hover:bg-muted transition-colors duration-150 font-sans text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <Landmark className="text-secondary-foreground w-5 h-5" />
              Gov.br
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-border rounded-md bg-background hover:bg-muted transition-colors duration-150 font-sans text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <Globe className="text-secondary-foreground w-5 h-5" />
              Google
            </button>
          </div>

          <p className="mt-8 text-center font-body text-sm text-muted-foreground">
            Novo na plataforma?{" "}
            <a
              href="#"
              className="font-sans text-sm font-semibold text-primary hover:text-primary/80 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded-sm px-1 py-0.5"
            >
              Criar uma conta
            </a>
          </p>
        </div>

        <footer className="w-full py-6 px-8 flex justify-center items-center bg-card">
          <p className="font-body text-xs text-muted-foreground/70">
            Versão 1.0.0-beta
          </p>
        </footer>
      </section>
    </main>
  );
}
