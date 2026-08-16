"use client";

import { useState, useRef } from "react";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
}

export default function Tabs({ items }: TabsProps) {
  const [activeTab, setActiveTab] = useState(items[0].id);
  const tabRefs = useRef<Map<string, HTMLButtonElement | null>>(new Map());

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") nextIndex = (index + 1) % items.length;
    if (e.key === "ArrowLeft") nextIndex = (index - 1 + items.length) % items.length;

    if (nextIndex !== index) {
      const nextTabId = items[nextIndex].id;
      setActiveTab(nextTabId);
      tabRefs.current.get(nextTabId)?.focus();
    }
  };

  return (
    <div className="w-full space-y-4">
      <div role="tablist" aria-label="Playground Accessible Navigation" className="flex border-b border-zinc-800 space-x-2">
        {items.map((item, idx) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              ref={(el) => { tabRefs.current.set(item.id, el); }}
              onClick={() => setActiveTab(item.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`px-4 py-2 text-sm font-semibold transition border-b-2 focus:outline-none focus:text-sky-400 ${
                isActive ? "border-sky-500 text-sky-400" : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          id={`panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.id}`}
          hidden={activeTab !== item.id}
          className="text-zinc-400 text-sm p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 focus:outline-none"
          tabIndex={0}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
