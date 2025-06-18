import { Badge } from "@chakra-ui/react";

interface Props {
    score: number
}
const scoreToColor = (score: number): string => {
    if (score < 80)
        return "red"
    else if (score >= 80 && score < 90)
        return "yellow"
    return "green";
}
const CriticScore = ({ score }: Props) => {
    return (
        <Badge fontSize="16px" paddingX={2} borderRadius={7} colorPalette={scoreToColor(score)}>
            {score}
        </Badge>
    )
}

export default CriticScore;