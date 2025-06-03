
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Page from './pages/Page';
import Blog from './pages/Blog';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Explore from './components/explore-categories/Explore';


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    <Explore/>
    <Routes>
      <Route   exact path="/" element={<Home/>}/>
      <Route  path="/Categories" element={<Categories/>}/>
      <Route  path="/Products" element={<Products/>}/>
      <Route  path="/Page" element={<Page/>}/>
      <Route  path="/Blog" element={<Blog/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
