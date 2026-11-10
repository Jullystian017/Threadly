import { CartItem, CartSession, Product } from "@/types/api";
import { NextRequest } from "next/server";

const globalForCart = globalThis as unknown as {
  cartStore?: Map<string, CartItem[]>;
};

export const cartStore =
  globalForCart.cartStore ?? new Map<string, CartItem[]>();

if (process.env.NODE_ENV !== "production") {
  globalForCart.cartStore = cartStore;
}

export const CART_COOKIE_NAME = "cart_session_id";
export const DEFAULT_SESSION_ID = "default-session";

export function resolveSessionId(request: NextRequest): {
  sessionId: string;
  isNew: boolean;
} {
  const headerSessionId = request.headers.get("x-session-id")?.trim();
  if (headerSessionId) {
    return { sessionId: headerSessionId, isNew: false };
  }

  const cookieSessionId = request.cookies.get(CART_COOKIE_NAME)?.value?.trim();
  if (cookieSessionId) {
    return { sessionId: cookieSessionId, isNew: false };
  }

  return {
    sessionId: DEFAULT_SESSION_ID,
    isNew: true,
  };
}

export function calculateCartSession(items: CartItem[]): CartSession {
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const rawTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalAmount = Math.round(rawTotal * 100) / 100;

  return {
    items: [...items],
    totalAmount,
    totalCount,
  };
}

export function getCartSession(sessionId: string): CartSession {
  const items = cartStore.get(sessionId) ?? [];
  return calculateCartSession(items);
}

export function addItemToCart(
  sessionId: string,
  params: {
    product: Product;
    quantity: number;
    selectedSize?: string;
  }
): { session: CartSession; addedItem: CartItem } {
  const currentItems = cartStore.get(sessionId) ?? [];
  const normalizedSize = params.selectedSize?.trim() || undefined;

  const existingIndex = currentItems.findIndex(
    (item) =>
      item.productId === params.product.id &&
      (item.selectedSize ?? undefined) === normalizedSize
  );

  let targetItem: CartItem;

  if (existingIndex > -1) {
    const existing = currentItems[existingIndex];
    existing.quantity += params.quantity;
    targetItem = existing;
  } else {
    targetItem = {
      id: `cart_item_${crypto.randomUUID()}`,
      productId: params.product.id,
      product: params.product,
      quantity: params.quantity,
      price: params.product.price,
      selectedSize: normalizedSize,
    };
    currentItems.push(targetItem);
  }

  cartStore.set(sessionId, currentItems);
  return {
    session: calculateCartSession(currentItems),
    addedItem: targetItem,
  };
}
