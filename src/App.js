import React, {Component} from 'react';
import './App.css';
import SearchForm from './components/SearchForm'
import Content from './components/Content'
import fakedata from './fakedata.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      filters: {
        keySearch: ''
      },
      data: []
    }
  }
  componentDidMount(){
    this.searchData();
  }
  handleChange = (e)=>{
    let _filters = this.state.filters;
    _filters[e.target.name] = e.target.value;
    this.setState({
      filters: _filters
    })
  }
  handleSearch = (e)=>{
    e.preventDefault();
    this.searchData();
  }
  searchData = ()=>{
    this.setState({
      data: fakedata.filter(x=>x.login.includes(this.state.filters.keySearch))
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Booking Engine</p>
        </header>
        <SearchForm filters={this.state.filters} handleChange={this.handleChange} handleSearch={this.handleSearch}></SearchForm>
        <Content data={this.state.data}></Content>
      </div>
    );
  }
}

App.defaultProps = {
  key: '9de2314a17911865a7e883ec085163fc'
}
export default App;
