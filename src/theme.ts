import {
    createSystem,
    defaultConfig,
    defineConfig,
} from "@chakra-ui/react"

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                gray: {
                    50: { value: '#f9f9f9' },
                    100: { value: '#ededed' },
                    200: { value: '#d3d3d3' },
                    300: { value: '#b3b3b3' },
                    400: { value: '#a0a0a0' },
                    500: { value: '#898989' },
                    600: { value: '#6c6c6c' },
                    700: { value: '#202020' },
                    800: { value: '#121212' },
                    900: { value: '#111' }
                }
            }
        }

    },
});
const systemTheme = createSystem(defaultConfig, config);
export default systemTheme;