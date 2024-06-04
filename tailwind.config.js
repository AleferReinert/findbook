/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				header: `url('./src/assets/img/background-header.png')`
			},
			colors: {
				'evergreen': '#2B4341',
				'evergreen-light': '#2AA78D'
			},
			boxShadow: {
				default: '0 0 15px rgba(0,0,0,0.19)'
			}
		}
	},
	plugins: []
}

