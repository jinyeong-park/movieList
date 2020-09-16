import React from 'react';

// class component
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video : ''

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    console.log('user type something', event.target.value)
    this.setState({
      video: event.target.value
    });
  }


  handleSubmit (event) {
    // alert('user clicked submit button')
    event.preventDefault();
    this.props.searchInfo(this.state.video)


  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.video} onChange={this.handleChange} placeholder="Search.." />
          <input type="submit" value="Go!" />
        </form>

      </div>
    );
  }
}

export default Search;
