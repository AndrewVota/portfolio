import { defineConfig } from "unocss";
import presetMini from "@unocss/preset-mini";

export default defineConfig({
	theme: {
		colors: {
			"background-color": "var(--background-color)",
			"text-color": "var(--text-color)",
			"text-color-unfocused": "var(--text-color-unfocused)"
		}
	},
	presets: [presetMini()]
});
