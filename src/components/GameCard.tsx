import { Card, Image, Heading, HStack } from '@chakra-ui/react';
import { Game } from '@/hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCropppedImageURL from '@/services/image-url';
import Emoji from './Emoji';
interface Props {
    game: Game,
}
const GameCard = ({ game }: Props) => {
    return (
        <Card.Root>
            <Image src={getCropppedImageURL(game.background_image)} borderRadius={18}></Image>
            <Card.Header>
                <HStack justifyContent="space-between">
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
                    <CriticScore score={game.metacritic ?? 0}></CriticScore>
                </HStack>
            </Card.Header>
            <Card.Body>
                <Heading size="xl" whiteSpace="nowrap"> {game.name}</Heading>
                <Emoji rating={game.rating_top} />
            </Card.Body>
            <Card.Footer />
        </Card.Root>

    );
}

export default GameCard;