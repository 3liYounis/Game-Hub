import { Text } from '@chakra-ui/react';
import { HStack, Image, Button } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/react.png';
const NavBar = () => {
    return (
        <HStack justifyContent='space-between' padding={'20px'}>
            <Image src={logo} boxSize={'50px'} />
            <Text >Nav Bar</Text>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    )
}
export default NavBar;