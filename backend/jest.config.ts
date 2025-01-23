import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  projects: [
    {
      displayName: "backend",
      preset: "ts-jest",
      testMatch: ["<rootDir>/test/*.test.ts"],
      testEnvironment: "node", // Entorno para backend
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },
    },
  ],
};

export default config;
