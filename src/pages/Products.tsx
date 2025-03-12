
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import ProductGrid from "@/components/products/ProductGrid";
import { ButtonCustom } from "@/components/ui/button-custom";
import { products as allProducts } from "@/data/products";
import { ChevronDown, ChevronUp, Search, SlidersHorizontal } from "lucide-react";

// Categories from the product data
const categories = [
  { value: "all", label: "All Products" },
  { value: "accessories", label: "Accessories" },
  { value: "electronics", label: "Electronics" },
  { value: "home", label: "Home" },
  { value: "kitchen", label: "Kitchen" },
  { value: "office", label: "Office" }
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" }
];

const Products = () => {
  const [products, setProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  // For demo purposes: Add to cart function
  const handleAddToCart = (product: any) => {
    // @ts-ignore
    if (window.addToCart) {
      // @ts-ignore
      window.addToCart(product);
    }
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle filtering and sorting
  useEffect(() => {
    let filtered = [...allProducts];
    
    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
      );
    }
    
    // Sort products
    switch (selectedSort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // 'featured' - no need to sort
        break;
    }
    
    setProducts(filtered);
  }, [selectedCategory, selectedSort, searchQuery]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-medium">Our Products</h1>
            <p className="mt-4 text-muted-foreground">
              Explore our premium collection of thoughtfully designed products
            </p>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="mb-8 rounded-lg border bg-card p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Search */}
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-4 w-4 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full rounded-md border-input bg-transparent pl-10 pr-4 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Mobile Filter Toggle */}
              <div className="sm:hidden">
                <ButtonCustom
                  variant="outline"
                  size="full"
                  onClick={() => setShowFilters(!showFilters)}
                  icon={showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                >
                  Filters & Sort
                </ButtonCustom>
              </div>
              
              {/* Desktop Filters */}
              <div className="hidden sm:flex sm:items-center sm:gap-4">
                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <label htmlFor="category" className="text-sm">
                    Category:
                  </label>
                  <select
                    id="category"
                    className="rounded-md border-input bg-transparent px-3 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Sort */}
                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-sm">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    className="rounded-md border-input bg-transparent px-3 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Mobile Filters (collapsed) */}
            {showFilters && (
              <div className="mt-4 flex flex-col gap-4 border-t pt-4 sm:hidden">
                {/* Category Filter */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="mobile-category" className="text-sm font-medium">
                    Category:
                  </label>
                  <select
                    id="mobile-category"
                    className="rounded-md border-input bg-transparent px-3 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Sort */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="mobile-sort" className="text-sm font-medium">
                    Sort by:
                  </label>
                  <select
                    id="mobile-sort"
                    className="rounded-md border-input bg-transparent px-3 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
          
          {/* Product Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium">{products.length}</span> products
            </p>
          </div>
          
          {/* Products */}
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <SlidersHorizontal className="h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">No products found</h3>
              <p className="mt-2 text-muted-foreground">
                Try changing your filters or search term
              </p>
              <ButtonCustom 
                className="mt-4" 
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedSort("featured");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </ButtonCustom>
            </div>
          ) : (
            <ProductGrid products={products} onAddToCart={handleAddToCart} />
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Buytrix. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Products;
