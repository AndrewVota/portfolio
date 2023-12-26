import { defineConfig } from "unocss";
import presetMini from "@unocss/preset-mini";

export default defineConfig({
	presets: [presetMini()],
	theme: {
		colors: {
			background: "var(--background)",
			highlight: "var(--highlight)",
			primary: "var(--primary)",
			secondary: "var(--secondary)"
		}
	}
});
