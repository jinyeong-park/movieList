// functional stateless component
import MovieItem from './MovieItem.js'

var MovieList = ({movies}) => (

  <div>
    <h1>Hello MovieList</h1>
    {movies.map((movie => <MovieItem movie={movie}/>))}

    {/* {console.log('movies props', movies)} */}

  </div>
)

export default MovieList;

