/** @type {import('tailwindcss').Config} */

export default {
	content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				overlayShow: 'overlayShow 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				contentShow: 'contentShow 400ms cubic-bezier(0.16, 1, 0.3, 1)'
			},
			backgroundImage: {
				'header-mobile': `url('assets/img/background-header-mobile.webp')`,
				'header-desktop': `url('assets/img/background-header-desktop.webp')`
			},
			boxShadow: {
				default: '0 0 15px rgba(0,0,0,0.19)',
				button: '3px 4px 8px rgba(0,0,0,0.17)'
			},
			fontSize: {
				xxs: '0.625rem'
			},
			keyframes: {
				overlayShow: {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				contentShow: {
					from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.75)' },
					to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' }
				}
			}
		}
	},
	plugins: []
}

