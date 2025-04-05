module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // must include these!
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0D6EFD',
                secondary: '#198754',
                accent: '#F59E0B',
                neutral: '#F8F9FA',
                dark: '#212529',
            },
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
