export interface ProductVariant {
  volume: string;
  price: string;
  packaging?: string[];
  remaining: string;
}

export interface Product {
  id: number;
  category: string;
  name: string;
  style: string;
  untappdUrl?: string;
  og?: string;
  abv?: string;
  ibu?: string;
  spiciness?: string;
  description: string;
  bottlingDate: string;
  variants: ProductVariant[];
  imageUrl?: string;
}