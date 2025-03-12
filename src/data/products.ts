
import { Product } from "@/components/products/ProductCard";

// Mock product data
export const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Watch",
    description: "Elegant timepiece with a clean design and premium materials.",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "accessories"
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    description: "Ultra-lightweight earbuds with exceptional sound quality and noise cancellation.",
    price: 179.99,
    imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "electronics"
  },
  {
    id: 3,
    name: "Modern Desk Lamp",
    description: "Adjustable lamp with warm lighting to enhance your workspace.",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "home"
  },
  {
    id: 4,
    name: "Ceramic Coffee Mug",
    description: "Hand-crafted mug with a minimalist design for your daily brew.",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "kitchen"
  },
  {
    id: 5,
    name: "Leather Wallet",
    description: "Premium full-grain leather wallet with a sleek, timeless design.",
    price: 69.99,
    imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "accessories"
  },
  {
    id: 6,
    name: "Smart Notebook",
    description: "Digital notebook that seamlessly transfers your notes to your devices.",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1544239265-ee5eedde5469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "office"
  },
  {
    id: 7,
    name: "Minimalist Backpack",
    description: "Weather-resistant backpack with a clean design and ample storage.",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "accessories"
  },
  {
    id: 8,
    name: "Portable Speaker",
    description: "Compact speaker with immersive sound and elegant design.",
    price: 159.99,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "electronics"
  }
];

// Helper function to get product by ID
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Helper function to search products
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    product => 
      product.name.toLowerCase().includes(lowercaseQuery) || 
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
};
