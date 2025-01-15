import ProductPreviewCard from '../product-preview-card';
import './styles.css';

const GridDemo = () => {
  return (
    <div className="grid">
      {Array.from({ length: 7 }).map((i) => (
        <div key={i} className="gridItem">
          <div>
            <ProductPreviewCard />
          </div>
        </div>
      ))}
    </div>
  );
};

export { GridDemo };
