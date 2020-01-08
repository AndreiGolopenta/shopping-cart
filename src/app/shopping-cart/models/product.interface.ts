export interface Product {
  id: number;
  cartId?: string;
  order?: { size: string, quantity: number };
  name: string;
  image: string;
  manufacturer: string;
  season: string;
  for: string;
  material: string;
  description: string;
  price: number;
  size: string[];
}
