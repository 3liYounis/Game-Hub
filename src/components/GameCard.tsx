import { Card, Image, Heading, HStack } from '@chakra-ui/react';
import { Game } from '@/hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCropppedImageURL from '@/services/image-url';
interface Props {
    game: Game,
}
const GameCard = ({ game }: Props) => {
    return (
        <Card.Root padding={0.5}>
            <Image src={getCropppedImageURL(game.background_image)} borderRadius={10}></Image>
            <Card.Header>
                <Heading size="lg" whiteSpace="nowrap"> {game.name}</Heading>
            </Card.Header>
            <Card.Body>
                <HStack justifyContent="space-between">
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
                    <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
            </Card.Body>
            <Card.Footer />
        </Card.Root>

    );
}

export default GameCard;