import { useState, useEffect } from 'react'
import gamesService from '@/services/gamesService';
import { AxiosError, CanceledError } from 'axios';
export interface Platform {
    id: number,
    name: string,
    slug: string
}
export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[]
    metacritic: number
}
export interface Games {
    count: number,
    results: Game[]
}
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        const fetchGames = async () => {
            try {
                const response = await gamesService.getAll<Games>(controller.signal);
                if (response) {
                    setGames(response.data.results);
                    setLoading(false);
                }
            }
            catch (error) {
                if (error instanceof CanceledError) return;
                setError((error as AxiosError).message);
                setLoading(false);
            }
        }
        fetchGames();
        return () => controller.abort();
    }, []);
    return { isLoading, setIsLoading: setLoading, games, setGames, error, setError }
}

export default useGames;