// import React from 'react';
import MovieList from './MovieList.js'

// class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Hello App</h1>
        <MovieList movies={this.state.movies}/>
      </div>
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

