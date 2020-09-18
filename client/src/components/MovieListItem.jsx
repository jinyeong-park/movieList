import React from 'react';
// functional stateless component
class MovieListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isWatchedToggle: this.props.movie.watched
      // isTitleClickedForDetails: false
    }

    this.onWatchedToggleClickHandler = this.onWatchedToggleClickHandler.bind(this);
    this.UpdateWatchedOrNotWatchedList = this.UpdateWatchedOrNotWatchedList.bind(this);
    this.onTitleClickHandler = this.onTitleClickHandler.bind(this);
  }

  onWatchedToggleClickHandler() {
    // console.log('watched toggle clicked')
    this.setState({
      isWatchedToggle: !this.state.isWatchedToggle
    })

  }

  UpdateWatchedOrNotWatchedList(event) {
    event.preventDefault();

    // ß
    this.props.UpdateWatchedToggle(this.props.movie.id, this.state.isWatchedToggle)
  }

  onTitleClickHandler() {
    // console.log('watched toggle clicked')
    this.setState({
      isTitleClickedForDetails: !this.state.isTitleClickedForDetails
    })
  }

  render() {
    return (
      <div>
        {/* {console.log('this.props.movie.detail.year', this.props.movie.detail.year)} */}
        <td onClick={this.onTitleClickHandler}>{this.props.movie.title}</td>
        <td>
          <form onSubmit={this.UpdateWatchedOrNotWatchedList}>
            <input type="submit" className='watched-button' value={this.props.movie.watched ? 'Watched' : 'To watch'} onClick={this.onWatchedToggleClickHandler}/>
            {/* 1. receive the watched data from db, if this.props.movie.watched is 1(true), show 'Watched', otherwise 'To watch'
                2. whenever click the watched button, update the db by http request
            */}

         </form>
        </td>
        {/* {displayMovieDetails} */}
      </div>
    )
  }
}





export default MovieListItem;