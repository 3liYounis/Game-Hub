import { useState, useEffect } from 'react'
import gamesService, { Game, Games } from '@/services/gamesService';
import { AxiosError, CanceledError } from 'axios';
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        setIsLoading(true);
        const cancel = gamesService.getControllerAbort();
        const fetchGames = async () => {
            try {
                const response = await gamesService.getAll<Games>();
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
    }, []);
    return { isLoading, setIsLoading, games, setGames, error, setError }
}

export default useGames;