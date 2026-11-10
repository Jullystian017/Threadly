import { Product } from "@/types/api";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    title: "Classic Heavyweight Cotton T-Shirt",
    price: 29.99,
    description: "Premium 240 GSM combed cotton t-shirt with a relaxed boxy fit and durable ribbed collar.",
    category: {
      id: "cat-1",
      name: "T-Shirts",
      slug: "t-shirts",
    },
    images: [
      "/images/products/tee-black-1.jpg",
      "/images/products/tee-black-2.jpg",
    ],
    stock: 50,
    rating: {
      rate: 4.8,
      count: 128,
    },
  },
  {
    id: "prod-2",
    title: "Vintage Acid Wash Graphic Tee",
    price: 34.99,
    description: "Individually dyed and acid-washed t-shirt featuring high-density minimalist screen prints.",
    category: {
      id: "cat-1",
      name: "T-Shirts",
      slug: "t-shirts",
    },
    images: [
      "/images/products/tee-acid-1.jpg",
    ],
    stock: 35,
    rating: {
      rate: 4.6,
      count: 85,
    },
  },
  {
    id: "prod-3",
    title: "Oversized Heavy Fleece Hoodie",
    price: 69.99,
    description: "Double-layered hood with drop shoulders and brushed fleece interior for maximum warmth and comfort.",
    category: {
      id: "cat-2",
      name: "Hoodies & Sweatshirts",
      slug: "hoodies",
    },
    images: [
      "/images/products/hoodie-grey-1.jpg",
      "/images/products/hoodie-grey-2.jpg",
    ],
    stock: 25,
    rating: {
      rate: 4.9,
      count: 210,
    },
  },
  {
    id: "prod-4",
    title: "Quarter-Zip French Terry Pullover",
    price: 64.99,
    description: "Breathable loopback French terry featuring custom YKK metal zipper and clean ribbed hems.",
    category: {
      id: "cat-2",
      name: "Hoodies & Sweatshirts",
      slug: "hoodies",
    },
    images: [
      "/images/products/pullover-navy-1.jpg",
    ],
    stock: 20,
    rating: {
      rate: 4.7,
      count: 74,
    },
  },
  {
    id: "prod-5",
    title: "Technical Waterproof Windbreaker",
    price: 119.99,
    description: "Ripstop nylon outerwear jacket with waterproof taped seams and adjustable bungee toggles.",
    category: {
      id: "cat-3",
      name: "Jackets & Outerwear",
      slug: "jackets",
    },
    images: [
      "/images/products/jacket-tech-1.jpg",
    ],
    stock: 15,
    rating: {
      rate: 4.8,
      count: 62,
    },
  },
  {
    id: "prod-6",
    title: "Wool Blend MA-1 Bomber Jacket",
    price: 149.99,
    description: "Modern reinterpretation of the military flight jacket in an insulating wool-blend fabric with satin lining.",
    category: {
      id: "cat-3",
      name: "Jackets & Outerwear",
      slug: "jackets",
    },
    images: [
      "/images/products/bomber-olive-1.jpg",
    ],
    stock: 12,
    rating: {
      rate: 4.9,
      count: 45,
    },
  },
  {
    id: "prod-7",
    title: "Relaxed Pleated Chino Pants",
    price: 59.99,
    description: "Wide-leg pleated trousers crafted from crisp cotton twill with an elasticated waistband insert.",
    category: {
      id: "cat-4",
      name: "Pants & Trousers",
      slug: "pants",
    },
    images: [
      "/images/products/pants-chino-1.jpg",
    ],
    stock: 30,
    rating: {
      rate: 4.5,
      count: 91,
    },
  },
  {
    id: "prod-8",
    title: "Utility Multi-Pocket Cargo Pants",
    price: 69.99,
    description: "Durable tactical cargo pants with modular pockets and adjustable ankle cinch cords.",
    category: {
      id: "cat-4",
      name: "Pants & Trousers",
      slug: "pants",
    },
    images: [
      "/images/products/pants-cargo-1.jpg",
    ],
    stock: 22,
    rating: {
      rate: 4.6,
      count: 115,
    },
  },
  {
    id: "prod-9",
    title: "Low-Profile Cotton Canvas Cap",
    price: 24.99,
    description: "Unstructured 6-panel dad cap featuring antique brass buckle strap closure.",
    category: {
      id: "cat-5",
      name: "Accessories",
      slug: "accessories",
    },
    images: [
      "/images/products/cap-beige-1.jpg",
    ],
    stock: 60,
    rating: {
      rate: 4.7,
      count: 140,
    },
  },
  {
    id: "prod-10",
    title: "Heavyweight Canvas Everyday Tote Bag",
    price: 19.99,
    description: "Reinforced 16oz cotton canvas tote with interior zippered pocket and double-stitched carry handles.",
    category: {
      id: "cat-5",
      name: "Accessories",
      slug: "accessories",
    },
    images: [
      "/images/products/tote-canvas-1.jpg",
    ],
    stock: 45,
    rating: {
      rate: 4.4,
      count: 82,
    },
  },
];
