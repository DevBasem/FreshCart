// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		screens: {
			xs: "350px",
			// => @media (min-width: 350px) { ... }

			sm: "685px",
			// => @media (min-width: 685px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			"lg-md": "992px",
			// => @media (min-width: 992px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {},
				},
				dark: {
					colors: {},
				},
			},
		}),
	],
};
