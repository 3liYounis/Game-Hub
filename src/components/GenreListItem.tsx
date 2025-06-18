import { HStack, Image, Link } from "@chakra-ui/react";
import { Genre } from "@/hooks/useGenres";
import getCropppedImageURL from "@/services/image-url";
interface Props {
    genre: Genre,
    onSelectGenre: (genre: Genre) => void;
}
const GenreListItem = ({ genre, onSelectGenre }: Props) => {
    return (
        <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCropppedImageURL(genre.image_background)} />
            <Link onClick={() => onSelectGenre(genre)}>
                {genre.name}
            </Link>
        </HStack>
    )
}

export default GenreListItem;