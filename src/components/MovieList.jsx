// functional stateless component
import MovieItem from './MovieItem.js'

var MovieList = (props) => (
    <div>
        <table>
            <tbody>
                {props.movies.map((movie, index) => (
                    <tr>
                        <MovieItem key={index} movie={movie}/>
                    </tr>
                    ))
                }

            </tbody>
        </table>
        {console.log('movies props', props)}
    </div>



)

export default MovieList;

