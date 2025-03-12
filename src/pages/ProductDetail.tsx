
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { getProductById, products as allProducts } from "@/data/products";
import ProductGrid from "@/components/products/ProductGrid";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(getProductById(parseInt(id || "0")));
  const [quantity, setQuantity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { toast } = useToast();
  
  // Related products (same category, exclude current)
  const relatedProducts = allProducts
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  // Scroll to top on page load or product change
  useEffect(() => {
    window.scrollTo(0, 0);
    setProduct(getProductById(parseInt(id || "0")));
    setQuantity(1);
  }, [id]);

  // For demo purposes: Add to cart function
  const handleAddToCart = (productToAdd: any) => {
    // @ts-ignore
    if (window.addToCart) {
      // @ts-ignore
      window.addToCart(productToAdd);
    }
  };
  
  const handleAddCurrentToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        handleAddToCart(product);
      }
      toast({
        title: "Added to cart",
        description: `${quantity} × ${product.name} has been added to your cart.`,
      });
    }
  };

  // If product not found
  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-medium">Product Not Found</h1>
              <p className="mt-2 text-muted-foreground">The product you're looking for doesn't exist.</p>
              <ButtonCustom className="mt-6" asChild>
                <Link to="/products">Browse Products</Link>
              </ButtonCustom>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex text-sm text-muted-foreground">
              <li className="flex items-center">
                <Link to="/" className="hover:text-foreground">Home</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <Link to="/products" className="hover:text-foreground">Products</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="text-foreground">{product.name}</li>
            </ol>
          </nav>
          
          {/* Product detail */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Product image */}
            <div className="relative overflow-hidden rounded-lg bg-secondary">
              {/* Image loading placeholder */}
              <div className={`absolute inset-0 image-loading ${imageLoaded ? "opacity-0" : "opacity-100"}`}></div>
              
              <img
                src={product.imageUrl}
                alt={product.name}
                className={`h-full w-full object-cover ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            
            {/* Product info */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-medium lg:text-4xl">{product.name}</h1>
              
              <div className="mt-4 text-2xl font-medium">
                ${product.price.toFixed(2)}
              </div>
              
              <div className="mt-6 text-muted-foreground">
                {product.description}
              </div>
              
              {/* Quantity */}
              <div className="mt-8">
                <label className="text-sm font-medium">Quantity</label>
                <div className="mt-2 flex w-fit items-center border rounded-md">
                  <ButtonCustom
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </ButtonCustom>
                  
                  <span className="w-12 text-center">{quantity}</span>
                  
                  <ButtonCustom
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10"
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </ButtonCustom>
                </div>
              </div>
              
              {/* Add to cart */}
              <div className="mt-8">
                <ButtonCustom 
                  size="lg" 
                  icon={<ShoppingBag className="h-5 w-5" />}
                  onClick={handleAddCurrentToCart}
                >
                  Add to Cart
                </ButtonCustom>
              </div>
              
              {/* Product details */}
              <div className="mt-12 border-t pt-8">
                <h3 className="text-lg font-medium">Product Details</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <span className="text-muted-foreground">Category:</span>{" "}
                    <span className="capitalize">{product.category}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">ID:</span>{" "}
                    <span>{product.id}</span>
                  </div>
                </div>
              </div>
              
              {/* Shipping info */}
              <div className="mt-8 border-t pt-8">
                <h3 className="text-lg font-medium">Shipping & Returns</h3>
                <p className="mt-4 text-muted-foreground">
                  Free shipping on all orders over $100. Returns accepted within 30 days.
                </p>
              </div>
            </div>
          </div>
          
          {/* Related products */}
          {relatedProducts.length > 0 && (
            <section className="mt-24">
              <h2 className="text-2xl font-medium">Related Products</h2>
              <div className="mt-8">
                <ProductGrid 
                  products={relatedProducts} 
                  onAddToCart={handleAddToCart} 
                />
              </div>
            </section>
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

export default ProductDetail;
