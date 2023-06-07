import { Card, Skeleton, SkeletonText,CardBody } from '@chakra-ui/react'

const GameCardSkeleton = () => {
    return (
        <Card>
            <Skeleton height="200px"/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    )
}

export default GameCardSkeleton
