import { Category, Product } from '@/types/api';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'T-Shirts & Tops',
    slug: 't-shirts',
  },
  {
    id: 'cat-2',
    name: 'Hoodies & Fleece',
    slug: 'hoodies',
  },
  {
    id: 'cat-3',
    name: 'Jackets & Outerwear',
    slug: 'outerwear',
  },
  {
    id: 'cat-4',
    name: 'Pants & Bottoms',
    slug: 'pants',
  },
  {
    id: 'cat-5',
    name: 'Accessories',
    slug: 'accessories',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    title: 'Heavyweight Boxy Cotton Tee',
    price: 38,
    description:
      'Crafted from 280 GSM combed organic cotton with a structured boxy silhouette, dropped shoulders, and a thick ribbed collar that holds shape wash after wash.',
    category: CATEGORIES[0],
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    ],
    stock: 24,
    rating: {
      rate: 4.8,
      count: 142,
    },
  },
  {
    id: 'prod-002',
    title: 'French Terry Relaxed Hoodie',
    price: 85,
    description:
      'Custom milled 450 GSM heavyweight French terry with double-needle flatlock stitching, hidden kangaroo pocket inserts, and metal aglet drawstring detail.',
    category: CATEGORIES[1],
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80',
    ],
    stock: 18,
    rating: {
      rate: 4.9,
      count: 98,
    },
  },
  {
    id: 'prod-003',
    title: 'Modular Utility Cargo Overshirt',
    price: 110,
    description:
      'Weather-resistant ripstop nylon shell with twin gusseted cargo chest pockets, hidden interior zippered pocket, and matte tonal snap closures.',
    category: CATEGORIES[2],
    images: [
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80',
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&q=80',
    ],
    stock: 12,
    rating: {
      rate: 4.7,
      count: 73,
    },
  },
  {
    id: 'prod-004',
    title: 'Relaxed Pleated Chino Trousers',
    price: 78,
    description:
      'Soft garment-dyed cotton twill featuring double reverse front pleats, relaxed tapered leg cut, tailored back welt pockets, and an elasticated waistband insert.',
    category: CATEGORIES[3],
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
    ],
    stock: 15,
    rating: {
      rate: 4.6,
      count: 61,
    },
  },
  {
    id: 'prod-005',
    title: 'Vintage Selvedge Denim Trucker',
    price: 135,
    description:
      'Woven on vintage shuttle looms from 13.5 oz Japanese selvedge denim. Hand-distressed with subtle vintage tint wash, copper shank hardware, and selvedge ID at the placket.',
    category: CATEGORIES[2],
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80',
      'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80',
    ],
    stock: 8,
    rating: {
      rate: 4.9,
      count: 115,
    },
  },
  {
    id: 'prod-006',
    title: 'Minimalist Waffle Thermal Longsleeve',
    price: 46,
    description:
      'Midweight thermal waffle knit constructed from 100% sustainable organic cotton. Designed with flat seam construction and stretchy ribbed cuffs for effortless layering.',
    category: CATEGORIES[0],
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80',
    ],
    stock: 22,
    rating: {
      rate: 4.5,
      count: 54,
    },
  },
  {
    id: 'prod-007',
    title: 'Structured Tailored Wool Overcoat',
    price: 195,
    description:
      'Tailored from an Italian wool-blend melton. Features an elongated notch lapel, single-breasted horn button closure, viscose satin lining, and deep internal passport pocket.',
    category: CATEGORIES[2],
    images: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    ],
    stock: 6,
    rating: {
      rate: 5.0,
      count: 39,
    },
  },
  {
    id: 'prod-008',
    title: 'Waxed Canvas Utility Day Tote',
    price: 52,
    description:
      'Heavy 16 oz water-repellent paraffin-waxed canvas with full-grain bridle leather straps, brass hardware rivets, and a padded interior 15-inch laptop compartment.',
    category: CATEGORIES[4],
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
    ],
    stock: 30,
    rating: {
      rate: 4.8,
      count: 88,
    },
  },
  {
    id: 'prod-009',
    title: '6-Panel Vintage Corduroy Cap',
    price: 32,
    description:
      'Unstructured low-profile crown made with 8-wale cotton corduroy. Finished with an embroidered minimal monogram, antique brass strapback buckle, and cotton sweatband.',
    category: CATEGORIES[4],
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
      'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=800&q=80',
    ],
    stock: 25,
    rating: {
      rate: 4.7,
      count: 42,
    },
  },
];
