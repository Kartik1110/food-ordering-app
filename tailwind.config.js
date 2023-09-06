/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			darkblue: '#1A2238',
			darkpurple: '#301551',
			slateblue: '#9DAAF2',
			orange: '#FF6A3D',
			yellow: '#F4DB7D',
			cream: '#fff29c',
			grey: '#e6ecff',
			white: '#FFFFFF',
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
