import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Views/Pages/Home/Home'
import About from './Views/Pages/About/About'
import Cakes from './Views/Pages/Cakes/Cakes'
import Blog from './Views/Pages/Blog/Blog'
import Layout from './Views/Layout/Layout'

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cakes' element={<Cakes />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
