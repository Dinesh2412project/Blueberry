import './style.css';
import bannerData from '../../assets/DataStorage/CategoriesData';
import BannerCard from './BannerCard';

const Categories = () => {
  return (
    <>

    <div className="category-banners">
    {bannerData.map((item, index) => (
      <BannerCard
        key={index}
        image={item.image}
        title={item.title}
        text={item.text}
      />
    ))}
  </div>

  
     {/* <div className="category-banners">
        <div className="snack-banner">
          <img
            src="https://blueberry-react-next.maraviyainfotech.com/assets/img/banner-one/one.png"
            alt="img"
          />

          <div className="banner-content">
            <h1>Tasty Snack & Fast food</h1>
            <p>The flavour of something special</p>
            <button>shop now</button>
          </div>
        </div>

        <div className="snack-banner">
          <img
            src="https://blueberry-react-next.maraviyainfotech.com/assets/img/banner-one/two.png"
            alt="img"
          />

          <div className="banner-content">
            <h1>Fresh Fruits & Vegetables</h1>
            <p>A healthy meal for every one</p>
            <button>shop now</button>
          </div>
        </div>
      </div>..*/}
    </>
  )
}

export default Categories