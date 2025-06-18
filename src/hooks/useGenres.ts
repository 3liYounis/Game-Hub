import { useState, useEffect } from 'react'
import genreService from '@/services/genreService';
import { AxiosError, CanceledError } from 'axios';
export interface Genre {
    id: number,
    name: string,
}
export interface Genres {
    count: number,
    results: Genre[]
}
const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        const fetchGames = async () => {
            try {
                const response = await genreService.getAll<Genres>(controller.signal);
                if (response) {
                    setGenres(response.data.results);
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
    return { isLoading, genres, error }
}

export default useGenres;