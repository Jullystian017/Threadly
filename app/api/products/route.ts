import { NextRequest, NextResponse } from "next/server";
import { ApiResponse, Product } from "@/types/api";
import { MOCK_PRODUCTS } from "@/data/products";

export async function GET(
  request: NextRequest
): Promise<NextResponse<ApiResponse<Product[]>>> {
  try {
    const { searchParams } = new URL(request.url);
    const categoryParam = searchParams.get("category")?.trim();

    let products: Product[] = MOCK_PRODUCTS;

    if (categoryParam) {
      const categoryQuery = categoryParam.toLowerCase();
      products = products.filter((product) => {
        const { slug, name, id } = product.category;
        return (
          slug.toLowerCase() === categoryQuery ||
          name.toLowerCase() === categoryQuery ||
          id.toLowerCase() === categoryQuery
        );
      });
    }

    const responseBody: ApiResponse<Product[]> = {
      success: true,
      data: products,
      message: "Products retrieved successfully",
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(responseBody, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";

    const errorBody: ApiResponse<Product[]> = {
      success: false,
      data: [],
      message: errorMessage,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(errorBody, { status: 500 });
  }
}
