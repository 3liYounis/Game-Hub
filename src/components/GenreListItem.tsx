import { HStack, Image, Link } from "@chakra-ui/react";
import { Genre } from "@/hooks/useGenres";
import getCropppedImageURL from "@/services/image-url";
interface Props {
    genre: Genre,
    selected: boolean,
    onSelectGenre: (genre: Genre) => void;
}
const GenreListItem = ({ selected, genre, onSelectGenre }: Props) => {
    return (
        <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCropppedImageURL(genre.image_background)} />
            <Link fontWeight={selected ? "bold" : "normal"} backgroundColor={selected ? "gray" : "transparent"} borderRadius={8} paddingX={2} onClick={() => onSelectGenre(genre)}>
                {genre.name}
            </Link>
        </HStack>
    )
}

export default GenreListItem;