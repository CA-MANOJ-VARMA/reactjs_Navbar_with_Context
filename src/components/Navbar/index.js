// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      return (
        <ul className="css-navabar-bg-container">
          <li key="website logo">
            <img
              src={websiteLogo}
              alt="website logo"
              className="css-logo-image-itself"
            />
          </li>
          <li key="Home_About">
            <div className="css-navbar-home-about-container">
              <Link to="/" className="css-link-property">
                Home
              </Link>
              <Link to="/about" className="css-link-property">
                About
              </Link>
            </div>
          </li>
          <li key="theme">
            <button
              type="button"
              className="css-themetoggle-button-itself"
              onClick={toggleTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  className="css-logo-image-itself"
                  alt="theme"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  className="css-logo-image-itself"
                  alt="theme"
                />
              )}
            </button>
          </li>
        </ul>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
