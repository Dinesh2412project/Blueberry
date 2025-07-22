import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Categories from "../src/pages/categorie/Categories";
import Products from '../src/pages/product/Products';
import Page from "../src/pages/pagess/Page";
import Blog from "../src/pages/blog/Blog";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Page" element={<Page />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
