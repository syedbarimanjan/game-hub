import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image,Text } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CriticScore from './CriticScore'

interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <HStack justifyContent='space-between'>
            <PlatformIconsList platforms={game.parent_platforms.map(platform=> platform.platform)}/>
            <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard