import { HStack, Image, Text } from "@chakra-ui/react";
import { Genre } from "@/hooks/useGenres";
import getCropppedImageURL from "@/services/image-url";
interface Props {
    genre: Genre
}
const GenreListItem = ({ genre }: Props) => {
    return (
        <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCropppedImageURL(genre.image_background)} />
            <Text>{genre.name}</Text>
        </HStack>
    )
}

export default GenreListItem;