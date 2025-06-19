import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
interface Props {
    children: ReactNode,
}
const GameCardContainer = ({ children }: Props) => {
    return (
        <Box height="400px" borderRadius={10} overflow="hidden" margin={2}>
            {children}
        </Box>
    )
}

export default GameCardContainer;