import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';
export class Content extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            {this
              .props
              .data
              .map((item, index) => (
                <div className="col-md-4" key={index}>
                  <NavLink
                    to={{
                    pathname: `/detail/${item.id}`
                  }}>
                    <div>
                      <img
                        className="img-thumbnail"
                        src={item.avatar_url}
                        alt={item.login}
                        style={{
                        width: '100%',
                        marginBottom: '10px',
                        maxHeight: '230px'
                      }}></img>
                    </div>
                    <h6 className="text-center">{item.login}</h6>
                  </NavLink>

                </div>
              ))}
          </div>
        </div>
    )
  }
}

export default Content
