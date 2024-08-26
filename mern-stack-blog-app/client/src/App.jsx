import { Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import Home from './pages/home/home'
import AddNewBlog from './pages/add-blog/add-blog'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/add-blog' element={<AddNewBlog />}/>
      </Routes>
    </div>
  )
}

export default App
