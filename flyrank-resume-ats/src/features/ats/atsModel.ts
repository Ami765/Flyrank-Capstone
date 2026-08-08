export interface ATSAnalysisResult {
  score: number;
  missingKeywords: string[];
  optimizedText: string;
}

export function analyzeResumeATS(resumeText: string, jobDescription: string): ATSAnalysisResult {
  // Edge Case Fallback Validation: Reject empty submissions safely
  if (!resumeText.trim() || !jobDescription.trim()) {
    throw new Error("Both the resume content and target job description are strictly required.");
  }

  const resumeLower = resumeText.toLowerCase();
  const jobWords = jobDescription.toLowerCase().match(/\b[a-z]{3,}\b/g) || [];
  
  // Strict matching keyword checklist matrix
  const industryKeywords = ['react', 'typescript', 'tailwind', 'testing', 'accessibility', 'node', 'api', 'state', 'security'];
  const targetKeywords = Array.from(new Set(jobWords)).filter(word => industryKeywords.includes(word));
  
  const missingKeywords = targetKeywords.filter(keyword => !resumeLower.includes(keyword));
  const matchedCount = targetKeywords.length - missingKeywords.length;
  const score = targetKeywords.length > 0 ? Math.round((matchedCount / targetKeywords.length) * 100) : 100;

  let optimizedText = resumeText;
  if (missingKeywords.length > 0) {
    optimizedText += `\n\n[AI Optimization Node] Focused skills added: ${missingKeywords.join(', ')}.`;
  }

  return {
    score,
    missingKeywords: missingKeywords.length > 0 ? missingKeywords : ["None! Perfect keyword density matching detected."],
    optimizedText
  };
}
