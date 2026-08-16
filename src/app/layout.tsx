import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flyrank Capstone",
  description: "Scaffolded App Routing Layout",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black flex flex-col min-h-screen antialiased">
        <nav className="w-full bg-white border-b border-zinc-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <span className="font-extrabold text-xl tracking-tight text-black">
              F<span className="text-sky-500">.</span>RC
            </span>
            <div className="flex space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-sky-500 transition text-zinc-600">Home</Link>
              <Link href="/profile" className="hover:text-sky-500 transition text-zinc-600">Profile</Link>
              <Link href="/playground" className="hover:text-sky-500 transition text-zinc-600">Playground</Link>
              <Link href="/chat" className="hover:text-sky-500 transition text-zinc-950 font-bold">Streaming Chat</Link>
              <Link href="/health" className="hover:text-sky-500 text-sky-600 font-semibold transition">Health Check</Link>
            </div>
          </div>
        </nav>
        <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
