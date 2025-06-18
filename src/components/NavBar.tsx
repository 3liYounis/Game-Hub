import { HStack, Image, Heading } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/react.png';
const NavBar = () => {
    return (
        <HStack justifyContent='space-between' padding={'20px'} >
            <Image src={logo} boxSize={'50px'} />
            <Heading fontFamily="cursive" fontWeight="bold" fontSize={50}>Allawi Games Hub 🎮</Heading>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    )
}
export default NavBar;