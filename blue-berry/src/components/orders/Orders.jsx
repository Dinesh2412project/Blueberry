import './style.css';
import Shipping from '../../assets/DataStorage/OrderData';

const Orders = () => {
  return (
    <div className='order-container'>
        {Shipping.map((shiped ,index) =>(
            <div className="order_section" key={index}>
            <img className='order_img' src={shiped.img} alt="img" />
            <h3 className='order_heading'>{shiped.name}</h3>
            <p className='order_para'>{shiped.pera}</p>
        </div>
        ))}
        
    </div>
  )
}

export default Orders