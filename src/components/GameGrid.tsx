import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '@/hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
const GameGrid = () => {
    const { isLoading, data, error } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            {error && <Text color={'red'}> {error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spaceX={7} spaceY={14}>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                )}
                {!isLoading && data.map(game =>
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}></GameCard>
                    </GameCardContainer>
                )}
            </SimpleGrid >
        </>
    )
}

export default GameGrid;