import {Component} from 'react'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="main-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png "
          alt="home"
          className="homeImg"
        />
        <h1 className="homeHeading">Home</h1>
      </div>
    )
  }
}

export default Home
