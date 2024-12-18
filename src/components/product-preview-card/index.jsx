import IconCart from '../icon-cart';
import './style.css';

export default function ProductPreviewCard(props) {
  const {
    category,
    title,
    description,
    originalPrice,
    discountedPrice,
    previewImg,
  } = props;

  return (
    <div className="cardContainer">
      <div className="card">
        <div className="previewImgContainer">
          <img src={previewImg} alt={title} className="previewImg" />
        </div>
        <div className="cardInfoContainer">
          <p className="cardCategory">{category}</p>
          <h1 className="cardTitle">{title}</h1>
          <p className="cardDescription">{description}</p>
          <div className="cardPrice">
            <span className="discountedPrice">${discountedPrice}</span>
            <span className="originalPrice">${originalPrice}</span>
          </div>
          <button className="addToCartBtn">
            <IconCart />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
