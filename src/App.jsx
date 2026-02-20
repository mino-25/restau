import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Routes> 
        </div>
      <Footer />
    </Router>
     

  )
}

export default App
