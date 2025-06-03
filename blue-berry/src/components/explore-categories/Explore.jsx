import './explore.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Explore = () => {
  return (
    <div className='explore-container'>
        <div className="explore-box">
            <div className="box-1">
                <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/category/category.jpg" alt="img" />
            </div>
            <div className="box-2">
                <h1>explore categories</h1>
            </div>
        </div>
                        {/*relative product methods.......*/}

        <div className="explore-second">
            <Carousel responsive={responsive}>
               <div className='second-box three'>
                <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/category/3.svg" alt="img" />
                <h4>cold drinks</h4>
                <h6>49 items</h6>
               </div>

               <div className='second-box one'>
                <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/category/5.svg" alt="img" />
                <h4>fast food</h4>
                <h6>291 items</h6>
               </div>

               <div className='second-box two'>
                <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/category/2.svg" alt="img" />
                <h4>fruits</h4>
                <h6>21 items</h6>
               </div>

               <div className='second-box three'>
                <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/category/6.svg" alt="img" />
                <h4>snacks</h4>
                <h6>49 items</h6>
               </div>

               <div className='second-box two'>
                <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/category/4.svg" alt="img" />
                <h4>bakery</h4>
                <h6>49 items</h6>
               </div>

               <div className='second-box one'>
                <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/category/1.svg" alt="img" />
                <h4>vigitables</h4>
                <h6>190 items</h6>
               </div>
               
</Carousel>
            
            </div>          


    </div>
  )
}

export default Explore