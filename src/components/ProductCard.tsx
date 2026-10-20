import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  quantity: number; 
  onAddToCart: (product: Product) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
}

export default function ProductCard({ 
  product, quantity, onAddToCart, onIncrease, onDecrease 
}: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">Rp {product.price.toLocaleString('id-ID')}</p>
      
        {quantity === 0 ? (
          <button className="add-btn" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        ) : (
          <div className="card-qty-controls">
            <button onClick={() => onDecrease(product.id)} className="qty-card">-</button>
            <span>{quantity}</span>
            <button onClick={() => onIncrease(product.id)} className="qty-card">+</button>
          </div>
        )}
      </div>
    </div>
  );
}