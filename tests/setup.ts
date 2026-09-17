import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Testing Library's automatic cleanup only runs when vitest globals are on.
// Registering it here keeps every test file from leaking rendered trees into
// the next one (screen queries then match more than one element).
afterEach(cleanup);
