module.exports = {
    content: ["./src/**/*.{html,js,vue}", "*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto'],
            },
            colors: {
                cta: {
                    light: '#4ae0c7',
                    dark: '#487F89FF'
                }
            },
            boxShadow: {
                zeze: '0 -3px 0 0 #4ae0c7 inset',
            },
            flex: {
                full: '100% 1 1',
            },
        },
    },
    plugins: [],
}
