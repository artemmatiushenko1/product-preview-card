import IconCart from '../icon-cart';
import './style.css';

import previewImgDesktop from '../../assets/image-product-desktop.jpg';

export default function ProductPreviewCard(props) {
  const {
    category,
    title = 'Nicolas Essence Eau De Parfum',
    description = 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    originalPrice = '169.99',
    discountedPrice = '149.99',
    previewImg = previewImgDesktop,
  } = props;

  return (
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
        <div className="addToCartBtnContainer">
          <button className="addToCartBtn">
            <IconCart />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
