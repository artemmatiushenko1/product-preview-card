import './App.css';
import ProductPreviewCard from './components/product-preview-card';
import previewImgDesktop from './assets/image-product-desktop.jpg';
import previewImgMobile from './assets/image-product-mobile.jpg';

const products = [
  {
    id: '1',
    title: 'Gabrielle Essence Eau De Parfum',
    description:
      'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    desktopImgSrc: previewImgDesktop,
    mobileImgSrc: previewImgMobile,
    category: 'Perfume',
    originalPrice: 169.99,
    discountedPrice: 149.99,
  },
  {
    id: '2',
    title: 'Gabrielle Essence Eau De Parfum',
    description:
      'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    desktopImgSrc: previewImgDesktop,
    mobileImgSrc: previewImgMobile,
    category: 'Perfume',
    originalPrice: 169.99,
    discountedPrice: 149.99,
  },
  {
    id: '2',
    title: 'Gabrielle Essence Eau De Parfum',
    description:
      'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    desktopImgSrc: previewImgDesktop,
    mobileImgSrc: previewImgMobile,
    category: 'Perfume',
    originalPrice: 169.99,
    discountedPrice: 149.99,
  },
];

function App() {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <div className="cardsContainer" style={{ width: '650px' }}>
        {products.map((product) => (
          <ProductPreviewCard
            key={product.id}
            title={product.title}
            category={product.category}
            description={product.description}
            originalPrice={product.originalPrice}
            previewImg={product.desktopImgSrc}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>
      <div className="sidebar" style={{ width: '400px' }}>
        {[products[0]].map((product) => (
          <ProductPreviewCard
            key={product.id}
            title={product.title}
            category={product.category}
            description={product.description}
            originalPrice={product.originalPrice}
            previewImg={product.desktopImgSrc}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
