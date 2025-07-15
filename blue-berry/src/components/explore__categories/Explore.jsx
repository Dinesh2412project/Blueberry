import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import categories from "../../assets/DataStorage/ExploreData";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Explore = () => {
  return (
    <div className="category-explorer">
      <div className="explore-header">
        <div className="explorer-image-wrapper">
          <img
            src="https://blueberry-react-next.maraviyainfotech.com/assets/img/category/category.jpg"
            alt="img"
          />
        </div>
        <div className="explorer-title">
          <h1>explore categories</h1>
        </div>
      </div>
      {/*relative product methods.......*/}

      <div className="category-slider">
        <Carousel responsive={responsive}>
          {categories?.map((cat, index) => (
            <div className={`category-card ${cat.className}`} key={index}>
              <img src={cat?.img} alt={cat.title} />
              <h4>{cat?.title}</h4>
              <h6>{cat?.items} items</h6>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Explore;
