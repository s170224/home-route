import {Component} from 'react'

import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div className="notFound-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png "
          alt="not found"
          className="notImg"
        />
        <h1 className="notH">Not Found</h1>
      </div>
    )
  }
}

export default NotFound
