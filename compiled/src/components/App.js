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
        'h1',
        null,
        'Hello App'
      ),
      React.createElement(MovieList, { movies: this.state.movies })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJ0aXRsZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0Qjs7QUFFQTtBQUNBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxDQUNOLEVBQUNDLE9BQU8sWUFBUixFQURNLEVBRU4sRUFBQ0EsT0FBTyxTQUFSLEVBRk0sRUFHTixFQUFDQSxPQUFPLFVBQVIsRUFITSxFQUlOLEVBQUNBLE9BQU8sVUFBUixFQUpNLEVBS04sRUFBQ0EsT0FBTyxZQUFSLEVBTE07QUFERyxLQUFiO0FBU0Q7O0FBRURDLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFLDBCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtILEtBQUwsQ0FBV0MsTUFBOUI7QUFGRixLQURGO0FBTUQ7QUFyQitCOztBQXdCbEMsZUFBZU4sR0FBZjs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW92aWVMaXN0IGZyb20gJy4vTW92aWVMaXN0LmpzJ1xuXG4vLyBjbGFzcyBjb21wb25lbnRcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IFtcbiAgICAgICAge3RpdGxlOiAnTWVhbiBHaXJscyd9LFxuICAgICAgICB7dGl0bGU6ICdIYWNrZXJzJ30sXG4gICAgICAgIHt0aXRsZTogJ1RoZSBHcmV5J30sXG4gICAgICAgIHt0aXRsZTogJ1N1bnNoaW5lJ30sXG4gICAgICAgIHt0aXRsZTogJ0V4IE1hY2hpbmEnfSxcbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+SGVsbG8gQXBwPC9oMT5cbiAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIC8vIGZ1bmN0aW9uYWwgc3RhdGVsZXNzIGNvbXBvbmVudFxuLy8gdmFyIEFwcCA9IChwcm9wcykgPT4gKFxuXG4vLyAgIDxoMT5IZWxsbyBBcHA8L2gxPlxuLy8gICA8TW92aWVMaXN0IC8+XG4vLyAgIHsvKiB7Y29uc29sZS5sb2coJ2hlbGxvIGNvbnNvbGUgaW5zaWRlIGZyb20gYXBwJyl9ICovfVxuLy8gKVxuXG4iXX0=