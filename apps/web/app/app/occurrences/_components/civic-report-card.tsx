"use client";

import React from "react";
import { cn } from "@repo/ui/lib/utils";
import { MapPin } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@repo/ui/components/ui/card";

const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn(
      "w-full rounded overflow-hidden hover:shadow-md transition-shadow duration-200",
      className,
    )}
    {...props}
  />
));
Root.displayName = "CivicReportCard.Root";

interface MediaProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
}
const Media = React.forwardRef<HTMLDivElement, MediaProps>(
  ({ className, src, alt = "Imagem do reporte", children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative h-48 w-full bg-muted border-b", className)}
      {...props}
    >
      <img alt={alt} className="w-full h-full object-cover" src={src} />
      {children && (
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {children}
        </div>
      )}
    </div>
  ),
);
Media.displayName = "CivicReportCard.Media";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardHeader
    ref={ref}
    className={cn(
      "flex flex-row justify-between items-start gap-4 space-y-0 pb-4",
      className,
    )}
    {...props}
  />
));
Header.displayName = "CivicReportCard.Header";

const HeaderInfo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-1.5", className)} {...props} />
));
HeaderInfo.displayName = "CivicReportCard.HeaderInfo";

const Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <CardTitle
    ref={ref}
    className={cn("font-heading text-xl md:text-2xl leading-none", className)}
    {...props}
  />
));
Title.displayName = "CivicReportCard.Title";

const Location = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-1.5 text-muted-foreground text-sm",
      className,
    )}
    {...props}
  >
    <MapPin className="w-4 h-4" />
    <span>{children}</span>
  </div>
));
Location.displayName = "CivicReportCard.Location";

const Meta = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-right flex flex-col items-end shrink-0 gap-1",
      className,
    )}
    {...props}
  />
));
Meta.displayName = "CivicReportCard.Meta";

const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardContent ref={ref} className={cn("space-y-5", className)} {...props} />
));
Content.displayName = "CivicReportCard.Content";

const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  />
));
Description.displayName = "CivicReportCard.Description";

const Grid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-muted/50 rounded-lg border",
      className,
    )}
    {...props}
  />
));
Grid.displayName = "CivicReportCard.Grid";

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}
const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, label, children, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1", className)} {...props}>
      <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <div className="text-sm font-medium">{children}</div>
    </div>
  ),
);
GridItem.displayName = "CivicReportCard.GridItem";

const OfficialResponse = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border-t border-border bg-primary/10 shadow-md rounded p-4",
      className,
    )}
    {...props}
  >
    <div className="border-l-2 border-primary pl-4 py-1">{children}</div>
  </div>
));
OfficialResponse.displayName = "CivicReportCard.OfficialResponse";

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardFooter
    ref={ref}
    className={cn(
      "flex flex-col md:flex-row justify-between items-center gap-4 pt-5",
      className,
    )}
    {...props}
  />
));
Footer.displayName = "CivicReportCard.Footer";

const FooterUsers = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-3 w-full md:w-auto", className)}
    {...props}
  />
));
FooterUsers.displayName = "CivicReportCard.FooterUsers";

const FooterActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2 w-full md:w-auto", className)}
    {...props}
  />
));
FooterActions.displayName = "CivicReportCard.FooterActions";

export const CivicReportCard = {
  Root,
  Media,
  Header,
  HeaderInfo,
  Title,
  Location,
  Meta,
  Content,
  Description,
  Grid,
  GridItem,
  OfficialResponse,
  Footer,
  FooterUsers,
  FooterActions,
};
