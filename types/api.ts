/**
 * THREADLY E-Commerce API Contract Types
 * Source of truth for client-server data contracts.
 */

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface ProductRating {
  rate: number;
  count: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  stock: number;
  rating: ProductRating;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  price: number;
  selectedSize?: string;
}

export interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalCount: number;
  addItem: (product: Product, quantity?: number, selectedSize?: string) => void;
  removeItem: (productId: string, selectedSize?: string) => void;
  updateQty: (productId: string, quantity: number, selectedSize?: string) => void;
}

export type CartSession = Pick<CartState, "items" | "totalAmount" | "totalCount">;

/**
 * Standard API Envelope Types
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
