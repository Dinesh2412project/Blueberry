import './style.css';

const Main__product = () => {
  return (
    <div className='main_container'>
        <div className="main_headding">
            <div className="main_top">
            <h1>new <span>arrivals</span></h1>
            <p>Shop online for new arrivals and get free shipping!</p>
            </div>
            <ul className='main_headindRight'>
                <li className='active'>all  </li>
                <li>/  snack & spices  /</li>
                <li> fruits  /</li>
                <li> vegetables  /</li>
            </ul>
        </div>

        <div className="main_products">
            <div className="product_box">
                <img src={"image/main-product/product_1.jpg"} alt="product" />
                <div className="main_content">
                    <div className="fruite_name">
                        <p>fruite</p>
                        <img src={'image/11.png'} alt="image" />
                    </div>
                    <h1>organic kesar mango</h1>
                    <div className="product_price">
                        <div className="amount">
                        <h5 className='price'>$28</h5>
                        <h4 className='old-price'>$31</h4>
                        </div>
                        <h3 className='persentage'>20kg</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main__product