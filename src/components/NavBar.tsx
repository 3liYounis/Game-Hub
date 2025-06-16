import { Text } from '@chakra-ui/react';
import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/react.png';
const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize={'50px'} />
            <Text >Nav Bar</Text>
        </HStack>
    )
}

export default NavBar;