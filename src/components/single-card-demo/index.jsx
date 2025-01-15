import ProductPreviewCard from '../product-preview-card';
import './styles.css';

const SingleCardDemo = () => {
  return (
    <div className="singleCardDemo">
      <div className="cardContainer">
        <ProductPreviewCard />
      </div>
    </div>
  );
};

export { SingleCardDemo };
