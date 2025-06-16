import { HStack, Text, Button, Icon } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    var mode = colorMode.charAt(0).toUpperCase() + colorMode.slice(1);
    var color = colorMode == 'dark' ? "white" : "yellow.500";
    return (
        <HStack>
            <Button variant="outline" size="sm" onClick={toggleColorMode} className='--bs-warning-border-subtle'>
                <Icon size="md" color={color}>
                    {colorMode === "light" ? <FaSun /> : <FaMoon />}
                </Icon>
                <Text>{mode}</Text>
            </Button>
        </HStack>
    )
}

export default ColorModeSwitch;