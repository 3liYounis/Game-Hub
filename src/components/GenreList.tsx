import { HStack, Image, List, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '@/hooks/useGenres';
import getCropppedImageURL from '@/services/image-url';
import GenreListSkeleton from './GenreListSkeleton';
import GenreListItem from './GenreListItem';
interface Props {
    selectedGenre: Genre | null;
    onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading } = useGenres();
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <List.Root listStyleType="none">
            {isLoading && items.map(item =>
                <List.Item key={item} paddingY={2}>
                    <GenreListSkeleton />
                </List.Item>
            )}
            {!isLoading && data.map(genre =>
                <List.Item key={genre.id} paddingY={2}>
                    <GenreListItem selected={selectedGenre?.id === genre.id} genre={genre} onSelectGenre={() => onSelectGenre(genre)} />
                </List.Item>
            )}
        </List.Root>
    )
}
export default GenreList;