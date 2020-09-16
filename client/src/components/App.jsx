import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Refresh from './Refresh.jsx';
import AddMovie from './AddMovie.jsx';
import axios from 'axios';
import WatchedMovieList from'./WatchedMovieList.jsx';
import NotWatchedMovieList from'./NotWatchedMovieList.jsx';

// class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'Mean Girls',
         detail: {
         year: 1995, runtime: '107 min', metascore: 46, imdbrating: 6.2, watched: false},
         watched: false}
        // {title: 'Hackers', watched: true},
        // {title: 'The Grey', watched: true},
        // {title: 'Sunshine', watched: false},
        // {title: 'Ex Machina', watched: false},
      ],
      allMovies: [
        {title: 'Hackers', watched: true},
        {title: 'The Grey', watched: true},
        {title: 'Sunshine', watched: false},
        {title: 'Ex Machina', watched: false}
      ],
      watchedMovies: [],
      notWatchedMovies: [],
      showWatchedMenu: true,
      showMovieBySearch:  false
    };
    this.searchMovies = this.searchMovies.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.AddMovieInTheList = this.AddMovieInTheList.bind(this);
    this.UpdateWatchedToggle = this.UpdateWatchedToggle.bind(this);
    this.listWatchedMovies = this.listWatchedMovies.bind(this);
    this.listNotWatchedMovies = this.listNotWatchedMovies.bind(this);
    this.getAllMovies = this.getAllMovies.bind(this);
  }

  componentDidMount() {
    // getAllMovies()
    this.getAllMovies();

  }

  getAllMovies() {
    axios.get('/api/movies')
    .then((response) => {
      console.log('axios GET MOVIES RECEIVE RESPONSE', response.data);
      this.setState({
        allMovies: response.data
      })
    })
    .catch((error) => {
      console.log('axios GET MOVIES ERROR', error);
    })
  }



  // POST new movie and get updated movielist
  AddMovieInTheList (videoTitle) {
    //console.log('query received:', videoTitle);
    axios.post('/api/movies', {title: videoTitle})
    .then((response) => {
      console.log('axios POST new movie Success', response);
    })
    .then(()=> {
      console.log('axios POST successful now, request getAllmovies');
      // call getAllMovies
      this.getAllMovies();
    })
    .catch((error) => {
      console.log('axios POST new movie Error', error);
    });
  }

  // Search movies with GET & params search
  searchMovies (movieKeyword) {
    console.log('query received:', movieKeyword);
    // Send a POST request
    axios({
      method: 'get',
      url: 'api/movies',
      params: {
        search: movieKeyword
      }
    })
    .then((response) => {
      console.log('axios GET SEAERCHED movie Success', response);
      if (response.data.length !== 0) {
        this.setState({
          allMovies: response.data
        })
      } else {
        this.setState({
          allMovies: [{title: 'No movie found', watched: false}]
        })
      }
    })
    .catch((error) => {
      console.log('axios GET SEAERCHED movie Error', error);
    });
  }

   // Refresh = show all movies
  handleRefresh(e) {
    e.preventDefault();
    console.log('refresh click')
    this.getAllMovies()
  // this.setState({
  //   movies: this.state.allMovies,
  //   watchedMovies: [],
  //   notWatchedMovies: []
  // })
  }


  // List for watched movies
  listWatchedMovies() {
    console.log('BUTTON Watched clicked')
    var watchedList = [];
    var lists = this.state.allMovies;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].watched === true) {
        watchedList.push(lists[i])
      }
    }
    console.log('watchedList',watchedList)
    this.setState({watchedMovies: watchedList, showWatchedMenu: true, movies:[]})
  }

  // List for not watched movies
  listNotWatchedMovies() {
    var notWatchedList = [];
    var lists = this.state.allMovies;
    for(let i = 0; i < lists.length; i+= 1) {
      if(lists[i].watched === false) {
        notWatchedList.push(lists[i]);
      }
    }
    console.log('notWatchedList',notWatchedList)
    this.setState({notWatchedMovies: notWatchedList, showWatchedMenu: false, movies:[]})
  }

  // Update videos based on clicking individual movie watched button
  UpdateWatchedToggle(title, watched) {

    var lists = this.state.movies;
    for (let i = 0; i < lists.length; i++) {
      if(lists[i].title === title) {
        lists[i].watched = watched;
      }
    }
    this.setState({movies: lists})
  }




  render() {
    // Conditional rendering
    let displayMovies;
    let showWatchedMenu = this.state.showWatchedMenu;   //true;
    if (showWatchedMenu) {
      displayMovies = <WatchedMovieList movies={this.state.watchedMovies} UpdateWatchedToggle={this.UpdateWatchedToggle}/>
    } else {
      displayMovies = <NotWatchedMovieList movies={this.state.notWatchedMovies} UpdateWatchedToggle={this.UpdateWatchedToggle}/>
    }



    return (
      <div>
        <div id='container'>
          <h1>MovieList</h1>
          <AddMovie AddMovieInTheList={this.AddMovieInTheList}/>

          <div className="search-refresh">
            <Search searchMovies={this.searchMovies}/>
            <Refresh handleRefresh={this.handleRefresh}/>
          </div>
          <button className='watched' onClick={this.listWatchedMovies}>Watched</button>
          <button className='unwatched' onClick={this.listNotWatchedMovies}>To Watch</button>
          {displayMovies}
          <MovieList movies={this.state.allMovies} UpdateWatchedToggle={this.UpdateWatchedToggle}/>
        </div>
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

