import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: path.join(__dirname, "src"),
  build: {
    lib: {
      entry: path.resolve("src", "./index.ts"),
      name: "reacty-ui",
      fileName: (format) => `reacty-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
});
