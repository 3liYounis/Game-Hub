import { Card, Image, Heading } from '@chakra-ui/react';
import { Game } from '@/hooks/useGames';
interface Props {
    game: Game,
}
const GameCard = ({ game }: Props) => {
    return (
        <Card.Root borderRadius={10} overflow="hidden">
            <Image src={game.background_image}></Image>
            <Card.Header>
                <Heading size="2xl"> {game.name}</Heading>
            </Card.Header>
            <Card.Body>
            </Card.Body>
            <Card.Footer />
        </Card.Root>

    );
}

export default GameCard;