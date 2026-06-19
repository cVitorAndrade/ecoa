"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@repo/ui/components/ui/field";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "O e-mail não pode estar vazio.")
    .email("Endereço de e-mail inválido."),
  password: z
    .string()
    .min(1, "A senha é obrigatória.")
    .min(8, "A senha deve ter no mínimo 8 caracteres.")
    .max(64, "A senha deve ter no máximo 64 caracteres."),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const loginForm = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log("Dados do formulário:", data);
  };

  return (
    <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-6">
      <FieldGroup>
        <Controller
          control={loginForm.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field className="gap-3">
              <FieldLabel htmlFor="email">
                E-mail Institucional ou Pessoal
              </FieldLabel>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="text-muted-foreground w-5 h-5" />
                </div>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="cidadao@exemplo.com.br"
                  className="pl-10"
                  aria-invalid={!!fieldState.error}
                />
              </div>
              {fieldState.error && (
                <FieldError>{fieldState.error.message}</FieldError>
              )}
            </Field>
          )}
        />

        <Controller
          control={loginForm.control}
          name="password"
          render={({ field, fieldState }) => (
            <Field className="gap-3">
              <div className="flex justify-between items-center">
                <FieldLabel htmlFor="password" className="mb-0">
                  Senha
                </FieldLabel>
                <a
                  href="#"
                  className="font-sans text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded-sm"
                >
                  Esqueceu a senha?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="text-muted-foreground w-5 h-5" />
                </div>
                <Input
                  {...field}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10"
                  aria-invalid={!!fieldState.error}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Mostrar senha"
                    className="text-muted-foreground hover:text-foreground focus:outline-none transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              {fieldState.error && (
                <FieldError>{fieldState.error.message}</FieldError>
              )}
            </Field>
          )}
        />
      </FieldGroup>

      <Button
        type="submit"
        className="w-full flex justify-center items-center gap-2 mt-2"
        disabled={loginForm.formState.isSubmitting}
      >
        Entrar na Plataforma
        <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );
}
