import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="not_found_container">
    <Header />
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
      width={600}
    />
    <h1>Lost Your Way?</h1>
    <p>
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
