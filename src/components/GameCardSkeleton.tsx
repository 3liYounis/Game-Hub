import { Card, CardBody, Skeleton, SkeletonCircle, SkeletonText, HStack } from "@chakra-ui/react";
const GameCardSkeleton = () => {
    const circleSize = 6;
    return (
        <Card.Root>
            <Skeleton height="300px" />
            <Card.Header>
                <HStack justifyContent="space-between">
                    <HStack justifyContent="space-between">
                        <SkeletonCircle size={circleSize} />
                        <SkeletonCircle size={circleSize} />
                        <SkeletonCircle size={circleSize} />
                        <SkeletonCircle size={circleSize} />
                    </HStack>
                    <Skeleton paddingX={2} borderRadius={7} boxSize={6} />
                </HStack>
            </Card.Header>
            <CardBody>
                <SkeletonText noOfLines={1} />
                <SkeletonCircle size={circleSize} />

            </CardBody>
        </Card.Root>
    )
}
export default GameCardSkeleton;