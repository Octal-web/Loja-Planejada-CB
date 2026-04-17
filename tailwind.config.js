import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                secondary: ['Oswald', 'sans-serif'],
                tertiary: ['Poppins', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '5%',
                screens: {
                    sm: '90%',
                    md: '90%',
                    lg: '90%',
                    xl: '90%',
                },
            },
            maxWidth: {
                'small': '75rem',
                'medium': '100rem',
                'large': '104rem',
                'x-large': '112rem',
            },
            spacing: {
                '15': '3.75rem',
                '30': '7rem',
                '40': '9.375rem',
                '50': '12.5rem',
            },
            colors: {
                'primary': '#4e362a',
                'secondary': '#FFD532',
            },
            animation: {
                float: 'float 6s ease-in-out infinite alternate',
                rotate: 'rotate 6s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%':   { transform: 'translateY(0px) rotate(24deg)' },
                    '50%':  { transform: 'translateY(-10px) rotate(24deg)' },
                    '100%': { transform: 'translateY(0px) rotate(24deg)' },
                },
                rotate: {
                    '0%':   { transform: 'rotate(0deg)' },
                    '50%':  { transform: 'rotate(3deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
            },
        },
    },

    plugins: [
        forms,
        function({ addComponents }) {
            addComponents({
                'p + p': {
                    marginTop: '1rem',
                },
            })
        }
    ],
};
