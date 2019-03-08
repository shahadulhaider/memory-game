import React from 'react'

const Header = (props) => {
  return (
    <div className="navbar-fixed">
      <nav className="indigo darken-4" >
        <div className="nav-wrapper" style={{ margin: "0 5vw" }}>
          <a href="/" className="brand-logo"
            style={{
              fontFamily: "Righteous"
            }}
          >Memory Game</a>
          <ul className="right hide-on-med-and-down">
            <li style={{ margin: "0 2vw" }}>
              Current Score: {props.currentScore}
            </li>
            <li style={{ margin: "0 2vw" }}>
              Top Score: {props.topScore}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
