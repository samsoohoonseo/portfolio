import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export const content = [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
]
export const theme = {
    extend: {
        width: {
            '1/7': '14.2857143%',
            '2/7': '28.5714286%',
            '3/7': '42.8571429%',
            '4/7': '57.1428571%',
            '5/7': '71.4285714%',
            '6/7': '85.7142857%',
        },
        colors: {
            'apni-gray-100': '#f6f6f6',
            'apni-gray-400': '#9e9e9e',
            'apni-gray-500': '#747575',
            'apni-gray-800': '#212121',
            'sky-light': '#006FEE',
        },
    },
}

export const darkMode = 'class'
export const plugins = [nextui()]
