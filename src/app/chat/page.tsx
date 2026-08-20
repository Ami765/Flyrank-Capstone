"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";
import { Send, Loader2, CheckCircle2, AlertTriangle, BarChart2, User, Bot } from "lucide-react";

export default function StreamingChatPage() {
  const [typedInput, setTypedInput] = useState("");
    const chatInstance = useChat({
    maxSteps: 5, // Allows the model to autonomously execute tool calls back to back
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: "Hello! Ask me to 'score a candidate profile' or type 'evaluate candidate named fail' to view the error component state."
      }
    ]
  } as any);


  // const chatInstance = useChat({
  //   api: "/api/chat",
  //   initialMessages: [
  //     {
  //       id: "welcome",
  //       role: "assistant",
  //       content: "Hello! Ask me to 'score a candidate profile' or type 'evaluate candidate named fail' to view the error component state."
  //     }
  //   ]
  // });

  // Extract variables via loose object cast to bypass type version mismatches safely
  const { messages, input, handleInputChange, handleSubmit, status } = chatInstance as any;
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedInput.trim()) return;

    if ((chatInstance as any).append) {
      (chatInstance as any).append({ role: "user", content: typedInput });
    } else if (handleSubmit) {
      (chatInstance as any).input = typedInput;
      handleSubmit(e);
    }
    setTypedInput("");
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[80vh] border border-zinc-200 rounded-2xl bg-white overflow-hidden shadow-sm mt-4 relative">
      <div className="bg-zinc-50 border-b border-zinc-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
            Generative UI Tool Stream
            <span className="inline-flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
          </h1>
          <p className="text-xs text-zinc-500">Gemini 1.5 Flash Tool Invocations via Zod Validation Primitives</p>
        </div>
      </div>

      <div ref={scrollContainerRef} onScroll={handleScroll} className="flex-1 overflow-y-auto p-6 space-y-4 bg-zinc-50/30">
        {messages && messages.map((m: any) => (
          <div key={m.id} className="space-y-3">
            {m.content && (
              <div className={`flex gap-3 max-w-3xl ${m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}>
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
            )}

            {m.toolInvocations?.map((toolInv: any) => {
              const { toolCallId, toolName, state, args, result } = toolInv;
              if (toolName !== "scoreCandidate") return null;

              // State 1 & 2: Input Streaming & Available
              if (state === "partial" || !result) {
                return (
                  <div key={toolCallId} className="max-w-md mr-auto bg-zinc-50 border border-zinc-200 rounded-xl p-4 shadow-sm animate-pulse flex items-center gap-3">
                    <Loader2 className="animate-spin text-sky-500" size={18} />
                    <div>
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">State: Tool Input Ingesting...</p>
                      <p className="text-sm font-medium text-zinc-700">Evaluating parameters for: <span className="text-zinc-900 font-bold">{args.name || "Extracting..."}</span></p>
                    </div>
                  </div>
                );
              }

              // State 4: Output Error Component
              if (result.error || !result.success) {
                return (
                  <div key={toolCallId} className="max-w-md mr-auto border border-red-200 bg-red-50/50 rounded-xl p-4 shadow-sm flex gap-3">
                    <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-xs font-bold text-red-600 uppercase tracking-wider">State: Execution Error Block</p>
                      <h4 className="font-bold text-zinc-900 text-sm mt-1">Validation Handshake Failure</h4>
                      <p className="text-xs text-red-700 bg-red-100/60 p-2 rounded-md font-mono mt-2 border border-red-200">
                        {result.error || "Database connection timeout during indexing extraction loop."}
                      </p>
                    </div>
                  </div>
                );
              }

              // State 3: Output Available Custom Component
              return (
                <div key={toolCallId} className="max-w-md mr-auto border border-zinc-200 bg-white rounded-2xl p-5 shadow-md space-y-4">
                  <div className="flex justify-between items-start border-b border-zinc-100 pb-3">
                    <div>
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle2 size={12} /> State: Output Render Component
                      </p>
                      <h3 className="font-extrabold text-zinc-900 text-lg mt-1">{result.name}</h3>
                      <p className="text-xs text-zinc-500">{result.role}</p>
                    </div>
                    <div className="bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-center shrink-0">
                      <span className="block text-2xl font-black text-zinc-900">{result.score}%</span>
                      <span className="text-[10px] text-zinc-400 font-bold uppercase">Match Rate</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-zinc-500 flex items-center gap-1"><BarChart2 size={12}/> Alignment Distribution</span>
                    <div className="w-full bg-zinc-100 rounded-full h-3.5 overflow-hidden p-0.5 border border-zinc-200 shadow-inner">
                      <div 
                        className={`h-full rounded-full transition-all bg-emerald-500`}
                        style={{ width: `${result.score}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-150 text-xs text-zinc-700">
                    <span className="font-bold text-zinc-900 block mb-0.5">Automated System Verdict:</span>
                    {result.verdict}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-zinc-200 bg-white">
        <form onSubmit={handleFormSubmit} className="flex gap-2 items-center max-w-full">
          <input
            value={typedInput}
            onChange={(e) => setTypedInput(e.target.value)}
            placeholder={isCurrentlyLoading ? "Streaming token parameters..." : "Ask me to score a profile..."}
            disabled={isCurrentlyLoading}
            className="flex-1 min-w-0 rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-zinc-50/50 disabled:opacity-60 text-zinc-900"
          />
          <button
            type="submit"
            disabled={!typedInput.trim()}
            className="bg-sky-600 hover:bg-sky-500 text-white rounded-xl p-3 shrink-0 flex items-center justify-center disabled:opacity-40 shadow-sm"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
