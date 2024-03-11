import { Routes, Route } from "react-router-dom"
import { Menu } from './routes/Menu.jsx'
import { Home } from './routes/Home.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/Quotes" element={ <Menu /> } />
    </Routes>
  )
}

export default App
