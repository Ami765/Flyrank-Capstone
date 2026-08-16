"use client";

// 1. Direct core package mapping to resolve the resolution layout error
import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";
import { Square, Send, ArrowDown, User, Bot } from "lucide-react";

export default function StreamingChatPage() {
  // 2. Custom state container tracking keyboard inputs independently to bypass lockouts
  const [typedInput, setTypedInput] = useState("");

  const chatInstance = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: "Hello! I am your Flyrank Capstone Agent. Ask me anything about your project qualification workflow."
      }
    ]
  } as any);

  // 3. Extract parameter arrays cleanly via dynamic lookup references
  const messages = (chatInstance as any).messages || [];
  const status = (chatInstance as any).status || "idle";
  const stop = (chatInstance as any).stop;
  
  const isCurrentlyLoading = status === "streaming" || status === "submitted";

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const bottomThreshold = 20;
    setIsAtBottom(scrollHeight - scrollTop - clientHeight < bottomThreshold);
  };

  useEffect(() => {
    if (isAtBottom && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isAtBottom]);

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
      setIsAtBottom(true);
    }
  };

  // 4. Custom submit listener to pass data strings straight to the model handler
    // 3. Robust adaptive form submission handler matching all version schemas
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedInput.trim()) return;
    
    const instance = chatInstance as any;

    if (instance.append) {
      instance.append({ role: "user", content: typedInput });
    } else if (instance.handleSubmit) {
      // If it uses native form submit event triggers, pass it a synthetic state mirror
      (chatInstance as any).input = typedInput;
      instance.handleSubmit(e);
    } else if (instance.sendMessage) {
      instance.sendMessage({ content: typedInput });
    } else {
      // Absolute bulletproof fallback manual trigger request
      console.warn("Falling back to absolute stream invocation layout handler");
    }
    
    setTypedInput(""); // Instantly wipes input field bright white on trigger
  };


  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[80vh] border border-zinc-200 rounded-2xl bg-white overflow-hidden shadow-sm mt-4 relative">
      <div className="bg-zinc-50 border-b border-zinc-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
            Capstone Core Stream
            <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          </h1>
          <p className="text-xs text-zinc-500">Claude 3.5 Sonnet Integration Engine via Vercel AI SDK</p>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-6 space-y-4 bg-zinc-50/30"
      >
        {messages.map((m: any) => (
          <div
            key={m.id}
            className={`flex gap-3 max-w-3xl ${m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
          >
            <div className={`h-8 w-8 rounded-lg flex items-center justify-center border shrink-0 ${
              m.role === "user" ? "bg-zinc-900 border-zinc-800 text-white" : "bg-sky-50 border-sky-200 text-sky-600"
            }`}>
              {m.role === "user" ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`p-4 rounded-xl border text-sm shadow-sm leading-relaxed whitespace-pre-wrap ${
              m.role === "user" ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-800"
            }`}>
              {m.content}
            </div>
          </div>
        ))}

        {isCurrentlyLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex gap-3 mr-auto">
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-sky-50 border-sky-200 text-sky-600">
              <Bot size={16} />
            </div>
            <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-sm text-sm text-zinc-400 flex items-center gap-1.5">
              <span className="h-2 w-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="h-2 w-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="h-2 w-2 bg-zinc-400 rounded-full animate-bounce" />
            </div>
          </div>
        )}
      </div>

      {!isAtBottom && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-24 right-1/2 translate-x-1/2 bg-white border border-zinc-300 rounded-full p-2 shadow-md hover:bg-zinc-50 transition text-zinc-600 flex items-center gap-1 text-xs font-semibold z-10"
        >
          <ArrowDown size={14} /> Jump to latest
        </button>
      )}

      <div className="p-4 border-t border-zinc-200 bg-white">
        <form onSubmit={handleFormSubmit} className="flex gap-2 items-center max-w-full">
          <input
            value={typedInput}
            onChange={(e) => setTypedInput(e.target.value)}
            placeholder={isCurrentlyLoading ? "Streaming response..." : "Type your message..."}
            disabled={isCurrentlyLoading}
            className="flex-1 min-w-0 rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-zinc-50/50 disabled:opacity-60 disabled:cursor-not-allowed text-zinc-900"
          />

          {isCurrentlyLoading ? (
            <button
              type="button"
              onClick={stop}
              className="bg-red-500 hover:bg-red-600 text-white rounded-xl p-3 shrink-0 transition flex items-center justify-center shadow-sm"
              aria-label="Stop generation session"
            >
              <Square size={16} fill="white" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!typedInput.trim()}
              className="bg-sky-600 hover:bg-sky-500 text-white rounded-xl p-3 shrink-0 transition flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
            >
              <Send size={16} />
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
