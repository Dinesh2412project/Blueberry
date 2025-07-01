

const BannerCard = ({ image, title, text }) => {
  return (
    <>
    <div className="snack-banner">
      <img src={image} alt="img" />
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{text}</p>
        <button>Shop Now</button>
      </div>
    </div>

    </>
  )
}

export default BannerCard