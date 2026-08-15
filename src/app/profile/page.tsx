export default function ImageCurationPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Week 3 Image Curation Header */}
      <div className="border-b border-zinc-200 pb-8 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
          Portfolio Image Matrix & Curation
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          A blueprint mapping necessary portfolio assets, balancing authentic system captures against minimal layout styling.
        </p>
      </div>

      {/* Grid Content */}
      <div className="space-y-12">
        {/* Required Asset Map Table */}
        <div>
          <h2 className="text-xl font-bold text-zinc-900 mb-4">1. Required Portfolio Asset Map</h2>
          <div className="overflow-x-auto border border-zinc-200 rounded-xl">
            <table className="min-w-full divide-y divide-zinc-200 text-sm">
              <thead className="bg-zinc-50 font-medium text-zinc-700">
                <tr>
                  <th className="px-6 py-3 text-left">Asset / Section Location</th>
                  <th className="px-6 py-3 text-left">Visual Type Choice</th>
                  <th className="px-6 py-3 text-left">Strategic Justification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-600">
                <tr>
                  <td className="px-6 py-4 font-medium text-zinc-900">Project Case Study: Resume ATS Engine</td>
                  <td className="px-6 py-4">Authentic System Capture</td>
                  <td className="px-6 py-4">Real cropped screenshots of working code outputs establish concrete authority. No AI stand-ins allowed.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-zinc-900">Personal Identification</td>
                  <td className="px-6 py-4">Authentic Personal Photo</td>
                  <td className="px-6 py-4">A natural photo builds real professional trust with reviewers looking through the submission track thread.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-zinc-900">Connective Structure (System Icons)</td>
                  <td className="px-6 py-4">Minimal Monochrome Vector Grid</td>
                  <td className="px-6 py-4">Keeps look and feel consistent with the visual system kit configuration without adding distracting colorful art.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Ruthless Discernment Curation & Rejection Notes */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-zinc-900 mb-4">2. Strategic Discernment & Rejection Logs</h2>
          <div className="space-y-4 text-sm text-zinc-700 leading-relaxed">
            <p>
              <strong className="text-zinc-900 block mb-1">❌ Rejected Strategy: Abstract 3D Glassmorphism Hero Graphic (AI-Generated)</strong>
              <span className="text-zinc-600">
                I generated several modern semi-transparent 3D spheres to sit behind the main landing page text. I rejected all of them because they had a recognizable, overused "AI-slop" aesthetic that pulled attention away from my development proof metrics.
              </span>
            </p>
            <p className="border-t border-zinc-200 pt-4">
              <strong className="text-zinc-900 block mb-1">✓ Accepted Strategy: Clean Typography White Space Header</strong>
              <span className="text-zinc-600">
                Replaced the flashy hero graphics entirely with generous negative padding layout frames and stark type weights. This ensures my actual application data payloads remain the most prominent elements on the page.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
