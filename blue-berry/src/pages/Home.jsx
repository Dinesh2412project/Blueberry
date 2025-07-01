import Hero from '../components/hero/Hero.jsx';
import Explore from '../components/explore-categories/Explore.jsx';
import  Deal from '../components/deal-product/Deal.jsx';
import Categories from '../components/categories/Categories.jsx';
import Mid_Banner from '../components/middle__banner/Mid_Banner.jsx';
import Main__product from '../components/main__products/Main__product.jsx';

const Home = () => {
  return (
    <div>
      <Hero/>
    <Explore/>
    <Deal/>
    <Categories/>
    <Mid_Banner/>
    <Main__product/>
    </div>
  )
}

export default Home