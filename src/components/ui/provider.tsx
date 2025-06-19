"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import systemTheme from "@/theme"
export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={systemTheme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
