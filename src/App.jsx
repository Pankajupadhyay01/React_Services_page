import Letschat from "./Component/Chat/Letschat"
import Home from "./Component/Home/Home"
import Nav from "./Component/Navbar/Nav"
import Services from "./Component/Services/Services"

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Services />
      <Letschat />
    </div>
  )
}

export default App
