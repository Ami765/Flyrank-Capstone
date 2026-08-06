# Workflow Review: Vague vs. Precise Prompting

## 1. Code Correctness & Architecture
In Round One (`workflow-vague`), the AI bundled all presentation and state persistence logic into a loose, unorganized single file footprint (`settings.html`/`settings.js`). In Round Two (`workflow-precise`), the AI separated concerns by building a standalone, decoupled modular layer (`profile-validation.js`). This strict decoupling keeps the frontend presentation code highly maintainable.

## 2. Accessibility & Validation
Round One completely relied on basic input fields without native descriptive labels or input constraints. Anyone using a screen reader would experience significant context loss. Round Two addressed this directly by pairing all profile input fields with accessible `<label>` nodes. Furthermore, Round Two implemented active validation schemas that instantly catch empty strings, special characters, or numbers typed inside the name blocks.

## 3. Review & Debugging Overhead
The manual review process for the vague prompt setup required nearly 15 minutes of looking over the generated assets to check for hidden edge-case bugs. Conversely, the precise prompt workflow generated an inline script companion test layout (`profile.test.js`). Running `node profile.test.js` allows developers to programmatically verify form input edge cases in under two seconds.

## 4. Discovered AI Mistakes
During Round One, the AI silently made a major architectural mistake: it introduced an incomplete utility loop that blindly saved unvalidated, blank text strings straight to browser `localStorage` without validating input types first. This mistake would easily corrupt user application data on a production build.
