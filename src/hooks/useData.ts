import { useState, useEffect } from 'react'
import { AxiosError, AxiosRequestConfig, CanceledError } from 'axios';
import createHTTPService from '@/services/HTTPService';
export interface FetchResponse<T> {
    count: number,
    results: T[]
}
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const service = createHTTPService(endpoint);
                const response = await service.getAll<FetchResponse<T>>(controller.signal, requestConfig);
                if (response) {
                    setData(response.data.results);
                    setLoading(false);
                }
            }
            catch (error) {
                if (error instanceof CanceledError) return;
                setError((error as AxiosError).message);
                setLoading(false);
            }
        }
        fetchData();
        return () => controller.abort();
    }, deps ? [...deps] : []);
    return { isLoading, data, error }
}

export default useData;