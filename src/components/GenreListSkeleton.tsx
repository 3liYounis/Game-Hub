import { Skeleton, SkeletonText, HStack } from "@chakra-ui/react";

const GenreListSkeleton = () => {
    return (
        <HStack>
            <Skeleton boxSize="32px" borderRadius={8} />
            <SkeletonText noOfLines={1} />
        </HStack>
    )
}

export default GenreListSkeleton;