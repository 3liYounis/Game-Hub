import { HStack, Text, Button, Icon } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    var inverseMode = colorMode == "dark" ? "light" : "dark";
    inverseMode = inverseMode.charAt(0).toUpperCase() + inverseMode.slice(1);
    var color = colorMode == 'light' ? "white" : "yellow";
    return (
        <HStack>
            <Button size="sm" onClick={toggleColorMode} colorPalette={color}>
                <Icon size="sm">
                    {colorMode === "light" ? <FaMoon /> : <FaSun />}
                </Icon>
                <Text>{inverseMode}</Text>
            </Button>
        </HStack>
    )
}
export default ColorModeSwitch;