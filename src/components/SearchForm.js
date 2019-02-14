import React, {Component} from 'react'
export class SearchForm extends Component {
  render() {
    return (
      <div className="container" style={{marginBottom:'10px'}}>
        <form onSubmit={this.props.handleSearch}>
          <div className="form-group">
            <label>Key</label>
            <input
              value={this.props.filters.keySearch}
              onChange={this.props.handleChange}
              type="text"
              name="keySearch"
              className="form-control"></input>
          </div>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchForm
