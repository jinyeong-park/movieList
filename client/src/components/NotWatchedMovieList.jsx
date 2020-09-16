// functional stateless component
import React from 'react';
import MovieListItem from './MovieListItem.jsx'

var NotWatchedMovieList = (props) => (
    <div>
        <table>
            <tbody>

                {props.movies.map((movie, index) => (
                    <tr>
                        <MovieListItem key={index} movie={movie} UpdateWatchedToggle={props.UpdateWatchedToggle} />
                    </tr>
                    ))
                }

            </tbody>
        </table>
       {console.log('NotWatchedMovieList props', props)}
    </div>
)

export default NotWatchedMovieList;