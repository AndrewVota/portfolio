import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
	integrations: [UnoCSS()],
	trailingSlash: "always",
	site: "https://andrewvota.dev",
	output: "static"
});
