import About from "./About"
import Services from "./Services/Services"

const Main = () => {
  return (
    <main>
      <div className="container">
        <About />
        <Services />
        <About />
        <Services />
        <About />
        <Services />
      </div>
    </main>
  )
}

export default Main