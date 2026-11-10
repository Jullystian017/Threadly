import { create } from 'zustand';
import { Product, CartItem, CartState } from '@/types/api';

/**
 * Helper to compute totals from items array
 */
const computeTotals = (items: CartItem[]): { totalAmount: number; totalCount: number } => {
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const rawTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalAmount = Math.round(rawTotal * 100) / 100;
  return { totalAmount, totalCount };
};

export const useCart = create<CartState>((set) => ({
  items: [],
  totalAmount: 0,
  totalCount: 0,

  addItem: (product: Product, quantity = 1, selectedSize?: string) => {
    if (quantity <= 0) return;

    set((state) => {
      const existingIndex = state.items.findIndex(
        (item) =>
          item.productId === product.id &&
          (selectedSize ? item.selectedSize === selectedSize : !item.selectedSize)
      );

      let nextItems: CartItem[];

      if (existingIndex > -1) {
        nextItems = state.items.map((item, index) => {
          if (index !== existingIndex) return item;
          const nextQty = Math.min(item.quantity + quantity, product.stock || 99);
          return {
            ...item,
            quantity: nextQty,
          };
        });
      } else {
        const newItem: CartItem = {
          id: `${product.id}-${selectedSize || 'default'}-${Date.now()}`,
          productId: product.id,
          product,
          quantity: Math.min(quantity, product.stock || 99),
          price: product.price,
          selectedSize,
        };
        nextItems = [...state.items, newItem];
      }

      const { totalAmount, totalCount } = computeTotals(nextItems);
      return {
        items: nextItems,
        totalAmount,
        totalCount,
      };
    });
  },

  removeItem: (productId: string, selectedSize?: string) => {
    set((state) => {
      const nextItems = state.items.filter((item) => {
        if (item.productId !== productId) return true;
        if (selectedSize !== undefined) {
          return item.selectedSize !== selectedSize;
        }
        return false;
      });

      const { totalAmount, totalCount } = computeTotals(nextItems);
      return {
        items: nextItems,
        totalAmount,
        totalCount,
      };
    });
  },

  updateQty: (productId: string, quantity: number, selectedSize?: string) => {
    set((state) => {
      if (quantity <= 0) {
        const nextItems = state.items.filter((item) => {
          if (item.productId !== productId) return true;
          if (selectedSize !== undefined) {
            return item.selectedSize !== selectedSize;
          }
          return false;
        });
        const { totalAmount, totalCount } = computeTotals(nextItems);
        return { items: nextItems, totalAmount, totalCount };
      }

      const nextItems = state.items.map((item) => {
        const matchesProduct = item.productId === productId;
        const matchesSize =
          selectedSize !== undefined ? item.selectedSize === selectedSize : true;

        if (matchesProduct && matchesSize) {
          const maxStock = item.product.stock || 99;
          return {
            ...item,
            quantity: Math.min(Math.max(1, quantity), maxStock),
          };
        }
        return item;
      });

      const { totalAmount, totalCount } = computeTotals(nextItems);
      return {
        items: nextItems,
        totalAmount,
        totalCount,
      };
    });
  },
}));

export default useCart;
