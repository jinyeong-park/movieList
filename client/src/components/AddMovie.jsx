import React from 'react';

// class component
class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video : ''

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    console.log('user adds new video', event.target.value)
    this.setState({
      video: event.target.value
    });
  }


  handleSubmit (event) {
    // alert('user clicked submit button')
    event.preventDefault();
    this.props.AddMovieInTheList(this.state.video)


  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.video} onChange={this.handleChange} placeholder="Add movie title here" />
          <input className='add-button' type="submit" value="Add" />
        </form>

      </div>
    );
  }
}

export default AddMovie;