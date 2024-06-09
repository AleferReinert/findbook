/** @type {import('tailwindcss').Config} */

export default {
	content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				header: `url('assets/img/background-header.jpg')`
			},
			boxShadow: {
				default: '0 0 15px rgba(0,0,0,0.19)',
				button: '3px 4px 8px rgba(0,0,0,0.17)'
			},
			fontSize: {
				xxs: '0.625rem'
			}
		}
	},
	plugins: []
}

