export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.5,
    reviews: 128,
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    features: ["Bluetooth 5.0", "Noise Cancellation", "30h Battery", "Quick Charge"],
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.8,
    reviews: 89,
    description: "Advanced fitness tracker with heart rate monitoring and GPS.",
    features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "Sleep Tracking"],
    inStock: true,
  },
  {
    id: "3",
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Fashion",
    rating: 4.3,
    reviews: 156,
    description: "Comfortable and stylish cotton t-shirt perfect for everyday wear.",
    features: ["100% Cotton", "Machine Washable", "Multiple Colors", "Relaxed Fit"],
    inStock: true,
  },
  {
    id: "4",
    name: "Designer Leather Bag",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "Fashion",
    rating: 4.7,
    reviews: 73,
    description: "Elegant leather handbag crafted from premium materials.",
    features: ["Genuine Leather", "Multiple Compartments", "Adjustable Strap", "Water Resistant"],
    inStock: true,
  },
  {
    id: "5",
    name: "Modern Coffee Table",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "Home",
    rating: 4.6,
    reviews: 42,
    description: "Sleek and modern coffee table that complements any living space.",
    features: ["Solid Wood", "Easy Assembly", "Storage Shelf", "Scratch Resistant"],
    inStock: true,
  },
  {
    id: "6",
    name: "Ceramic Plant Pot Set",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
    category: "Home",
    rating: 4.4,
    reviews: 91,
    description: "Beautiful set of ceramic planters perfect for indoor plants.",
    features: ["Set of 3", "Drainage Holes", "Saucers Included", "Multiple Sizes"],
    inStock: true,
  },
];

export const categories = [
  { id: "electronics", name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop" },
  { id: "fashion", name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop" },
  { id: "home", name: "Home", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=64&h=64&fit=crop&crop=face",
    text: "Amazing quality products and super fast delivery. ShopVerse has become my go-to shopping platform!",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    text: "The variety of products is incredible, and the prices are very competitive. Highly recommend!",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    text: "Excellent customer service and easy returns. Shopping here is always a pleasant experience.",
    rating: 5,
  },
];