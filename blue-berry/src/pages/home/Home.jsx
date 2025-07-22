import Hero from "../../components/hero/Hero.jsx";
import Explore from "../../components/explore_categories/Explore.jsx";
import Deal from "../../components/deal_product/Deal.jsx";
import Categories from "../../components/categories/Categories.jsx";
import Mid_Banner from "../../components/middle_banner/Mid_Banner.jsx";
import Main__product from "../../components/main_products/Main__product.jsx";
import Orders from "../../components/orders/Orders.jsx";
import Vendor from "../../components/vendors/Vendor.jsx";
import Seller from "../../components/sellers/Seller.jsx";
import Bottom from "../../components/product_bottom/Bottom.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <Explore />
      <Deal />
      <Categories />
      <Mid_Banner />
      <Main__product />
      <Orders />
      <Vendor />
      <Seller />
      <Bottom />
      <Footer />
    </div>
  );
};

export default Home;
