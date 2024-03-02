import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	homepage: "https://devbasem.github.io/FreshCart/",
	base: "/FreshCart/",
	plugins: [react()],
});
