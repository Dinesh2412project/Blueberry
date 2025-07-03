
import './style.css';
import Topics from '../../assets/DataStorage/VendorData';

const Vendor = () => {
  return (
    <div className="vendor_container">
        <div className="vendor_headings">
            <h1>top<span>vendors</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate vero natus ex.</p>
        </div>
        <div className="vendor_section">
            <div className="img_section">
                <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/vendors/img-1.jpg" alt="img" />
            </div>
            <div className="content_section">
                {Topics.map((topic ,index) =>(
                <div className="content_box" key={index}>
                    <div className="vendor_topic">
                        <h4>{topic.name}</h4>
                        <h6>{topic.categories}</h6>
                    </div>
                    <p>{topic.product}</p>
                </div>
                ))}
                
            </div>
        </div>
        <img className='vendor_logo' src="https://blueberry-react-next.maraviyainfotech.com/assets/img/vendors/vendor-1.jpg" alt="img" />
    </div>
  )
}

export default Vendor