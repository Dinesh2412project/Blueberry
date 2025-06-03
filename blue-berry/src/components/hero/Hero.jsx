import './Hero.css';
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

const Hero = () => {
  return (
    <div className='hero-container'>
        <Carousel responsive={responsive}>
  <div className='hero-1'>
    <div className="hero-heading">
      <p>flat 30% off</p>
      <h1>explore ware fast food & snacks</h1>
      <button>shop now</button>
    </div>
    <div className="hero-img">
        <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/hero/hero-3.png" alt="img" />
    </div>
  </div>
  
  <div className='hero-1'>
    <div className="hero-heading">
      <p>flat 30% off</p>
      <h1>explore ware fast food & snacks</h1>
      <button>shop now</button>
    </div>
    <div className="hero-img">
        <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/hero/hero-1.png" alt="img" />
    </div>
  </div>

<div className='hero-1'>
    <div className="hero-heading">
      <p>flat 30% off</p>
      <h1>explore ware fast food & snacks</h1>
      <button>shop now</button>
    </div>
    <div className="hero-img">
        <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/hero/hero-2.png" alt="img" />
    </div>
  </div>
</Carousel>;
    </div>
  )
}

export default Hero