export default function IdentityKitPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Week 3 Header Statement */}
      <div className="border-b border-zinc-200 pb-8 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
          Visual Identity System
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          A minimalist style guide built to display capstone projects cleanly and intentionally.
        </p>
      </div>

      {/* Grid Elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Typography Section */}
        <div>
          <h2 className="text-xl font-bold text-zinc-900 mb-4">Typography Kit</h2>
          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Heading & Body Font</span>
              <p className="text-2xl font-semibold text-zinc-900">Inter Sans-Serif</p>
            </div>
            <p className="text-zinc-600 leading-relaxed text-sm">
              Standardized across all systems to provide maximum cross-device layout readability without adding network bloat.
            </p>
          </div>
        </div>

        {/* Color Swatches */}
        <div>
          <h2 className="text-xl font-bold text-zinc-900 mb-4">Color Palette</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="h-16 w-full rounded-lg bg-black border border-zinc-200 mb-1"></div>
              <span className="text-xs font-mono">#000000</span>
            </div>
            <div className="text-center">
              <div className="h-16 w-full rounded-lg bg-white border border-zinc-200 mb-1"></div>
              <span className="text-xs font-mono">#FFFFFF</span>
            </div>
            <div className="text-center">
              <div className="h-16 w-full rounded-lg bg-sky-500 mb-1"></div>
              <span className="text-xs font-mono">#0EA5E9</span>
            </div>
          </div>
        </div>
      </div>

      {/* Two-Line Style Note Annotation */}
      <div className="mt-12 bg-zinc-50 border border-zinc-200 rounded-xl p-6 font-mono text-xs">
        <p className="text-zinc-400 font-bold mb-1">// Style Guide Note Metadata:</p>
        <p className="text-zinc-800">Fonts: Inter UI System. Colors: #000000, #FFFFFF, Accent: #0EA5E9.</p>
        <p className="text-zinc-800 mt-1">Mood: High-utility layout framework optimized for clean code case study reviews.</p>
      </div>
    </div>
  );
}

