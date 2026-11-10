import { z } from "zod";

export const addToCartSchema = z
  .object({
    productId: z.string().trim().min(1, "Product ID cannot be empty").optional(),
    product: z
      .object({
        id: z.string().trim().min(1, "Product ID cannot be empty"),
        title: z.string().optional(),
        price: z.number().nonnegative("Price cannot be negative").optional(),
        description: z.string().optional(),
        category: z
          .object({
            id: z.string(),
            name: z.string(),
            slug: z.string(),
          })
          .optional(),
        images: z.array(z.string()).optional(),
        stock: z.number().int().optional(),
        rating: z
          .object({
            rate: z.number(),
            count: z.number(),
          })
          .optional(),
      })
      .optional(),
    quantity: z
      .number()
      .int("Quantity must be an integer")
      .positive("Quantity must be greater than 0")
      .default(1),
    selectedSize: z.string().trim().min(1, "Selected size cannot be empty").optional(),
  })
  .refine(
    (data) => Boolean(data.productId || data.product?.id),
    {
      message: "productId or product with an id is required",
      path: ["productId"],
    }
  );

export type AddToCartInput = z.infer<typeof addToCartSchema>;
