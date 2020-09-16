import React from 'react';
// functional stateless component
class MovieListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isWatchedToggle: this.props.movie.watched,
      isTitleClickedForDetails: false
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

    // console.log('this.props', this.props)    // undefined
    this.props.UpdateWatchedToggle(this.props.movie.title, this.state.isWatchedToggle)
  }

  onTitleClickHandler() {
    // console.log('watched toggle clicked')
    this.setState({
      isTitleClickedForDetails: !this.state.isTitleClickedForDetails
    })
  }

  render() {
    let displayMovieDetails;
    let isTitleClickedForDetail = this.state.isTitleClickedForDetails;
    if (isTitleClickedForDetail) {
      displayMovieDetails = <div>
                              <tr>Year: {this.props.movie.detail.year}</tr>
                              <tr>Runtime: {this.props.movie.detail.runtime}</tr>
                              <tr>Metascore: {this.props.movie.detail.metascore}</tr>
                              <tr>imdbRating: {this.props.movie.detail.imdbrating}</tr>
                              <tr>Watched: {this.props.movie.detail.watched}</tr>
                            </div>
      // displayMovieDetails = <td>{this.props.movie.datail.year} {this.props.movie.datail.runtime} {this.props.movie.datail.metascore} {this.props.movie.datail.imdbrating} {this.props.movie.datail.watched}</td>
    } else {
      displayMovieDetails = null;
    }

    return (
      <div>
        {console.log('this.props.movie.detail.year', this.props.movie.detail.year)}
        <td onClick={this.onTitleClickHandler}>{this.props.movie.title}</td>
        <td>
          <form onSubmit={this.UpdateWatchedOrNotWatchedList}>
            <input type="submit" className='watched-button' value={this.state.isWatchedToggle ? 'Watched' : 'To watch'} onClick={this.onWatchedToggleClickHandler}/>
         </form>
        </td>
        {displayMovieDetails}
      </div>
    )
  }
}





export default MovieListItem;