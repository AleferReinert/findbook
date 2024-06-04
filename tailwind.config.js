/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				header: `url('./src/assets/img/background-header.png')`,
				float: `url('./src/assets/img/float-header.png')`
			},
			boxShadow: {
				default: '0 0 15px rgba(0,0,0,0.19)',
				button: '3px 4px 8px rgba(0,0,0,0.17)'
			}
		}
	},
	plugins: []
}

