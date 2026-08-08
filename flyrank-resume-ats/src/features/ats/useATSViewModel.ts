// import { useState } from 'react';
// import { analyzeResumeATS, ATSAnalysisResult } from './atsModel';
import { useState } from 'react';
import { analyzeResumeATS } from './atsModel';
import type { ATSAnalysisResult } from './atsModel'; // Added 'type' keyword here


export function useATSViewModel() {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState<ATSAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const triggerOptimization = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const evaluation = analyzeResumeATS(resumeText, jobDescription);
      setResult(evaluation);
    } catch (err: any) {
      setError(err.message || "An unhandled calculation error occurred.");
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    resumeText,
    setResumeText,
    jobDescription,
    setJobDescription,
    result,
    error,
    isLoading,
    triggerOptimization
  };
}
