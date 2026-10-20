import type { Product } from '../data/products';

export interface CartItem extends Product {
  quantity: number;
}

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onDelete: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onClear: () => void; 
}

export default function CartPanel({ 
  isOpen, onClose, cartItems, onDelete, onIncrease, onDecrease, onClear}: CartPanelProps) 
  {if (!isOpen) return null;

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>

      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={onClose} className="btn-close">✕</button>
        </div>

        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <p className="text-muted">Keranjang masih kosong.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Rp {item.price.toLocaleString('id-ID')}</p>
                  
                  
                  <div className="cart-item-controls">
                    <button onClick={() => onDecrease(item.id)} className="btn-qty">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncrease(item.id)} className="btn-qty">+</button>
                  </div>
                </div>

                <button id='center'onClick={() => onDelete(item.id)} className="btn-delete">Hapus</button>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="total-price">
              <span>Total:</span>
              <strong>Rp {totalPrice.toLocaleString('id-ID')}</strong>
            </div>
            <button onClick={onClear} className="btn-clear-all">Clear All Cart</button>
          </div>
        )}
      </div>
    </>
  );
}