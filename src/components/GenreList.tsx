import { HStack, Image, List, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '@/hooks/useGenres';
import getCropppedImageURL from '@/services/image-url';
import GenreListSkeleton from './GenreListSkeleton';
import GenreListItem from './GenreListItem';
interface Props {
    onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading } = useGenres();
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <List.Root>
            {isLoading && items.map(item =>
                <List.Item key={item} paddingY={2}>
                    <GenreListSkeleton />
                </List.Item>
            )}
            {!isLoading && data.map(genre =>
                <List.Item key={genre.id} paddingY={2}>
                    <GenreListItem genre={genre} onSelectGenre={() => onSelectGenre(genre)} />
                </List.Item>
            )}
        </List.Root>
    )
}
export default GenreList;