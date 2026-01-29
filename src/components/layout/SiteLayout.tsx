import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import youwareBgUrl from "../../assets/images/youware-bg.png";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="min-h-dvh">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url(${youwareBgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(0.9) contrast(1.05)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070a11]/40 via-[#070a11]/70 to-[#070a11]" />
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-sky-500/25 blur-3xl" />
        <div className="absolute -right-40 top-40 h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-100px,rgba(255,255,255,0.12),transparent_55%)]" />
      </div>

      <Header />

      <main className="pt-16">{children}</main>

      <Footer />
    </div>
  );
}

