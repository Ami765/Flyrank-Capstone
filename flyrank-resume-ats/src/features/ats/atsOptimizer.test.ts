import { describe, it, expect } from 'vitest';
import { analyzeResumeATS } from './atsModel';

describe('ATS Engine Core Compliance Evaluator', () => {
  
  it('should compute valid performance scores across matched inputs', () => {
    const resume = "Experienced building interactive interfaces using React and state management layers.";
    const job = "Requires familiarity with React, testing patterns, and state paradigms.";
    
    const evaluation = analyzeResumeATS(resume, job);
    expect(evaluation.score).toBeLessThan(100);
    expect(evaluation.missingKeywords).toContain('testing');
  });

  it('should intercept empty input text and throw standard error fallbacks', () => {
    expect(() => analyzeResumeATS("", "Seeking React engineers")).toThrow(
      "Both the resume content and target job description are strictly required."
    );
  });
  
});
