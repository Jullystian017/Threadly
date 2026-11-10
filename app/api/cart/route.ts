import { NextRequest, NextResponse } from "next/server";
import { ApiResponse, CartSession, Product } from "@/types/api";
import { MOCK_PRODUCTS } from "@/data/products";
import { addToCartSchema } from "@/lib/validations/cart";
import {
  addItemToCart,
  CART_COOKIE_NAME,
  getCartSession,
  resolveSessionId,
} from "@/lib/cart-store";

export async function GET(
  request: NextRequest
): Promise<NextResponse<ApiResponse<CartSession>>> {
  try {
    const { sessionId, isNew } = resolveSessionId(request);
    const session = getCartSession(sessionId);

    const responseBody: ApiResponse<CartSession> = {
      success: true,
      data: session,
      message: "Cart session retrieved successfully",
      timestamp: new Date().toISOString(),
    };

    const response = NextResponse.json(responseBody, { status: 200 });

    if (isNew) {
      response.cookies.set(CART_COOKIE_NAME, sessionId, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      });
    }

    return response;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";

    const errorBody: ApiResponse<CartSession> = {
      success: false,
      data: {
        items: [],
        totalAmount: 0,
        totalCount: 0,
      },
      message: errorMessage,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(errorBody, { status: 500 });
  }
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse<CartSession | null>>> {
  try {
    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch {
      const errorBody: ApiResponse<null> = {
        success: false,
        data: null,
        message: "Invalid JSON in request body",
        timestamp: new Date().toISOString(),
      };
      return NextResponse.json(errorBody, { status: 400 });
    }

    const validationResult = addToCartSchema.safeParse(rawBody);

    if (!validationResult.success) {
      const errorDetails = validationResult.error.issues
        .map((issue) => issue.message)
        .join("; ");

      const errorBody: ApiResponse<null> = {
        success: false,
        data: null,
        message: `Validation failed: ${errorDetails}`,
        timestamp: new Date().toISOString(),
      };
      return NextResponse.json(errorBody, { status: 400 });
    }

    const { productId, product: customProduct, quantity, selectedSize } =
      validationResult.data;

    const targetProductId = productId ?? customProduct?.id;

    let product: Product | undefined = MOCK_PRODUCTS.find(
      (p) => p.id === targetProductId
    );

    if (!product && customProduct) {
      if (
        customProduct.title &&
        customProduct.price !== undefined &&
        customProduct.description &&
        customProduct.category &&
        customProduct.images &&
        customProduct.stock !== undefined &&
        customProduct.rating
      ) {
        product = customProduct as Product;
      }
    }

    if (!product) {
      const notFoundBody: ApiResponse<null> = {
        success: false,
        data: null,
        message: `Product with ID '${targetProductId}' not found`,
        timestamp: new Date().toISOString(),
      };
      return NextResponse.json(notFoundBody, { status: 404 });
    }

    const { sessionId, isNew } = resolveSessionId(request);

    const { session } = addItemToCart(sessionId, {
      product,
      quantity,
      selectedSize,
    });

    const successBody: ApiResponse<CartSession> = {
      success: true,
      data: session,
      message: "Item added to cart successfully",
      timestamp: new Date().toISOString(),
    };

    const response = NextResponse.json(successBody, { status: 201 });

    if (isNew) {
      response.cookies.set(CART_COOKIE_NAME, sessionId, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      });
    }

    return response;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";

    const errorBody: ApiResponse<null> = {
      success: false,
      data: null,
      message: errorMessage,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(errorBody, { status: 500 });
  }
}
