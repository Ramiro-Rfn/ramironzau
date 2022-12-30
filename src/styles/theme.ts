import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        gray: {
            '900': '#191919',
            '700': '#363636',
            '100': '#A7A7A7',
            '50': '#CCCCCC',
        }
    },

    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },

    styles: {
        global: {
            '*': {
                listStyleType: 'none',
                boxSizing: 'border-box',
            },

            body: {
                bg: 'gray.100'
            }
        }
    }
})