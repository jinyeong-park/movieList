// import React from 'react';
import MovieList from './MovieList.js';

// class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }]
    };
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { id: 'container' },
        React.createElement(
          'h1',
          null,
          'MovieList'
        ),
        React.createElement(MovieList, { movies: this.state.movies })
      )
    );
  }
}

export default App;

// // functional stateless component
// var App = (props) => (

//   <h1>Hello App</h1>
//   <MovieList />
//   {/* {console.log('hello console inside from app')} */}
// )
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJ0aXRsZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0Qjs7QUFFQTtBQUNBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxDQUNOLEVBQUNDLE9BQU8sWUFBUixFQURNLEVBRU4sRUFBQ0EsT0FBTyxTQUFSLEVBRk0sRUFHTixFQUFDQSxPQUFPLFVBQVIsRUFITSxFQUlOLEVBQUNBLE9BQU8sVUFBUixFQUpNLEVBS04sRUFBQ0EsT0FBTyxZQUFSLEVBTE07QUFERyxLQUFiO0FBU0Q7O0FBRURDLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLElBQUcsV0FBUjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRjtBQUdFLDRCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtILEtBQUwsQ0FBV0MsTUFBOUI7QUFIRjtBQURGLEtBREY7QUFVRDtBQXpCK0I7O0FBNEJsQyxlQUFlTixHQUFmOztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9Nb3ZpZUxpc3QuanMnXG5cbi8vIGNsYXNzIGNvbXBvbmVudFxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllczogW1xuICAgICAgICB7dGl0bGU6ICdNZWFuIEdpcmxzJ30sXG4gICAgICAgIHt0aXRsZTogJ0hhY2tlcnMnfSxcbiAgICAgICAge3RpdGxlOiAnVGhlIEdyZXknfSxcbiAgICAgICAge3RpdGxlOiAnU3Vuc2hpbmUnfSxcbiAgICAgICAge3RpdGxlOiAnRXggTWFjaGluYSd9LFxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgaWQ9J2NvbnRhaW5lcic+XG4gICAgICAgICAgey8qIDxoMT5IZWxsbyBBcHA8L2gxPiAqL31cbiAgICAgICAgICA8aDE+TW92aWVMaXN0PC9oMT5cbiAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gLy8gZnVuY3Rpb25hbCBzdGF0ZWxlc3MgY29tcG9uZW50XG4vLyB2YXIgQXBwID0gKHByb3BzKSA9PiAoXG5cbi8vICAgPGgxPkhlbGxvIEFwcDwvaDE+XG4vLyAgIDxNb3ZpZUxpc3QgLz5cbi8vICAgey8qIHtjb25zb2xlLmxvZygnaGVsbG8gY29uc29sZSBpbnNpZGUgZnJvbSBhcHAnKX0gKi99XG4vLyApXG5cbiJdfQ==