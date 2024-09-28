/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"vbnc-white": "#F5FAFF",
				"vbnc-yellow": "#FFD54C",
				"vbnc-orange": "#EF7206",
				"vbnc-blue": "#0F4D8A",
				"vbnc-gray": "#4E565F"
			}
		},
	},
	plugins: [],
}
