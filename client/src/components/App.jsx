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
    this.searchInfo = this.searchInfo.bind(this);
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


  // POST new movie
  AddMovieInTheList (videoTitle) {
    // console.log('query received:', videoTitle);
    axios.post('/api/movie', { title: videoTitle })
    .then(function (response) {
      console.log('axios POST new movie Success', response);
    })
    .catch(function (error) {
      console.log('axios POST new movie Error', error);
    });
    // console.log('query received:', videoTitle);
    // //make searched movie list ***** should make array format(linked with map)
    // let allMovies =  this.state.allMovies;
    // let alreadyIntheList = false;
    // // After a user submits the search, if user typed video in not in the allMovies, add new video into allvideods
    // for (let i = 0; i < allMovies.length; i++) {
    //   // After a user submits the new movies, if it is not duplicate, add it to allvideos
    //   if (allMovies[i].title.toLowerCase() === videoTitle.toLowerCase()) {
    //     alert("this movie is already in the list!");
    //     alreadyIntheList = true;
    //   }
    // }

    // if (!alreadyIntheList) {
    //   allMovies.push({title: videoTitle, watched: false});
    //   this.setState({
    //     allMovies: allMovies
    //   })
    // }
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

  // Search
  searchInfo (query) {

    console.log('query received:', query);
    //make searched movie list ***** should make array format(linked with map)
    let searchedList = [];
    // console.log(this.props.movies)
    let allMovies =  this.state.movies;
    let found = false;
    for (let i = 0; i < allMovies.length; i++) {
      // After a user submits the search, display all matches (or partial matches) to that title.
      if (allMovies[i].title.toLowerCase().includes(query.toLowerCase())) {
      // if (allMovies[i].title.toLowerCase() === query.toLowerCase()) {
        console.log('title and searching are matching')
        searchedList.push(allMovies[i]);
        this.setState({
          movies: searchedList,
          watchedMovies: [],
          notWatchedMovies: []
        })
        found = true;
      }
    }
    // Handle the case of "no movie by that name found
    if (!found) {
      this.setState({
        movies: [
          {title: 'no movie by that name found', watched: null}
        ],
        watchedMovies: [],
        notWatchedMovies: []
      })
    }
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
            <Search searchInfo={this.searchInfo}/>
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

