import React, { Component } from 'react'
import fakedata from '../fakedata.json'
import {Link} from 'react-router-dom';

export class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            profile: {}
        }
    }
    componentDidMount(){
        let id = parseInt(this.props.match.params.key);
        this.setState({
            profile: fakedata.find(x=>x.id === id)
        })
    }
  render() {
    return (
      <div>
        this is profile page
        <div>
            <img className="img-thumbnail" src={this.state.profile.avatar_url} alt={this.state.profile.login}></img>
            <p>{this.state.profile.login}</p>
            <Link to="/">Go Home</Link>
        </div>
      </div>
    )
  }
}

export default Profile
