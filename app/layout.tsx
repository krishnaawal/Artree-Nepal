import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";
import "./reference.css";
import "./full-ui.css";
import "./about.css";
import "./about-cleanup.css";
import "./about-preview.css";
import "./logo.css";
import "./hero-gif.css";
import "./audio.css";
import AmbientAudio from "./components/ambient-audio";

export const metadata: Metadata = {
  title: "ArTree Nepal — Artists in common",
  description: "ArTree Nepal is an artist collective making space for memory, resistance, and new ways of seeing.",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: { title: "ArTree Nepal — Artists in common", description: "An Indigenous artist collective from Kathmandu, Nepal.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<AmbientAudio /></body></html>;
}
