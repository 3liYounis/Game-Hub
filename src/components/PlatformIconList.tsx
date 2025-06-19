import { FaWindows, FaPlaystation, FaAndroid, FaXbox, FaApple, FaLinux } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { CgGames } from "react-icons/cg";
import { Icon, HStack } from "@chakra-ui/react";
import { Platform } from "@/hooks/useGames"
import { IconType } from 'react-icons';
interface Props {
    platforms: Platform[],
}
export const iconMap: { [key: string]: IconType } = {
    "xbox": FaXbox,
    "pc": FaWindows,
    "playstation": FaPlaystation,
    "android": FaAndroid,
    "nintendo": SiNintendo,
    "linux": FaLinux,
    "mac": FaApple,
    "ios": MdPhoneIphone,
    "web": BsGlobe,
    "not_supported": CgGames
}
const PlatformIconList = ({ platforms }: Props) => {
    return (
        <HStack>
            {platforms.map(platform =>
                <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"></Icon>
            )}
        </HStack>
    )
}
export default PlatformIconList;