# Week 4 Stack Selection & Rationale Matrix

I evaluated three distinct developer roads against my four project constraints: 100% Free, Learning Curve, Structural Mapping Needs, and Proof Display Requirements.

## 1. Stack Alternatives Evaluated
- **Road 1: No-Code Visual Builder (Framer / Carrd)**
  - *Trade-off:* Extremely fast visual setup but hard to maintain dynamic custom API connections or code-level server validation routines safely.
- **Road 2: Plain Static Code (HTML + CSS + Vanillajs on Netlify)**
  - *Trade-off:* Free and easy to host, but becomes messy and disorganized when building multi-page navigation layout routers or managing real-time chat data hooks.
- **Road 3: Modern Component Framework (Next.js + TypeScript + Tailwind CSS on Vercel)**
  - *Trade-off:* Higher initial setup learning curve, but provides strict component safety, isolated server-side environment variables, and seamless streaming data capabilities.

## 2. Chosen Rationale Statement
I chose **Next.js + Vercel** because my capstone requires an interactive, live streaming AI chatbot engine. This stack keeps my private AI key safely hidden on the server, compiles fast, and gives me clean utility-first layout classes via Tailwind CSS. I can confidently maintain this codebase because its modular layout file structure lets me scale features without breaking existing routes.
