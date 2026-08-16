"use client";

import { useState } from "react";

interface DisclosureProps {
  title: string;
  children: React.ReactNode;
}

export default function Disclosure({ title, children }: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 font-semibold text-sm text-left text-white bg-zinc-900 hover:bg-zinc-800/80 transition focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        <span>{title}</span>
        <span className={`transform transition-transform text-xs ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>
      <div
        style={{ display: isOpen ? "block" : "none" }}
        className="p-4 border-t border-zinc-800 text-zinc-400 text-sm leading-relaxed"
      >
        {children}
      </div>
    </div>
  );
}
