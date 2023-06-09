import { Button, HStack, Image, List, ListItem,Text } from '@chakra-ui/react'
import useGenre, { Genre } from '../hooks/useGenre'
import getCroppedImageUrl from '../services/image-url'
import GenreListSkeleton from './GenreListSkeleton';

interface Props{
  onSelectGenre:(genre:Genre) => void
}

const GenreList = ({onSelectGenre}:Props) => {
    const {data,isLoading}=useGenre();
    const skeletons=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
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
                    <Button onClick={() => onSelectGenre(genre)} fontSize="lg" variant="link">{genre.name}</Button>
                  </HStack>
                </ListItem>
            ))}
        </List>
      </>
    )
}

export default GenreList
