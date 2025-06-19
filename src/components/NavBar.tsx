import { HStack, Image, Heading } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/react.png';
import SearchBar from './SearchBar';
interface Props {
    onSearch: (searchText: string | null) => void;
}
const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack justifyContent='space-between' padding={'20px'} >
            <Image src={logo} boxSize={'50px'} />
            <Heading fontFamily="cursive" fontWeight="bold" fontSize={20} whiteSpace="nowrap">Allawi Games Hub</Heading>
            <SearchBar onSearch={onSearch}></SearchBar>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack >
    )
}
export default NavBar;