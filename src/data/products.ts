export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  { id: 1, name: "Wireless Headphones", price: 350000, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
  { id: 2, name: "Smart Watch", price: 550000, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600" },
  { id: 3, name: "Sneakers", price: 450000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" },
  { id: 4, name: "Backpack", price: 250000, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
];