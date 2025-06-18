import React, { useEffect, useState } from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react';
import apiClient, { AxiosError, CanceledError } from '@/services/api-client';
import gamesService from '@/services/gamesService';
import useGames from '@/hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
const GameGrid = () => {
    const { isLoading, setIsLoading, games, setGames, error, setError } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            {error && <Text color={'red'}> {error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spaceX={14} spaceY={14}>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer>
                        <GameCardSkeleton key={skeleton} />
                    </GameCardContainer>
                )}
                {!isLoading && games.map(game =>

                    <GameCardContainer>
                        <GameCard key={game.id} game={game}></GameCard>
                    </GameCardContainer>
                )}
            </SimpleGrid >
        </>
    )
}

export default GameGrid;