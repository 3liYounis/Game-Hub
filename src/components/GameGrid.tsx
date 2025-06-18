import React, { useEffect, useState } from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react';
import apiClient, { AxiosError, CanceledError } from '@/services/api-client';
import gamesService from '@/services/gamesService';
import useGames from '@/hooks/useGames';
import GameCard from './GameCard';
const GameGrid = () => {
    const { isLoading, setIsLoading, games, setGames, error, setError } = useGames();
    return (
        <>
            {error && <Text color={'red'}> {error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spaceX={14} spaceY={14}>
                {games.map(game =>
                    <GameCard key={game.id} game={game}></GameCard>)
                }
            </SimpleGrid >
        </>
    )
}

export default GameGrid;