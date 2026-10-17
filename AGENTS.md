# AGENTS.md - Project Rules & Directives

## Package & Dependency Management Rules
- **Package Modification Constraint**: NEVER modify `package.json`, `package-lock.json`, or lockfiles unless explicitly instructed by the user.
- **Lockfile Policy**: NEVER create or regenerate `bun.lock` or `bun.lockb`.
- **Dependency Guardrails**: NEVER add `react`, `react-dom`, `framer-motion`, `motion`, or `react-router-dom` to `package.json`.
