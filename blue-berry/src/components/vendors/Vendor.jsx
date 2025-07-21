import "./style.css";
import Topics from "../../assets/DataStorage/VendorData";
import String_En from "../../assets/Datas.js";

const Vendor = () => {
  return (
    <div className="vendor_container">
      <div className="vendor_headings">
        <h1>
          {String_En.vendor.title}
          <span>{String_En.vendor.name}</span>
        </h1>
        <p>{String_En.vendor.para}</p>
      </div>
      <div className="vendor_section">
        <div className="img_section">
          <img src={String_En.vendor.img} alt="img" />
        </div>
        <div className="content_section">
          {Topics?.map((topic, index) => (
            <div className="content_box" key={index}>
              <div className="vendor_topic">
                <h4>{topic?.name}</h4>
                <h6>{topic?.categories}</h6>
              </div>
              <p>{topic?.product}</p>
            </div>
          ))}
        </div>
      </div>
      <img className="vendor_logo" src={String_En.vendor.img_1} alt="img" />
    </div>
  );
};

export default Vendor;
