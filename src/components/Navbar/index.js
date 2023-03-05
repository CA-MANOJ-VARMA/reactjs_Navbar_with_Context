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

      const themeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <ul className="css-navabar-bg-container">
          <li>
            <img
              src={websiteLogo}
              alt="website logo"
              className="css-logo-image-itself"
            />
          </li>
          <li>
            <div className="css-navbar-home-about-container">
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/about">
                <p>About</p>
              </Link>
            </div>
          </li>
          <li>
            <button
              type="button"
              className="css-themetoggle-button-itself"
              onClick={toggleTheme}
              data-testid="theme"
            >
              <img
                src={themeLogo}
                alt="theme"
                className="css-logo-image-itself"
              />
            </button>
          </li>
        </ul>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
