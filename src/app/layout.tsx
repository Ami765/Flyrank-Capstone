import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flyrank Capstone",
  description: "Scaffolded App Routing Layout",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen antialiased">
        <nav className="w-full bg-neutral-900 border-b border-neutral-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <span className="font-bold text-lg tracking-tight text-blue-500">Flyrank Capstone</span>
            <div className="flex space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-400 transition text-gray-300">Home</Link>
              <Link href="/profile" className="hover:text-blue-400 transition text-gray-300">Profile</Link>
              <Link href="/health" className="hover:text-blue-400 text-green-400 font-semibold transition">Health Check</Link>
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
