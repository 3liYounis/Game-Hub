import { Card, CardBody, Skeleton, SkeletonCircle, SkeletonText, HStack } from "@chakra-ui/react";
const GameCardSkeleton = () => {
    const circleSize = 5;
    return (
        <Card.Root>
            <Skeleton height="250px" />
            <Card.Header>
                <SkeletonText noOfLines={1} />
            </Card.Header>
            <CardBody>
                <HStack justifyContent="space-between">
                    <HStack justifyContent="space-between">
                        <SkeletonCircle size={circleSize} />
                        <SkeletonCircle size={circleSize} />
                        <SkeletonCircle size={circleSize} />
                        <SkeletonCircle size={circleSize} />
                    </HStack>
                    <Skeleton paddingX={2} borderRadius={7} boxSize={6} />
                </HStack>
            </CardBody>
        </Card.Root>
    )
}
export default GameCardSkeleton;