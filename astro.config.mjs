import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	integrations: [UnoCSS(), mdx()],
	trailingSlash: "always",
	site: "https://www.vota.cc",
	output: "static"
});
