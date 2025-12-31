/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0050A2",
                accent: "#00C0F3",
            },
            fontFamily: {
                sans: ['"Noto Sans KR"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
