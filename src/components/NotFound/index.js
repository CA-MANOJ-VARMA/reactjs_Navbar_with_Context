// Write your code here
import './index.css'

const NotFound = () => {
  console.log('Home')
  return (
    <>
      <div className="css-homeimage-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
          className="css-not-found-image-itself"
        />
        <h1>Lost Your Way</h1>
        <p>We cannot seem to find the page</p>
      </div>
    </>
  )
}

export default NotFound
