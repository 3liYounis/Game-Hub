import { useState, useEffect } from 'react'
import gamesService from '@/services/gamesService';
import { AxiosError, CanceledError } from 'axios';
export interface Game {
    id: number,
    name: string
    background_image: string
}
export interface Games {
    count: number,
    results: Game[]
}
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        setIsLoading(true);
        const controller = new AbortController();
        const fetchGames = async () => {
            try {
                const response = await gamesService.getAll<Games>(controller.signal);
                if (response) {
                    setGames(response.data.results);
                    setIsLoading(false);
                }
            }
            catch (error) {
                if (error instanceof CanceledError) return;
                setError((error as AxiosError).message);
            }
        }
        fetchGames();
        return () => controller.abort();
    }, []);
    return { isLoading, setIsLoading, games, setGames, error, setError }
}

export default useGames;