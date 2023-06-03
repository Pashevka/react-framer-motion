import Navbar from "./Navbar"
import Hero from "./Hero"

const Header = () => {
  return (
    <header id="header">
      <div className="outer-container nav-wrapper">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="container">
        <Hero />
      </div>
    </header>
  )
}

export default Header