export default function HomeThroughLinePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* 1. One-Line Claim Value Proposition Section */}
      <div className="border-b border-zinc-200 pb-8 mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 block mb-2">
          Core Value Proposition Claim
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl max-w-3xl leading-tight">
          Building high-performance, AI-driven applications with verified data layer integrity.
        </h1>
        <p className="mt-4 text-base text-zinc-600 max-w-2xl">
          The single memorable sentence establishing the proof validation objective for my complete capstone portfolio build.
        </p>
      </div>

      {/* 2. Portfolio Structure Content Map Grid */}
      <div className="space-y-12">
        <div>
          <h2 className="text-xl font-bold text-zinc-900 mb-2">2. Architecture Content Map Matrix</h2>
          <p className="text-zinc-600 text-sm mb-6">
            Structural layout overview organizing application pathways, page section orders, and primary Calls to Action.
          </p>

          <div className="space-y-6">
            {/* Page 1 Matrix Item */}
            <div className="p-6 border border-zinc-200 rounded-xl bg-zinc-50/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 pb-3 mb-4">
                <h3 className="font-bold text-zinc-900 text-lg">Route: / (Home Landing Workspace)</h3>
                <span className="inline-flex items-center rounded-md bg-sky-50 px-2 py-1 text-xs font-medium text-sky-700 border border-sky-200">
                  CTA: View Core Technical Proof
                </span>
              </div>
              <ul className="space-y-2 text-sm text-zinc-600 list-disc list-inside">
                <li><strong className="text-zinc-900">Section 1:</strong> Hero statement featuring the crisp value proposition claim.</li>
                <li><strong className="text-zinc-900">Section 2:</strong> Lead Case Study showcase card (Flyrank Resume ATS Engine engine pipeline metrics).</li>
                <li><strong className="text-zinc-900">Section 3:</strong> Visual identity design tokens and asset swatches.</li>
              </ul>
            </div>

            {/* Page 2 Matrix Item */}
            <div className="p-6 border border-zinc-200 rounded-xl bg-zinc-50/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 pb-3 mb-4">
                <h3 className="font-bold text-zinc-900 text-lg">Route: /profile (Curation & Assets)</h3>
                <span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 border border-zinc-200">
                  CTA: Review Design Discipline Logs
                </span>
              </div>
              <ul className="space-y-2 text-sm text-zinc-600 list-disc list-inside">
                <li><strong className="text-zinc-900">Section 1:</strong> Image optimization table classifying visual styles.</li>
                <li><strong className="text-zinc-900">Section 2:</strong> Discernment notes listing AI rejections.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Honest Proof Gathering Checklist */}
        <div className="border-t border-zinc-200 pt-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-4">3. Outstanding Assets Sync Tracker (Gather List)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 border border-zinc-200 rounded-xl flex items-start gap-3">
              <input type="checkbox" disabled className="mt-1 h-4 w-4 rounded border-zinc-300 text-sky-600 focus:ring-sky-500" />
              <div>
                <strong className="text-zinc-900 block">Resume ATS Codebase Screenshots</strong>
                <span className="text-zinc-500 text-xs">High-resolution, cropped layout views of the working parser module.</span>
              </div>
            </div>

            <div className="p-4 border border-zinc-200 rounded-xl flex items-start gap-3">
              <input type="checkbox" disabled className="mt-1 h-4 w-4 rounded border-zinc-300 text-sky-600 focus:ring-sky-500" />
              <div>
                <strong className="text-zinc-900 block">Before / After Processing Metrics</strong>
                <span className="text-zinc-500 text-xs">Empirical benchmarking figures outlining structural data pipeline speed improvements.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
