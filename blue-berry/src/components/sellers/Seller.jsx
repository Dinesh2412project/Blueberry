import './style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Seller = () => {
  return (
    <div className='seller_container'>
    <Carousel responsive={responsive}>
  <div className='seller_box'>
    <div className="seller_img">
        <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/testimonials/1.jpg" alt="img" />
    </div>
    <div className="seller_content">
        <h2>isabella oliver</h2>
        <h6>(manager)</h6>
        <p> dignissimos ab inventore itaque minima corrupti provident, omnis, sunt quos recusandae debitis fuga esse incidunt necessitatibus. Quos suscipit commodi natus quam odio ratione veritatis.</p>
    </div>
  </div>

  <div className='seller_box'>
    <div className="seller_img">
        <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/testimonials/2.jpg" alt="img" />
    </div>
    <div className="seller_content">
        <h2>nikki albart</h2>
        <h6>(team leader)</h6>
        <p> dignissimos ab inventore itaque minima corrupti provident, omnis, sunt quos recusandae debitis fuga esse incidunt necessitatibus. Quos suscipit commodi natus quam odio ratione veritatis.</p>
    </div>
  </div>

  <div className='seller_box'>
    <div className="seller_img">
        <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/testimonials/3.jpg" alt="img" />
    </div>
    <div className="seller_content">
        <h2>stephen smith</h2>
        <h6>(co founder)</h6>
        <p> dignissimos ab inventore itaque minima corrupti provident, omnis, sunt quos recusandae debitis fuga esse incidunt necessitatibus. Quos suscipit commodi natus quam odio ratione veritatis.</p>
    </div>
  </div>
  
</Carousel>
        
    </div>
  )
}

export default Seller