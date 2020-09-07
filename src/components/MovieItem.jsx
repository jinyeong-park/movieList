// functional stateless component

var MovieItem = ({movie}) => (

  <div>
    <li>{movie.title}</li>
    {console.log('movie props', movie)}
  </div>
)

export default MovieItem;