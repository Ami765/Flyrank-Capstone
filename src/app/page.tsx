export default function Week3IdentityPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-12">
      {/* 1. One-Line Claim */}
      <div className="border-b border-zinc-200 pb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 block mb-2">
          One-Line Claim (Value Proposition)
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl max-w-3xl leading-tight">
          Building high-performance, AI-driven applications with verified data layer integrity.
        </h1>
        <p className="mt-3 text-zinc-600 text-sm">
          A single, memorable statement greeting the reviewer and clarifying exactly what this capstone project proves.
        </p>
      </div>

      {/* 2. Content Map */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-zinc-900">Portfolio Content Map & Navigation Architecture</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-5 border border-zinc-200 rounded-xl bg-zinc-50/50">
            <div className="flex justify-between items-center border-b border-zinc-200 pb-2 mb-3">
              <span className="font-bold text-zinc-900">Route: / (Home Page)</span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-md font-medium border border-sky-100">
                CTA: View Core Technical Proof
              </span>
            </div>
            <p className="text-xs text-zinc-500 mb-2">Sections Order: Hero Proposition ➔ Core Identity Kit ➔ Streaming Terminal View</p>
            <p className="text-sm text-zinc-600">Displays the primary technical value proposition, architectural style parameters, and a live interface component showcase.</p>
          </div>

          <div className="p-5 border border-zinc-200 rounded-xl bg-zinc-50/50">
            <div className="flex justify-between items-center border-b border-zinc-200 pb-2 mb-3">
              <span className="font-bold text-zinc-900">Route: /profile (Curation Matrix)</span>
              <span className="text-xs bg-zinc-100 text-zinc-700 px-2.5 py-1 rounded-md font-medium border border-zinc-200">
                CTA: Review Design Discipline Logs
              </span>
            </div>
            <p className="text-xs text-zinc-500 mb-2">Sections Order: Asset Matrix Table ➔ Ruthless AI Curation & Rejection Analysis</p>
            <p className="text-sm text-zinc-600">Documents visual asset selection strategy, mapping authentic project captures against generic generative graphics.</p>
          </div>
        </div>
      </div>

      {/* 3. Identity Kit Showcase */}
      <div className="border-t border-zinc-200 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Identity Kit Design Tokens</h2>
          <div className="space-y-3 text-sm text-zinc-600">
            <p><strong className="text-zinc-900">Heading & Body Type:</strong> Inter System Sans-Serif (Clean, legible, zero network bloat)</p>
            <div className="flex items-center gap-3 mt-2">
              <div className="text-center"><div className="w-12 h-12 bg-white border border-zinc-300 rounded-md mb-1" /><span className="text-xs font-mono">#FFFFFF</span></div>
              <div className="text-center"><div className="w-12 h-12 bg-black rounded-md mb-1" /><span className="text-xs font-mono">#000000</span></div>
              <div className="text-center"><div className="w-12 h-12 bg-sky-500 rounded-md mb-1" /><span className="text-xs font-mono">#0EA5E9</span></div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 text-zinc-100 p-5 rounded-xl font-mono text-xs shadow-inner flex flex-col justify-center">
          <p className="text-zinc-500 font-bold mb-1">// Two-Line Style Note Guide:</p>
          <p>Fonts: Inter System Weights. Palette Hexes: #FFFFFF, #000000, Accent: #0EA5E9.</p>
          <p className="mt-1 text-zinc-300">Mood: Crisp, authoritative, minimalist framework framing development work as the absolute star.</p>
        </div>
      </div>

      {/* 4. Proof Gathering Checklist */}
      <div className="border-t border-zinc-200 pt-8">
        <h2 className="text-xl font-bold text-zinc-900 mb-4">Outstanding Proof Assets to Gather</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-700">
          <div className="p-4 border border-zinc-200 rounded-xl flex items-start gap-3">
            <input type="checkbox" disabled className="mt-1 h-4 w-4 rounded border-zinc-300 text-sky-600" />
            <div>
              <strong className="text-zinc-900 block">Resume ATS Codebase Screenshots</strong>
              <span className="text-zinc-500 text-xs">High-resolution, tightly cropped system captures showing working code outputs.</span>
            </div>
          </div>
          <div className="p-4 border border-zinc-200 rounded-xl flex items-start gap-3">
            <input type="checkbox" disabled className="mt-1 h-4 w-4 rounded border-zinc-300 text-sky-600" />
            <div>
              <strong className="text-zinc-900 block">Before/After Runtime Metrics</strong>
              <span className="text-zinc-500 text-xs">Empirical processing throughput data showing data validation speed increases.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
