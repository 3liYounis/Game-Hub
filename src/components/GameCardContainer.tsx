import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
interface Props {
    children: ReactNode,
}
const GameCardContainer = ({ children }: Props) => {
    return (
        <Box height="415px" borderColor="ActiveBorder" borderRadius={20} border="solid" borderWidth={3} overflow="hidden" margin={2}>
            {children}
        </Box>
    )
}

export default GameCardContainer;