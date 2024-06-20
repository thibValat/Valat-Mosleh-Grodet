import { defineConfig } from "@kubb/core";
import { pluginZod } from "@kubb/swagger-zod";
import { pluginTs } from "@kubb/swagger-ts";
import { pluginClient } from "@kubb/swagger-client";
import { pluginOas } from "@kubb/plugin-oas";

export default defineConfig({
  root: ".",
  hooks: {
    done: ["bunx prettier --write ./src/lib/api"],
  },
  input: {
    path: "./api-docs.json",
  },
  output: {
    path: "./src/lib/api",
    clean: true,
  },
  plugins: [
    pluginZod({
      output: {
        path: "zod",
      },
    }),
    pluginTs({
      output: {
        path: "models",
      },
    }),
    pluginClient({
      output: {
        path: "axios",
      },
    }),
    pluginOas({
      output: {
        path: "schemas",
      },
      validate: true,
    }),
  ],
});
