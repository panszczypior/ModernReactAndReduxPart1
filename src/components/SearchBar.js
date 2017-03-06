import React from 'react'

class SearchBar extends React.Component {

  constructor() {
    super();

    this.state = {
      term: '',
    }
  }

  handleChange(event) {
    this.setState({
      term: event.target.value,
    })
    this.props.onSearchTermChange(event.target.value);
  }

  render () {
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

export default SearchBar;
