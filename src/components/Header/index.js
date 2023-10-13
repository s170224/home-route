import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="imag-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
            className="image1"
          />
          <h1 className="heading1">Wave</h1>
        </div>
        <div>
          <ul className="home-con">
            <li className="li-con">
              <Link className="heading1" to="/">
                Home
              </Link>
            </li>
            <li className="li-con">
              <Link className="heading1" to="/about">
                About
              </Link>
            </li>
            <li className="li-con">
              <Link className="heading1" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
