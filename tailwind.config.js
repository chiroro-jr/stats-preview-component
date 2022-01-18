module.exports = {
    content: ['./index.html'],
    theme: {
        colors: {
            white: 'hsl(0, 0%, 100%)',
            blue: {
                1: 'hsl(233, 47%, 7%)',
                2: 'hsl(244, 38%, 16%)',
            },
            violet: 'hsl(277, 64%, 61%)',
            gray: {
                1: 'hsla(0, 0%, 100%, 0.75)',
                2: 'hsla(0, 0%, 100%, 0.6)',
            },
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Lexend Deca', 'serif'],
        },
        backgroundImage: {
            'header-desktop': "url('/images/image-header-desktop.jpg')",
            'header-mobile': "url('/images/image-header-mobile.jpg')",
        },
    },
    plugins: [],
}
