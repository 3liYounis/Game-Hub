import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
interface Props {
    children: ReactNode,
}
const GameCardContainer = ({ children }: Props) => {
    return (
        <Box height="420px" borderColor="ActiveBorder" borderRadius={20} border="solid" borderWidth={2} overflow="hidden" margin={2}>
            {children}
        </Box>
    )
}

export default GameCardContainer;