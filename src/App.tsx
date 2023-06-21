import {Routes , Route} from  'react-router-dom'
import Home from './Pages/Home/Home'
import Aboutus from './Pages/AboutUs/Aboutus'
import Contactus from './Pages/ContactUs/Contactus'
import Workshop from './Pages/Workshop/Workshop'
import Blog_Details from './Pages/Blogs_Detail/Blog_Details'
import Blogs from './Pages/Blogs/Blogs'
import Navbar from './Layout/Navbar/Navbar'
import Footer from './Layout/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<Aboutus/>}/>
      <Route path='/contact' element={<Contactus/>}/>
      <Route path='/workshop' element={<Workshop/>}/>
      <Route path='/blog' element={<Blogs/>}/>
      <Route path='/blog_detail' element={<Blog_Details/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App