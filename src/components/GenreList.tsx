import useGenre from '../hooks/useGenre'

const GenreList = () => {
    const {genre}=useGenre()
  return (
    <ul>
        {genre?.map(genre=><li>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList
