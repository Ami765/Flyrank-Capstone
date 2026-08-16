"use client";

import { useState } from "react";
import Modal from "./components/Modal";
import Tabs from "./components/Tabs";
import Disclosure from "./components/Disclosure";

export default function PlaygroundPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mockTabs = [
    { id: "1", label: "Overview", content: "Manual React A11y implementation baseline test." },
    { id: "2", label: "Specifications", content: "Enforces strict roles and keyboard loop indices." }
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 space-y-12">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">Component A11y Playground</h1>
        <p className="text-zinc-400 text-sm">Testing pure W3C ARIA engineering configurations from scratch.</p>
      </div>

      <div className="space-y-4 p-6 border border-zinc-800 rounded-2xl bg-zinc-950">
        <h2 className="text-lg font-bold text-white mb-2">1. Accessible Dialogue</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-sm text-white hover:bg-zinc-700 transition"
        >
          Open Focus Trapped Modal
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Verification Focus Modal">
          Focus is fully trapped here. Pressing TAB toggles only between content endpoints. Escape closes.
        </Modal>
      </div>

      <div className="space-y-4 p-6 border border-zinc-800 rounded-2xl bg-zinc-950">
        <h2 className="text-lg font-bold text-white mb-2">2. Keyboard Navigable Tabs</h2>
        <Tabs items={mockTabs} />
      </div>

      <div className="space-y-4 p-6 border border-zinc-800 rounded-2xl bg-zinc-950">
        <h2 className="text-lg font-bold text-white mb-2">3. Disclosure Control</h2>
        <Disclosure title="Click to Expand Details Panel">
          State configurations use explicit hidden bindings map arrays to fulfill accessibility patterns.
        </Disclosure>
      </div>
    </div>
  );
}
