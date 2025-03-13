import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { data } from './data/data'

function App(){
const menuData = data
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<About menuData={menuData} />}/>
        <Route path ='/about' element={< Home/>}/>
      </Routes>
    </>
  )
}
export default App
