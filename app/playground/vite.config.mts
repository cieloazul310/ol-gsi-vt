import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [react(), tsconfigPaths({ root: "./" })],
  build: {
    sourcemap: configEnv.mode !== "production",
  },
}));
