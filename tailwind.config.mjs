/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    theme: {
        extend: {
            minHeight: {
                '100rem': '100rem',
            },
            fontFamily: {
                // sans: ['Inter', ...defaultTheme.fontFamily.sans],
                // LumiosMarker
                heading: ['LumiosMarker', ...defaultTheme.fontFamily.serif],
                content: ['Tangerine', ...defaultTheme.fontFamily.sans],
                GrowingGarden: [
                    'GrowingGarden',
                    ...defaultTheme.fontFamily.serif,
                ],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
