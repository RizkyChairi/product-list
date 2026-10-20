import type { Product } from '../data/products';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  cartItems: any[]; 
  onAddToCart: (product: Product) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
}

export default function ProductList({ products, cartItems, onAddToCart, onIncrease, onDecrease }: ProductListProps) {
  return (
    <div className="product-grid">
      {products.map((product) => {
        const cartItem = cartItems.find(item => item.id === product.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        return (
          <ProductCard 
            key={product.id} 
            product={product} 
            quantity={quantity}
            onAddToCart={onAddToCart} 
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        );
      })}
    </div>
  );
}