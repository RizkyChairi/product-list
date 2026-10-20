interface HeaderProps {

 onOpenCart: () => void; 
}

export default function Header({onOpenCart  }: HeaderProps) {
  return (
    <div className="header">
      <div>
        <h1 className="title">Product List</h1>
        <p className="subtitle">Find your favorite products.</p>
      </div>
      <button className="cart-button" onClick={onOpenCart}>
        Cart 🛒
      </button>
    </div>
  );
}