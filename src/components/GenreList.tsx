import { HStack, Image, List, ListItem,Text } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'
import getCroppedImageUrl from '../services/image-url'
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {
    const {data,isLoading}=useGenre();
    const skeletons=[1,2,3,4,5,6,7,8,9,10];
    return (
      <>
        {isLoading && skeletons.map((skeleton)=>(
          <GenreListSkeleton key={skeleton}/>
        ))}
        <List>
            {data?.map(genre => (
                <ListItem key={genre.id} paddingY="5px">
                  <HStack>
                    <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                    <Text fontSize="lg">{genre.name}</Text>
                  </HStack>
                </ListItem>
            ))}
        </List>
      </>
    )
}

export default GenreList
