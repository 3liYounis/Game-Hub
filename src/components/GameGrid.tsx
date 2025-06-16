import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react';
import apiClient, { AxiosError, CanceledError } from '@/services/api-client';
import gamesService, { Games, Game } from '@/services/gamesService';
import useGames from '@/hooks/useGames';
const GameGrid = () => {
    const { isLoading, setIsLoading, games, setGames, error, setError } = useGames();
    return (
        <>
            {error && <Text color={'red'}> {error}</Text>}
            <ul>
                {games.map(game =>
                    <li key={game.id}>
                        {game.name}
                    </li>)
                }
            </ul>
        </>
    )
}

export default GameGrid;