import { configDefaults, defineConfig } from "vitest/config"; import react from "@vitejs/plugin-react";
// refs/ holds clones of other design systems and scratchpad/ is a local demo app.
// Neither is part of the package, but both sit inside it, so the runner would
// otherwise collect their own test suites.
export default defineConfig({ plugins: [react()], test: { environment: "jsdom", setupFiles: ["./tests/setup.ts"], exclude: [...configDefaults.exclude, "refs/**", "scratchpad/**"] } });
