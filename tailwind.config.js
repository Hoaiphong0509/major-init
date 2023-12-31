/** @type {import('tailwindcss').Config} */
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './safelist.txt'],
	theme: {
		extend: {}
	},
	plugins: [
		// eslint-disable-next-line no-unused-vars
		({ addUtilities, e, theme, variants }) => {
			const colors = flattenColorPalette(theme('borderColor'))
			delete colors['default']

			const colorMap = Object.keys(colors).map((color) => ({
				[`.border-t-${color}`]: { borderTopColor: colors[color] },
				[`.border-r-${color}`]: { borderRightColor: colors[color] },
				[`.border-b-${color}`]: { borderBottomColor: colors[color] },
				[`.border-l-${color}`]: { borderLeftColor: colors[color] }
			}))
			const utilities = Object.assign({}, ...colorMap)

			addUtilities(utilities, variants('borderColor'))
		},
		// Ta có thể thay thế {color} bằng giá trị màu của chủ đề theo project
		// ví dụ 'text-{colors}' --> 'text-emerald'
		require('tailwind-safelist-generator')({
			path: 'safelist.txt',
			patterns: [
				'text-{colors}',
				'bg-{colors}',
				'dark:bg-{colors}',
				'dark:hover:bg-{colors}',
				'dark:active:bg-{colors}',
				'hover:text-{colors}',
				'hover:bg-{colors}',
				'active:bg-{colors}',
				'ring-{colors}',
				'hover:ring-{colors}',
				'focus:ring-{colors}',
				'focus-within:ring-{colors}',
				'border-{colors}',
				'focus:border-{colors}',
				'focus-within:border-{colors}',
				'dark:text-{colors}',
				'dark:hover:text-{colors}',
				'h-{height}',
				'w-{width}'
			]
		}),
		require('@tailwindcss/typography')
	]

}

