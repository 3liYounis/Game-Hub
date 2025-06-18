import { Card, Image, Heading } from '@chakra-ui/react';
import { Game } from '@/hooks/useGames';
import PlatformIconList from './PlatformIconList';
interface Props {
    game: Game,
}
const GameCard = ({ game }: Props) => {
    return (
        <Card.Root borderRadius={10} overflow="hidden" size="md">
            <Image src={game.background_image}></Image>
            <Card.Header>
                <Heading size="xl"> {game.name}</Heading>
            </Card.Header>
            <Card.Body>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
            </Card.Body>
            <Card.Footer />
        </Card.Root>

    );
}

export default GameCard;