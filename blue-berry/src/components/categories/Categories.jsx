import "./style.css";
import {bannerData} from '../../utils/constants/constant.js'; 
import BannerCard from '../../components/card__method/BannerCard.jsx';

const Categories = () => {
  return (
    <>
      <div className="category-banners">
        {bannerData?.map((item, index) => (
          <BannerCard
            key={index}
            image={item?.image}
            title={item?.title}
            text={item?.text}
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
