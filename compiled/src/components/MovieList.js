// functional stateless component
import MovieItem from './MovieItem.js';

var MovieList = props => React.createElement(
    'div',
    null,
    React.createElement(
        'table',
        null,
        React.createElement(
            'tbody',
            null,
            props.movies.map((movie, index) => React.createElement(
                'tr',
                null,
                React.createElement(MovieItem, { key: index, movie: movie })
            ))
        )
    ),
    console.log('movies props', props)
);

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVJdGVtIiwiTW92aWVMaXN0IiwicHJvcHMiLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsImluZGV4IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0Qjs7QUFFQSxJQUFJQyxZQUFhQyxLQUFELElBQ1o7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0tBLGtCQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQ2Q7QUFBQTtBQUFBO0FBQ0ksb0NBQUMsU0FBRCxJQUFXLEtBQUtBLEtBQWhCLEVBQXVCLE9BQU9ELEtBQTlCO0FBREosYUFESDtBQURMO0FBREosS0FESjtBQVlLRSxZQUFRQyxHQUFSLENBQVksY0FBWixFQUE0Qk4sS0FBNUI7QUFaTCxDQURKOztBQW9CQSxlQUFlRCxTQUFmIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZ1bmN0aW9uYWwgc3RhdGVsZXNzIGNvbXBvbmVudFxuaW1wb3J0IE1vdmllSXRlbSBmcm9tICcuL01vdmllSXRlbS5qcydcblxudmFyIE1vdmllTGlzdCA9IChwcm9wcykgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7cHJvcHMubW92aWVzLm1hcCgobW92aWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZUl0ZW0ga2V5PXtpbmRleH0gbW92aWU9e21vdmllfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICB7Y29uc29sZS5sb2coJ21vdmllcyBwcm9wcycsIHByb3BzKX1cbiAgICA8L2Rpdj5cblxuXG5cbilcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xuXG4iXX0=