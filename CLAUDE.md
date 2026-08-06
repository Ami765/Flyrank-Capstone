# Project Rules & Conventions

## Tech Stack
- Node.js (LTS)

## Development Commands
- Install dependencies: `npm install`

## Code Style & Conventions
- Use Conventional Commits for all Git history.
- Write clean, modular asynchronous code.


## Development Rules
- Form elements must never lack explicit `<label>` tags linked via `for` attributes.
- Application logic must separate data field validation schemas into modular files (`*-validation.js`).
- Every business logic update or form handler must include a companion automated test file (`*.test.js`).
