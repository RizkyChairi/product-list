import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartPanel from './components/CartPanel';
import type { CartItem } from './components/CartPanel';
import { products } from './data/products';
import './App.css'; 

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false); 


  const handleAddToCart = (product: typeof products[0]) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleIncrease = (id: number) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleDecrease = (id: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) return { ...item, quantity: item.quantity - 1 };
      return item;
    }).filter(item => item.quantity > 0)); 
  };

  const handleDelete = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClear = () => {
    setCartItems([]);
  };

  return (
    <div className="app-container">

      <Header 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <ProductList 
        products={products} 
        cartItems={cartItems}
        onAddToCart={handleAddToCart} 
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />

      <CartPanel 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems} 
        onDelete={handleDelete}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onClear={handleClear}
      />
    </div>
  );
}