import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [react()],
  build: {
    sourcemap: configEnv.mode !== "production",
  },
  resolve: {
    tsconfigPaths: true,
  },
}));
