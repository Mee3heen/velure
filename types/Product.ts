
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ContactInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  message?: string;
}
