import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home_container">
    <Header />
    <div className="img_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        width={700}
      />
    </div>
  </div>
)

export default Home
