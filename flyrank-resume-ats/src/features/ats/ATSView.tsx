import React from 'react';
import { useATSViewModel } from './useATSViewModel';
import { ShieldAlert, CheckCircle, Cpu } from 'lucide-react';

export const ATSView: React.FC = () => {
  const {
    resumeText,
    setResumeText,
    jobDescription,
    setJobDescription,
    result,
    error,
    isLoading,
    triggerOptimization
  } = useATSViewModel();

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Branding Row */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-3">
            <Cpu className="w-8 h-8 text-indigo-600" /> FlyRank Smart ATS Optimizer
          </h1>
          <p className="text-lg text-slate-600">Align engineering portfolios with production metrics instantly.</p>
        </header>

        {/* Dynamic Fallback Error Status Alert Panel */}
        {error && (
          <div role="alert" className="p-4 bg-rose-50 border-l-4 border-rose-600 rounded-r-lg text-rose-800 flex gap-3 items-start">
            <ShieldAlert className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div><span className="font-bold">Validation Blocked:</span> {error}</div>
          </div>
        )}

        {/* Primary Interactive Form Interface Container */}
        <form onSubmit={triggerOptimization} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="resume-input" className="text-sm font-semibold text-slate-700">Your Project Resume Copy</label>
              <textarea
                id="resume-input"
                className="h-48 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder="Paste experience descriptions here (e.g., Developed UI components using React...)"
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="job-input" className="text-sm font-semibold text-slate-700">Target Role Requirements</label>
              <textarea
                id="job-input"
                className="h-48 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder="Paste target job descriptions here (e.g., Looking for a React, TypeScript expert...)"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isLoading ? 'Processing Scans...' : 'Analyze Keyword Optimization'}
          </button>
        </form>

        {/* Output Assessment Data Section Area */}
        {result && (
          <section aria-label="Analysis Results" className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold text-slate-900">ATS Assessment Snapshot</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Compatibility Index:</span>
                <span className={`text-2xl font-black ${result.score >= 80 ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {result.score}%
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-700">Missing Key Engineering Vocabularies:</h3>
              <div className="flex flex-wrap gap-2">
                {result.missingKeywords.map((tag, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded-full font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-700">Refactored Semantic Structure Suggestion:</h3>
              <div className="p-3 bg-slate-900 text-slate-100 rounded-lg text-sm font-mono whitespace-pre-wrap">
                {result.optimizedText}
              </div>
            </div>
          </section>
        )}

      </div>
    </main>
  );
};
