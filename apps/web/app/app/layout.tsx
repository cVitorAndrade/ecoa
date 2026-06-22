import React from "react";
import { Navbar } from "../../components/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[auto_1fr] h-full">
      <Navbar />
      {children}
    </div>
  );
}
